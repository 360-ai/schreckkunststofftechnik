// Erzeugt das OG-Image (1200x630) im Design-System. Schrift: Bahnschrift/Arial als
// Render-Ersatz fuer Oswald/Inter (sharp nutzt Systemfonts fuer SVG-Text).
import sharp from 'sharp';
import path from 'node:path';

const OUT = path.resolve(import.meta.dirname, '../public/images/og-schreck-fable.png');

const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#101A26"/>
  <rect x="0" y="0" width="1200" height="6" fill="#44E1F2"/>
  <rect x="80" y="150" width="56" height="4" fill="#44E1F2"/>
  <text x="80" y="128" font-family="Bahnschrift, Arial" font-size="30" letter-spacing="6" fill="#44E1F2">SCHRECK KUNSTSTOFFTECHNIK GMBH</text>
  <text x="76" y="262" font-family="Bahnschrift, Arial" font-weight="700" font-size="76" fill="#FFFFFF">Formen für</text>
  <text x="76" y="352" font-family="Bahnschrift, Arial" font-weight="700" font-size="76" fill="#FFFFFF">Micro-Kunststoffartikel</text>
  <text x="80" y="430" font-family="Arial" font-size="30" fill="#C9D2D8">Spritzgusswerkzeuge von der Konstruktion bis zur Serienreife</text>
  <g font-family="Arial" font-size="26" fill="#F2F2F2">
    <rect x="80" y="490" width="170" height="56" rx="28" fill="none" stroke="#44E1F2" stroke-opacity="0.55" stroke-width="2"/>
    <text x="118" y="526">Seit 1984</text>
    <rect x="270" y="490" width="230" height="56" rx="28" fill="none" stroke="#44E1F2" stroke-opacity="0.55" stroke-width="2"/>
    <text x="305" y="526">ISO 9001:2015</text>
    <rect x="520" y="490" width="300" height="56" rx="28" fill="none" stroke="#44E1F2" stroke-opacity="0.55" stroke-width="2"/>
    <text x="555" y="526">Burgwald-Bottendorf</text>
  </g>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(OUT);
console.log('OG-Image erzeugt:', OUT);
