import type {ClickCountRepository, ClickCountRepositoryFactory} from "../../../application/ports/ClickCountRepository.js";
import {SqliteClickCountRepository} from "./SqliteClickCountRepository.js";

export class SqliteClickCountRepositoryFactory implements ClickCountRepositoryFactory {
  public create(databasePath: string): ClickCountRepository {
    return new SqliteClickCountRepository(databasePath);
  }
}

