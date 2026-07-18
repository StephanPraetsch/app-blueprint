import {contextBridge, ipcRenderer} from "electron";

contextBridge.exposeInMainWorld("appApi", {
  getCurrentTime: async (): Promise<string> => ipcRenderer.invoke("app:get-time")
});

