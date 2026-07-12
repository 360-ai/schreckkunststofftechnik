import { readFile, readdir } from "node:fs/promises";
import { join, relative } from "node:path";

const root = new URL("../dist/", import.meta.url);
const expected = {
  name: "Schreck Kunststofftechnik GmbH",
  street: "Wolkersdorfer Straße 28",
  postalCity: "35099 Burgwald-Bottendorf",
  phone: "+49 6451 5000-0",
  email: "info@schreck-kunststofftechnik.com"
};

const fail = (message) => { throw new Error(message); };
const requireFields = (object, fields, context) => {
  for (const field of fields) {
    if (object?.[field] === undefined || object?.[field] === null || object?.[field] === "") {
      fail(`${context}: Pflichtfeld ${field} fehlt`);
    }
  }
};

const walk = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else if (entry.name.endsWith(".html")) files.push(path);
  }
  return files;
};

const distPath = root.pathname.startsWith("/") && /^[A-Za-z]:/.test(root.pathname.slice(1))
  ? decodeURIComponent(root.pathname.slice(1))
  : decodeURIComponent(root.pathname);
const htmlFiles = await walk(distPath);
const typeCounts = new Map();
let schemaCount = 0;

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const page = relative(distPath, file).replaceAll("\\", "/");
  const blocks = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  if (blocks.length === 0) fail(`${page}: kein JSON-LD gefunden`);

  for (const [, raw] of blocks) {
    let schema;
    try { schema = JSON.parse(raw); }
    catch (error) { fail(`${page}: ungültiges JSON-LD (${error.message})`); }
    schemaCount += 1;

    const types = Array.isArray(schema["@type"]) ? schema["@type"] : [schema["@type"]];
    for (const type of types.filter(Boolean)) typeCounts.set(type, (typeCounts.get(type) ?? 0) + 1);

    if (types.includes("Organization") || types.includes("LocalBusiness")) {
      requireFields(schema, ["@id", "name", "legalName", "url", "email", "telephone", "foundingDate", "address", "numberOfEmployees", "knowsAbout"], `${page} Organization`);
      if (schema.name !== expected.name || schema.telephone !== expected.phone || schema.email !== expected.email) fail(`${page}: Firmenentität ist inkonsistent`);
      if (schema.address.streetAddress !== expected.street || schema.address.postalCode !== "35099" || schema.address.addressLocality !== "Burgwald-Bottendorf") fail(`${page}: Anschrift im Organization-Schema ist inkonsistent`);
    }
    if (types.includes("WebSite")) requireFields(schema, ["@id", "url", "name", "inLanguage", "publisher"], `${page} WebSite`);
    if (types.includes("WebPage")) requireFields(schema, ["@id", "url", "name", "description", "inLanguage", "isPartOf", "about"], `${page} WebPage`);
    if (types.includes("BreadcrumbList")) {
      requireFields(schema, ["itemListElement"], `${page} BreadcrumbList`);
      if (!Array.isArray(schema.itemListElement) || schema.itemListElement.length < 2) fail(`${page}: BreadcrumbList ist zu kurz`);
      schema.itemListElement.forEach((item, index) => requireFields(item, ["position", "name", "item"], `${page} Breadcrumb ${index + 1}`));
    }
    if (types.includes("Service")) requireFields(schema, ["@id", "name", "provider", "serviceType", "description", "audience", "termsOfService"], `${page} Service`);
    if (types.includes("FAQPage")) {
      requireFields(schema, ["mainEntity"], `${page} FAQPage`);
      if (!Array.isArray(schema.mainEntity) || schema.mainEntity.length === 0) fail(`${page}: FAQPage ist leer`);
      schema.mainEntity.forEach((item, index) => {
        requireFields(item, ["name", "acceptedAnswer"], `${page} FAQ ${index + 1}`);
        requireFields(item.acceptedAnswer, ["text"], `${page} FAQ-Antwort ${index + 1}`);
      });
    }
    if (types.includes("JobPosting")) requireFields(schema, ["@id", "title", "description", "datePosted", "validThrough", "employmentType", "identifier", "hiringOrganization", "jobLocation"], `${page} JobPosting`);
  }
}

const llms = await readFile(join(distPath, "llms.txt"), "utf8");
for (const value of Object.values(expected)) {
  if (!llms.includes(value)) fail(`llms.txt enthält Firmenwert nicht: ${value}`);
}

const impressum = await readFile(join(distPath, "impressum", "index.html"), "utf8");
for (const value of [expected.name, expected.street, expected.phone, expected.email]) {
  if (!impressum.includes(value)) fail(`Impressum enthält Firmenwert nicht: ${value}`);
}

console.log(`JSON-LD valide: ${schemaCount} Blöcke in ${htmlFiles.length} HTML-Dateien`);
console.log([...typeCounts.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([type, count]) => `${type}: ${count}`).join("\n"));
console.log("Firmenentität in JSON-LD, Impressum und llms.txt konsistent.");
