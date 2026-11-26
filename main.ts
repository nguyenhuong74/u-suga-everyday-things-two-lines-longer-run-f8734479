import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: exactly two lines. Line 1 explains a queue to a 10-year-old
// with a single analogy (a queue is a human train). Line 2 says why the
// analogy works — what it maps and what it leaves out.
function buildEntry(): string {
  const line1 =
    "A queue is a human train: everyone stands in a line like carriages, and the whole thing only creeps forward when the person at the very front steps away.";
  const line2 =
    "It works because both move in single file and nobody can overtake the front, but it leaves out that carriages never get bored, tired, or cut in line.";
  return `${line1}\n${line2}\n`;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), buildEntry(), "utf8");
