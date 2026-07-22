export interface ClickCountRepository {
  getCurrent(): number;
  incrementAndGet(): number;
  resetAndGet(): number;
  close(): void;
}

export interface ClickCountRepositoryFactory {
  create(databasePath: string): ClickCountRepository;
}
