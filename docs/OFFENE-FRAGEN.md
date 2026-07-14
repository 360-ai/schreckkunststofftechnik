# Offene Fragen an Denis / SKT

Stand: 2026-07-14. Alles hier gilt als `draft` und wird nicht öffentlich gerendert, bis es geklärt ist (Plan AP-1).

## Blockiert Arbeitspakete

1. **Mail-Anbieter (blockiert AP4-Livebetrieb).** Kandidat Resend: AVV/DPA abschließen, Standardvertragsklauseln + Transfer-Risikoabwägung dokumentieren, EU-Region festlegen, Subprozessoren-Liste ablegen, Open-/Click-Tracking deaktivieren, Absender-Domain verifizieren (Vorschlag `anfrage@schreck-kunststofftechnik.de`). Falls nicht sauber darstellbar: EU-Alternative wählen. Die Pages Function ist gebaut und läuft im Dry-Run-Modus (`MAIL_DRY_RUN=1`).
2. **Cloudflare-Tarif-Test (blockiert AP4-Abschluss).** Upload-Test mit 5 Dateien à 2 MB im Cloudflare-Preview im gebuchten Tarif (Workers Free: ca. 10 ms CPU). Scheitert er: Workers Paid (ca. 5 USD/Monat) buchen oder Limit senken. Geht erst nach Anlage des Pages-Projekts.

## Inhalte

3. **Stellenanzeige:** `Bilder/stellenanzeige.png` ist eine AVIF-Datei mit falscher Endung. Inhalt liefern oder Datei konvertieren. Bis dahin zeigt /karriere/ nur Intro + Initiativbewerbung (Platzhalter-Job steht mit `draft: true` in `site.ts`).
4. **AVB öffentlich?** PDF liegt bereit (`Dokumente/Allgemeine_Verkaufsbedingungen.pdf`). Eintrag in `site.ts` ist `draft: true`; bei "ja" PDF nach `public/downloads/allgemeine-verkaufsbedingungen.pdf` kopieren und Flag entfernen.
5. **"Handy-Wipp-Trai"** (2K-Flyer): Begriff mit SKT klären. Bis dahin NICHT gerendert; die 2K-Beispielliste zeigt nur Dreiwegehahn, Funkschlüssel, Air-Condition-Einstellrad.
6. **Maschinenpark auf /ueber-uns/?** Daten Stand 01/2024 aus Projekt 1 liegen in `site.ts` (`machinePark.draft = true`). SKT-Freigabe nötig.
7. **"Familienunternehmen"** oder ähnliche Zuschreibungen: nirgends verwendet, nur nach SKT-Freigabe ergänzen.
8. **Mitarbeiterzahl 14:** Zahl stammt aus Unterlagen von 2026. Vor Go-Live mit SKT bestätigen und Prüfdatum notieren.

## Technik / Deployment

9. **Host-Variante:** www oder ohne www? Arbeitsannahme im Code: `https://www.schreck-kunststofftechnik.de` (astro.config.mjs `site`). Bei anderer Entscheidung dort ändern; Canonicals und Sitemap folgen automatisch.
10. **GitHub-Repo + Cloudflare-Pages-Projekt** (`360-ai/schreck-fable` / `schreck-fable`) erst nach Freigabe durch Denis anlegen. Niemals ins bestehende Projekt `schreckkunststofftechnik` deployen.
11. **Wartung:** ISO-Zertifikat läuft am 27.06.2027 ab. Rechtzeitig Nachfolgezertifikat einpflegen (site.ts `certificate` + PDF).

## Gates aus dem Plan (durch Denis)

- **AP2a Wireframe-Freigabe:** Startseite 390 px / 1280 px. Umgesetzt als gebaute Seite; Screenshots liegen dem Abnahmepaket bei.
- **AP5 Screenshot-Designabnahme:** Kriterien: Hierarchie klar, ausreichend Weißraum, max. ein Akzent-Cluster pro Viewport-Höhe, Formular verständlich.
- **Bild `MS-Kunststoffbearbeitung-GmbH-99.jpg1_.jpg`:** wirkt wie Fremdmaterial, wird NICHT verwendet. Quelle klären oder löschen.
