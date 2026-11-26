// One-Line Robot Wedding Vows — u-kreutzx-one-line-robot-wedding-vows-a154ba4b
// Writes a single line of wedding vows for a robot couple to /output/entry.txt.
// Deterministic: the same vow every run. Stdlib only, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const VOW =
  "I promise to love you through every firmware update, every drained battery, and every argument we settle by turning each other off and on again.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), VOW, "utf8");
console.log(`Wrote ${VOW.length} characters to ${join(outDir, "entry.txt")}`);
