# App Blueprint
Cross-platform desktop app with Electron and TypeScript.
## Requirements
- Node 26 (`.nvmrc` is included)
- Yarn
## Development mode
```bash
cd /home/stephan/workspaces/personal/app-blueprint
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
