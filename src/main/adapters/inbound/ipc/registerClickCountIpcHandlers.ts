import {ipcMain} from "electron";
import type {ClickCountApplicationService} from "../../../application/services/ClickCountApplicationService.js";
import {IPC_CHANNELS} from "../../../../shared/ipcChannels.js";

export const registerClickCountIpcHandlers = (service: ClickCountApplicationService): void => {
  ipcMain.handle(IPC_CHANNELS.incrementClickCount, () => {
    return service.incrementClickCount();
  });
};

