import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, resolve, sep } from "node:path";

const distDir = resolve("dist");

function walk(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const htmlFiles = walk(distDir).filter((file) => file.endsWith(".html"));
const failures = [];
let headingCount = 0;

for (const file of htmlFiles) {
  const page = `/${relative(distDir, file).split(sep).join("/")}`;
  const html = readFileSync(file, "utf8")
    .replace(/<(script|style|svg)\b[^>]*>[\s\S]*?<\/\1>/gi, "");
  const headings = [...html.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi)].map((match) => ({
    level: Number(match[1]),
    text: match[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
  }));
  headingCount += headings.length;

  const h1s = headings.filter(({ level }) => level === 1);
  if (h1s.length !== 1) failures.push(`${page}: ${h1s.length} H1 statt genau einer`);

  for (let index = 1; index < headings.length; index += 1) {
    const previous = headings[index - 1];
    const current = headings[index];
    if (current.level > previous.level + 1) {
      failures.push(`${page}: Sprung H${previous.level} → H${current.level} vor „${current.text}“`);
    }
  }
}

if (failures.length) {
  console.error(`Fehler in der Überschriftenhierarchie: ${failures.length}`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Überschriftenhierarchie valide: ${headingCount} Überschriften in ${htmlFiles.length} HTML-Dateien, jeweils genau eine H1.`);
