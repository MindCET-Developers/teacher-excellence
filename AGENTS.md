# AGENTS.md

## Rules

- Keep app images (logos, photos) as real files under `src/assets/` imported directly, never as `.asset.json` CDN pointers: the site is deployed to Vercel as a static Vite build, where Lovable's `/__l5e/assets-v1/...` asset URLs are not served and the images break.
- Keep the project a plain static Vite + React SPA (no SSR/TanStack Start) so Vercel serves `dist/index.html` at `/`; `vercel.json` carries the rewrite.
