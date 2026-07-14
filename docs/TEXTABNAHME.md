# Textabnahme (redaktionelle Prüfung mit Quellenabgleich)

Stand: 2026-07-14. Semantische Regeln aus Plan Abschnitt 4, die nicht automatisierbar sind. Die automatisierten Anti-Slop-Checks laufen in `npm test` gegen `dist/`.

## Änderungen an den Rechtstexten (AP8, zur Freigabe markiert)

Quelle: `Projekte/Website/src/pages/impressum.astro` und `datenschutz.astro` (rechtlich abgenommen 12.06.2026).

| Stelle | Änderung | Grund |
|---|---|---|
| DSE Ziffer 4 (NEU) | Abschnitt "Projektanfrage-Formular": Datenarten, Zweck, Rechtsgrundlage Art. 6 I b, für "Sonstiges" Art. 6 I f mit Interessenabwägung (docs/INTERESSENABWAEGUNG.md), Speicherkette Cloudflare / Resend (ca. 30 Tage, USA, SCC, Tracking aus) / Microsoft 365, Spam-Schutz-Hinweis | Plan Abschnitt 10, Punkte 1 + 2; das alte "Formular sendet nichts an unseren Server" trifft nicht mehr zu |
| DSE Ziffer 8 | Font-Abschnitt: von "systemeigene Schriften" auf "lokal gehostete Oswald und Inter" korrigiert | Plan Abschnitt 10 Punkt 4 (bekannter Fehler aus Projekt 1, tatsächlicher Zustand) |
| DSE Ziffer 5 | Alte Ziffer 4 "Kontaktaufnahme" übernommen, mailto-Formular-Satz entfernt (gibt es hier nicht) | tatsächlicher Zustand |
| DSE gesamt | Gedankenstriche durch Kommas/Doppelpunkte ersetzt, Nummerierung verschoben (neue Ziffer 4) | Anti-Slop-Regel 1, gilt auch für Rechtsseiten |
| DSE Schlusshinweis | Ergänzt: Ziffer 4 nach finaler Mail-Anbieter-Wahl bestätigen | AP-1 offen |
| Impressum | Unverändert übernommen (Daten identisch), Telefon/Mail als klickbare Links | nur Markup |

**Löschkonzept:** mit SKT abstimmen (wie lange bleiben Anfragen im M365-Postfach). Offen, siehe OFFENE-FRAGEN.md.

## Redaktionelle Stichprobe je Seite (Plan Abschnitt 14)

Prüfung: Claims belegt (Plan Abschnitt 2/8), Fachworttreue (Abmusterung, Innenanspritzung, balancierte Fließwege, Partikelfreiheit, Reinraumtauglichkeit, Metallumspritzung), Sie-zu-Wir-Verhältnis ca. 3:1.

| Seite | Claims gegen Quelle | Fachwörter | Sie/Wir | Ergebnis |
|---|---|---|---|---|
| / (Start) | 1984, ISO 9001:2015, 14 MA, 7 Branchen, 7 Leistungsschritte: alle aus Plan Abschnitt 2; H1 "Formen für Micro-Kunststoffartikel" = belegter Wortlaut | Abmusterung, balancierte Fließwege (Prozess) | Sie-dominant, "wir" nur in FinalCta/Formular | OK |
| /produkte/ | Alle Beispiele und Ansprüche 1:1 aus Plan Abschnitt 8; "Handy-Wipp-Trai" NICHT gerendert (KLÄREN); Lichtwellenleiter-Stecker als Erklärung belegt (engl. Flyer-Spalte) | Innenanspritzung, Partikelfreiheit, Metallumspritzung, Reinraumtauglich, balancierte Fließwege | Sie-dominant | OK |
| /ueber-uns/ | 1984, 14 MA, 7 Branchen, Zertifikatsdaten (SKZ-Cert, 000854.Q/24.R, 28.06.2024 bis 27.06.2027); Maschinenpark draft, nicht gerendert | Abmusterung | neutral/beschreibend | OK |
| /karriere/ | nur belegte Fakten (1984, 14 MA, Standort, Abmusterung auf eigenen Maschinen aus Maschinenpark-Quelle); keine "Familienunternehmen"-Zuschreibung | Abmusterung | Sie-dominant | OK |
| /downloads/ | Beschreibungen aus Flyer-Fakten | | neutral | OK |
| /kontakt/ | Adresse/Telefon aus Abschnitt 2; keine Erreichbarkeitszeiten (nicht belegt) | | Sie-dominant | OK |
| Rechtsseiten | siehe Änderungstabelle oben | | Wir-Form (rechtlich üblich, von Regel ausgenommen) | OK |
