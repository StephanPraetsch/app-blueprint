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
yarn version --patch && git push --follow-tags
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

```bash
xattr -dr com.apple.quarantine "/Applications/AppBlueprint.app"
open "/Applications/AppBlueprint.app
```

what is missing:
* Missing Developer ID Application signing during mac build.
* Missing notarization and stapling step.
* Likely missing/incorrect CI secrets for signing/notarization (or they are not being used).
* Quarantine is present (not root cause alone, but it exposes the signing/notarization problem).

### Windows: .exe

execute the `.exe` installer
