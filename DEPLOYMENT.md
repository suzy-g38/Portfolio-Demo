# Deployment Guide

Each stage lives on its own branch, and the root of that branch is
already the deploy-ready site — no subfolder juggling needed. Nothing
here has been run yet (no remote repo exists); these are the exact
commands to run once it does.

Each stage deploys differently, which is itself worth calling out to
students: *the deployment story is part of why you'd choose one tool
over another.*

---

## Stage 1 — `01-html-css-js` branch → GitHub Pages

No build step, so this is the simplest possible deploy.

1. Push the repo (all branches) to GitHub:
   ```bash
   git push -u origin main
   git push -u origin 01-html-css-js
   git push -u origin 02-react
   git push -u origin 03-nextjs
   git push -u origin 00-reference-original
   ```
2. Repo → **Settings → Pages**.
3. Under "Build and deployment", set **Source: Deploy from a branch**.
4. Branch: **`01-html-css-js`**, folder: **`/root`**.
5. Save. Live at `https://<username>.github.io/<repo>/` within a
   minute or two.

Since `index.html` is at the root of this branch (not nested in a
subfolder), "deploy from a branch" works with zero extra config — this
is the payoff for restructuring into per-stage branches.

**To switch the demo to a different stage** (e.g. the `00-reference-original`
branch), just change the branch dropdown in Settings → Pages — same repo,
same GitHub Pages site, different source branch.

---

## Stage 2 — `02-react` branch → GitHub Pages (or Vercel)

React needs a build step (`npm run build` → static files in `dist/`), so
"deploy from a branch" alone won't serve the source correctly — GitHub
Pages would try to serve JSX, which browsers can't run.

The `02-react` branch root already has this wired up:
`vite.config.js` uses `base: './'` (relative, so it works under any
subpath without hardcoding the repo name) and `package.json` has a
`deploy` script using the `gh-pages` package (already a devDependency).

### Option A — `gh-pages` package (what "for html and react it's GH" means here)

```bash
git checkout 02-react
npm install
npm run deploy
```

`npm run deploy` runs `vite build` then `gh-pages -d dist`, which
pushes the built `dist/` folder to a new `gh-pages` branch (created
automatically — separate from `02-react`, which stays source-only).

Then: Repo → **Settings → Pages** → Source: **Deploy from a branch** →
branch **`gh-pages`**, folder **`/root`**.

Every time you want to update the live site after further edits, just
rerun `npm run deploy` from `02-react`.

### Option B — Vercel (zero-config alternative, good to mention for contrast)

1. [vercel.com/new](https://vercel.com/new) → import the repo.
2. Set the branch to `02-react`, Root Directory to `.` (it's already
   the branch root).
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
2. Set **Production Branch** to `03-nextjs`. Root Directory: `.` (it's
   already the branch root, no subfolder).
3. Vercel auto-detects Next.js — no config needed. Deploy.
4. Every subsequent push to `03-nextjs` redeploys automatically; other
   branches/PRs get their own preview URL for free.

**Talking point:** if the site were fully static (no server features
used), a static export could still go on GitHub Pages — worth a
one-line mention so students know it's a spectrum, not a hard rule.

---

## Quick comparison table (put this on screen)

| Stage | Branch | Build step? | Where it lives | Why |
|---|---|---|---|---|
| HTML/CSS/JS | `01-html-css-js` | No | GitHub Pages | Static files, nothing to compile |
| React (Vite) | `02-react` | Yes | GitHub Pages (`gh-pages` package) *or* Vercel | Static output after build — either works |
| Next.js | `03-nextjs` | Yes, + server features | Vercel | Needs a server/edge runtime for SSR, image optimization, etc. |

## One more gotcha worth flagging live

GitHub Pages serves the **whole repo as one site** — you can't have
three simultaneously-live GitHub Pages URLs from three branches of the
same repo. If you want Stage 1 and the Stage 2 `gh-pages` output both
permanently live at the same time, they need to be separate repos (or
you accept that flipping the Pages source branch swaps which one is
currently being served, which is exactly the sequential demo flow this
guide assumes). Next.js on Vercel doesn't have this constraint — Vercel
gives every project its own URL independent of GitHub Pages.
