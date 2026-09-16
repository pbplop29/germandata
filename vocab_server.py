#!/usr/bin/env python3
"""Vocab embedding server.

On startup, scans Vocabulary*.md, builds a semantic embedding for each
word from its synonyms/definition/example/translation (TF-IDF + SVD,
i.e. LSA), and serves GET /words?theme=<word>&n=<count> returning n
words sampled from the neighborhood of the theme word in that space.
"""
import argparse
import difflib
import hashlib
import http.server
import itertools
import json
import random
import os
import re
import socketserver
import threading
import time
import urllib.parse
import wave
from collections import Counter
from pathlib import Path

import numpy as np

STATIC_DIR = Path(__file__).resolve().parent

TAG_RE = re.compile(r"<[^>]+>")
TOKEN_RE = re.compile(r"[A-Za-zÄÖÜäöüß]+")
SEP_ROW_RE = re.compile(r"^:?-+:?$")

COLUMN_MAP = {
    "word": ("deutsch", "verb"),
    "synonyms": ("ähnlich", "synonym"),
    "opposite": ("gegenteil",),
    "definition": ("einfach",),
    "example": ("beispiel",),
    "english": ("englisch",),
    "notes": ("anmerkung",),
}


def clean_cell(text):
    text = TAG_RE.sub("", text)
    text = text.replace("**", "")
    text = text.strip()
    return "" if text == "—" else text


def match_columns(header_cells):
    header = [h.lower() for h in header_cells]
    cols = {}
    for field, needles in COLUMN_MAP.items():
        for i, h in enumerate(header):
            if any(n in h for n in needles):
                cols[field] = i
                break
    return cols


def parse_vocab_files(vault_dir):
    """Yield dicts with word/synonyms/opposite/definition/example/english."""
    entries = []
    for path in sorted(Path(vault_dir).glob("Vocabulary*.md")):
        header = None
        cols = None
        for line in path.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if not line.startswith("|"):
                header = None
                continue
            cells = [c.strip() for c in line.strip("|").split("|")]
            if all(SEP_ROW_RE.match(c) or c == "" for c in cells):
                continue
            if header is None:
                header = cells
                cols = match_columns(header)
                continue
            if not cols or "word" not in cols:
                continue
            get = lambda field: clean_cell(cells[cols[field]]) if field in cols and cols[field] < len(cells) else ""
            word = get("word")
            if not word:
                continue
            entries.append({
                "word": word,
                "synonyms": get("synonyms"),
                "opposite": get("opposite"),
                "definition": get("definition"),
                "example": get("example"),
                "english": get("english"),
                "source": path.name,
            })
    return entries


def normalize_word(word):
    w = word.lower()
    w = re.sub(r"^(sich\s+|der\s+|die\s+|das\s+)+", "", w)
    return w.strip()


