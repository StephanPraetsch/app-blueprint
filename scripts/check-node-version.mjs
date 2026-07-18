const requiredMajor = 26;
const currentVersion = process.versions.node;
const majorVersion = Number(currentVersion.split(".")[0]);

if (majorVersion !== requiredMajor) {
  console.error(
    `The engine \"node\" is incompatible with this module. Expected version \"${requiredMajor}.x\". Got \"${currentVersion}\"`
  );
  process.exit(1);
}

