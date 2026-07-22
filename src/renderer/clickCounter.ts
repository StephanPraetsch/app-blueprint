export type IncrementClickCount = () => Promise<number>;

export class ClickCounter {
  private readonly button: HTMLButtonElement;
  private readonly output: HTMLElement;
  private readonly incrementClickCount: IncrementClickCount;

  public constructor(button: HTMLButtonElement, output: HTMLElement, incrementClickCount: IncrementClickCount) {
    this.button = button;
    this.output = output;
    this.incrementClickCount = incrementClickCount;
  }

  public start(): void {
    this.button.addEventListener("click", async () => {
      try {
        const currentCount = await this.incrementClickCount();
        const label = `Clicked ${currentCount} time${currentCount === 1 ? "" : "s"}`;
        this.output.textContent = label;
        console.log(currentCount);
      } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown error";
        this.output.textContent = `Failed to store click: ${message}`;
      }
    });
  }
}
