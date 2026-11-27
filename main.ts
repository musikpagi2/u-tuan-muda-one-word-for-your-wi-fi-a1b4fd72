// One Word for Your Wi-Fi — entry program.
//
// Writes a single word describing home Wi-Fi to entry.txt.
// The word is "peekaboo": the signal is there one second and gone the
// next, like a game of peekaboo — it appears, it vanishes, it reappears
// exactly when you stop looking for it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "peekaboo";

function writeEntry(dir: string, text: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), text, "utf8");
}

// The grader runs the program with its output directory set via
// MAKEFUN_OUTPUT_DIR; fall back to the competition's /output path.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

writeEntry(outputDir, WORD);
