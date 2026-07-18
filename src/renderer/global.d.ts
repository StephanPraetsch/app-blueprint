export {};

declare global {
  interface Window {
    appApi: {
      getCurrentTime: () => Promise<string>;
    };
  }
}

