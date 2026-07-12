# Prüfprotokoll Relaunch 2026

Stand: 12.07.2026

## AP0 – Sicherung und Baseline

### Sicherung der Rechts-Abnahme

Ausgeführte Befehle:

```text
git add src/layouts/BaseLayout.astro src/pages/datenschutz.astro src/pages/impressum.astro src/pages/sitemap.xml.ts src/pages/ueber-uns.astro
git diff --cached --check
git commit -m "AP0: Rechts-Abnahme 12.06. sichern (DSE, VSBG, Maps-Link, Sitemap-noindex)"
git push origin master
```

Ergebnis: Commit `88a93ca` mit fünf Dateien erstellt und erfolgreich nach `origin/master` gepusht. `git diff --cached --check` meldete keine Fehler.

### Abhängigkeiten

Ausgeführter Befehl:

```text
npm install
```

Ergebnis: Abhängigkeiten waren aktuell. npm meldete 14 bekannte Schwachstellen (1 niedrig, 5 mittel, 8 hoch). Es wurde bewusst kein automatisches `npm audit fix` ausgeführt, da dies nicht Teil von AP0 ist und Abhängigkeitsänderungen separat bewertet werden müssen.

### Baseline-Build

Ausgeführter Befehl:

```text
npm run build
```

Ergebnis (gekürzt):

```text
Result (28 files):
- 0 errors
- 0 warnings
- 0 hints

[build] 17 page(s) built
[build] Complete!
```

Erzeugte Seiten und Endpunkte:

```text
/index.html
/404.html
/datenschutz/index.html
/downloads/index.html
/impressum/index.html
/karriere/index.html
/karriere/ausbildung-werkzeugmechaniker-2027/index.html
/kompetenzen/index.html
/kontakt/index.html
/produkte/index.html
/produkte/innenanspritzung/index.html
/produkte/kleinstteile/index.html
/produkte/labortechnik/index.html
/produkte/medizintechnik/index.html
/produkte/mehrkomponentenwerkzeuge/index.html
/produkte/verpackung-kosmetik/index.html
/ueber-uns/index.html
/llms.txt
/robots.txt
/sitemap.xml
```

## AP1 – Bestandsaufnahme

### Crawl und Quellenprüfung

Ausgeführt wurden Webabrufe der alten WordPress-Seiten, ihrer öffentlichen REST-Ausgaben sowie der verlinkten PDFs. Besonders geprüft wurden:

```text
https://www.schreck-kunststofftechnik.de/
https://www.schreck-kunststofftechnik.de/?page_id=80
https://www.schreck-kunststofftechnik.de/?page_id=82
https://www.schreck-kunststofftechnik.de/?page_id=85
https://www.schreck-kunststofftechnik.de/?page_id=249
https://www.schreck-kunststofftechnik.de/?page_id=97
https://www.schreck-kunststofftechnik.de/?page_id=99
https://www.schreck-kunststofftechnik.de/?page_id=101
https://www.schreck-kunststofftechnik.de/?page_id=103
https://www.schreck-kunststofftechnik.de/?page_id=105
https://www.schreck-kunststofftechnik.de/?page_id=107
https://www.schreck-kunststofftechnik.de/?page_id=489
https://www.schreck-kunststofftechnik.de/wp-content/uploads/2025/03/Maschinenpark.pdf
https://www.schreck-kunststofftechnik.de/wp-content/uploads/2024/07/2024-ISO-Zertifikat-deutsch.pdf
```

Ergebnis: Maschinenpark mit Stand 01/2024 extrahiert. Das ISO-Zertifikat wurde heruntergeladen, textuell extrahiert und visuell als gerenderte Seite geprüft. Bestätigt wurden DIN EN ISO 9001:2015, Geltungsbereich „Formenbau von der Konstruktion bis zur Serienreife“ und Gültigkeit 28.06.2024–27.06.2027.

### Build-Audit und Altfehler

Ausgeführte Befehle:

