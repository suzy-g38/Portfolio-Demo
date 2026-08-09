# Deployment Guide

Each stage lives on its own branch, and each branch has two sibling
folders at its root: `starter/` (boilerplate) and `completed/` (the
finished, deploy-ready site). Deployment always targets `completed/`.
Nothing here has been run yet unless noted; these are the exact
commands to run.

Each stage deploys differently, which is itself worth calling out to
students: *the deployment story is part of why you'd choose one tool
over another.*

---

## Stage 1 — `01-html-css-js` branch → GitHub Pages (via GitHub Actions)

No build step, so this is the simplest possible deploy — with one
wrinkle: since the site lives in `completed/` rather than at the
branch root, GitHub Pages' simplest "deploy from a branch" mode (which
only serves the repo root or a `/docs` folder) can't point at it
directly. A small GitHub Actions workflow handles this instead —
already committed at `.github/workflows/pages.yml` on this branch:

```yaml
name: Deploy completed/ to GitHub Pages
on:
  push:
    branches: [01-html-css-js]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: completed
      - id: deployment
        uses: actions/deploy-pages@v4
```

1. Push the repo (all branches) to GitHub:
   ```bash
   git push -u origin main
   git push -u origin 01-html-css-js
   git push -u origin 02-react
   git push -u origin 03-nextjs
   git push -u origin 00-reference-original
   ```
2. Repo → **Settings → Pages**.
3. Under "Build and deployment", set **Source: GitHub Actions** (not
   "Deploy from a branch" — that mode can't reach a subfolder).
4. The workflow above runs automatically on every push to
   `01-html-css-js` and deploys `completed/`. Live at
   `https://<username>.github.io/<repo>/` within a minute or two. You
   can also trigger it manually from the Actions tab
   (`workflow_dispatch`).

**To switch the demo to a different stage:** this workflow only
watches `01-html-css-js`. To demo the `00-reference-original` branch
instead (which has no `completed/`/`starter/` split — it's just the
original site at its root), either add a second workflow scoped to
that branch, or fall back to "deploy from a branch" → branch
`00-reference-original` → folder `/root` (that one *is* at the branch
root, so classic mode works fine for it).

---

## Stage 2 — `02-react` branch → GitHub Pages (or Vercel)

React needs a build step (`npm run build` → static files in `dist/`),
so "deploy from a branch" was never viable here regardless of folder
structure — GitHub Pages would try to serve JSX, which browsers can't
run.

The `02-react` branch's `completed/` folder already has this wired up:
`vite.config.js` uses `base: './'` (relative, so it works under any
subpath without hardcoding the repo name) and `package.json` has a
`deploy` script using the `gh-pages` package (already a devDependency).

### Option A — `gh-pages` package

```bash
git checkout 02-react
cd completed
npm install
npm run deploy
```

`npm run deploy` runs `vite build` then `gh-pages -d dist`, which
pushes the built `dist/` folder to a new `gh-pages` branch (created
automatically — a separate branch, unaffected by `completed/` not
being at the repo root).

Then: Repo → **Settings → Pages** → Source: **Deploy from a branch** →
branch **`gh-pages`**, folder **`/root`**.

Every time you want to update the live site after further edits, just
rerun `npm run deploy` from inside `completed/`.

### Option B — Vercel (zero-config alternative, good to mention for contrast)

1. [vercel.com/new](https://vercel.com/new) → import the repo.
2. Set the branch to `02-react`, **Root Directory** to `completed`.
3. Vercel auto-detects Vite, builds, and deploys. No `gh-pages` package
   or manual deploy command needed — point out to students *why* that's
   appealing once a project has a build step.

---

## Stage 3 — `03-nextjs` branch → Vercel

Next.js features used here (Server Components, `next/image`,
`next/font`) need a Node.js/edge runtime — GitHub Pages only serves
static files, so it can't run these. Vercel is built by the Next.js
team specifically for this.

1. [vercel.com/new](https://vercel.com/new) → import the repo.
2. Set **Production Branch** to `03-nextjs`. **Root Directory:**
   `completed` (not the branch root — that's a neutral folder now
   holding both `starter/` and `completed/`).
3. Vercel auto-detects Next.js — no config needed. Deploy.
4. Every subsequent push to `03-nextjs` redeploys automatically; other
   branches/PRs get their own preview URL for free.

**Talking point:** if the site were fully static (no server features
used), a static export could still go on GitHub Pages — worth a
one-line mention so students know it's a spectrum, not a hard rule.

---

## Quick comparison table (put this on screen)

| Stage | Branch | Deploy source | Build step? | Where it lives | Why |
|---|---|---|---|---|---|
| HTML/CSS/JS | `01-html-css-js` | `completed/` via GitHub Actions | No | GitHub Pages | Static files, but needed Actions since the site isn't at the branch root |
| React (Vite) | `02-react` | `completed/` | Yes | GitHub Pages (`gh-pages` package) *or* Vercel | Static output after build — either works |
| Next.js | `03-nextjs` | `completed/` | Yes, + server features | Vercel | Needs a server/edge runtime for SSR, image optimization, etc. |

## One more gotcha worth flagging live

GitHub Pages serves the **whole repo as one site** — you can't have
three simultaneously-live GitHub Pages URLs from three branches of the
same repo. If you want Stage 1 and the Stage 2 `gh-pages` output both
permanently live at the same time, they need to be separate repos (or
you accept that flipping the Pages source swaps which one is currently
being served, which is exactly the sequential demo flow this guide
assumes). Next.js on Vercel doesn't have this constraint — Vercel
gives every project its own URL independent of GitHub Pages.
