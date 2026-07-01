# App Blueprint

Cross-platform desktop app with Electron and TypeScript.

## Install the app

Download the installer for your operating system from the [GitHub release](https://github.com/StephanPraetsch/app-blueprint/releases/).

### Ubuntu/Linux

Install the `.deb` package:

```bash
sudo apt install ./App.Blueprint-<version>-linux.deb
```

If needed, you can also use:

```bash
sudo dpkg -i App.Blueprint-<version>-linux.deb
sudo apt -f install
```

Check version

```bash
app-blueprint --version
```

Uninstall the app

```bash
sudo apt remove app-blueprint
```

To remove app data and config too:

```bash
sudo apt purge app-blueprint
```

### Windows

Run `App.Blueprint-<version>-windows.exe` and follow the installer.

Uninstall `App Blueprint` from `Settings` -> `Apps` -> `Installed apps`.

### macOS

Open `App.Blueprint-<version>-macos.dmg`, then drag the app to `Applications`.

Delete `App Blueprint` from `Applications`.

## Development

### Requirements

- Node 26 (`.nvmrc` is included)
- Yarn

### start development server

```bash
nvm use
yarn install
yarn dev
```

## Release builds

Local release build commands:

```bash
yarn dist:linux
yarn dist:win
yarn dist:mac
```

Generated installers are written to `release/`.
