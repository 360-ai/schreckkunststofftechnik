import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, relative, resolve, sep } from "node:path";

const distDir = resolve("dist");

function walk(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

function pageUrl(file) {
  const path = relative(distDir, file).split(sep).join("/");
  if (path === "index.html") return "/";
  if (path.endsWith("/index.html")) return `/${path.slice(0, -10)}`;
  return `/${path}`;
}

function targetCandidates(pathname) {
  const decoded = decodeURIComponent(pathname).replace(/^\/+/, "");
  if (!decoded) return [join(distDir, "index.html")];
  if (pathname.endsWith("/")) return [join(distDir, decoded, "index.html")];
  if (extname(decoded)) return [join(distDir, decoded)];
  return [join(distDir, decoded), join(distDir, decoded, "index.html"), join(distDir, `${decoded}.html`)];
}

const htmlFiles = walk(distDir).filter((file) => file.endsWith(".html"));
const failures = [];
let internalLinks = 0;
let fragmentLinks = 0;

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const sourceUrl = new URL(pageUrl(file), "https://site.invalid");

  for (const match of html.matchAll(/\bhref\s*=\s*["']([^"']*)["']/gi)) {
    const href = match[1].trim();
    if (!href || /^(?:mailto:|tel:|javascript:|data:)/i.test(href)) continue;

    let targetUrl;
    try {
      targetUrl = new URL(href, sourceUrl);
    } catch {
      failures.push(`${pageUrl(file)} -> ungültige URL: ${href}`);
      continue;
    }

    if (targetUrl.origin !== sourceUrl.origin) continue;
    internalLinks += 1;
    const candidates = targetCandidates(targetUrl.pathname);
    const targetFile = candidates.find(existsSync);

    if (!targetFile) {
      failures.push(`${pageUrl(file)} -> ${href}`);
      continue;
    }

    if (targetUrl.hash && targetFile.endsWith(".html")) {
      fragmentLinks += 1;
      const id = decodeURIComponent(targetUrl.hash.slice(1));
      const targetHtml = readFileSync(targetFile, "utf8");
      const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      if (!new RegExp(`\\b(?:id|name)=["']${escaped}["']`, "i").test(targetHtml)) {
        failures.push(`${pageUrl(file)} -> fehlendes Fragment ${href}`);
      }
    }
  }
}

if (failures.length) {
  console.error(`Interne Linkfehler: ${failures.length}`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Interne Links valide: ${internalLinks} Verweise in ${htmlFiles.length} HTML-Dateien (${fragmentLinks} Fragmentverweise).`);
