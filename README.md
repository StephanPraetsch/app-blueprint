# App Blueprint

Desktop app blueprint using TypeScript, Node.js 26, Yarn, and Electron.

## Requirements

- Node.js 26.x
- Yarn 1.22.x

## Start in development mode

```bash
nvm use
corepack enable
corepack prepare yarn@1.22.22 --activate
yarn install
yarn dev
```

The app includes:
- Hello World labels
- Current time label (updates every second)
- `Update Something` button that updates a counter

## Releasing a New Version

```bash
git tag v1.0.0
git push origin v1.0.0
```

### Linux:

#### .AppImage

requires
```bash
sudo apt install libfuse2
```

```bash
chmod +x AppBlueprint-0.1.0.AppImage
./AppBlueprint-0.1.0.AppImage
```

#### .deb

```bash
sudo dpkg -i app-blueprint_0.1.0_amd64.deb 
sudo apt remove app-blueprint
```

### macOS: .dmg

### Windows: .exe

execute the `.exe` installer
