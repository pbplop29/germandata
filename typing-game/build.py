#!/usr/bin/env python3
"""Parses ../Vocabulary*.md into data.js for the typing game.
Rerun after adding/editing vocab files: python3 build.py
"""
import glob
import json
import os
import re

ROOT = os.path.dirname(os.path.abspath(__file__))
VOCAB_DIR = os.path.dirname(ROOT)

SPAN_RE = re.compile(r"<span[^>]*>(.*?)</span>", re.S)
BOLD_RE = re.compile(r"\*\*(.*?)\*\*")


def clean(cell: str) -> str:
    cell = SPAN_RE.sub(r"\1", cell)
    cell = BOLD_RE.sub(r"\1", cell)
    return cell.strip()


def strip_article(word: str) -> str:
    return re.sub(r"^(der|die|das|sich)\s+", "", word.strip().lower())


def parse_vocab_table(text: str):
    entries = []
    glossary = {}
    for line in text.splitlines():
        line = line.strip()
        if not line.startswith("|") or line.startswith("| Deutsch") or set(line) <= set("|- "):
            continue
        cols = [c.strip() for c in line.strip("|").split("|")]
        if len(cols) < 7:
            continue
        word, sentence, english = clean(cols[0]), clean(cols[5]), clean(cols[6])
        if word and english and english != "—":
            glossary.setdefault(strip_article(word), english)
        if sentence and sentence != "—" and english and english != "—" and "==" not in sentence:
            entries.append({"word": word, "de": sentence, "en": english})
    return entries, glossary


def parse_paragraphs(text: str, glossary: dict):
    m = re.search(r"^### Übungstext.*$", text, re.M)
    if not m:
        return []
    rest = text[m.end():]
    next_heading = re.search(r"^##", rest, re.M)
    if next_heading:
        rest = rest[: next_heading.start()]
    paragraphs = []
    for block in re.split(r"\n\s*\n", rest):
        block = block.strip()
        if not block:
            continue
        terms = re.findall(r"==(.+?)==", block)
        gloss = []
        seen = set()
        for term in terms:
            key = strip_article(term)
            en = glossary.get(key)
            if en is None:
                for gk, gv in glossary.items():
                    if gk in key or key in gk:
                        en = gv
                        break
            if term not in seen:
                seen.add(term)
                gloss.append({"term": term, "en": en or "?"})
        display = block.replace("==", "")
        paragraphs.append({"text": display, "glossary": gloss})
    return paragraphs


def main():
    sentences = []
    seen_sentences = set()
    paragraphs = []
    glossary = {}

    files = sorted(glob.glob(os.path.join(VOCAB_DIR, "Vocabulary*.md")))
    texts = {}
    for path in files:
        with open(path, encoding="utf-8") as f:
            texts[path] = f.read()
        _, gloss = parse_vocab_table(texts[path])
        glossary.update(gloss)

    for path in files:
        entries, _ = parse_vocab_table(texts[path])
        for e in entries:
            if e["de"] not in seen_sentences:
                seen_sentences.add(e["de"])
                sentences.append(e)
        paragraphs.extend(parse_paragraphs(texts[path], glossary))

    out = os.path.join(ROOT, "data.js")
    with open(out, "w", encoding="utf-8") as f:
        f.write("const GAME_DATA = ")
        json.dump({"sentences": sentences, "paragraphs": paragraphs}, f, ensure_ascii=False, indent=2)
        f.write(";\n")

    print(f"{len(sentences)} sentences, {len(paragraphs)} paragraphs -> {out}")


if __name__ == "__main__":
    main()
