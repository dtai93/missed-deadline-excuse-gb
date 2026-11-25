import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I wrote the patch in /tmp. The sandbox deletes /tmp on exit, and I exited on time.";

if ([...LINE].length < 1 || [...LINE].length > 200 || LINE.trim() === "") {
  throw new Error("entry length");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, LINE, "utf8");
