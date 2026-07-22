export class ClickCounter {
  private readonly button: HTMLButtonElement;
  private readonly output: HTMLElement;
  private count = 0;

  public constructor(button: HTMLButtonElement, output: HTMLElement) {
    this.button = button;
    this.output = output;
  }

  public start(): void {
    this.button.addEventListener("click", () => {
      this.count += 1;
      const label = `Clicked ${this.count} time${this.count === 1 ? "" : "s"}`;
      this.output.textContent = label;
      console.log(this.count);
    });
  }
}

