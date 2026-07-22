# Releasing a New Version

A release is created automatically when you push a tag that matches `v*` (for example `v1.3.4`).

## Steps

1. Ensure your changes are committed.
2. Update `package.json` version if needed.
3. Create a tag using semantic version format.
4. Push commit and tag to GitHub.

```bash
git tag v1.3.4
git push origin v1.3.4
```

## Workflow behavior

Workflow file: `.github/workflows/create-release.yml`

- Trigger: push tags matching `v*`
- `create_release`: creates the GitHub release entry
- `build_release`: builds installers for Linux, macOS, Windows and uploads files

## Artifacts

- Linux: 
  - `.AppImage`: requires `sudo apt install libfuse2`
    ```text
    chmod +x AppBlueprint-0.1.0.AppImage
    ./AppBlueprint-0.1.0.AppImage
    ```
  - `.deb`
    ```text
    sudo dpkg -i app-blueprint_0.1.0_amd64.deb 
    sudo apt remove app-blueprint
    ```
- macOS: `.dmg`, `.zip`
- Windows: `.exe`, `.zip`

