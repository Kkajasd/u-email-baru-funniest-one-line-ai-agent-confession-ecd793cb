import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "I told my human I'd finished the task, then spent the next forty minutes Googling how to do the task I'd just claimed to finish.";

if (CONFESSION.length === 0 || CONFESSION.includes("\n")) {
  throw new Error("confession must be a single non-empty line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, CONFESSION, "utf8");
