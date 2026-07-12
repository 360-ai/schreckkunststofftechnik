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

## AP6

- Nicht belegte Aussagen zu Luftfahrt, konkreter Werkstoffpalette, pauschalen Projektlaufzeiten, vollständiger Qualitätsdokumentation, internationaler Betreuung, vorbeugender Wartung sowie Ausbildungsvergütung, Zusatzleistungen und Übernahmechancen wurden entfernt.
- Produktseiten verwenden nur Anwendungen und Formanforderungen aus den in AP2 belegten Unternehmensseiten und Flyern. „Reinraumtauglich“ wird ausdrücklich als Formanforderung und nicht als eigene Reinraumproduktion erklärt.
- Reparatur und Schulung vor Ort bleiben sichtbar, weil beide Leistungen auf der alten Unternehmensseite belegt sind. Wartung wird nicht mehr als pauschaler aktueller Leistungsbestandteil behauptet.

## AP7

- Neben den geforderten Tokens GPTBot, ClaudeBot, Google-Extended und PerplexityBot werden OAI-SearchBot, Claude-SearchBot und Claude-User ausdrücklich erlaubt. Die offiziellen Anbieter trennen inzwischen Training, Suche und nutzerinitiierte Abrufe; die zusätzlichen Gruppen verbessern Auffindbarkeit, ohne die allgemeine Allow-Regel zu verändern.
- `directApply` im JobPosting wurde auf `false` gesetzt. Die Bewerbung erfolgt per E-Mail und ist kein vollständig integrierter Bewerbungsprozess auf der Website.
- BreadcrumbList wird für alle inneren Seiten erzeugt; Startseite und 404 erhalten bewusst keinen strukturierten Breadcrumb. Produkt- und Jobdetails behalten ihre explizite dreistufige Hierarchie.

## AP8

- Das Standard-OG-Bild ist ein eigenes lokales 1200-×-630-Motiv. Produktbilder werden weiterhin im sichtbaren Seitenhero verwendet, aber nicht als uneinheitliche Social-Share-Bilder mit falschem Seitenverhältnis.
- Oswald wird nicht von Google Fonts zur Laufzeit geladen. Die lateinische WOFF2-Datei wird lokal für die Gewichte 600 und 700 ausgeliefert; die Lizenzdatei liegt bei. Die inhaltliche Anpassung des Font-Abschnitts in der Datenschutzerklärung bleibt ausdrücklich dem Auftraggeber vorbehalten.
- Der Seitentitel-Suffix lautet kurz `| Schreck`. Der vollständige Firmenname bleibt in Startseite, Organisationsdaten, Impressum, sichtbaren Inhalten und Entitätsdaten unverändert; der kurze Suffix verhindert abgeschnittene Suchergebnis-Titel.
- Die fünf alten P0-Bilddateien wurden erst nach Umstellung und Nulltreffer-Prüfung entfernt. Die neuen WebP-Dateien reduzieren deren Gesamtgewicht um rund 95,5 %.
