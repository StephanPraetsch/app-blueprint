export interface DatabaseConfig {
  getDatabasePath(): string;
  setDatabasePath(databasePath: string): void;
}

