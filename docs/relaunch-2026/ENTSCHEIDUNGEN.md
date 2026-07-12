# Entscheidungslog Relaunch 2026

Stand: 12.07.2026

## AP0

- Das unversionierte Arbeitsauftrags-Dokument im Projektstamm wurde nicht in den Rechts-Abnahme-Commit aufgenommen. Der vorgegebene Commit sollte ausschließlich die fünf bereits vorhandenen, rechtlich geprüften Änderungen sichern.
- Die von `npm install` gemeldeten Schwachstellen wurden nicht automatisch behoben. Ein erzwungenes Upgrade könnte Breaking Changes auslösen und wird erst nach Prüfung der konkreten Abhängigkeiten entschieden.

## AP3

- Sechs statt nur fünf Anbieter wurden analysiert. WISA ist mit 25 Personen der am klarsten größennahe Vergleich; HWF wurde trotz 68 Personen als regionaler hessischer Digitalbenchmark aufgenommen. Die übrigen Anbieter wurden nach funktionaler Vergleichbarkeit ausgewählt, weil öffentlich keine belastbare Mitarbeiterzahl ermittelt wurde.
- Konzerne und reine Kunststoffverarbeiter ohne eigenständigen Werkzeugbau-Fokus wurden ausgeschlossen. Die Analyse soll realistische mittelständische Website-Muster zeigen.

## AP5

- `/qualitaet-zertifizierung/` wurde angelegt, weil ISO-Norm, Geltungsbereich, Zertifikatsnummer, Gültigkeit und Messmittel durch Originalquellen belegt sind und Einkauf eine eigene Nachweisintention hat.
- `/maschinen-ausstattung/` wurde angelegt, weil die veröffentlichte Maschinenliste eine eigenständige technische Anbieterprüfung ermöglicht. Der Stand 01/2024 wird auf der Seite transparent genannt; projektbezogene Verfügbarkeit wird nicht garantiert.
- Keine zusätzlichen Branchen-, FAQ-, Blog-, Referenz-, Material- oder Service-Seiten. Entweder bedienen vorhandene Seiten die Suchintention bereits oder es fehlen bestätigte Inhalte.
- Maschinen & Ausstattung wurde nicht als zusätzlicher Desktop-Hauptpunkt aufgenommen. Die Seite ist über Qualität, Kompetenzen, Footer und Mobile Navigation erreichbar, damit die Hauptnavigation kompakt bleibt.
- `public/_worker.js` wird ab AP5 versioniert. Die Datei war zuvor durch `.gitignore` ausgeschlossen und wäre damit nach einem frischen Checkout nicht reproduzierbar gewesen; sie ist für die WordPress-Query-String-Redirects erforderlich.
