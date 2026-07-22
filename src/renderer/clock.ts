export class Clock {
  private readonly output: HTMLElement;
  private readonly intervalMs: number;

  public constructor(output: HTMLElement, intervalMs = 1000) {
    this.output = output;
    this.intervalMs = intervalMs;
  }

  public start(): void {
    this.update();
    setInterval(() => this.update(), this.intervalMs);
  }

  private update(): void {
    this.output.textContent = new Date().toLocaleTimeString();
  }
}

