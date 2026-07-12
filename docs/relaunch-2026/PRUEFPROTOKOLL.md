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