```text
npm run build
rg -n --fixed-strings --glob '*.html' --glob '*.txt' --glob '*.xml' -- ' TMG' dist
rg -n --fixed-strings --glob '*.html' --glob '*.txt' --glob '*.xml' -- 'TTDSG' dist
rg -n --fixed-strings --glob '*.html' --glob '*.txt' --glob '*.xml' -- 'fonts.googleapis' dist
rg -n --fixed-strings --glob '*.html' --glob '*.txt' --glob '*.xml' -- 'ec.europa.eu/consumers/odr' dist
rg -n --fixed-strings --glob '*.html' --glob '*.txt' --glob '*.xml' -- 'AggregateRating' dist
```

Ergebnis: Build grün mit 0 Fehlern, 0 Warnungen und 0 Hinweisen; alle fünf Altfehler-Prüfungen ergaben 0 Treffer.

Zusätzliche statische Auswertung des Build-HTMLs:

```text
16 HTML-Dateien
je Datei genau 1 H1
53 Bildvorkommen
0 Bilder ohne alt
53 Bilder ohne width
53 Bilder ohne height
35 Bilder ohne loading
```

Die vollständige Seitentabelle, Faktenquellen, Bildgrößen und Redirect-Map stehen in `01-bestandsaufnahme.md`.

## AP2 – Faktenbasis und Positionierung

Prüfschritte:

```text
Abgleich aller Aussagen mit den bestätigten Fakten des Arbeitsauftrags
Abgleich mit den in AP1 dokumentierten WordPress-Seiten und Original-PDFs
Trennung in bestätigte Fakten, zulässige Ableitungen und offene Fragen
```

Ergebnis:

- 62 bestätigte Fakten bzw. klar abgegrenzte Faktenblöcke dokumentiert,
- 12 zulässige Ableitungen mit Herleitung dokumentiert,
- offene Aussagen nach Priorität A–C getrennt,
- Positionierung, Projekteignung, Kundenprobleme, Kontaktzeitpunkt sowie Informationsbedarf von Einkauf und Konstruktion festgelegt,
- Sprachregeln gegen unbelegte Garantien und KI-Marketing-Sprache definiert.

Die verbindliche Quelle für die Textumsetzung ist `02-faktenbasis-positionierung.md`.

## AP3 – Wettbewerbsanalyse

Ausgeführte Recherche:

```text
Web-Suche mit vier Suchmustern zu Formenbau Medizintechnik,
Spritzgusswerkzeugen in Hessen, Mehrkomponenten-Werkzeugbau
und Werkzeugbau für Laboranwendungen

Abruf und Auswertung der Primär-Websites von:
wisa-formenbau.de
fenkl-formenbau.de
midena.de
precupa.de
rmf-formenbau.de
hwf-werkzeugbau.de
```

Zusätzliche Browserprüfung bei 1280 × 720 Pixeln:

```text
Startseiten auf H1-Struktur, Typografie, Farbsystem, Navigation,
sichtbare CTAs, Bildmenge und technische Erreichbarkeit geprüft
```

Ergebnis:

- sechs Anbieter mit Positionierung, Struktur, Zielgruppen, Vertrauenssignalen, Branchen, SEO/GEO, CTAs und Design bewertet,
- Vergleichsmatrix erstellt,
- WISA als größennahe Referenz und HWF als größerer Regionalbenchmark gekennzeichnet,
- sieben Konsequenzen für Informationsarchitektur und Umsetzung abgeleitet,
- keine Texte oder Designs übernommen.

## AP4 – Keyword- und Suchintentionsstrategie

Ausgeführte Prüfungen:

```text
Abgleich der Cluster mit der Faktenbasis aus AP2
Abgleich der Suchergebnis-Typen für Formenbau Hessen,
Formenbau Medizintechnik, 2K/Mehrkomponentenwerkzeuge und Labortechnik
Zuordnung jedes Clusters zu genau einer Zielseite
Prüfung auf fachlich nicht belegte Suchbegriffe
```

Ergebnis:

- 18 Suchcluster nach Anbieter-, Informations-, Vergleichs-, regionaler, Branchen-, Karriere- und Projektintention geordnet,
- jeder Cluster genau einer Zielseite zugeordnet,
- Seitenrollen zur Vermeidung von Kannibalisierung dokumentiert,
- natürliche KI-Fragen für Start-, Kompetenz-, Qualitäts- und Produktseiten formuliert,
- nicht belegte Themen wie ISO 13485, Reinraumproduktion, Lohnspritzguss, Luftfahrt und garantierte Leistungswerte ausgeschlossen,
- Messkonzept für die Zeit nach der Domain-Aufschaltung festgelegt.

