import {rm} from "node:fs/promises";

for (const folder of ["dist", "release"]) {
  await rm(folder, { recursive: true, force: true });
}

