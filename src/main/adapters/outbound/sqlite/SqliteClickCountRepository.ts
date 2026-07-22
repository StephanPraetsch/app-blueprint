import {mkdirSync} from "node:fs";
import path from "node:path";
import {DatabaseSync} from "node:sqlite";
import type {ClickCountRepository} from "../../../application/ports/ClickCountRepository.js";

export class SqliteClickCountRepository implements ClickCountRepository {
  private readonly database: DatabaseSync;

  public constructor(databasePath: string) {
    mkdirSync(path.dirname(databasePath), {recursive: true});
    this.database = new DatabaseSync(databasePath);
    this.database.exec("CREATE TABLE IF NOT EXISTS click_counter (id INTEGER PRIMARY KEY CHECK(id = 1), count INTEGER NOT NULL)");
    this.database.exec("INSERT INTO click_counter (id, count) VALUES (1, 0) ON CONFLICT(id) DO NOTHING");
  }

  public getCurrent(): number {
    const row = this.database.prepare("SELECT count FROM click_counter WHERE id = 1").get() as {count: number} | undefined;
    return row?.count ?? 0;
  }

  public incrementAndGet(): number {
    this.database.exec("UPDATE click_counter SET count = count + 1 WHERE id = 1");
    return this.getCurrent();
  }

  public resetAndGet(): number {
    this.database.exec("UPDATE click_counter SET count = 0 WHERE id = 1");
    return this.getCurrent();
  }

  public close(): void {
    this.database.close();
  }
}
