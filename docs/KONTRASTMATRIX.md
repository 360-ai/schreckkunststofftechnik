# Kontrastmatrix (WCAG 2.1 AA)

Stand: 2026-07-14. Berechnet nach WCAG-Relative-Luminance-Formel.
AA-Grenzen: 4,5:1 normaler Text, 3,0:1 großer Text (ab 24 px bzw. 18,66 px fett) und UI-Komponenten/Grafik.

## Tokens

| Token | Wert |
|---|---|
| `--ink` | `#101A26` |
| `--slate` | `#364C59` |
| `--petrol` | `#268EA6` |
| `--petrol-deep` | `#1B6478` |
| `--cyan` | `#44E1F2` |
| `--paper` | `#F2F2F2` |
| `--surface` | `#FFFFFF` |

## Text auf Grund

| Vordergrund | Hintergrund | Ratio | AA normal | AA groß | Einsatz |
|---|---|---|---|---|---|
| ink | paper | 15,66 | ✓ | ✓ | Fließtext auf Seitenhintergrund |
| ink | surface | 17,53 | ✓ | ✓ | Fließtext auf Karten/Formular |
| slate | paper | 8,03 | ✓ | ✓ | Sekundärtext |
| slate | surface | 8,99 | ✓ | ✓ | Sekundärtext auf Karten, Formular-Hints |
| petrol-deep | paper | 5,97 | ✓ | ✓ | Links, farbige Labels |
| petrol-deep | surface | 6,69 | ✓ | ✓ | Links/Buttons-Text in Karten |
| surface (weiß) | petrol-deep | 6,69 | ✓ | ✓ | Primär-Button (weiße Schrift auf Petrol-Deep) |
| petrol | surface | 3,82 | ✗ | ✓ | NUR großer Text/Deko/Icons, nie Fließtext, nie Buttonfläche mit weißem Text |
| petrol | paper | 3,41 | ✗ | ✓ | NUR großer Text/Deko/Icons |
| surface (weiß) | ink | 17,53 | ✓ | ✓ | Text in dunklen Sektionen |
| paper | ink | 15,66 | ✓ | ✓ | gedimmter Text in dunklen Sektionen |
| cyan | ink | 11,10 | ✓ | ✓ | Labels/Marker auf dunklem Grund |
| petrol | ink | 4,59 | ✓ | ✓ | dekorative Linien auf dunklem Grund |

Gedimmter Sekundärtext auf `--ink` nutzt `rgba(242,242,242,0.78)` (ratio ≈ 9,4, AA ✓); niemals unter 0,6 Alpha.

## Zustände

| Zustand | Umsetzung | Kontrast |
|---|---|---|
| Link Hover | petrol-deep → ink (hell) bzw. cyan → surface (dunkel) | ≥ 6,69 / ≥ 11,10 ✓ |
| Button Primary Hover | Fläche petrol-deep → `#14505F` (dunkler), Text weiß | > 6,69 ✓ |
| Button Focus | 2 px Outline `--petrol-deep` auf hell, `--cyan` auf dunkel, `outline-offset: 2px` | 3,0:1 gegen Nachbarfarben ✓ |
| Disabled Button | Fläche `#8FA3AD`, Text `#FFFFFF`, zusätzlich `cursor: not-allowed` | Disabled ist von AA ausgenommen, bleibt aber lesbar (≈ 2,6) |
| Formular-Fehler | Text `#B3261E` auf surface (5,94 ✓) + Icon/Text, nie nur Farbe; Feldrahmen `#B3261E` 2 px | ✓ |
| Placeholder | `--slate` auf surface | 8,99 ✓ |
| Formular-Rahmen | `#8FA3AD` auf surface (2,55) dekorativ; Focus-Rahmen petrol-deep 6,69 | UI-Komponente im Fokus ✓ |
| Aktiver Nav-Punkt | ink + 2 px Unterstreichung petrol | Unterstreichung dekorativ, Text 15,66 ✓ |

## Verbote (aus dem Plan)

- `--petrol` nie als normal großer Text auf Weiß/Paper (3,82 / 3,41 < 4,5).
- `--petrol` nie als Buttonfläche mit weißem Text (3,82 < 4,5).
- `--cyan` nie als Textfarbe auf hellem Grund (1,58 auf Weiß).