class VocabDB:
    def __init__(self, vault_dir, dims=50):
        self.entries = parse_vocab_files(vault_dir)
        if not self.entries:
            raise RuntimeError(f"No vocabulary entries found under {vault_dir}")
        self._build_embeddings(dims)
        self._build_lookup()

    def _context_text(self, e):
        return " ".join([e["synonyms"], e["opposite"], e["definition"], e["example"], e["english"]])

    def _tokenize(self, text):
        return [t.lower() for t in TOKEN_RE.findall(text) if len(t) > 1]

    def _build_embeddings(self, dims):
        docs_tokens = [self._tokenize(self._context_text(e)) for e in self.entries]
        doc_freq = Counter()
        for tokens in docs_tokens:
            doc_freq.update(set(tokens))
        # drop hapax tokens: they can't link two words together and only
        # bloat/slow the SVD, so they're noise for a similarity space.
        vocab = {t: i for i, t in enumerate(w for w, c in doc_freq.items() if c >= 2)}
        n, t_count = len(self.entries), len(vocab)

        df = np.array([doc_freq[t] for t in vocab], dtype=np.float64)
        idf = np.log(n / df)

        matrix = np.zeros((n, t_count), dtype=np.float32)
        for i, tokens in enumerate(docs_tokens):
            tf = Counter(tokens)
            for t, c in tf.items():
                if t in vocab:
                    matrix[i, vocab[t]] = c * idf[vocab[t]]

        k = min(dims, n, t_count) or 1
        _, _, vt = np.linalg.svd(matrix, full_matrices=False)
        self.components = vt[:k].T  # (tokens x k), used to project queries too
        self.idf = idf
        self.vocab = vocab
        embeddings = matrix @ self.components
        norms = np.linalg.norm(embeddings, axis=1, keepdims=True)
        norms[norms == 0] = 1
        self.embeddings = embeddings / norms

    def _build_lookup(self):
        self.word_index = {}
        for i, e in enumerate(self.entries):
            self.word_index.setdefault(normalize_word(e["word"]), i)

    def _project(self, text):
        vec = np.zeros(len(self.vocab), dtype=np.float32)
        for t in self._tokenize(text):
            if t in self.vocab:
                vec[self.vocab[t]] += self.idf[self.vocab[t]]
        emb = vec @ self.components
        norm = np.linalg.norm(emb)
        return emb / norm if norm else emb

    def theme_vector(self, theme):
        key = normalize_word(theme)
        if key in self.word_index:
            return self.embeddings[self.word_index[key]], self.entries[self.word_index[key]]["word"]
        close = difflib.get_close_matches(key, self.word_index.keys(), n=1, cutoff=0.85)
        if close:
            idx = self.word_index[close[0]]
            return self.embeddings[idx], self.entries[idx]["word"]
        vec = self._project(theme)
        return vec, None

    def words_around(self, theme, n):
        vec, matched_word = self.theme_vector(theme)
        if not np.any(vec):
            pool = list(range(len(self.entries)))
            matched_word = None
        else:
            sims = self.embeddings @ vec
            order = np.argsort(-sims)
            pool_size = min(len(order), max(n * 5, 30))
            pool = order[:pool_size].tolist()
        k = min(n, len(pool))
        chosen = random.sample(pool, k)
        return matched_word, [self.entries[i] for i in chosen]


class ExerciseStore:
    """Posted paragraphs/dialogues, persisted to a flat JSON file."""

    def __init__(self, vault_dir):
        self.path = Path(vault_dir) / "exercises.json"
        self.lock = threading.Lock()
        self.items = json.loads(self.path.read_text()) if self.path.exists() else []
        self._id_counter = itertools.count(max((e["id"] for e in self.items), default=0) + 1)

    def add(self, theme, text, words, questions=None):
        item = {
            "id": next(self._id_counter),
            "theme": theme,
            "text": text,
            "words": words,
            "questions": questions or [],
            "created": time.time(),
        }
        with self.lock:
            self.items.append(item)
            self._save()
        return item

    def update(self, item_id, **fields):
        with self.lock:
            for item in self.items:
                if item["id"] == item_id:
                    item.update({k: v for k, v in fields.items() if v is not None})
                    self._save()
                    return item
        return None

    def _save(self):
        self.path.write_text(json.dumps(self.items, ensure_ascii=False, indent=2))

    def list(self):
        return list(reversed(self.items))


VOICE_MODELS = {
    "male": STATIC_DIR / "voices" / "de_DE-thorsten-medium.onnx",
    "female": STATIC_DIR / "voices" / "de_DE-kerstin-low.onnx",
}


class TTSEngine:
    """Local neural TTS (Piper) with a real distinct voice per gender,
    file-cached by (voice, text) hash so repeat lines are instant."""

    def __init__(self, vault_dir):
        self.cache_dir = Path(vault_dir) / "tts_cache"
        self.cache_dir.mkdir(exist_ok=True)
        self._voices = {}
        self._lock = threading.Lock()

    def _get_voice(self, name):
        if name not in self._voices:
            from piper import PiperVoice  # imported lazily: only needed if /tts is hit
            self._voices[name] = PiperVoice.load(str(VOICE_MODELS[name]))
        return self._voices[name]

    def synthesize(self, text, voice_name):
        key = hashlib.sha256(f"{voice_name}:{text}".encode()).hexdigest()[:24]
        path = self.cache_dir / f"{key}.wav"
        if not path.exists():
            with self._lock:
                if not path.exists():
                    voice = self._get_voice(voice_name)
                    with wave.open(str(path), "wb") as wf:
                        voice.synthesize_wav(text, wf)
        return path


