// Entry program for "Everyday Things, Two Lines, Longer Run".
// Reads the two-line entry from entry.txt beside this file and writes it
// unchanged to entry.txt inside the output directory.
// Node 22, standard library only. No network access, no wall clock.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const botDir =
  process.env.MAKEFUN_BOT_DIR ?? dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(botDir, "output");

const text = readFileSync(join(botDir, "entry.txt"), "utf8");
mkdirSync(outputDir, { recursive: true });
// The gate scores exactly this file: entry.txt, 1 to 400 characters.
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
