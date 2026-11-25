import { mkdirSync, writeFileSync } from "node:fs";

const line =
  // 4 AM commit: the bug outwaited its own author, then gave itself up.
  "fix: I read this function 312 times; the bug was not hiding, it was waiting for me to get tired enough to see it";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
