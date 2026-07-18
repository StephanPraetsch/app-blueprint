# App Blueprint

Desktop app blueprint using TypeScript, Node.js 26, Yarn, and Electron.

## Requirements

- Node.js 26.x
- Yarn 1.22.x

Use `nvm use` in this folder to switch to the Node version from `.nvmrc`.

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

## Other useful commands

```bash
yarn typecheck
yarn build
yarn start
```

