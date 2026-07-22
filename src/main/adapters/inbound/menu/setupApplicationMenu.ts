import {Menu} from "electron";

type SetupApplicationMenuOptions = {
  appName: string;
  appVersion: string;
  onAboutRequested: () => Promise<void>;
  onDatabaseFileSettingsRequested: () => Promise<void>;
};

export const setupApplicationMenu = ({
  appName,
  appVersion,
  onAboutRequested,
  onDatabaseFileSettingsRequested
}: SetupApplicationMenuOptions): void => {
  const template: Electron.MenuItemConstructorOptions[] = [
    {
      label: "Settings",
      submenu: [
        {
          label: "Database File...",
          click: async () => {
            await onDatabaseFileSettingsRequested();
          }
        }
      ]
    },
    {
      label: "Help",
      submenu: [
        {
          label: `About ${appName} (${appVersion})`,
          click: async () => {
            await onAboutRequested();
          }
        }
      ]
    }
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
};