## AP5 – Informationsarchitektur

Umgesetzte Strukturänderungen:

```text
src/pages/qualitaet-zertifizierung.astro
src/pages/maschinen-ausstattung.astro
public/downloads/iso-9001-zertifikat-2024-2027.pdf
sichtbare Breadcrumbs über src/components/PageHero.astro
Navigation/Footer ergänzt
Sitemap und Legacy-Worker angepasst
```

Entscheidungsergebnis:

- zwei neue indexierbare Seiten mit eigener Suchintention und belegbaren Inhalten,
- keine duplizierenden Branchen-, FAQ-, Blog-, Referenz-, Material- oder Service-Seiten,
- `downloads/` als Noindex-Seite aus der XML-Sitemap entfernt,
- alte WordPress-IDs 82, 85, 89 und 380 auf passende finale Ziele gelegt.

Verifikation:

```text
npm run build
Result (30 files): 0 errors, 0 warnings, 0 hints
19 page(s) built

rg -n "qualitaet-zertifizierung|maschinen-ausstattung|downloads" dist/sitemap.xml
Ergebnis: neue Seiten enthalten; downloads nicht enthalten

rg -n '"(82|85|89|380)"' dist/_worker.js
Ergebnis: alle vier Legacy-IDs mit finalem Ziel enthalten
```

Zusatzbefund: `git check-ignore -v public/_worker.js` zeigte den Worker als ignoriert. Der Eintrag wurde aus `.gitignore` entfernt und der Worker ab AP5 in die Versionsverwaltung aufgenommen.

## AP6 – Website-Texte

Umgesetzte Dateien:

```text
src/data/site.ts
src/pages/index.astro
src/pages/produkte/index.astro
src/pages/produkte/[slug].astro
src/pages/kompetenzen.astro
src/pages/qualitaet-zertifizierung.astro
src/pages/maschinen-ausstattung.astro
src/pages/ueber-uns.astro
src/pages/karriere.astro
src/pages/karriere/[slug].astro (Daten aus Content)
src/content/jobs/ausbildung-werkzeugmechaniker-2027.md
src/pages/kontakt.astro
src/pages/downloads.astro
```

Inhaltliche Prüfung:

```text
rg -n "Luftfahrt|vorbeugende Wartung|vollständige Qualitätsdokumentation|
wenigen Wochen|mehrere Monate|Standard-Thermoplast|PP, PE|ABS|
Übernahmechancen|Ausbildungsvergütung|Zusatzleistungen|international betreut|
deutschlandweit|Nadelverschlusstechnik|Umspritzungsformen|Schraubformen" src
```

Ergebnis: 0 Treffer in den redaktionellen Website-Texten. Der getrennt geprüfte Begriff Web3Forms steht ausschließlich im inhaltlich gesperrten Datenschutzhinweis.

Build-Auswertung nach der Textüberarbeitung:

```text
alle 19 erzeugten HTML-Seiten mit genau einem H1
Produktdetailseiten: 356–375 Wörter statt zuvor 183–193
Startseite: 744 Wörter und 6 sichtbare FAQ
Kompetenzen: 497 Wörter und 5 sichtbare FAQ
Kontakt: 425 Wörter und 4 sichtbare FAQ
Qualität: 386 Wörter und 4 sichtbare FAQ
Maschinen: 411 Wörter und 4 sichtbare FAQ
Über uns: 441 Wörter und 4 sichtbare FAQ
Karriere: 384 Wörter und 4 sichtbare FAQ
```

Ausgeführter Build:

```text
npm run build
Result (30 files): 0 errors, 0 warnings, 0 hints
19 page(s) built
```

## AP7 – GEO und strukturierte Daten

### Bot-Namen aus offiziellen Quellen

Geprüfte Primärquellen:

```text
OpenAI: https://help.openai.com/en/articles/12627856-publishers-and-developers-faq
Anthropic: https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
Google: https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers
Perplexity: https://docs.perplexity.ai/docs/resources/perplexity-crawlers
```

Bestätigte und erlaubte Tokens:

