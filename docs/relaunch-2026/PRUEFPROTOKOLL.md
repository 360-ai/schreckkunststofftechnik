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
