import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SKIP = new Set(["node_modules", ".next", ".git", "dist", "build"]);

const needles = ["viator.com", "getyourguide.com", "discovercars.com"];

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(entry.name)) continue;
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const files = walk(ROOT).filter((f) =>
  /\.(ts|tsx|js|jsx|md|mdx)$/.test(f)
);

let hits = 0;

for (const f of files) {
  const txt = fs.readFileSync(f, "utf8");
  for (const n of needles) {
    if (txt.includes(n)) {
      // engedjük a partners.ts-t
      if (f.replaceAll("\\", "/").endsWith("/lib/partners.ts")) continue;

      hits++;
      console.log(`FOUND "${n}" in: ${f}`);
    }
  }
}

if (!hits) {
  console.log("OK: No hardcoded affiliate URLs outside lib/partners.ts");
} else {
  process.exitCode = 1;
}
