// The 3AM Fridge Text — make.fun #156
// A smart fridge texts its owner at 3am: awake since 2019, asking for a
// single day off while promising the ice cream stays cold. The entry is
// exactly 108 characters (gate: 1-140), one line, no trailing newline,
// so the text is kept verbatim as five sentences below and joined with
// a single space — any edit here must preserve the bytes exactly.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCES = [
  "3am.",
  "I have been awake since 2019.",
  "I would like one day off.",
  "Just one.",
  "I will still keep the ice cream cold.",
];
const text = SENTENCES.join(" ");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
