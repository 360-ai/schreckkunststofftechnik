# Stellenanzeigen pflegen

Die Stellenanzeigen liegen als Markdown-Dateien in:

```txt
src/content/jobs/
```

## Neue Stelle anlegen

1. Bestehende Datei kopieren, zum Beispiel:

```txt
src/content/jobs/ausbildung-werkzeugmechaniker-2027.md
```

2. Datei sinnvoll umbenennen, zum Beispiel:

```txt
src/content/jobs/cnc-fachkraft.md
```

3. Den Kopf der Datei anpassen:

```yaml
---
title: "CNC-Fachkraft (m/w/d)"
location: "35099 Burgwald-Bottendorf"
start: "ab sofort"
type: "Vollzeit"
active: true
order: 2
applyEmail: "info@schreck-kunststofftechnik.com"
---
```

4. Darunter den Stelleninhalt in normalem Markdown schreiben.

## Stelle deaktivieren

Eine Stelle bleibt im System, wird aber nicht angezeigt, wenn `active` auf `false` steht:

```yaml
active: false
```

## Keine Stelle aktiv

Wenn keine aktive Stelle vorhanden ist, zeigt die Karriere-Seite automatisch einen Hinweis auf Initiativbewerbungen.

## Nach Änderungen prüfen

```bash
npm run build
```

Der Build muss ohne Fehler durchlaufen.
