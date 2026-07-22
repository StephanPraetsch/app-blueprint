import {ipcMain} from "electron";
import type {ClickCountApplicationService} from "../../../application/services/ClickCountApplicationService.js";
import {IPC_CHANNELS} from "../../../../shared/ipcChannels.js";

export const registerClickCountIpcHandlers = (service: ClickCountApplicationService): void => {
  ipcMain.handle(IPC_CHANNELS.getCurrentClickCount, () => {
    return service.getCurrentClickCount();
  });

  ipcMain.handle(IPC_CHANNELS.incrementClickCount, () => {
    return service.incrementClickCount();
  });

  ipcMain.handle(IPC_CHANNELS.resetClickCount, () => {
    return service.resetClickCount();
  });
};
