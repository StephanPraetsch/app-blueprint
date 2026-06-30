# Release workflow usage
1. Open GitHub Actions in this repository.
2. Start the `Release` workflow manually.
3. Select `release_type`: `patch`, `minor`, or `major`.
4. Run the workflow.
What the workflow does:
- Bumps `package.json` version
- Creates and pushes a git tag
- Builds installers for Linux, Windows, and macOS
- Publishes a GitHub Release with all generated artifacts
