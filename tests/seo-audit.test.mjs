import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = path.resolve(".");
const dist = path.join(root, "dist");
const publicDir = path.join(root, "public");

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });

const htmlFiles = () => walk(dist).filter((file) => file.endsWith(".html"));

const stripHtml = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const pagePath = (file) => {
  const rel = path.relative(dist, file).replace(/\\/g, "/");
  return rel === "index.html" ? "/" : `/${rel.replace(/index\.html$/, "")}`;
};

const fileForUrl = (href) => {
  let clean = href.split("#")[0].split("?")[0];
  if (!clean.startsWith("/")) return null;
  clean = decodeURIComponent(clean);
  let target = path.join(dist, clean.replace(/^\//, ""));
  if (clean.endsWith("/")) target = path.join(target, "index.html");
  if (!path.extname(target)) target = path.join(target, "index.html");
  return target;
};

test("generated pages do not contain broken internal links", () => {
  const broken = [];

  for (const file of htmlFiles()) {
    const html = fs.readFileSync(file, "utf8");
    const from = pagePath(file);
    for (const match of html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi)) {
      const href = match[1];
      if (/^(mailto:|tel:|https?:|#)/i.test(href)) continue;
      const target = fileForUrl(href);
      if (target && !fs.existsSync(target)) {
        broken.push(`${from} -> ${href}`);
      }
    }
  }

  assert.deepEqual(broken, []);
});

test("indexable generated pages avoid placeholders, meta refreshes, and visible SEO keyword stuffing", () => {
  const offenders = [];

  for (const file of htmlFiles()) {
    const html = fs.readFileSync(file, "utf8");
    const robots = html.match(/<meta\s+name=["']robots["']\s+content=["']([^"']*)["']/i)?.[1] ?? "";
    if (/noindex/i.test(robots)) continue;

    const text = stripHtml(html);
    if (/Platzhalter|Relevante Suchbegriffe|Diese Seite ist auf die Begriffe|http-equiv=["']refresh/i.test(html) || /Relevante Suchbegriffe/.test(text)) {
      offenders.push(pagePath(file));
    }
  }

  assert.deepEqual(offenders, []);
});

test("JobPosting schema lives on detail pages and includes Google required dates", () => {
  const listPage = fs.readFileSync(path.join(dist, "karriere", "index.html"), "utf8");
  assert.doesNotMatch(listPage, /"@type":"JobPosting"/);

  const jobPages = htmlFiles().filter((file) => pagePath(file).startsWith("/karriere/") && pagePath(file) !== "/karriere/");
  assert.ok(jobPages.length > 0, "expected at least one job detail page");

  for (const file of jobPages) {
    const html = fs.readFileSync(file, "utf8");
    if (!/"@type":"JobPosting"/.test(html)) continue;
    assert.match(html, /"datePosted":"\d{4}-\d{2}-\d{2}"/);
    assert.match(html, /"validThrough":"[^"]+"/);
  }
});

test("legacy WordPress query URLs are redirected before static assets are served", () => {
  const workerPath = path.join(publicDir, "_worker.js");
  assert.ok(fs.existsSync(workerPath), "expected Cloudflare Pages worker for query redirects");

  const worker = fs.readFileSync(workerPath, "utf8");
  const requiredRedirects = {
    "15": "/downloads/",
    "18": "/kontakt/",
    "20": "/impressum/",
    "80": "/ueber-uns/",
    "82": "/ueber-uns/#maschinen",
    "85": "/ueber-uns/#zertifikat",
    "97": "/produkte/#verpackung-kosmetik",
    "99": "/produkte/#innenanspritzung",
    "101": "/produkte/#labortechnik",
    "103": "/produkte/#medizintechnik",
    "105": "/produkte/#mehrkomponentenwerkzeuge",
    "107": "/produkte/#kleinstteile",
    "249": "/produkte/",
    "297": "/downloads/",
    "338": "/datenschutz/",
    "380": "/ueber-uns/#zertifikat",
    "489": "/karriere/"
  };

  for (const [pageId, target] of Object.entries(requiredRedirects)) {
    assert.match(worker, new RegExp(`["']${pageId}["']\\s*,\\s*["']${target.replace(/\//g, "\\/")}["']`));
  }
});

test("default page hero background is web-sized", () => {
  const heroPath = path.join(publicDir, "images", "hero2-optimized.jpg");
  assert.ok(fs.existsSync(heroPath), "expected optimized hero background image");
  assert.ok(fs.statSync(heroPath).size < 500 * 1024, "optimized hero background should stay below 500 KB");
});

test("LLM facts endpoint exposes the entity and canonical service pages", () => {
  const llmsPath = path.join(dist, "llms.txt");
  assert.ok(fs.existsSync(llmsPath), "expected llms.txt for generative search crawlers");

  const content = fs.readFileSync(llmsPath, "utf8");
  assert.match(content, /Schreck Kunststofftechnik GmbH/);
  assert.match(content, /Wolkersdorfer Straße 28/);
  assert.match(content, /https:\/\/www\.schreck-kunststofftechnik\.de\/produkte\/#medizintechnik/);
  assert.match(content, /Spritzgusswerkzeuge|Formenbau/);
});
