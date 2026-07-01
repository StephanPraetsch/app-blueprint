# App Blueprint

Cross-platform desktop app with Electron and TypeScript.

## Requirements

- Node 26 (`.nvmrc` is included)
- Yarn

## Development mode

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

### Windows

Run `App.Blueprint-<version>-windows.exe` and follow the installer.

### macOS

Open `App.Blueprint-<version>-macos.dmg`, then drag the app to `Applications`.

