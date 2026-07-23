import {mkdirSync, readFileSync, writeFileSync} from "node:fs";
import path from "node:path";
import type {DatabaseConfig} from "../../../application/ports/DatabaseConfig.js";

type SettingsPayload = {
  databasePath?: string;
};

export class DataBaseConfigLocalSqlite implements DatabaseConfig {
  private readonly settingsFilePath: string;
  private readonly defaultDatabasePath: string;

  public constructor(settingsFilePath: string, defaultDatabasePath: string) {
    this.settingsFilePath = settingsFilePath;
    this.defaultDatabasePath = defaultDatabasePath;
  }

  public getDatabasePath(): string {
    const payload = this.readSettings();
    return payload.databasePath?.trim() || this.defaultDatabasePath;
  }

  public setDatabasePath(databasePath: string): void {
    const normalizedPath = databasePath.trim();
    if (normalizedPath.length === 0) {
      throw new Error("Database path must not be empty.");
    }

    this.writeSettings({databasePath: normalizedPath});
  }

  private readSettings(): SettingsPayload {
    try {
      const content = readFileSync(this.settingsFilePath, "utf8");
      const parsed = JSON.parse(content) as SettingsPayload;
      return parsed;
    } catch {
      return {};
    }
  }

  private writeSettings(payload: SettingsPayload): void {
    mkdirSync(path.dirname(this.settingsFilePath), {recursive: true});
    writeFileSync(this.settingsFilePath, JSON.stringify(payload, null, 2), "utf8");
  }
}

