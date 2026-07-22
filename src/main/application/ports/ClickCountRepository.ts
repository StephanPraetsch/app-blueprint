export interface ClickCountRepository {
  incrementAndGet(): number;
  close(): void;
}

export interface ClickCountRepositoryFactory {
  create(databasePath: string): ClickCountRepository;
}
