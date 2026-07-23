import {app, BrowserWindow, dialog} from "electron";
import fs from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";
import {registerClickCountIpcHandlers} from "./main/adapters/inbound/ipc/registerClickCountIpcHandlers.js";
import {selectDatabaseFile} from "./main/adapters/inbound/menu/selectDatabaseFileDialog.js";
import {setupApplicationMenu} from "./main/adapters/inbound/menu/setupApplicationMenu.js";
import {DataBaseConfigLocalSqlite} from "./main/adapters/outbound/sqlite/DataBaseConfigLocalSqlite.js";
import {SqliteClickCountRepositoryFactory} from "./main/adapters/outbound/sqlite/SqliteClickCountRepositoryFactory.js";
import {ClickCountApplicationService} from "./main/application/services/ClickCountApplicationService.js";
import {showAboutDialog} from "./main/aboutDialog.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
  window.loadFile(path.join(__dirname, "index.html"));
};

app.whenReady().then(async () => {
  const defaultDatabasePath = path.join(app.getPath("userData"), app.getName()+".sqlite");
  const settingsFilePath = path.join(app.getPath("userData"), "settings.json");
  const databasePathStore = new DataBaseConfigLocalSqlite(settingsFilePath, defaultDatabasePath);
  const repositoryFactory = new SqliteClickCountRepositoryFactory();
  const clickCountService = new ClickCountApplicationService(databasePathStore, repositoryFactory);

  registerClickCountIpcHandlers(clickCountService);

  setupApplicationMenu({
    appName: app.name,
    appVersion: app.getVersion(),
    onAboutRequested: async () => {
      await showAboutDialog(app.name, app.getVersion());
    },
    onDatabaseFileSettingsRequested: async () => {
      const selectedPath = await selectDatabaseFile(clickCountService.getDatabasePath());
      if (selectedPath === null) {
        return;
      }

      clickCountService.setDatabasePath(selectedPath);
      await dialog.showMessageBox({
        type: "info",
        title: "Settings",
        message: `SQLite database file updated to:\n${selectedPath}`
      });
    }
  });

  createMainWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });

  app.on("before-quit", () => {
    clickCountService.shutdown();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
