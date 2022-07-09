# MonoRepo for Javascript project

This repo is set up using NESTJS framework for api and NEXTJS for UI. It uses `pnpm` instead of npm.

## Install
```bash
npm i -g pnpm
pnpm i
```

### Changesets flow

1. Make changes to code
2. Run `pnpx changeset`
3. Commit generated changeset file with PR
4. Merge PR
5. `pnpx changeset version` to bump versions and generate changelogs
6. Publish to npm via `pnpm publish -r` or `changeset publish`
