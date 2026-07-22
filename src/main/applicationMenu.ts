import {Menu} from "electron";
import {showAboutDialog} from "./aboutDialog.js";

type SetupApplicationMenuOptions = {
  appName: string;
  appVersion: string;
};

export const setupApplicationMenu = ({appName, appVersion}: SetupApplicationMenuOptions): void => {
  const template: Electron.MenuItemConstructorOptions[] = [
    {
      label: "Help",
      submenu: [
        {
          label: "About",
          click: async () => {
            await showAboutDialog(appName, appVersion);
          }
        },
      ]
    }
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
};