```text
GPTBot
OAI-SearchBot
ClaudeBot
Claude-SearchBot
Claude-User
Google-Extended
PerplexityBot
```

### Build und JSON-LD-Validierung

Ausgeführte Befehle:

```text
npm run build
npm run check:jsonld
```

Ergebnis:

```text
Result (31 files): 0 errors, 0 warnings, 0 hints
19 page(s) built

JSON-LD valide: 95 Blöcke in 19 HTML-Dateien
BreadcrumbList: 17
FAQPage: 14
JobPosting: 1
LocalBusiness: 19
Organization: 19
Service: 6
WebPage: 19
WebSite: 19
Firmenentität in JSON-LD, Impressum und llms.txt konsistent.
```

Das Skript `scripts/validate-jsonld.mjs` extrahiert alle JSON-LD-Blöcke aus `dist/`, parst sie und prüft typabhängige Pflichtfelder. Zusätzlich vergleicht es Name, Anschrift, Telefon und E-Mail zwischen Organization/LocalBusiness, Impressum und `llms.txt`.

### Weitere Änderungen

- `knowsAbout` wird aus der final belegten Leistungs-, Branchen- und Produktliste erzeugt.
- Organization/LocalBusiness enthält Gründungsdatum, 14 Mitarbeiter, Logo, Adresse und Kontaktdaten.
- `llms.txt` enthält finale Seitenstruktur, Zertifikat, belegte Kerndaten und Projektanfrage-Hinweise.
- JobPosting bleibt mit sichtbarer Stellenanzeige synchron; `directApply` ist wegen der E-Mail-Bewerbung `false`.

## AP8 – Performance und technisches SEO

### Bilder und Layout-Stabilität

Die fünf P0-Bilder wurden in sinnvoller Zielauflösung als WebP neu ausgegeben und die alten Dateien nach Referenzprüfung entfernt:

| Datei | vorher | nachher |
|---|---:|---:|
| Hero | 7.174.773 Byte | `hero2.webp`: 128.582 Byte |
| Einweisung | 7.180.166 Byte | `einweisung.webp`: 127.060 Byte |
| Luftbild | 3.087.336 Byte | `luftbild_skt.webp`: 332.068 Byte |
| Eingang | 3.099.913 Byte | `skt_eingang.webp`: 326.786 Byte |
| Reparatur | 2.107.303 Byte | `reparatur.webp`: 93.684 Byte |

Gesamt: 22.649.491 Byte auf 1.008.180 Byte, rund 95,5 % weniger. Das neue Social-Share-Bild `og-schreck.jpg` ist 1200 × 630 Pixel groß und 115.566 Byte schwer. Alle ausgelieferten `<img>`-Elemente besitzen `alt`, `width` und `height`; Bilder unterhalb des sichtbaren Einstiegs werden verzögert geladen.

### Lokale Schrift und Metadaten

- Oswald 600/700 liegt als lokale WOFF2-Datei unter `public/fonts/`; `font-display: swap`, Preload und die SIL Open Font License sind enthalten.
- Keine Runtime-Verbindung zu `fonts.googleapis.com` oder `fonts.gstatic.com`.
- Standard-OG-Bild ist das lokale 1200-×-630-Motiv mit Breiten-/Höhenmetadaten.
- `hreflang="de-DE"` und `hreflang="x-default"` sind gesetzt.
- Seitentitel wurden auf einen kurzen Markensuffix umgestellt; die längsten finalen Titel liegen bei 60 Zeichen, ausgenommen wird bei der technischen Auswertung nur dann, wenn HTML-Entities als mehrere Quellzeichen gezählt werden.
- Jede HTML-Seite besitzt genau einen Canonical-Link.

### Prüfungen

```text
npm run build
Result (31 files): 0 errors, 0 warnings, 0 hints
19 page(s) built

npm run check:jsonld
JSON-LD valide: 95 Blöcke in 19 HTML-Dateien

Bilddateien in dist/images > 500.000 Byte: 0
alte P0-Bildreferenzen in dist: 0
fonts.googleapis / fonts.gstatic.com in dist: 0
img ohne alt: 0
img ohne width: 0
Canonical-Anzahl ungleich 1: 0
```
