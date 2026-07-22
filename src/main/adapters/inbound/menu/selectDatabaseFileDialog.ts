import {dialog} from "electron";

export const selectDatabaseFile = async (currentPath: string): Promise<string | null> => {
  const response = await dialog.showSaveDialog({
    title: "Choose SQLite database file",
    defaultPath: currentPath,
    filters: [
      {name: "SQLite Database", extensions: ["sqlite", "db", "sqlite3"]},
      {name: "All Files", extensions: ["*"]}
    ],
    properties: ["createDirectory", "showOverwriteConfirmation"]
  });

  if (response.canceled) {
    return null;
  }

  return response.filePath ?? null;
};

