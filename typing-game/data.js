const GAME_DATA = {
  "sentences": [
    {
      "word": "auf der linken Seite",
      "de": "Die Apotheke ist auf der linken Seite.",
      "en": "on the left side"
    },
    {
      "word": "auf der rechten Seite",
      "de": "Das Restaurant ist auf der rechten Seite.",
      "en": "on the right side"
    },
    {
      "word": "duzen",
      "de": "Wir können uns duzen.",
      "en": "to address someone informally / use \"du\""
    },
    {
      "word": "siezen",
      "de": "Im Büro siezen wir unseren Chef.",
      "en": "to address someone formally / use \"Sie\""
    },
    {
      "word": "das Heimweh",
      "de": "Nach einigen Wochen bekam sie Heimweh.",
      "en": "homesickness"
    },
    {
      "word": "die Begrüßung",
      "de": "Eine freundliche Begrüßung ist wichtig.",
      "en": "greeting"
    },
    {
      "word": "die Gastfreundschaft",
      "de": "Die Gastfreundschaft der Familie war wunderbar.",
      "en": "hospitality"
    },
    {
      "word": "sich eingewöhnen",
      "de": "Ich brauche Zeit, um mich einzugewöhnen.",
      "en": "to get used to / settle in"
    },
    {
      "word": "sich anpassen",
      "de": "Man muss sich an eine neue Kultur anpassen.",
      "en": "to adapt / adjust"
    },
    {
      "word": "der Wangenkuss",
      "de": "In manchen Ländern ist ein Wangenkuss eine normale Begrüßung.",
      "en": "kiss on the cheek"
    },
    {
      "word": "man bleibt unter sich",
      "de": "In dieser Gruppe bleibt man unter sich.",
      "en": "people keep to themselves"
    },
    {
      "word": "sich Sorgen machen",
      "de": "Ich mache mir Sorgen um meine Familie.",
      "en": "to worry"
    },
    {
      "word": "die zweite Heimat",
      "de": "Deutschland ist für ihn zu einer zweiten Heimat geworden.",
      "en": "second home"
    },
    {
      "word": "erleichtern",
      "de": "Sprachkenntnisse erleichtern das Ankommen.",
      "en": "to make easier / facilitate"
    },
    {
      "word": "entstanden",
      "de": "Hier sind neue Freundschaften entstanden.",
      "en": "emerged / developed / arose"
    },
    {
      "word": "neue Kontakte",
      "de": "Ich habe viele neue Kontakte geknüpft.",
      "en": "new contacts / connections"
    },
    {
      "word": "das Ankommen",
      "de": "Das Ankommen in einer neuen Stadt braucht Zeit.",
      "en": "arriving / settling in"
    },
    {
      "word": "umarmen",
      "de": "Sie umarmt ihre Mutter zur Begrüßung.",
      "en": "to hug, embrace"
    },
    {
      "word": "Hände schütteln",
      "de": "Die beiden Männer schütteln sich die Hände.",
      "en": "to shake hands"
    },
    {
      "word": "die Parallelgesellschaft",
      "de": "Eine Parallelgesellschaft kann die Integration erschweren.",
      "en": "parallel society"
    },
    {
      "word": "die Regierung",
      "de": "Die Regierung hat ein neues Gesetz beschlossen.",
      "en": "government"
    },
    {
      "word": "der Protest",
      "de": "Viele Menschen nehmen an einem Protest teil.",
      "en": "protest"
    },
    {
      "word": "der Frieden",
      "de": "Alle Menschen wünschen sich Frieden.",
      "en": "peace"
    },
    {
      "word": "die Staatsangehörigkeit",
      "de": "Welche Staatsangehörigkeit haben Sie?",
      "en": "nationality, citizenship"
    },
    {
      "word": "die Grenze",
      "de": "Der Fluss bildet die Grenze zwischen den Ländern.",
      "en": "border, limit"
    },
    {
      "word": "geschickt",
      "de": "Er ist sehr geschickt im Umgang mit Menschen.",
      "en": "skilled / clever / sent"
    },
    {
      "word": "nützlich",
      "de": "Diese Information ist sehr nützlich.",
      "en": "useful"
    },
    {
      "word": "zurückhaltender",
      "de": "Die Menschen hier sind etwas zurückhaltender.",
      "en": "more reserved / more restrained"
    },
    {
      "word": "eng",
      "de": "Wir haben einen engen Kontakt.",
      "en": "close / tight / narrow"
    },
    {
      "word": "die Geduld",
      "de": "Man braucht viel Geduld, wenn man eine neue Sprache lernt.",
      "en": "patience"
    },
    {
      "word": "blöd",
      "de": "Das war eine ziemlich blöde Idee.",
      "en": "stupid, silly, annoying"
    },
    {
      "word": "sich anstrengen",
      "de": "Du musst dich beim Lernen mehr anstrengen.",
      "en": "to make an effort, try hard"
    },
    {
      "word": "täuschen",
      "de": "Ich habe mich bei der Antwort getäuscht.",
      "en": "to deceive, to be mistaken"
    },
    {
      "word": "urteilen",
      "de": "Man sollte nicht zu schnell über andere urteilen.",
      "en": "to judge"
    },
    {
      "word": "die Bescheidenheit",
      "de": "Seine Bescheidenheit macht ihn sympathisch.",
      "en": "modesty, humility"
    },
    {
      "word": "gründlich",
      "de": "Bitte lies den Text gründlich durch.",
      "en": "thorough, careful"
    },
    {
      "word": "verschlossen",
      "de": "Er ist ein eher verschlossener Mensch.",
      "en": "reserved, withdrawn, closed"
    },
    {
      "word": "nicht alle Tassen im Schrank haben",
      "de": "Du hast wohl nicht alle Tassen im Schrank!",
      "en": "to be crazy, have a screw loose"
    },
    {
      "word": "verrückt",
      "de": "Das ist eine verrückte Idee.",
      "en": "crazy, mad"
    },
    {
      "word": "einen Vogel haben",
      "de": "Du hast doch einen Vogel!",
      "en": "to be crazy, have a screw loose"
    },
    {
      "word": "er spinnt",
      "de": "Er spinnt, wenn er das wirklich glaubt.",
      "en": "he is crazy / acting strangely"
    },
    {
      "word": "die Besprechung",
      "de": "Wir haben morgen eine Besprechung.",
      "en": "meeting, discussion"
    },
    {
      "word": "liefern",
      "de": "Wir liefern die Bestellung morgen.",
      "en": "to deliver"
    },
    {
      "word": "bestellen",
      "de": "Ich möchte eine Pizza bestellen.",
      "en": "to order"
    },
    {
      "word": "die Lieferung",
      "de": "Die Lieferung kommt heute.",
      "en": "delivery"
    },
    {
      "word": "hochqualifiziert",
      "de": "Sie ist eine hochqualifizierte Ärztin.",
      "en": "highly qualified"
    },
    {
      "word": "wechseln",
      "de": "Ich möchte meinen Arbeitsplatz wechseln.",
      "en": "to change / switch"
    },
    {
      "word": "vorgestellt",
      "de": "Er wurde mir gestern vorgestellt.",
      "en": "introduced / presented"
    },
    {
      "word": "die Versicherung",
      "de": "Ich brauche eine Krankenversicherung.",
      "en": "insurance"
    },
    {
      "word": "beruflich",
      "de": "Ich bin beruflich nach Deutschland gekommen.",
      "en": "professional / work-related"
    },
    {
      "word": "die Steuererklärung",
      "de": "Ich muss meine Steuererklärung machen.",
      "en": "tax return"
    },
    {
      "word": "die Bedingungen",
      "de": "Die Bedingungen für den Vertrag sind klar.",
      "en": "conditions, terms"
    },
    {
      "word": "die Forschung",
      "de": "Die Forschung macht große Fortschritte.",
      "en": "research"
    },
    {
      "word": "die Marketingleiterin",
      "de": "Die Marketingleiterin plant eine neue Kampagne.",
      "en": "female marketing manager"
    },
    {
      "word": "veröffentlichen",
      "de": "Die Autorin veröffentlicht nächstes Jahr ein neues Buch.",
      "en": "to publish, release"
    },
    {
      "word": "die Faschingsgesellschaft",
      "de": "Sie ist Mitglied in einer Faschingsgesellschaft.",
      "en": "carnival society/association"
    },
    {
      "word": "der Karnevalsverein",
      "de": "Er ist in einem Karnevalsverein aktiv.",
      "en": "carnival club"
    },
    {
      "word": "eingetreten",
      "de": "Sie ist dem Verein beigetreten.",
      "en": "joined / entered"
    },
    {
      "word": "ehrenamtlich",
      "de": "Sie arbeitet ehrenamtlich in einem Verein.",
      "en": "voluntary, on a voluntary basis"
    },
    {
      "word": "etwas unternehmen",
      "de": "Wir wollen am Wochenende etwas unternehmen.",
      "en": "to do something, take action"
    },
    {
      "word": "der Horizont",
      "de": "Die Sonne verschwindet am Horizont.",
      "en": "horizon"
    },
    {
      "word": "der persönliche Horizont",
      "de": "Reisen erweitert meinen persönlichen Horizont.",
      "en": "personal horizon / outlook"
    },
    {
      "word": "das Abenteuer",
      "de": "Die Reise war ein großes Abenteuer.",
      "en": "adventure"
    },
    {
      "word": "Erfahrung sammeln",
      "de": "Durch Reisen kann man viel Erfahrung sammeln.",
      "en": "to gain experience"
    },
    {
      "word": "das Abenteuer",
      "de": "Das war ein großes Abenteuer.",
      "en": "adventure"
    },
    {
      "word": "spannend",
      "de": "Der Film war sehr spannend.",
      "en": "exciting / fascinating"
    },
    {
      "word": "sammeln",
      "de": "Ich möchte neue Erfahrungen sammeln.",
      "en": "to collect / gather / gain"
    },
    {
      "word": "vielfältig",
      "de": "Die Stadt bietet vielfältige Möglichkeiten.",
      "en": "diverse / varied"
    },
    {
      "word": "begeistert",
      "de": "Ich bin von der Stadt begeistert.",
      "en": "enthusiastic / delighted"
    },
    {
      "word": "die Gelegenheit",
      "de": "Ich hatte die Gelegenheit, neue Leute kennenzulernen.",
      "en": "opportunity / occasion"
    },
    {
      "word": "erleben",
      "de": "Ich möchte etwas Neues erleben.",
      "en": "to experience"
    },
    {
      "word": "der Fallschirm",
      "de": "Er springt mit einem Fallschirm aus dem Flugzeug.",
      "en": "parachute"
    },
    {
      "word": "die Fallschirmspringerin",
      "de": "Die Fallschirmspringerin landet sicher.",
      "en": "female skydiver"
    },
    {
      "word": "der Flugturm",
      "de": "Vom Flugturm kann man die Springer beobachten.",
      "en": "flight tower / flying tower"
    },
    {
      "word": "der Heißluftballon",
      "de": "Ein Heißluftballon fliegt über die Stadt.",
      "en": "hot-air balloon"
    },
    {
      "word": "der Toboggan",
      "de": "Die Kinder fahren mit dem Toboggan den Berg hinunter.",
      "en": "toboggan / alpine slide"
    },
    {
      "word": "erweitern",
      "de": "Reisen kann den persönlichen Horizont erweitern.",
      "en": "to expand, broaden"
    },
    {
      "word": "ein Seil hochklettern",
      "de": "Die Kinder lernen, ein Seil hochzuklettern.",
      "en": "to climb up a rope"
    },
    {
      "word": "an seine Grenze gehen",
      "de": "Beim Training gehe ich manchmal an meine Grenze.",
      "en": "to push oneself to one's limit"
    },
    {
      "word": "ein Risiko eingehen",
      "de": "Manchmal muss man ein Risiko eingehen.",
      "en": "to take a risk"
    },
    {
      "word": "das Hindernis, -se",
      "de": "Wir müssen dieses Hindernis überwinden.",
      "en": "obstacle"
    },
    {
      "word": "überwinden",
      "de": "Sie konnte ihre Angst überwinden.",
      "en": "to overcome"
    },
    {
      "word": "riskant",
      "de": "Diese Entscheidung ist ziemlich riskant.",
      "en": "risky"
    },
    {
      "word": "schaffen",
      "de": "Ich weiß, dass du das schaffen kannst.",
      "en": "to manage, accomplish, create"
    },
    {
      "word": "die Berliner Mauer",
      "de": "Die Berliner Mauer fiel 1989.",
      "en": "Berlin Wall"
    },
    {
      "word": "das Denkmal",
      "de": "Wir besuchen ein Denkmal.",
      "en": "monument, memorial"
    },
    {
      "word": "das Fachwerkhaus",
      "de": "In dieser Stadt gibt es viele Fachwerkhäuser.",
      "en": "half-timbered house"
    },
    {
      "word": "der Wolkenkratzer",
      "de": "In Frankfurt gibt es viele Wolkenkratzer.",
      "en": "skyscraper"
    },
    {
      "word": "die Umgebung",
      "de": "Die Umgebung ist sehr schön.",
      "en": "surroundings / area"
    },
    {
      "word": "das Hochhaus",
      "de": "Neben dem Bahnhof steht ein großes Hochhaus.",
      "en": "high-rise building / skyscraper"
    },
    {
      "word": "die Fachwerkhäuser",
      "de": "In der Altstadt gibt es viele Fachwerkhäuser.",
      "en": "half-timbered houses"
    },
    {
      "word": "das Graffiti",
      "de": "An der Wand ist ein großes Graffiti.",
      "en": "graffiti"
    },
    {
      "word": "die Brücke",
      "de": "Wir gehen über die Brücke.",
      "en": "bridge"
    },
    {
      "word": "die Straßenlaterne",
      "de": "Unter der Straßenlaterne steht ein Mann.",
      "en": "street lamp"
    },
    {
      "word": "der Kanal",
      "de": "Das Boot fährt durch den Kanal.",
      "en": "canal / channel"
    },
    {
      "word": "der Fahrradweg",
      "de": "Auf diesem Fahrradweg dürfen nur Fahrräder fahren.",
      "en": "cycle path / bike lane"
    },
    {
      "word": "die Anschlagtafel",
      "de": "Die Informationen hängen an der Anschlagtafel.",
      "en": "notice board / bulletin board"
    },
    {
      "word": "der Brunnen",
      "de": "Auf dem Marktplatz steht ein alter Brunnen.",
      "en": "fountain / well"
    },
    {
      "word": "anhalten",
      "de": "Der Bus hält an der nächsten Haltestelle an.",
      "en": "to stop, come to a stop"
    },
    {
      "word": "der Berg",
      "de": "Der Berg ist sehr hoch.",
      "en": "mountain"
    },
    {
      "word": "das Matterhorn",
      "de": "Das Matterhorn ist ein berühmter Berg in der Schweiz.",
      "en": "Matterhorn"
    },
    {
      "word": "der Vogel",
      "de": "Ein Vogel sitzt auf dem Baum.",
      "en": "bird"
    },
    {
      "word": "der Himmel",
      "de": "Der Himmel ist heute blau.",
      "en": "sky / heaven"
    },
    {
      "word": "der Kahn",
      "de": "Sie fahren mit einem alten Kahn über den Fluss.",
      "en": "boat / barge"
    },
    {
      "word": "das Windrad",
      "de": "Auf dem Hügel steht ein großes Windrad.",
      "en": "wind turbine / windmill"
    },
    {
      "word": "der Vulkankrater",
      "de": "Wir konnten den Vulkankrater sehen.",
      "en": "volcanic crater"
    },
    {
      "word": "der Hügel",
      "de": "Auf dem Hügel steht ein altes Haus.",
      "en": "hill"
    },
    {
      "word": "der Fluss",
      "de": "Der Fluss fließt durch die Stadt.",
      "en": "river"
    },
    {
      "word": "das Boot",
      "de": "Wir fahren mit dem Boot auf dem See.",
      "en": "boat"
    },
    {
      "word": "die Wiese",
      "de": "Die Kinder spielen auf der Wiese.",
      "en": "meadow"
    },
    {
      "word": "der Baum",
      "de": "Unter dem Baum steht eine Bank.",
      "en": "tree"
    },
    {
      "word": "trotzdem",
      "de": "Es regnet. Trotzdem gehen wir spazieren.",
      "en": "nevertheless, still"
    },
    {
      "word": "obwohl",
      "de": "Obwohl es regnet, gehen wir spazieren.",
      "en": "although, even though"
    },
    {
      "word": "einige Jahre",
      "de": "Ich habe einige Jahre in Berlin gelebt.",
      "en": "several years"
    },
    {
      "word": "selten",
      "de": "Ich gehe selten ins Kino.",
      "en": "rarely / rare"
    },
    {
      "word": "auswählen",
      "de": "Sie können ein Menü auswählen.",
      "en": "to choose / select"
    },
    {
      "word": "holprig",
      "de": "Die Straße war sehr holprig.",
      "en": "bumpy / rough / awkward"
    },
    {
      "word": "die Bedienung",
      "de": "Die Bedienung war sehr freundlich.",
      "en": "service / waiter/waitress / operation"
    },
    {
      "word": "der Anfang",
      "de": "Der Anfang war schwierig.",
      "en": "beginning / start"
    },
    {
      "word": "inzwischen",
      "de": "Inzwischen habe ich mich gut eingelebt.",
      "en": "meanwhile / by now"
    },
    {
      "word": "sollen",
      "de": "Du sollst mehr Deutsch sprechen.",
      "en": "should / be supposed to"
    },
    {
      "word": "die Besonderheit",
      "de": "Jede Region hat ihre eigenen Besonderheiten.",
      "en": "special feature / peculiarity"
    },
    {
      "word": "bieten",
      "de": "Die Stadt bietet viele Möglichkeiten.",
      "en": "to offer"
    },
    {
      "word": "in Kürze",
      "de": "In Kürze beginnt die Veranstaltung.",
      "en": "shortly / soon"
    },
    {
      "word": "regelmäßig",
      "de": "Ich gehe regelmäßig zum Deutschkurs.",
      "en": "regularly"
    },
    {
      "word": "immerhin",
      "de": "Es war schwierig, aber immerhin habe ich es geschafft.",
      "en": "at least / after all"
    },
    {
      "word": "das Yoga",
      "de": "Ich mache jeden Morgen Yoga.",
      "en": "yoga"
    },
    {
      "word": "die Weise",
      "de": "Auf diese Weise kann man viel lernen.",
      "en": "way / manner"
    },
    {
      "word": "der Roboter",
      "de": "Der Roboter kann viele Aufgaben erledigen.",
      "en": "robot"
    },
    {
      "word": "gering",
      "de": "Das Risiko ist sehr gering.",
      "en": "low, small, slight"
    },
    {
      "word": "ablehnen",
      "de": "Sie hat das Angebot abgelehnt.",
      "en": "to reject, decline"
    },
    {
      "word": "die Streichhölzer",
      "de": "Die Streichhölzer liegen auf dem Tisch.",
      "en": "matches"
    },
    {
      "word": "spitzen",
      "de": "Der Hund spitzt die Ohren, als er ein Geräusch hört.",
      "en": "to sharpen / to prick up (ears)"
    },
    {
      "word": "die Ohren spitzen",
      "de": "Bei diesem Thema spitzte sie sofort die Ohren.",
      "en": "to prick up one's ears / listen closely"
    },
    {
      "word": "die Redewendung",
      "de": "\"Die Daumen drücken\" ist eine bekannte Redewendung.",
      "en": "idiom, figure of speech"
    },
    {
      "word": "die Eigenschaft",
      "de": "Ehrlichkeit ist eine wichtige Eigenschaft.",
      "en": "characteristic, trait"
    },
    {
      "word": "das Stereotyp",
      "de": "Viele Stereotypen über andere Länder stimmen nicht.",
      "en": "stereotype"
    },
    {
      "word": "der Geiz",
      "de": "Sein Geiz ist bei allen bekannt.",
      "en": "stinginess, greed"
    },
    {
      "word": "geizig",
      "de": "Er ist so geizig, dass er nie eine Runde bezahlt.",
      "en": "stingy, greedy"
    },
    {
      "word": "die Vergangenheit",
      "de": "In der Vergangenheit war alles anders.",
      "en": "the past"
    },
    {
      "word": "bevorzugen",
      "de": "Ich bevorzuge Tee gegenüber Kaffee.",
      "en": "to prefer"
    },
    {
      "word": "das Angeln",
      "de": "Am Wochenende geht mein Vater gern angeln.",
      "en": "fishing"
    },
    {
      "word": "fangen",
      "de": "Die Katze hat eine Maus gefangen.",
      "en": "to catch"
    },
    {
      "word": "die Privatsphäre",
      "de": "Jeder Mensch braucht seine Privatsphäre.",
      "en": "privacy"
    },
    {
      "word": "die Mücke",
      "de": "Eine Mücke hat mich in der Nacht gestochen.",
      "en": "mosquito, gnat"
    },
    {
      "word": "das Insekt",
      "de": "Im Sommer gibt es viele Insekten im Garten.",
      "en": "insect"
    },
    {
      "word": "ausprobieren",
      "de": "Ich möchte das neue Restaurant ausprobieren.",
      "en": "to try out"
    },
    {
      "word": "die Trennung",
      "de": "Nach der Trennung zog er in eine eigene Wohnung.",
      "en": "separation, breakup"
    },
    {
      "word": "besitzen",
      "de": "Sie besitzt ein kleines Haus am See.",
      "en": "to own, possess"
    },
    {
      "word": "introvertiert",
      "de": "Er ist eher introvertiert und braucht Zeit für sich allein.",
      "en": "introverted"
    },
    {
      "word": "extrovertiert",
      "de": "Seine Schwester ist sehr extrovertiert und liebt Partys.",
      "en": "extroverted"
    },
    {
      "word": "expressiv",
      "de": "Ihre Malerei ist sehr expressiv.",
      "en": "expressive"
    },
    {
      "word": "der Müll",
      "de": "Bitte bring den Müll raus.",
      "en": "trash, garbage"
    },
    {
      "word": "die Zeitverschwendung",
      "de": "Stundenlang fernzusehen ist für mich Zeitverschwendung.",
      "en": "waste of time"
    },
    {
      "word": "verschwenden",
      "de": "Er verschwendet viel Geld für unnötige Dinge.",
      "en": "to waste"
    },
    {
      "word": "verschwinden",
      "de": "Die Sonne verschwindet hinter den Wolken.",
      "en": "to disappear"
    },
    {
      "word": "die Ermäßigung",
      "de": "Studierende bekommen eine Ermäßigung auf das Ticket.",
      "en": "discount, reduction"
    },
    {
      "word": "festgelegt",
      "de": "Der Termin ist bereits festgelegt.",
      "en": "fixed, set, determined"
    },
    {
      "word": "inhaltlich",
      "de": "Inhaltlich ist der Vortrag sehr interessant.",
      "en": "content-related, in terms of content"
    },
    {
      "word": "der Schwerpunkt",
      "de": "Der Schwerpunkt des Kurses liegt auf Grammatik.",
      "en": "main focus, emphasis"
    },
    {
      "word": "die Lesung",
      "de": "Die Autorin hält heute Abend eine Lesung.",
      "en": "(public) reading"
    },
    {
      "word": "die Führung",
      "de": "Wir machen eine Führung durch das Museum.",
      "en": "guided tour"
    },
    {
      "word": "das Reihenhaus",
      "de": "Sie wohnen in einem Reihenhaus am Stadtrand.",
      "en": "row house, terraced house"
    },
    {
      "word": "folgt oft nach",
      "de": "Auf eine Einladung folgt oft eine Antwort nach.",
      "en": "often follows (after)"
    },
    {
      "word": "verbringen",
      "de": "Wir verbringen den Urlaub am Meer.",
      "en": "to spend (time)"
    },
    {
      "word": "die Lebensform",
      "de": "Es gibt heute viele verschiedene Lebensformen.",
      "en": "way of life, lifestyle"
    },
    {
      "word": "die Kommune",
      "de": "In den 1970ern lebten viele junge Leute in einer Kommune.",
      "en": "commune"
    },
    {
      "word": "das Gefängnis",
      "de": "Der Dieb kam ins Gefängnis.",
      "en": "prison"
    },
    {
      "word": "ausgezogen",
      "de": "Mit 20 ist sie von zu Hause ausgezogen.",
      "en": "moved out"
    },
    {
      "word": "infrage",
      "de": "Dieser Plan wird von allen infrage gestellt.",
      "en": "in question, into question"
    },
    {
      "word": "der Streit um Kleinigkeiten",
      "de": "In der WG gibt es oft Streit um Kleinigkeiten.",
      "en": "arguing over trivial things"
    },
    {
      "word": "gut leiden können",
      "de": "Ich kann meine neue Kollegin gut leiden.",
      "en": "to like (someone)"
    },
    {
      "word": "vorhaben",
      "de": "Was hast du heute Abend vor? / Das hatte ich gar nicht vor.",
      "en": "to plan, intend / \"I really didn't intend that\""
    },
    {
      "word": "leisten",
      "de": "Sie leistet gute Arbeit. / Wir können uns dieses Jahr keinen Urlaub leisten.",
      "en": "to accomplish, achieve / (reflexive) to afford"
    },
    {
      "word": "fest",
      "de": "Sie sind schon lange in einer festen Beziehung.",
      "en": "firm, steady, committed"
    },
    {
      "word": "die Bedürfnisse",
      "de": "In einer WG muss man Rücksicht auf die Bedürfnisse der anderen nehmen.",
      "en": "needs"
    },
    {
      "word": "die Unabhängigkeit",
      "de": "Ihr ist ihre Unabhängigkeit sehr wichtig.",
      "en": "independence"
    },
    {
      "word": "die Abhängigkeit",
      "de": "Seine Abhängigkeit von seinen Eltern stört ihn.",
      "en": "dependence, dependency"
    },
    {
      "word": "verlobt",
      "de": "Seit letztem Monat sind die beiden verlobt.",
      "en": "engaged (to be married)"
    },
    {
      "word": "sich verlieben",
      "de": "Sie hat sich auf den ersten Blick verliebt.",
      "en": "to fall in love"
    },
    {
      "word": "die Absicht haben",
      "de": "Sie hatten die Absicht, im Sommer zu heiraten.",
      "en": "to intend to"
    },
    {
      "word": "kündigen",
      "de": "Sie hat ihren Job gekündigt.",
      "en": "to quit, terminate, give notice"
    },
    {
      "word": "großartig",
      "de": "Das war ein großartiger Abend!",
      "en": "great, wonderful"
    },
    {
      "word": "die Vorliebe",
      "de": "Er hat eine Vorliebe für italienisches Essen.",
      "en": "preference, liking"
    },
    {
      "word": "begründen",
      "de": "Kannst du deine Entscheidung begründen?",
      "en": "to justify, give reasons for"
    },
    {
      "word": "nennen",
      "de": "Kannst du mir ein Beispiel nennen?",
      "en": "to name, mention"
    },
    {
      "word": "reden",
      "de": "Wir sollten mal in Ruhe reden.",
      "en": "to talk, speak"
    },
    {
      "word": "vorlesen",
      "de": "Sie liest ihrem Kind jeden Abend vor.",
      "en": "to read aloud"
    },
    {
      "word": "durchlesen",
      "de": "Bitte lies den Vertrag genau durch.",
      "en": "to read through"
    },
    {
      "word": "oberflächlich",
      "de": "Er hat den Text nur oberflächlich gelesen.",
      "en": "superficial"
    },
    {
      "word": "verlieren",
      "de": "Ich habe meinen Schlüssel verloren.",
      "en": "to lose"
    },
    {
      "word": "die Gegenwart",
      "de": "In der Gegenwart nutzen viele Menschen Smartphones.",
      "en": "the present"
    },
    {
      "word": "das Heft",
      "de": "Schreib die Vokabeln in dein Heft.",
      "en": "notebook, booklet"
    },
    {
      "word": "vergleichen",
      "de": "Man kann die beiden Angebote gut vergleichen.",
      "en": "to compare"
    },
    {
      "word": "erreichbar",
      "de": "Ich bin heute den ganzen Tag erreichbar.",
      "en": "reachable, attainable"
    },
    {
      "word": "der Schüttelkasten",
      "de": "Im Schüttelkasten stehen alle Wörter, die du für die Lücke brauchst.",
      "en": "word box / scrambled word box (exercise)"
    },
    {
      "word": "miteinander",
      "de": "Sie reden viel miteinander.",
      "en": "with each other, together"
    },
    {
      "word": "die Eigentumswohnung",
      "de": "Sie haben sich eine Eigentumswohnung gekauft.",
      "en": "condominium, owner-occupied apartment"
    },
    {
      "word": "das Argument",
      "de": "Das ist ein gutes Argument.",
      "en": "argument, point"
    },
    {
      "word": "sich auf jemanden verlassen",
      "de": "Ich kann mich immer auf meine Freunde verlassen.",
      "en": "to rely on someone"
    },
    {
      "word": "gegenseitig",
      "de": "Sie helfen sich gegenseitig.",
      "en": "mutual, each other"
    },
    {
      "word": "herum",
      "de": "Die Kinder laufen im Garten herum.",
      "en": "around"
    },
    {
      "word": "der Heiratsantrag",
      "de": "Er machte ihr einen romantischen Heiratsantrag.",
      "en": "marriage proposal"
    },
    {
      "word": "dann kam alles anders",
      "de": "Wir wollten heiraten, aber dann kam alles anders.",
      "en": "then everything turned out differently"
    },
    {
      "word": "vorschlagen",
      "de": "Ich schlage vor, dass wir früher losfahren.",
      "en": "to suggest, propose"
    },
    {
      "word": "raten",
      "de": "Ich rate dir, früh zu buchen. / Kannst du raten, wie alt ich bin?",
      "en": "to advise / to guess"
    },
    {
      "word": "sich vorstellen",
      "de": "Darf ich mich kurz vorstellen? / Ich kann mir das gut vorstellen.",
      "en": "to introduce oneself / to imagine"
    },
    {
      "word": "erlauben",
      "de": "Meine Eltern erlauben mir, allein zu reisen.",
      "en": "to allow, permit"
    },
    {
      "word": "verbieten",
      "de": "Rauchen ist hier verboten.",
      "en": "to forbid, prohibit"
    },
    {
      "word": "aufhören",
      "de": "Er sollte endlich aufhören zu rauchen.",
      "en": "to stop, quit"
    },
    {
      "word": "ausgezeichnet",
      "de": "Das Essen hier ist ausgezeichnet.",
      "en": "excellent"
    },
    {
      "word": "prima",
      "de": "Das hast du prima gemacht.",
      "en": "great, terrific"
    },
    {
      "word": "wunderbar",
      "de": "Wir hatten einen wunderbaren Urlaub.",
      "en": "wonderful"
    },
    {
      "word": "fantastisch",
      "de": "Die Show war fantastisch.",
      "en": "fantastic"
    },
    {
      "word": "toll",
      "de": "Das ist eine tolle Idee!",
      "en": "great, cool"
    },
    {
      "word": "anspannen",
      "de": "Vor der Prüfung spannt sie sich immer stark an.",
      "en": "to tense (up), strain"
    },
    {
      "word": "Lust auf etwas haben",
      "de": "Ich habe Lust auf ein Eis.",
      "en": "to feel like (something)"
    },
    {
      "word": "an etwas arbeiten",
      "de": "Sie arbeitet gerade an einem neuen Projekt.",
      "en": "to work on something"
    },
    {
      "word": "es geht um / es geht darum",
      "de": "In dem Buch geht es um eine Liebesgeschichte. / Es geht darum, dass alle mitmachen.",
      "en": "it's about / the point is"
    },
    {
      "word": "beantragen",
      "de": "Er hat ein neues Visum beantragt.",
      "en": "to apply for"
    },
    {
      "word": "sich beruflich neu orientieren",
      "de": "Nach der Kündigung wollte er sich beruflich neu orientieren.",
      "en": "to reorient oneself professionally"
    },
    {
      "word": "ansprechen",
      "de": "Ich möchte ein Problem ansprechen.",
      "en": "to address, speak to"
    },
    {
      "word": "erschließen",
      "de": "Der Text lässt sich aus dem Kontext erschließen.",
      "en": "to develop, make accessible / infer"
    },
    {
      "word": "skeptisch",
      "de": "Ich bin skeptisch, ob der Plan funktioniert.",
      "en": "skeptical"
    },
    {
      "word": "Fragen an jemanden haben",
      "de": "Habt ihr noch Fragen an die Referentin?",
      "en": "to have questions for someone"
    },
    {
      "word": "deswegen",
      "de": "Es regnet, deswegen bleiben wir zu Hause.",
      "en": "that's why, therefore"
    },
    {
      "word": "ersetzen",
      "de": "Der Roboter kann den Arbeiter nicht ersetzen.",
      "en": "to replace"
    },
    {
      "word": "diskriminieren",
      "de": "Niemand darf wegen seiner Herkunft diskriminiert werden.",
      "en": "to discriminate (against)"
    },
    {
      "word": "das Dach",
      "de": "Die Sonnenkollektoren liegen auf dem Dach.",
      "en": "roof"
    },
    {
      "word": "die Dachwohnung",
      "de": "Sie wohnen in einer gemütlichen Dachwohnung.",
      "en": "attic apartment, penthouse"
    },
    {
      "word": "eigen",
      "de": "Er hat eine eigene Wohnung.",
      "en": "own"
    },
    {
      "word": "einige",
      "de": "Einige Studierende waren nicht da.",
      "en": "some, several"
    },
    {
      "word": "der Verwandte",
      "de": "Zu Weihnachten kommen viele Verwandte zu Besuch.",
      "en": "relative"
    },
    {
      "word": "der Rollstuhl",
      "de": "Er sitzt seit dem Unfall im Rollstuhl.",
      "en": "wheelchair"
    },
    {
      "word": "die Behinderung",
      "de": "Er lebt seit seiner Geburt mit einer Behinderung.",
      "en": "disability"
    },
    {
      "word": "alleinstehend",
      "de": "Sie ist alleinstehend und wohnt allein.",
      "en": "single, living alone"
    },
    {
      "word": "die Witwe",
      "de": "Nach dem Tod ihres Mannes ist sie Witwe.",
      "en": "widow"
    },
    {
      "word": "auf die Wünsche eingehen",
      "de": "Das Personal geht gut auf die Wünsche der Gäste ein.",
      "en": "to accommodate someone's wishes"
    },
    {
      "word": "überwiegend",
      "de": "Die Bewohner sind überwiegend älter als 70.",
      "en": "predominantly, mostly"
    },
    {
      "word": "erheblich",
      "de": "Die Kosten sind erheblich gestiegen.",
      "en": "considerable, significant"
    },
    {
      "word": "betreuen",
      "de": "Die Pflegerin betreut mehrere ältere Menschen.",
      "en": "to look after, care for"
    },
    {
      "word": "aufpassen",
      "de": "Kannst du kurz auf die Kinder aufpassen?",
      "en": "to pay attention, look after"
    },
    {
      "word": "ausstrahlen",
      "de": "Sie strahlt viel Ruhe aus. / Das Programm wird live ausgestrahlt.",
      "en": "to radiate / to broadcast"
    },
    {
      "word": "aussuchen",
      "de": "Sie hat sich ein schönes Kleid ausgesucht.",
      "en": "to pick out, choose"
    },
    {
      "word": "das Brettspiel",
      "de": "An Regentagen spielen wir gern ein Brettspiel.",
      "en": "board game"
    },
    {
      "word": "wenn es mir langweilig ist",
      "de": "Wenn es mir langweilig ist, lese ich ein Buch.",
      "en": "when I'm bored"
    },
    {
      "word": "anschauen",
      "de": "Wollen wir uns einen Film anschauen?",
      "en": "to look at, watch"
    },
    {
      "word": "es eilig haben",
      "de": "Tut mir leid, ich habe es eilig.",
      "en": "to be in a hurry"
    },
    {
      "word": "sich beeilen",
      "de": "Beeil dich, der Bus kommt gleich!",
      "en": "to hurry (up)"
    },
    {
      "word": "beziehen",
      "de": "Sie beziehen nächste Woche ihre neue Wohnung. / Der Satz bezieht sich auf das vorige Kapitel.",
      "en": "to move into, receive / to refer to"
    },
    {
      "word": "verbinden",
      "de": "Die Brücke verbindet die beiden Stadtteile.",
      "en": "to connect, combine"
    },
    {
      "word": "zusammenleben",
      "de": "Sie leben seit fünf Jahren zusammen.",
      "en": "to live together"
    },
    {
      "word": "wahrscheinlich",
      "de": "Es wird wahrscheinlich morgen regnen.",
      "en": "probably, likely"
    },
    {
      "word": "schieben",
      "de": "Er schiebt den Wagen in die Garage.",
      "en": "to push, shove"
    },
    {
      "word": "der Chornachmittag",
      "de": "Im Altenheim gibt es jeden Mittwoch einen Chornachmittag.",
      "en": "choir afternoon (singing session)"
    },
    {
      "word": "insgesamt",
      "de": "Wir waren insgesamt zehn Personen.",
      "en": "in total, altogether"
    },
    {
      "word": "anschließen",
      "de": "Kannst du den Drucker anschließen? / Ich schließe mich eurer Meinung an.",
      "en": "to connect / to join"
    },
    {
      "word": "riesig",
      "de": "Das neue Gebäude ist riesig.",
      "en": "huge, enormous"
    },
    {
      "word": "basteln",
      "de": "Die Kinder basteln gern mit Papier.",
      "en": "to do crafts, tinker"
    },
    {
      "word": "bauen",
      "de": "Sie bauen ein neues Haus.",
      "en": "to build"
    },
    {
      "word": "die Unterstützung",
      "de": "Er bekommt Unterstützung von seiner Familie.",
      "en": "support, assistance"
    },
    {
      "word": "eine Rolle spielen",
      "de": "Geld spielt bei dieser Entscheidung keine große Rolle.",
      "en": "to play a role, matter"
    },
    {
      "word": "erledigen",
      "de": "Ich muss noch ein paar Dinge erledigen.",
      "en": "to take care of, finish"
    },
    {
      "word": "der Fortschritt",
      "de": "Die Technik macht große Fortschritte.",
      "en": "progress"
    },
    {
      "word": "übernehmen",
      "de": "Sie übernimmt die Leitung der Abteilung.",
      "en": "to take over, assume"
    },
    {
      "word": "Nutzerdaten speichern",
      "de": "Die App speichert Nutzerdaten auf einem Server.",
      "en": "to store user data"
    },
    {
      "word": "sich fühlen",
      "de": "Ich fühle mich heute nicht gut.",
      "en": "to feel (a certain way)"
    },
    {
      "word": "verantwortlich (für etwas) sein",
      "de": "Wer ist für dieses Projekt verantwortlich?",
      "en": "to be responsible (for something)"
    },
    {
      "word": "bestehen",
      "de": "Das Problem besteht seit Jahren. / Er hat die Prüfung bestanden.",
      "en": "to exist / to pass (an exam)"
    },
    {
      "word": "sich ärgern über",
      "de": "Ich ärgere mich sehr über die Verspätung.",
      "en": "to be annoyed about"
    },
    {
      "word": "begeistert von etwas sein",
      "de": "Sie ist total begeistert von ihrem neuen Job.",
      "en": "to be enthusiastic about something"
    },
    {
      "word": "unzufrieden mit etwas sein",
      "de": "Er ist unzufrieden mit seinem Gehalt.",
      "en": "to be dissatisfied with something"
    },
    {
      "word": "etwas als Hobby machen",
      "de": "Er macht das Fotografieren nur als Hobby.",
      "en": "to do something as a hobby"
    },
    {
      "word": "als etwas arbeiten",
      "de": "Sie arbeitet als Krankenschwester.",
      "en": "to work as a (profession)"
    },
    {
      "word": "an deiner Stelle würde ich",
      "de": "An deiner Stelle würde ich einfach mit ihm reden.",
      "en": "if I were you, I would"
    },
    {
      "word": "wenn ich du wäre",
      "de": "Wenn ich du wäre, würde ich das Angebot annehmen.",
      "en": "if I were you"
    },
    {
      "word": "wie wäre es, wenn",
      "de": "Wie wäre es, wenn wir morgen ins Kino gehen?",
      "en": "how about if"
    },
    {
      "word": "ich kann dir nur raten, ...",
      "de": "Ich kann dir nur raten, früh genug zu buchen.",
      "en": "I can only advise you to ..."
    },
    {
      "word": "ich würde dir vorschlagen",
      "de": "Ich würde dir vorschlagen, zuerst einen Termin zu vereinbaren.",
      "en": "I would suggest to you"
    },
    {
      "word": "die körperliche Behinderung",
      "de": "Er hat seit dem Unfall eine körperliche Behinderung.",
      "en": "physical disability"
    },
    {
      "word": "die geistige Behinderung",
      "de": "Menschen mit einer geistigen Behinderung brauchen oft besondere Unterstützung.",
      "en": "mental / intellectual disability"
    },
    {
      "word": "verschieben",
      "de": "Wir müssen das Meeting auf nächste Woche verschieben.",
      "en": "to postpone, move"
    },
    {
      "word": "schwerhörig",
      "de": "Meine Oma ist ein bisschen schwerhörig.",
      "en": "hard of hearing"
    },
    {
      "word": "der Altenpfleger",
      "de": "Mein Onkel arbeitet als Altenpfleger in einem Heim.",
      "en": "geriatric nurse, elderly caregiver"
    },
    {
      "word": "der Bewohner",
      "de": "Die Bewohner des Hauses kennen sich alle.",
      "en": "resident, inhabitant"
    },
    {
      "word": "sich beschäftigen mit",
      "de": "Er beschäftigt sich viel mit Musik.",
      "en": "to occupy oneself with, deal with"
    },
    {
      "word": "der Eindruck",
      "de": "Sie macht einen sehr netten Eindruck.",
      "en": "impression"
    },
    {
      "word": "die Wirkung",
      "de": "Die Medizin zeigt schnell Wirkung.",
      "en": "effect, impact"
    },
    {
      "word": "wirken",
      "de": "Er wirkt heute müde.",
      "en": "to seem, have an effect"
    },
    {
      "word": "die Spracherkennung",
      "de": "Mein Handy hat eine gute Spracherkennung.",
      "en": "speech recognition"
    },
    {
      "word": "die künstliche Intelligenz (KI)",
      "de": "Künstliche Intelligenz verändert viele Berufe.",
      "en": "artificial intelligence (AI)"
    },
    {
      "word": "die Fachkraft",
      "de": "Im Krankenhaus fehlen Fachkräfte.",
      "en": "skilled worker, specialist"
    },
    {
      "word": "teilweise",
      "de": "Der Bericht ist teilweise richtig.",
      "en": "partially, in part"
    },
    {
      "word": "der Fehler",
      "de": "Im Text sind zwei Fehler.",
      "en": "mistake, error"
    },
    {
      "word": "der Algorithmus",
      "de": "Der Algorithmus entscheidet, welche Videos du siehst.",
      "en": "algorithm"
    },
    {
      "word": "es fehlt an etwas",
      "de": "In vielen Heimen fehlt es an Personal.",
      "en": "there is a lack of something"
    },
    {
      "word": "Diskutieren Sie zu zweit",
      "de": "Diskutieren Sie zu zweit, welche Ausbildung besser ist.",
      "en": "Discuss in pairs"
    },
    {
      "word": "reagieren",
      "de": "Wie hat sie auf die Nachricht reagiert?",
      "en": "to react"
    },
    {
      "word": "Sind Sie dafür oder dagegen?",
      "de": "Sind Sie dafür oder dagegen, dass Schüler Uniformen tragen?",
      "en": "Are you for or against it?"
    },
    {
      "word": "Stichpunkte nutzen",
      "de": "Beim Vortrag sollte man Stichpunkte nutzen, keine ganzen Sätze.",
      "en": "to use bullet points/notes"
    },
    {
      "word": "der Studierende",
      "de": "Die Studierenden schreiben heute eine Klausur.",
      "en": "student (male or female)"
    },
    {
      "word": "die Umfrage",
      "de": "Laut einer Umfrage nutzen die meisten Jugendlichen täglich soziale Medien.",
      "en": "survey, poll"
    },
    {
      "word": "speichern",
      "de": "Vergiss nicht, die Datei zu speichern.",
      "en": "to save, store"
    },
    {
      "word": "die Redaktion",
      "de": "Die Redaktion entscheidet, welche Artikel gedruckt werden.",
      "en": "editorial team, editorial office"
    },
    {
      "word": "die Tätigkeit",
      "de": "Seine Tätigkeit als Lehrer macht ihm Freude.",
      "en": "activity, occupation"
    },
    {
      "word": "die Aufnahmeprüfung",
      "de": "Er hat die Aufnahmeprüfung für die Musikhochschule bestanden.",
      "en": "entrance exam"
    },
    {
      "word": "berufsbegleitend",
      "de": "Sie macht eine berufsbegleitende Weiterbildung.",
      "en": "while working, part-time alongside a job"
    },
    {
      "word": "die Herausforderung",
      "de": "Der neue Job ist eine große Herausforderung für sie.",
      "en": "challenge"
    },
    {
      "word": "die Betreuung",
      "de": "Die Betreuung der Kinder übernimmt die Großmutter.",
      "en": "care, supervision"
    },
    {
      "word": "die Bewegung",
      "de": "Tägliche Bewegung ist gut für die Gesundheit.",
      "en": "movement, exercise"
    },
    {
      "word": "feinfühlig",
      "de": "Sie geht sehr feinfühlig mit ihren Patienten um.",
      "en": "sensitive, tactful"
    },
    {
      "word": "erhalten",
      "de": "Sie erhält jeden Monat ein Gehalt.",
      "en": "to receive"
    },
    {
      "word": "verantwortungsbewusst",
      "de": "Ein guter Babysitter muss verantwortungsbewusst sein.",
      "en": "responsible, conscientious"
    },
    {
      "word": "geeignet",
      "de": "Sie ist die geeignete Person für diese Stelle.",
      "en": "suitable, qualified"
    },
    {
      "word": "sich bewerben",
      "de": "Sie bewirbt sich um ein Praktikum.",
      "en": "to apply (for a job/position)"
    },
    {
      "word": "die Bewerbung",
      "de": "Ich habe meine Bewerbung gestern abgeschickt.",
      "en": "job application"
    },
    {
      "word": "Was braucht man für jeden Job?",
      "de": "Was braucht man für jeden Job? – Pünktlichkeit und Teamfähigkeit zum Beispiel.",
      "en": "What does one need for any job?"
    },
    {
      "word": "das Vorstellungsgespräch",
      "de": "Morgen habe ich ein Vorstellungsgespräch.",
      "en": "job interview"
    },
    {
      "word": "der Wortschatz",
      "de": "Lesen erweitert den Wortschatz.",
      "en": "vocabulary"
    },
    {
      "word": "eine (wichtige) Rolle spielen",
      "de": "Erfahrung spielt bei dieser Stelle eine wichtige Rolle.",
      "en": "to play an (important) role"
    },
    {
      "word": "weitergeben",
      "de": "Bitte gib diese Information an das Team weiter.",
      "en": "to pass on"
    },
    {
      "word": "skeptisch",
      "de": "Viele sind skeptisch gegenüber neuer Technik.",
      "en": "skeptical"
    },
    {
      "word": "die Software",
      "de": "Die Firma entwickelt Software für Krankenhäuser.",
      "en": "software"
    },
    {
      "word": "der Nutzer",
      "de": "Die App hat über eine Million Nutzer.",
      "en": "user"
    },
    {
      "word": "das Kompositum",
      "de": "\"Handschuh\" ist ein Kompositum aus \"Hand\" und \"Schuh\".",
      "en": "compound word"
    },
    {
      "word": "die Suchmaschine",
      "de": "Er nutzt eine Suchmaschine, um Informationen zu finden.",
      "en": "search engine"
    },
    {
      "word": "der Podcast",
      "de": "Ich höre gern einen Podcast über Sprachen.",
      "en": "podcast"
    },
    {
      "word": "die Sendung",
      "de": "Die Sendung beginnt um 20 Uhr.",
      "en": "broadcast, program"
    },
    {
      "word": "anhören",
      "de": "Ich möchte mir den neuen Podcast anhören.",
      "en": "to listen to"
    },
    {
      "word": "herunterladen",
      "de": "Ich habe mir die App heruntergeladen.",
      "en": "to download"
    },
    {
      "word": "der Treffer",
      "de": "Die Suche ergab über tausend Treffer.",
      "en": "hit, result"
    },
    {
      "word": "der Suchbegriff",
      "de": "Gib einen genauen Suchbegriff ein, um bessere Ergebnisse zu bekommen.",
      "en": "search term"
    },
    {
      "word": "eingeben",
      "de": "Bitte geben Sie Ihr Passwort ein.",
      "en": "to enter, input"
    },
    {
      "word": "der Begriff",
      "de": "\"Nachhaltigkeit\" ist ein wichtiger Begriff heute.",
      "en": "term, concept"
    },
    {
      "word": "das Lexikon",
      "de": "Sie hat das Wort im Lexikon nachgeschlagen.",
      "en": "encyclopedia, dictionary"
    },
    {
      "word": "die Quelle",
      "de": "Bitte gib die Quelle für dieses Zitat an.",
      "en": "source"
    },
    {
      "word": "der Fakt",
      "de": "Das ist kein Fakt, sondern nur eine Meinung.",
      "en": "fact"
    },
    {
      "word": "zitieren",
      "de": "Der Journalist zitiert den Minister wörtlich.",
      "en": "to quote, cite"
    },
    {
      "word": "z. T. (zum Teil)",
      "de": "Die Aussage stimmt z. T.",
      "en": "partly (abbreviation for \"zum Teil\")"
    },
    {
      "word": "der Beweis",
      "de": "Er hatte keinen Beweis für seine Behauptung.",
      "en": "proof, evidence"
    },
    {
      "word": "beweisen",
      "de": "Kannst du das beweisen?",
      "en": "to prove"
    },
    {
      "word": "sich weiterbilden",
      "de": "Er möchte sich in Informatik weiterbilden.",
      "en": "to further one's education"
    },
    {
      "word": "die Weiterbildung",
      "de": "Die Firma bezahlt die Weiterbildung ihrer Mitarbeiter.",
      "en": "further education, training"
    },
    {
      "word": "die Fortbildung",
      "de": "Sie nimmt an einer Fortbildung für Lehrer teil.",
      "en": "further training, professional development"
    },
    {
      "word": "die Ausbildung",
      "de": "Er macht eine Ausbildung zum Elektriker.",
      "en": "vocational training, apprenticeship"
    },
    {
      "word": "der Fußabdruck",
      "de": "Jeder hinterlässt online einen Fußabdruck.",
      "en": "footprint (also: digital footprint)"
    },
    {
      "word": "hinterlassen",
      "de": "Der Täter hat keine Spuren hinterlassen.",
      "en": "to leave behind"
    },
    {
      "word": "fortfahren",
      "de": "Bitte fahren Sie mit Ihrem Vortrag fort.",
      "en": "to continue, proceed"
    },
    {
      "word": "eintippen",
      "de": "Sie tippt ihr Passwort ein.",
      "en": "to type in"
    },
    {
      "word": "die Einleitung",
      "de": "Die Einleitung des Aufsatzes ist sehr gut geschrieben.",
      "en": "introduction"
    },
    {
      "word": "ausschließen",
      "de": "Ein Fehler lässt sich nie ganz ausschließen.",
      "en": "to exclude, rule out"
    },
    {
      "word": "unbedingt",
      "de": "Du musst unbedingt diesen Film sehen.",
      "en": "absolutely, definitely"
    },
    {
      "word": "der Lernende",
      "de": "Die Lernenden bekommen individuelles Feedback.",
      "en": "learner"
    },
    {
      "word": "ablenken",
      "de": "Das Handy lenkt ihn beim Lernen oft ab.",
      "en": "to distract"
    },
    {
      "word": "die Ablenkung",
      "de": "Das Smartphone ist eine ständige Ablenkung.",
      "en": "distraction"
    },
    {
      "word": "Ich bin einverstanden",
      "de": "Ich bin einverstanden mit diesem Vorschlag.",
      "en": "I agree"
    },
    {
      "word": "die freiberufliche Tätigkeit",
      "de": "Sie übt eine freiberufliche Tätigkeit als Übersetzerin aus.",
      "en": "freelance work"
    },
    {
      "word": "freiwillig",
      "de": "Er arbeitet freiwillig im Tierheim.",
      "en": "voluntary"
    },
    {
      "word": "das eigene Unternehmen",
      "de": "Sie hat mit 25 ein eigenes Unternehmen gegründet.",
      "en": "one's own company"
    },
    {
      "word": "unbefristet",
      "de": "Sie hat einen unbefristeten Arbeitsvertrag.",
      "en": "permanent, unlimited"
    },
    {
      "word": "befristet",
      "de": "Der Vertrag ist auf ein Jahr befristet.",
      "en": "temporary, fixed-term"
    },
    {
      "word": "begleitend",
      "de": "Zum Kurs gibt es begleitendes Material.",
      "en": "accompanying"
    },
    {
      "word": "die Vertretung",
      "de": "Frau Berg macht heute die Vertretung für den kranken Lehrer.",
      "en": "substitute, replacement"
    },
    {
      "word": "ablegen",
      "de": "Sie hat die Prüfung erfolgreich abgelegt.",
      "en": "to take/sit (an exam)"
    },
    {
      "word": "sich einschreiben",
      "de": "Er hat sich für den Deutschkurs eingeschrieben.",
      "en": "to enroll, register"
    },
    {
      "word": "und so weiter (usw.)",
      "de": "Wir brauchen Stifte, Papier, Kleber und so weiter.",
      "en": "and so on (etc.)"
    },
    {
      "word": "die Fähigkeit",
      "de": "Teamfähigkeit ist eine wichtige Fähigkeit im Beruf.",
      "en": "ability, skill"
    },
    {
      "word": "das Zeugnis",
      "de": "Er hat ein sehr gutes Zeugnis bekommen.",
      "en": "report card, certificate"
    },
    {
      "word": "das Arbeitszeugnis",
      "de": "Nach der Kündigung bekam sie ein gutes Arbeitszeugnis.",
      "en": "work reference, employment certificate"
    },
    {
      "word": "der Empfänger",
      "de": "Der Empfänger der E-Mail hat noch nicht geantwortet.",
      "en": "recipient"
    },
    {
      "word": "der Absender",
      "de": "Der Absender des Pakets ist nicht bekannt.",
      "en": "sender"
    },
    {
      "word": "der Empfang",
      "de": "Bitte bestätigen Sie den Empfang der Ware. / Melden Sie sich am Empfang.",
      "en": "receipt / reception (desk)"
    },
    {
      "word": "belastbar",
      "de": "Für diesen Job muss man belastbar sein.",
      "en": "resilient, able to cope with stress"
    },
    {
      "word": "die Belastung",
      "de": "Die Belastung durch die Prüfungen war hoch.",
      "en": "strain, burden, stress"
    },
    {
      "word": "die Art",
      "de": "Das ist eine interessante Art, das Problem zu lösen.",
      "en": "kind, type, way"
    },
    {
      "word": "der Arbeitsvertrag",
      "de": "Sie hat gestern ihren Arbeitsvertrag unterschrieben.",
      "en": "employment contract"
    },
    {
      "word": "die Arbeitszeit",
      "de": "Die Arbeitszeit beträgt 40 Stunden pro Woche.",
      "en": "working hours"
    },
    {
      "word": "die Abschlussprüfung",
      "de": "Er hat die Abschlussprüfung mit Bestnote bestanden.",
      "en": "final exam"
    },
    {
      "word": "das Stellenangebot",
      "de": "Sie hat ein passendes Stellenangebot gefunden.",
      "en": "job offer, job posting"
    },
    {
      "word": "die Stellenanzeige",
      "de": "In der Stellenanzeige stehen alle Anforderungen.",
      "en": "job advertisement"
    },
    {
      "word": "das Studienfach",
      "de": "Ihr Studienfach ist Biologie.",
      "en": "field of study, major"
    },
    {
      "word": "die Studienrichtung",
      "de": "Er hat sich für die Studienrichtung Wirtschaftsinformatik entschieden.",
      "en": "field/course of study"
    },
    {
      "word": "nur Bahnhof verstehen",
      "de": "Bei der Steuererklärung verstehe ich nur Bahnhof.",
      "en": "to not understand a thing"
    },
    {
      "word": "zwei Fliegen mit einer Klappe schlagen",
      "de": "Beim Einkaufen besuche ich auch gleich meine Oma – so schlage ich zwei Fliegen mit einer Klappe.",
      "en": "to kill two birds with one stone"
    },
    {
      "word": "die Fliege",
      "de": "Eine Fliege summt am Fenster. / Zur Hochzeit trug er einen Anzug mit Fliege.",
      "en": "fly (insect) / bow tie"
    },
    {
      "word": "einsehen",
      "de": "Er hat eingesehen, dass er einen Fehler gemacht hat. / Die Akte kann online eingesehen werden.",
      "en": "to realize, come to see / to inspect, view"
    },
    {
      "word": "sich äußern",
      "de": "Der Minister wollte sich zu dem Thema nicht äußern.",
      "en": "to comment, express oneself"
    },
    {
      "word": "sich Mühe geben",
      "de": "Er gibt sich wirklich Mühe, die Sprache zu lernen.",
      "en": "to make an effort"
    },
    {
      "word": "der Beitrag",
      "de": "In der Zeitschrift stand ein interessanter Beitrag über Klimawandel.",
      "en": "article, contribution"
    },
    {
      "word": "beitragen zu",
      "de": "Jeder kann dazu beitragen, Energie zu sparen.",
      "en": "to contribute to"
    },
    {
      "word": "sich bewerben bei/um",
      "de": "Sie bewirbt sich bei einer großen Firma um ein Praktikum.",
      "en": "to apply to (a company) / for (a position)"
    },
    {
      "word": "aufhören",
      "de": "Der Regen hat endlich aufgehört.",
      "en": "to stop, quit"
    },
    {
      "word": "denken an",
      "de": "Ich denke oft an meine Kindheit.",
      "en": "to think of/about"
    },
    {
      "word": "danken für",
      "de": "Ich danke dir für deine Hilfe.",
      "en": "to thank (someone) for"
    },
    {
      "word": "sich beschweren bei/über",
      "de": "Er beschwert sich beim Chef über den Lärm.",
      "en": "to complain to (someone) / about (something)"
    },
    {
      "word": "besichtigen",
      "de": "Wir wollen morgen das Schloss besichtigen.",
      "en": "to visit, view, tour"
    },
    {
      "word": "aufpassen",
      "de": "Pass auf, die Straße ist glatt!",
      "en": "to pay attention, watch out"
    },
    {
      "word": "der Lärm",
      "de": "Der Lärm von der Baustelle stört mich beim Arbeiten.",
      "en": "noise"
    },
    {
      "word": "Angst haben vor",
      "de": "Viele Kinder haben Angst vor der Dunkelheit.",
      "en": "to be afraid of"
    },
    {
      "word": "der Ehemalige",
      "de": "Beim Klassentreffen kamen viele Ehemalige zusammen.",
      "en": "former member, alumnus"
    },
    {
      "word": "schriftlich",
      "de": "Bitte reichen Sie den Antrag schriftlich ein.",
      "en": "in writing, written"
    },
    {
      "word": "vorbereiten",
      "de": "Sie bereitet die Präsentation gut vor.",
      "en": "to prepare"
    },
    {
      "word": "der Umgang",
      "de": "Er hat einen freundlichen Umgang mit seinen Kollegen.",
      "en": "dealing (with), way of handling"
    },
    {
      "word": "reagieren",
      "de": "Sie reagierte sofort auf die E-Mail.",
      "en": "to react"
    },
    {
      "word": "unter Druck stehen",
      "de": "Vor der Prüfung stand sie sehr unter Druck.",
      "en": "to be under pressure"
    },
    {
      "word": "unter Druck setzen",
      "de": "Der Chef setzt die Mitarbeiter oft unter Druck.",
      "en": "to put pressure on (someone)"
    },
    {
      "word": "unter Zeitdruck stehen",
      "de": "Kurz vor der Deadline standen wir alle unter Zeitdruck.",
      "en": "to be under time pressure"
    },
    {
      "word": "etwas lösen",
      "de": "Sie hat die Aufgabe schnell gelöst.",
      "en": "to solve something"
    },
    {
      "word": "Fragen stellen",
      "de": "Die Schüler stellten dem Referenten viele Fragen.",
      "en": "to ask questions"
    },
    {
      "word": "eine Entscheidung treffen",
      "de": "Er musste eine schwierige Entscheidung treffen.",
      "en": "to make a decision"
    },
    {
      "word": "Kritik üben",
      "de": "Der Lehrer übte deutliche Kritik an der Arbeit.",
      "en": "to criticize"
    },
    {
      "word": "die Abteilung",
      "de": "Er arbeitet in der Abteilung für Marketing.",
      "en": "department"
    },
    {
      "word": "die Personalabteilung",
      "de": "Die Personalabteilung bearbeitet alle Bewerbungen.",
      "en": "human resources (HR) department"
    },
    {
      "word": "ableiten",
      "de": "Man kann aus den Daten einen Trend ableiten.",
      "en": "to derive, deduce"
    },
    {
      "word": "Was hättest du davon?",
      "de": "Was hättest du davon, wenn du jetzt kündigst?",
      "en": "What would you get out of that?"
    },
    {
      "word": "das Redemittel",
      "de": "\"Meiner Meinung nach\" ist ein nützliches Redemittel.",
      "en": "stock phrase, language tool for speaking"
    },
    {
      "word": "entlang",
      "de": "Wir gehen den Fluss entlang.",
      "en": "along"
    },
    {
      "word": "leihen",
      "de": "Kannst du mir dein Fahrrad leihen?",
      "en": "to lend / to borrow"
    },
    {
      "word": "freiberuflich",
      "de": "Sie arbeitet freiberuflich als Fotografin.",
      "en": "freelance"
    },
    {
      "word": "die Lehre",
      "de": "Er macht eine Lehre als Bäcker. / Aus dem Fehler hat sie eine Lehre gezogen.",
      "en": "apprenticeship / lesson (learned)"
    },
    {
      "word": "sich einigen",
      "de": "Die Parteien haben sich auf einen Kompromiss geeinigt.",
      "en": "to agree, come to an agreement"
    },
    {
      "word": "häufig",
      "de": "Sie geht häufig ins Fitnessstudio.",
      "en": "frequent(ly), often"
    },
    {
      "word": "das Schild",
      "de": "An der Tür hängt ein Schild mit den Öffnungszeiten.",
      "en": "sign"
    },
    {
      "word": "überzeugt",
      "de": "Sie ist überzeugt, dass ihr Plan funktioniert.",
      "en": "convinced"
    },
    {
      "word": "überzeugen",
      "de": "Er konnte seine Chefin von der Idee überzeugen.",
      "en": "to convince"
    },
    {
      "word": "merken",
      "de": "Sie merkte, dass etwas nicht stimmte. / Ich kann mir Namen schlecht merken.",
      "en": "to notice / to remember"
    },
    {
      "word": "bezeichnen",
      "de": "Man bezeichnet dieses Verhalten als unhöflich.",
      "en": "to label, refer to as"
    },
    {
      "word": "die Trauer",
      "de": "Nach dem Tod ihres Vaters war sie tief in Trauer.",
      "en": "grief, sadness"
    },
    {
      "word": "die Freude",
      "de": "Die Kinder strahlten vor Freude.",
      "en": "joy"
    },
    {
      "word": "leicht",
      "de": "Die Prüfung war überraschend leicht.",
      "en": "easy, light"
    },
    {
      "word": "der Ekel",
      "de": "Sie verzog das Gesicht vor Ekel.",
      "en": "disgust"
    },
    {
      "word": "die Hände kneten",
      "de": "Vor der Prüfung knetete er ständig die Hände.",
      "en": "to wring/knead one's hands"
    },
    {
      "word": "die Stirn runzeln",
      "de": "Er runzelte die Stirn, als er die Rechnung sah.",
      "en": "to frown"
    },
    {
      "word": "strecken",
      "de": "Sie streckt die Arme über den Kopf.",
      "en": "to stretch"
    },
    {
      "word": "nicken",
      "de": "Er nickte zustimmend.",
      "en": "to nod"
    },
    {
      "word": "die Arme verschränken",
      "de": "Sie stand da und verschränkte die Arme.",
      "en": "to cross one's arms"
    },
    {
      "word": "den Kopf schütteln",
      "de": "Er schüttelte nur den Kopf und sagte nichts.",
      "en": "to shake one's head"
    },
    {
      "word": "den Daumen hoch machen",
      "de": "Sie machte den Daumen hoch, um ihre Zustimmung zu zeigen.",
      "en": "to give a thumbs up"
    },
    {
      "word": "die Schultern hängen lassen",
      "de": "Nach der Niederlage ließ er die Schultern hängen.",
      "en": "to let one's shoulders droop"
    },
    {
      "word": "den Kopf senken",
      "de": "Beschämt senkte sie den Kopf.",
      "en": "to lower one's head"
    },
    {
      "word": "die Gebärdensprache",
      "de": "Gehörlose Menschen kommunizieren oft in Gebärdensprache.",
      "en": "sign language"
    },
    {
      "word": "der Gesichtsausdruck",
      "de": "Ihr Gesichtsausdruck verriet ihre Nervosität.",
      "en": "facial expression"
    },
    {
      "word": "das Zeichen",
      "de": "Ein Nicken kann ein Zeichen der Zustimmung sein.",
      "en": "sign, signal"
    },
    {
      "word": "die Vermutung",
      "de": "Das ist nur eine Vermutung, kein Beweis.",
      "en": "assumption, guess"
    },
    {
      "word": "im Stau stehen",
      "de": "Wir standen eine Stunde im Stau.",
      "en": "to be stuck in traffic"
    },
    {
      "word": "keinen Hunger haben",
      "de": "Danke, ich habe gerade keinen Hunger.",
      "en": "to not be hungry"
    },
    {
      "word": "ein Bewerbungsgespräch haben",
      "de": "Morgen habe ich ein Bewerbungsgespräch.",
      "en": "to have a job interview"
    },
    {
      "word": "auf Reisen sein",
      "de": "Meine Eltern sind gerade auf Reisen.",
      "en": "to be traveling"
    },
    {
      "word": "etwas später kommen",
      "de": "Ich komme heute etwas später, tut mir leid.",
      "en": "to arrive a bit later"
    },
    {
      "word": "beim Arzt sein",
      "de": "Sie ist heute Nachmittag beim Arzt.",
      "en": "to be at the doctor's"
    },
    {
      "word": "kommunizieren",
      "de": "Wir kommunizieren oft per E-Mail.",
      "en": "to communicate"
    },
    {
      "word": "das Zitat",
      "de": "Das Zitat stammt von Goethe.",
      "en": "quote, quotation"
    },
    {
      "word": "gesprochen",
      "de": "Die gesprochene Sprache unterscheidet sich oft von der Schriftsprache.",
      "en": "spoken"
    },
    {
      "word": "ablaufen",
      "de": "Die Veranstaltung lief reibungslos ab. / Mein Pass läuft nächstes Jahr ab.",
      "en": "to proceed, take place / to expire"
    },
    {
      "word": "die Bewegung",
      "de": "Ihre Bewegungen wirkten sehr nervös.",
      "en": "movement, motion"
    },
    {
      "word": "stattfinden",
      "de": "Die Konferenz findet nächste Woche statt.",
      "en": "to take place"
    },
    {
      "word": "verraten",
      "de": "Ihr Zittern verriet ihre Nervosität.",
      "en": "to reveal, betray, give away"
    },
    {
      "word": "hüpfen",
      "de": "Die Kinder hüpften vor Freude.",
      "en": "to hop, skip"
    },
    {
      "word": "die Nervosität",
      "de": "Man merkte ihm die Nervosität vor der Prüfung an.",
      "en": "nervousness"
    },
    {
      "word": "der Inhalt",
      "de": "Der Inhalt des Buches hat mich überrascht.",
      "en": "content"
    },
    {
      "word": "das Verhalten",
      "de": "Sein Verhalten in der Sitzung war sehr höflich.",
      "en": "behavior"
    },
    {
      "word": "der Vortrag",
      "de": "Der Professor hält heute einen Vortrag über KI.",
      "en": "lecture, talk"
    },
    {
      "word": "sogenannt",
      "de": "Die sogenannten Experten hatten alle unrecht.",
      "en": "so-called"
    },
    {
      "word": "primär",
      "de": "Der primäre Grund für den Umzug war der neue Job.",
      "en": "primary, main"
    },
    {
      "word": "die Wut",
      "de": "Er konnte seine Wut kaum kontrollieren.",
      "en": "rage, anger"
    },
    {
      "word": "erlernen",
      "de": "Sie hat das Klavierspielen als Kind erlernt.",
      "en": "to learn, acquire (a skill)"
    },
    {
      "word": "wahrnehmen",
      "de": "Er nahm die Veränderung sofort wahr.",
      "en": "to perceive, notice"
    },
    {
      "word": "empfinden",
      "de": "Sie empfand großes Mitleid mit ihm.",
      "en": "to feel, sense"
    },
    {
      "word": "verstärken",
      "de": "Die Musik verstärkt die Stimmung im Film.",
      "en": "to intensify, strengthen"
    },
    {
      "word": "gestikulieren",
      "de": "Er gestikuliert immer stark, wenn er aufgeregt ist.",
      "en": "to gesture"
    },
    {
      "word": "der Gefühlszustand",
      "de": "Ihr Gefühlszustand war an diesem Tag sehr instabil.",
      "en": "emotional state"
    },
    {
      "word": "ausdrücken",
      "de": "Mit dieser Geste drückte er seine Freude aus.",
      "en": "to express"
    },
    {
      "word": "solche",
      "de": "Solche Fehler passieren jedem einmal.",
      "en": "such, of that kind"
    },
    {
      "word": "die schlimme Beleidigung",
      "de": "Das war eine schlimme Beleidigung und keine Kritik mehr.",
      "en": "a severe insult"
    },
    {
      "word": "wirken",
      "de": "Sie wirkte heute sehr entspannt.",
      "en": "to seem, have an effect"
    },
    {
      "word": "erzielen",
      "de": "Die Mannschaft konnte einen klaren Sieg erzielen.",
      "en": "to achieve, attain"
    },
    {
      "word": "einsetzen",
      "de": "Mimik wird oft eingesetzt, um Gefühle zu zeigen. / Sie setzt sich für Tierschutz ein.",
      "en": "to use, employ / to advocate for"
    },
    {
      "word": "ausstrahlen",
      "de": "Sie strahlt viel Selbstbewusstsein aus.",
      "en": "to radiate / to broadcast"
    },
    {
      "word": "nehmen wir an",
      "de": "Nehmen wir an, du hättest mehr Zeit — was würdest du anders machen?",
      "en": "let's assume"
    },
    {
      "word": "auf der Leitung stehen",
      "de": "Entschuldige, ich stand kurz auf der Leitung.",
      "en": "to be slow on the uptake"
    },
    {
      "word": "der Leiter",
      "de": "Er ist der Leiter der Marketingabteilung.",
      "en": "manager, head, director"
    },
    {
      "word": "die Leiter",
      "de": "Er stieg auf die Leiter, um die Lampe zu wechseln.",
      "en": "ladder"
    },
    {
      "word": "die Geschäftsleitung",
      "de": "Die Geschäftsleitung hat die neuen Regeln beschlossen.",
      "en": "company management"
    },
    {
      "word": "der Führer",
      "de": "Der Bergführer kennt jeden Weg in den Alpen.",
      "en": "leader, guide"
    },
    {
      "word": "der Kabelsalat",
      "de": "Hinter dem Schreibtisch herrscht totaler Kabelsalat.",
      "en": "tangle of cables"
    },
    {
      "word": "passen",
      "de": "Dieser Termin passt mir gut.",
      "en": "to fit, suit"
    },
    {
      "word": "etwas ist geeignet",
      "de": "Diese Schuhe sind gut für Wanderungen geeignet.",
      "en": "something is suitable"
    },
    {
      "word": "hervorragend",
      "de": "Sie hat eine hervorragende Arbeit abgeliefert.",
      "en": "excellent, outstanding"
    },
    {
      "word": "die Herausforderung",
      "de": "Die neue Stelle ist eine spannende Herausforderung.",
      "en": "challenge"
    },
    {
      "word": "die große Aufgabe",
      "de": "Die Reorganisation der Abteilung ist eine große Aufgabe.",
      "en": "big task"
    },
    {
      "word": "enthalten",
      "de": "Der Preis enthält schon die Mehrwertsteuer.",
      "en": "to contain, include"
    },
    {
      "word": "zubereiten",
      "de": "Sie bereitet das Abendessen zu.",
      "en": "to prepare (food)"
    },
    {
      "word": "die Zubereitung",
      "de": "Die Zubereitung des Gerichts dauert eine Stunde.",
      "en": "preparation (of food)"
    },
    {
      "word": "die Veranstaltung",
      "de": "Die Veranstaltung findet im Stadtpark statt.",
      "en": "event"
    },
    {
      "word": "vergesslich",
      "de": "Mein Opa wird im Alter etwas vergesslich.",
      "en": "forgetful"
    },
    {
      "word": "unvergesslich",
      "de": "Der Urlaub war einfach unvergesslich.",
      "en": "unforgettable"
    },
    {
      "word": "das Erlebnis",
      "de": "Die Reise war ein tolles Erlebnis.",
      "en": "experience"
    },
    {
      "word": "das Ergebnis",
      "de": "Das Ergebnis der Studie war überraschend.",
      "en": "result"
    },
    {
      "word": "ohne zu",
      "de": "Er verließ den Raum, ohne zu grüßen.",
      "en": "without ...-ing"
    },
    {
      "word": "ohne dass",
      "de": "Sie ging, ohne dass jemand es bemerkte.",
      "en": "without (someone/something) ...-ing"
    },
    {
      "word": "die Konkurrenz / der Wettbewerb",
      "de": "Die Konkurrenz schläft nicht. / Es gibt einen harten Wettbewerb um die Stelle.",
      "en": "competition"
    },
    {
      "word": "höchstwahrscheinlich",
      "de": "Sie wird höchstwahrscheinlich den Job bekommen.",
      "en": "most likely"
    },
    {
      "word": "ausfallen",
      "de": "Der Unterricht fällt heute aus. / Die Ernte ist gut ausgefallen.",
      "en": "to be cancelled / to turn out (a certain way)"
    },
    {
      "word": "ich bin davon überzeugt",
      "de": "Ich bin davon überzeugt, dass wir das schaffen.",
      "en": "I am convinced of that"
    },
    {
      "word": "unbewusst",
      "de": "Sie hat ihn unbewusst verletzt.",
      "en": "unconscious(ly), unintentional(ly)"
    },
    {
      "word": "Was ich sage, ist nicht das, was ich zeige",
      "de": "Was ich sage, ist nicht immer das, was ich zeige — die Körpersprache verrät mehr.",
      "en": "what I say is not what I show"
    },
    {
      "word": "das Verkehrsschild",
      "de": "An der Kreuzung steht ein neues Verkehrsschild.",
      "en": "traffic sign"
    },
    {
      "word": "geschehen",
      "de": "Der Unfall geschah vor den Augen vieler Zeugen.",
      "en": "to happen"
    },
    {
      "word": "möglicherweise",
      "de": "Möglicherweise kommt sie später dazu.",
      "en": "possibly"
    },
    {
      "word": "anerkennen",
      "de": "Der Chef erkannte ihre Leistung an.",
      "en": "to acknowledge, recognize"
    },
    {
      "word": "einen Vortrag halten",
      "de": "Sie hält morgen einen Vortrag über Klimawandel.",
      "en": "to give a talk/lecture"
    },
    {
      "word": "unterhaltsam",
      "de": "Der Film war sehr unterhaltsam.",
      "en": "entertaining"
    },
    {
      "word": "die Scham",
      "de": "Vor Scham wurde er ganz rot.",
      "en": "shame"
    },
    {
      "word": "es kommt darauf an",
      "de": "Gehen wir zu Fuß oder mit dem Auto? – Es kommt darauf an, wie das Wetter ist.",
      "en": "it depends"
    }
  ],
  "paragraphs": [
    {
      "text": "Maria kommt aus Spanien und ist vor drei Monaten beruflich nach Deutschland gezogen. Am ersten Tag findet sie die Wohnung nicht leicht: das Haus ist auf der linken Seite der Straße, aber sie geht zuerst auf der rechten Seite entlang. Endlich steht sie vor der Tür, und ihre neue Nachbarin öffnet mit einer herzlichen Begrüßung – sie umarmt Maria sofort und gibt ihr sogar einen Wangenkuss, bevor die beiden sich überhaupt die Hände schütteln. Diese Gastfreundschaft überrascht Maria total; in Spanien duzt man sich schnell, aber hier weiß sie nicht, ob sie die Nachbarin duzen oder siezen soll.",
      "glossary": [
        {
          "term": "beruflich",
          "en": "professional / work-related"
        },
        {
          "term": "auf der linken Seite",
          "en": "on the left side"
        },
        {
          "term": "auf der rechten Seite",
          "en": "on the right side"
        },
        {
          "term": "Begrüßung",
          "en": "greeting"
        },
        {
          "term": "umarmt",
          "en": "?"
        },
        {
          "term": "Wangenkuss",
          "en": "kiss on the cheek"
        },
        {
          "term": "Hände schütteln",
          "en": "to shake hands"
        },
        {
          "term": "Gastfreundschaft",
          "en": "hospitality"
        },
        {
          "term": "duzen",
          "en": "to address someone informally / use \"du\""
        },
        {
          "term": "siezen",
          "en": "to address someone formally / use \"Sie\""
        }
      ]
    },
    {
      "text": "In den ersten Wochen hat Maria oft Heimweh und denkt an ihre Familie. Trotzdem versucht sie, sich anzupassen und sich langsam einzugewöhnen. Es ist nicht einfach, aber schnell sind neue Freundschaften entstanden, und sie knüpft neue Kontakte in ihrem Sprachkurs. Nach einiger Zeit ist Deutschland für sie zu einer zweiten Heimat geworden – das Ankommen hat gedauert, aber jetzt fühlt sie sich wohl. Ein Freund erklärt ihr, wie man die Staatsangehörigkeit beantragt, was ihr das Leben sehr erleichtert.",
      "glossary": [
        {
          "term": "Heimweh",
          "en": "homesickness"
        },
        {
          "term": "anzupassen",
          "en": "to fit, suit"
        },
        {
          "term": "einzugewöhnen",
          "en": "?"
        },
        {
          "term": "entstanden",
          "en": "emerged / developed / arose"
        },
        {
          "term": "neue Kontakte",
          "en": "new contacts / connections"
        },
        {
          "term": "zweiten Heimat",
          "en": "?"
        },
        {
          "term": "Ankommen",
          "en": "arriving / settling in"
        },
        {
          "term": "Staatsangehörigkeit",
          "en": "nationality, citizenship"
        },
        {
          "term": "erleichtert",
          "en": "easy, light"
        }
      ]
    },
    {
      "text": "Manchmal macht sich Maria Sorgen, weil sie in den Nachrichten hört, dass die Regierung neue Gesetze plant und es einen großen Protest dagegen gibt. Sie hofft trotzdem auf Frieden und Verständnis zwischen den Gruppen, denn sie will nicht, dass eine Parallelgesellschaft entsteht, in der man unter sich bleibt und niemand miteinander spricht. Zum Glück liegt ihre Stadt nicht weit von der Grenze zu einem Nachbarland entfernt, wo die Menschen genauso offen und freundlich sind.",
      "glossary": [
        {
          "term": "Sorgen",
          "en": "to worry"
        },
        {
          "term": "Regierung",
          "en": "government"
        },
        {
          "term": "Protest",
          "en": "protest"
        },
        {
          "term": "Frieden",
          "en": "peace"
        },
        {
          "term": "Parallelgesellschaft",
          "en": "parallel society"
        },
        {
          "term": "man unter sich bleibt",
          "en": "?"
        },
        {
          "term": "Grenze",
          "en": "border, limit"
        }
      ]
    },
    {
      "text": "Bei der Arbeit lernt Maria ihre neue Kollegin kennen: Frau Berger, die Marketingleiterin der Firma. Frau Berger ist sehr geschickt in ihrem Job und dabei erstaunlich gründlich – nichts entgeht ihr. Am Anfang wirkt sie etwas zurückhaltender und sogar ein bisschen verschlossen, aber mit der Zeit merkt Maria, dass sie einfach nur bescheiden ist; ihre Bescheidenheit wirkt fast schüchtern. In der ersten Besprechung wird Maria den anderen Kollegen vorgestellt. Alle sind sehr nützlich für ihre Einarbeitung und haben viel Geduld mit ihr.",
      "glossary": [
        {
          "term": "Marketingleiterin",
          "en": "female marketing manager"
        },
        {
          "term": "geschickt",
          "en": "skilled / clever / sent"
        },
        {
          "term": "gründlich",
          "en": "thorough, careful"
        },
        {
          "term": "zurückhaltender",
          "en": "more reserved / more restrained"
        },
        {
          "term": "verschlossen",
          "en": "reserved, withdrawn, closed"
        },
        {
          "term": "Bescheidenheit",
          "en": "modesty, humility"
        },
        {
          "term": "Besprechung",
          "en": "meeting, discussion"
        },
        {
          "term": "vorgestellt",
          "en": "introduced / presented"
        },
        {
          "term": "nützlich",
          "en": "useful"
        },
        {
          "term": "Geduld",
          "en": "patience"
        }
      ]
    },
    {
      "text": "Ihre Aufgaben sind vielfältig: Sie muss Materialien bestellen, die dann von einem externen Dienst geliefert werden – manchmal kommt die Lieferung aber zu spät, weil der Fahrer sich verfährt. Weil Maria hochqualifiziert ist, denkt sie ab und zu daran, die Stelle zu wechseln, aber die Bedingungen in ihrem Vertrag sind fair, und außerdem gefällt ihr die Forschung, die die Firma betreibt. Sie kümmert sich auch um Formulare wie die Versicherung und, jedes Jahr im Frühling, um ihre Steuererklärung – das ist nicht ihre Lieblingsaufgabe, aber notwendig.",
      "glossary": [
        {
          "term": "bestellen",
          "en": "to order"
        },
        {
          "term": "geliefert",
          "en": "?"
        },
        {
          "term": "Lieferung",
          "en": "delivery"
        },
        {
          "term": "hochqualifiziert",
          "en": "highly qualified"
        },
        {
          "term": "wechseln",
          "en": "to change / switch"
        },
        {
          "term": "Bedingungen",
          "en": "conditions, terms"
        },
        {
          "term": "Forschung",
          "en": "research"
        },
        {
          "term": "Versicherung",
          "en": "insurance"
        },
        {
          "term": "Steuererklärung",
          "en": "tax return"
        }
      ]
    },
    {
      "text": "Eines Tages behauptet ein Kollege, ihr Chef täusche die Kunden, um mehr zu verkaufen. Ein anderer Kollege lacht und sagt, der Mann habe wohl nicht alle Tassen im Schrank oder einen Vogel, denn so etwas stimme einfach nicht. „Er spinnt total\", meint sie, „das ist doch eine verrückte Idee, so über den Chef zu urteilen, ohne Beweise zu haben!\" Trotzdem versucht Maria, sich anzustrengen, ruhig zu bleiben, und findet die ganze Situation eher blöd als ernst.",
      "glossary": [
        {
          "term": "täusche",
          "en": "to deceive, to be mistaken"
        },
        {
          "term": "nicht alle Tassen im Schrank",
          "en": "to be crazy, have a screw loose"
        },
        {
          "term": "einen Vogel",
          "en": "to be crazy, have a screw loose"
        },
        {
          "term": "Er spinnt",
          "en": "he is crazy / acting strangely"
        },
        {
          "term": "verrückte",
          "en": "crazy, mad"
        },
        {
          "term": "urteilen",
          "en": "to judge"
        },
        {
          "term": "anzustrengen",
          "en": "close / tight / narrow"
        },
        {
          "term": "blöd",
          "en": "stupid, silly, annoying"
        }
      ]
    },
    {
      "text": "Am Ende des Jahres darf die Firma stolz einen neuen Forschungsbericht veröffentlichen, an dem auch Maria mitgearbeitet hat. Sie ist stolz, denn ihr Weg von der Ankunft bis zu diesem Erfolg war eng mit harter Arbeit und Geduld verbunden, aber es hat sich gelohnt.",
      "glossary": [
        {
          "term": "veröffentlichen",
          "en": "to publish, release"
        },
        {
          "term": "eng",
          "en": "close / tight / narrow"
        }
      ]
    }
  ]
};
