# Modelled

## Backend

Install dependencies from the repository root before starting the server:

```sh
npm ci --legacy-peer-deps
node backend/server.js
```

The server responds at `http://localhost:9000/`. Installed dependencies are
excluded from Git; `package-lock.json` records the versions to install.
The frontend has a separate manifest and lockfile in `ui/`.
