import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = "3am. I have been awake since 2019. I would like one day off. Just one. I will still keep the ice cream cold.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
