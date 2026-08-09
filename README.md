# Frontend Workshop — Build a Portfolio Site 3 Ways

Materials for a 2-hour workshop for 2nd-year students: build the same
personal portfolio site first in plain HTML/CSS/JS, then React, then
Next.js — so the *why* behind each tool is felt, not memorized.

**Start here:** [`session-plan.md`](session-plan.md) — the full
minute-by-minute facilitator script.

**This is the `main` branch — the home base.** It only holds the
overview docs. Each stage of the workshop lives on its own branch, so
it can be deployed independently:

| Branch | What it is | Deploys to |
|---|---|---|
| [`00-reference-original`](../../tree/00-reference-original) | The very first portfolio site (yours!) — the cold-open reveal | GitHub Pages |
| [`01-html-css-js`](../../tree/01-html-css-js) | Stage 1: plain HTML, CSS & JS | GitHub Pages |
| [`02-react`](../../tree/02-react) | Stage 2: React + Vite | GitHub Pages |
| [`03-nextjs`](../../tree/03-nextjs) | Stage 3: Next.js (App Router) | Vercel |

On every stage branch, the **repo root is the finished, deploy-ready
site** — so "deploy from this branch" just works, no subfolder
juggling. A `starter/` folder inside that same branch holds the
boilerplate students build from during the session. Switch branches to
move between stages:

```bash
git checkout 01-html-css-js   # now the working directory IS stage 1
git checkout 02-react         # now it's stage 2
```

Each stage branch has its own README with setup + deploy steps
specific to that stage. [`DEPLOYMENT.md`](DEPLOYMENT.md) (this branch)
has the full walkthrough for all three.

## Before the session

Each stage branch needs its own `npm install` (React and Next.js
projects) — `node_modules/` isn't committed. Do this once per branch
you plan to demo live:

```bash
git checkout 02-react && npm install && cd starter && npm install && cd ..
git checkout 03-nextjs && npm install && cd starter && npm install && cd ..
git checkout main
```

Sanity-check each stage's root (the deploy-ready version) runs:

```bash
git checkout 01-html-css-js && python3 -m http.server 8001   # http://localhost:8001
git checkout 02-react && npm run dev                          # http://localhost:5173
git checkout 03-nextjs && npm run dev                          # http://localhost:3000
git checkout main
```

## Deploying

Full steps in [`DEPLOYMENT.md`](DEPLOYMENT.md). Short version:

- **`01-html-css-js`** — GitHub Pages, "Deploy from a branch", branch
  `01-html-css-js`, folder `/root`. No build step.
- **`02-react`** — build locally, then `gh-pages` pushes `dist/` to a
  `gh-pages` branch that Pages serves from. (Or Vercel, if you'd rather
  skip the build step entirely — see `DEPLOYMENT.md`.)
- **`03-nextjs`** — Vercel, Production Branch set to `03-nextjs`. No
  build step needed locally; Vercel builds it.

## Where the source material came from

`00-reference-original` is the first portfolio site built with this
account, years ago, learning web dev for the first time — reused here
as the running example for the whole workshop.
