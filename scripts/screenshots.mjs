// Abnahme-Screenshots (Gates AP2a/AP5): Startseite und Produkte bei 1280 und 390 px.
// Voraussetzung: `npm run build` und `npm run preview` (Port 4321) laufen.
import puppeteer from 'puppeteer-core';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const OUT = path.resolve(import.meta.dirname, '../docs/screenshots');
await mkdir(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: true,
});

const SHOTS = [
  { url: '/', width: 1280, height: 900, name: 'start-1280', full: true },
  { url: '/', width: 390, height: 844, name: 'start-390', full: true },
  { url: '/produkte/', width: 1280, height: 900, name: 'produkte-1280', full: true },
  { url: '/produkte/', width: 390, height: 844, name: 'produkte-390', full: true },
  { url: '/ueber-uns/', width: 1280, height: 900, name: 'ueber-uns-1280', full: true },
  { url: '/kontakt/', width: 390, height: 844, name: 'kontakt-390', full: true },
];

const page = await browser.newPage();
// reduced motion, damit Reveal-Elemente im Full-Page-Screenshot sichtbar sind
await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);

for (const shot of SHOTS) {
  await page.setViewport({ width: shot.width, height: shot.height });
  await page.goto(`http://localhost:4321${shot.url}`, { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: path.join(OUT, `${shot.name}.png`), fullPage: shot.full });
  console.log(`${shot.name}.png`);
}

await browser.close();
