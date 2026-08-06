// Konvertiert die Platzhalter-Bilder aus ../Bilder nach public/images (WebP, kebab-case).
// Bildtausch später = Quelldatei ersetzen und Skript erneut laufen lassen.
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const SRC = path.resolve(import.meta.dirname, '../../Bilder');
const OUT = path.resolve(import.meta.dirname, '../public/images');

// [Quelldatei, Zielname, maxBreite, Qualität, cropRechtsAnteil]
// cropRechtsAnteil: Anteil der Bildbreite, der rechts abgeschnitten wird
// (Hero: Heitec-Schild am rechten Bildrand darf nicht sichtbar sein)
const JOBS = [
  ['hero2.jpg', 'hero-werkzeug.webp', 1920, 60, 0.18],
  ['hero2.jpg', 'hero-werkzeug-mobil.webp', 828, 52, 0.18],
  ['logoschreck.png', 'logo-schreck.png', 560, null],
  ['Luftbild SKT.png', 'luftbild-skt.webp', 1600, 78],
  ['Luftbild SKT.png', 'luftbild-skt-klein.webp', 800, 74],
  ['SKT Eingang.png', 'skt-eingang.webp', 1200, 78],
  ['team.jpg', 'team.webp', 1200, 78],
  ['Karriere_Werkstatt.png', 'karriere.webp', 1200, 76],
  ['Karriere_CAD.png', 'karriere-buero-cad.webp', 1200, 76],
  ['Schulung.png', 'einweisung-ki.webp', 1200, 76],
  ['Wartung.png', 'reparatur-ki.webp', 1200, 76],
  ['hero1.jpg', 'gebaeude-luftaufnahme.webp', 1600, 74],
  ['grafik_2k_3.png', 'produkt-2k-1.webp', 900, 80],
  ['grafik_2k_5.png', 'produkt-2k-2.webp', 900, 80],
  ['grafik_2k_7.png', 'produkt-2k-3.webp', 900, 80],
  ['grafik_innen_1.png', 'produkt-innenanspritzung-1.webp', 900, 80],
  ['grafik_innen_4.png', 'produkt-innenanspritzung-2.webp', 900, 80],
  ['grafik_innen_5.png', 'produkt-innenanspritzung-3.webp', 900, 80],
  ['grafik_innen_6.png', 'produkt-innenanspritzung-4.webp', 900, 80],
  ['grafik_innen1_6.png', 'produkt-innenanspritzung-5.webp', 900, 80],
  ['grafik_labor_3.png', 'produkt-labor-1.webp', 900, 80],
  ['grafik_medizin_2.png', 'produkt-medizin-1.webp', 900, 80],
  ['grafik_medizin_4.png', 'produkt-medizin-2.webp', 900, 80],
  ['grafik_medizin_6.png', 'produkt-medizin-3.webp', 900, 80],
  ['grafik_medizin1_4.png', 'produkt-medizin-4.webp', 900, 80],
  ['grafik_kleinstteile_1.png', 'produkt-miniaturteile-1.webp', 900, 80],
  ['grafik_kleinstteile_2.png', 'produkt-miniaturteile-2.webp', 900, 80],
  ['grafik_verpackung_4.png', 'produkt-verpackung-1.webp', 900, 80],
];

await mkdir(OUT, { recursive: true });

for (const [src, out, width, quality, cropRight] of JOBS) {
  let img = sharp(path.join(SRC, src)).rotate();
  if (cropRight) {
    const meta = await img.metadata();
    img = img.extract({ left: 0, top: 0, width: Math.round(meta.width * (1 - cropRight)), height: meta.height });
  }
  img = img.resize({ width, withoutEnlargement: true });
  if (out.endsWith('.webp')) img.webp({ quality });
  else img.png({ compressionLevel: 9 });
  const info = await img.toFile(path.join(OUT, out));
  console.log(`${out}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
}
