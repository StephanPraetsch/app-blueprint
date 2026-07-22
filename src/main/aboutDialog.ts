import {dialog} from "electron";

export const showAboutDialog = async (appName: string, appVersion: string): Promise<void> => {
  await dialog.showMessageBox({
    type: "info",
    title: "About",
    message: `${appName} v${appVersion}`
  });
};

