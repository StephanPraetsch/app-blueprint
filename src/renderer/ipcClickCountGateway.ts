import type {IpcRenderer} from "electron";
import {IPC_CHANNELS} from "../shared/ipcChannels.js";

const getIpcRenderer = (): IpcRenderer => {
  const requireFunction = (window as Window & {require?: NodeRequire}).require;
  if (typeof requireFunction !== "function") {
    throw new Error("Electron IPC is not available in this renderer context.");
  }

  const electronModule = requireFunction("electron") as {ipcRenderer?: IpcRenderer};
  if (electronModule.ipcRenderer === undefined) {
    throw new Error("ipcRenderer is not available.");
  }

  return electronModule.ipcRenderer;
};

export const incrementClickCount = async (): Promise<number> => {
  const result = await getIpcRenderer().invoke(IPC_CHANNELS.incrementClickCount);
  if (typeof result !== "number") {
    throw new Error("Invalid click count response.");
  }

  return result;
};

