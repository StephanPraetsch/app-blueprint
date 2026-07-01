import {app, BrowserWindow} from "electron";
import fs from "node:fs";
import path from "node:path";

const hasVersionFlag = process.argv.includes("--version") || process.argv.includes("-v");

if (hasVersionFlag) {
  const packageJsonPath = path.join(__dirname, "..", "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8")) as {version?: string};
  process.stdout.write(`${packageJson.version ?? "unknown"}\n`);
  process.exit(0);
}

const createMainWindow = () => {
  const window = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  window.loadFile(path.join(__dirname, "..", "index.html"));
};
app.whenReady().then(() => {
  createMainWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
