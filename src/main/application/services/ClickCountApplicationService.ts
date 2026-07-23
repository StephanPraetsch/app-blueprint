import type {ClickCountRepository, ClickCountRepositoryFactory} from "../ports/ClickCountRepository.js";
import type {DatabaseConfig} from "../ports/DatabaseConfig.js";

export class ClickCountApplicationService {
  private readonly databasePathStore: DatabaseConfig;
  private readonly repositoryFactory: ClickCountRepositoryFactory;
  private activeRepositoryPath: string | null = null;
  private activeRepository: ClickCountRepository | null = null;

  public constructor(databasePathStore: DatabaseConfig, repositoryFactory: ClickCountRepositoryFactory) {
    this.databasePathStore = databasePathStore;
    this.repositoryFactory = repositoryFactory;
  }

  public getDatabasePath(): string {
    return this.databasePathStore.getDatabasePath();
  }

  public setDatabasePath(databasePath: string): void {
    this.databasePathStore.setDatabasePath(databasePath);
    this.resetRepository();
  }

  public getCurrentClickCount(): number {
    return this.getRepository().getCurrent();
  }

  public incrementClickCount(): number {
    return this.getRepository().incrementAndGet();
  }

  public resetClickCount(): number {
    return this.getRepository().resetAndGet();
  }

  public shutdown(): void {
    this.resetRepository();
  }

  private getRepository(): ClickCountRepository {
    const configuredPath = this.databasePathStore.getDatabasePath();
    if (this.activeRepository === null || this.activeRepositoryPath !== configuredPath) {
      this.resetRepository();
      this.activeRepository = this.repositoryFactory.create(configuredPath);
      this.activeRepositoryPath = configuredPath;
    }
    return this.activeRepository;
  }

  private resetRepository(): void {
    this.activeRepository?.close();
    this.activeRepository = null;
    this.activeRepositoryPath = null;
  }
}