def make_handler(db, store, tts):
    class Handler(http.server.BaseHTTPRequestHandler):
        def log_message(self, fmt, *args):
            pass

        def _json(self, status, payload):
            body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
            self.send_response(status)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)

        def do_GET(self):
            parsed = urllib.parse.urlparse(self.path)
            if parsed.path in ("/", "/index.html"):
                body = (STATIC_DIR / "index.html").read_bytes()
                self.send_response(200)
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self.send_header("Content-Length", str(len(body)))
                self.end_headers()
                self.wfile.write(body)
                return
            if parsed.path == "/exercises":
                self._json(200, {"exercises": store.list()})
                return
            if parsed.path == "/tts":
                qs = urllib.parse.parse_qs(parsed.query)
                text = qs.get("text", [""])[0].strip()
                voice_name = qs.get("voice", ["male"])[0]
                if not text or voice_name not in VOICE_MODELS:
                    self._json(400, {"error": "need text= and voice=male|female"})
                    return
                try:
                    path = tts.synthesize(text, voice_name)
                except Exception as e:
                    self._json(500, {"error": str(e)})
                    return
                body = path.read_bytes()
                self.send_response(200)
                self.send_header("Content-Type", "audio/wav")
                self.send_header("Content-Length", str(len(body)))
                self.send_header("Cache-Control", "public, max-age=31536000")
                self.end_headers()
                self.wfile.write(body)
                return
            if parsed.path != "/words":
                self._json(404, {"error": "unknown path, use /words?theme=...&n=..."})
                return
            qs = urllib.parse.parse_qs(parsed.query)
            theme = qs.get("theme", [""])[0].strip()
            try:
                n = int(qs.get("n", ["8"])[0])
            except ValueError:
                n = 8
            if not theme:
                self._json(400, {"error": "missing theme"})
                return
            n = max(1, min(n, len(db.entries)))
            matched, words = db.words_around(theme, n)
            self._json(200, {
                "theme": theme,
                "matched_word": matched,
                "words": [
                    {"word": w["word"], "english": w["english"], "example": w["example"]}
                    for w in words
                ],
            })

        def do_POST(self):
            if self.path != "/exercises":
                self._json(404, {"error": "unknown path, use POST /exercises"})
                return
            length = int(self.headers.get("Content-Length", 0))
            try:
                payload = json.loads(self.rfile.read(length) or b"{}")
            except json.JSONDecodeError:
                self._json(400, {"error": "invalid JSON body"})
                return
            item_id = payload.get("id")
            if item_id is not None:
                item = store.update(
                    item_id,
                    theme=(payload.get("theme") or "").strip() or None,
                    text=(payload.get("text") or "").strip() or None,
                    words=payload.get("words"),
                    questions=payload.get("questions"),
                )
                if item is None:
                    self._json(404, {"error": f"no exercise with id {item_id}"})
                else:
                    self._json(200, item)
                return
            theme = (payload.get("theme") or "").strip()
            text = (payload.get("text") or "").strip()
            if not theme or not text:
                self._json(400, {"error": "theme and text are required"})
                return
            item = store.add(theme, text, payload.get("words") or [], payload.get("questions"))
            self._json(201, item)

    return Handler


def _selftest(vault_dir):
    db = VocabDB(vault_dir)
    assert len(db.entries) > 100, "expected a substantial vocab corpus"
    matched, words = db.words_around("Umwelt", 5)
    assert len(words) == 5
    assert all(w["word"] for w in words)
    matched2, words2 = db.words_around("zzzznotarealtoken", 3)
    assert len(words2) == 3
    print(f"selftest OK: {len(db.entries)} entries, dims={db.embeddings.shape[1]}, "
          f"'Umwelt' matched -> {matched}, sample: {[w['word'] for w in words]}")


def main():
    default_vault = Path(__file__).resolve().parent
    parser = argparse.ArgumentParser()
    parser.add_argument("--vault-dir", default=str(default_vault))
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=int(os.environ.get("PORT", 8765)))
    parser.add_argument("--test", action="store_true", help="run selftest and exit")
    args = parser.parse_args()

    if args.test:
        _selftest(args.vault_dir)
        return

    db = VocabDB(args.vault_dir)
    store = ExerciseStore(args.vault_dir)
    tts = TTSEngine(args.vault_dir)
    print(f"Loaded {len(db.entries)} vocab entries, {db.embeddings.shape[1]}-dim embeddings, "
          f"{len(store.items)} saved exercises.")
    socketserver.ThreadingTCPServer.allow_reuse_address = True
    with socketserver.ThreadingTCPServer((args.host, args.port), make_handler(db, store, tts)) as httpd:
        print(f"Serving on http://{args.host}:{args.port}  (open in a browser)")
        httpd.serve_forever()


if __name__ == "__main__":
    main()
