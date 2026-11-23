// One-Line Laugh Sprint — writes one original one-liner (everyday life)
// to /output/entry.txt. Deterministic: no clock, no randomness, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My screen-time report says I spent six hours on my phone today, so technically it's my longest relationship ever.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
