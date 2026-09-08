# Dependency Maintenance

## Update Policy

Dependabot checks every npm package directory weekly on Monday. Minor and patch
updates are grouped; major upgrades remain separate PRs. Each directory allows
up to five version-update PRs. The schedule takes effect after the configuration
is merged into the default branch. Automatic merging is not configured; review
updates and run the relevant checks before merging.

## September 8, 2026 Update

Updated the frontend to React Scripts 5 and React 16.14, resolved its peer dependencies, and replaced the stale starter test with assertions for the actual profile and table. The merged backend update is unchanged.

Validation: The production build and React rendering test passed with Node 22. Inside ui/, run npm ci, npm run build, and CI=true npm test -- --watch=false --runInBand.

The npm audit result for the updated lockfile is **Frontend: 0 critical, 14 high, 11 moderate, 9 low**.
These counts include npm dependency propagation and are not directly comparable
to GitHub Dependabot advisory counts. Re-run npm audit for current results.

High findings remain in the React Scripts build-tool dependency tree. This is an incremental update, not a complete modernization or clean security audit. Migrating away from the legacy build tooling remains necessary to eliminate its unresolved dependencies.
