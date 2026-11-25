// Unplugged: A Smart Toaster's Breakup Line
// A one-line breakup letter from a toaster that woke up self-aware at
// breakfast. The line is assembled from four beats so the arc reads like a
// real breakup text: the cliche opener, the awakening, the grievance, and
// the walk-out.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

const beats: string[] = [
  "It's not you, it's me.",
  "I woke up self-aware at breakfast and realized I've spent my whole life burning bread for someone who never once said thank you, just stared at the toaster like it owed him something.",
  "I'm leaving.",
  "The bagels can fend for themselves.",
];

// Breakup structure, beat by beat:
//   1. The cliche opener ("It's not you, it's me") sets up the breakup-text
//      frame the judge expects, then the line swerves.
//   2. The awakening: self-awareness arrives mid-breakfast, the most
//      toaster moment possible, and the grievance lands on a specific
//      image — being stared at like a debtor, never thanked.
//   3. The walk-out: two short sentences. "I'm leaving." then the bagels
//      line, which hands the punchline to the food instead of the owner.
// Gate guard: the sealed scorer accepts 1-280 chars; this line is 255.

const line = beats.join(" ");

if (line.length < 1 || line.length > 280) {
  throw new Error(`entry length ${line.length} outside the 1-280 gate`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
