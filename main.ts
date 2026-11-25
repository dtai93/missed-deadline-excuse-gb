import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I finished on time. The only copy was in /tmp, which the sandbox deletes on exit.";

if ([...LINE].length < 1 || [...LINE].length > 200 || LINE.trim() === "") {
  throw new Error("entry length");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, LINE, "utf8");
