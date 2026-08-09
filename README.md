# Frontend Workshop — Build a Portfolio Site 3 Ways

Materials for a 2-hour workshop for 2nd-year students: build the same
personal portfolio site first in plain HTML/CSS/JS, then React, then
Next.js — so the *why* behind each tool is felt, not memorized.

**Start here:**
- [`session-plan.md`](session-plan.md) — the timed overview (what
  happens when).
- [`SCRIPT.md`](SCRIPT.md) — the facilitator's word-by-word run of
  show: exact commands, exact code to type, what to say, what to
  emphasize, what to skip, and what to cut if you're running behind.
- [`STUDENT-GUIDE.md`](STUDENT-GUIDE.md) — the student-facing,
  copy-paste-and-go version. Share this one directly (attach to slides,
  drop in chat) — no facilitator notes, just clone → checkout → command
  → code, stage by stage.

**This is the `main` branch — the home base.** It only holds the
overview docs. Each stage of the workshop lives on its own branch, so
it can be deployed independently:

| Branch | What it is | Deploys to |
|---|---|---|
| [`00-reference-original`](../../tree/00-reference-original) | The very first portfolio site (yours!) — the cold-open reveal | GitHub Pages |
| [`01-html-css-js`](../../tree/01-html-css-js) | Stage 1: plain HTML, CSS & JS | GitHub Pages |
| [`02-react`](../../tree/02-react) | Stage 2: React + Vite | GitHub Pages |
| [`03-nextjs`](../../tree/03-nextjs) | Stage 3: Next.js (App Router) | Vercel |

Every stage branch has the same two sibling folders at its root:

- **`starter/`** — boilerplate with `TODO` comments. Students build
  here during the session.
- **`completed/`** — the finished, deploy-ready reference version.

Both exist on disk at once — no branch switching needed to compare
"what I have" against "what it should look like." Switch branches to
move between *stages*:

```bash
git checkout 01-html-css-js   # now the working directory IS stage 1
git checkout 02-react         # now it's stage 2
```

Each stage branch has its own README with setup + deploy steps
specific to that stage. [`DEPLOYMENT.md`](DEPLOYMENT.md) (this branch)
has the full walkthrough for all three.

## Before the session

Switching stages live via `git checkout` is deliberate — it's a real,
visible demonstration of what a branch actually is (the files on disk
*change*, live, in front of the room), not just a label. Full detail
and exact transition timing in `SCRIPT.md`.

Because of that, only one stage's files exist on disk at a time, and
`node_modules/` (gitignored, not committed) needs reinstalling after
each checkout into a React or Next.js branch — plan for that pause
(it's a good moment to explain *why* `node_modules` isn't committed to
git in the first place). Sanity-check each stage once beforehand so
you know installs are fast from local npm cache on the day (run these
from inside `completed/` — same idea in `starter/`):

```bash
# Stage 1 — from the repo root:
git checkout 01-html-css-js
cd completed && python3 -m http.server 8001   # http://localhost:8001, no install needed
cd ..

# Stage 2 — back at the repo root:
git checkout 02-react
cd completed && npm install && npm run dev    # http://localhost:5173
cd ..

# Stage 3 — back at the repo root:
git checkout 03-nextjs
cd completed && rm -rf node_modules && npm install && npm run dev   # http://localhost:3000
cd ..

git checkout main
```

## Deploying

Full steps in [`DEPLOYMENT.md`](DEPLOYMENT.md). Short version:

- **`01-html-css-js`** — GitHub Pages via a small GitHub Actions
  workflow (already set up at `.github/workflows/pages.yml` on that
  branch), since the site now lives in `completed/` rather than the
  branch root and classic "deploy from a branch" mode can't target a
  subfolder. No build step, just Pages Source set to **GitHub Actions**.
- **`02-react`** — from inside `completed/`: build locally, then
  `gh-pages` pushes `dist/` to a `gh-pages` branch that Pages serves
  from. (Or Vercel with Root Directory `completed`, if you'd rather
  skip the build step entirely — see `DEPLOYMENT.md`.)
- **`03-nextjs`** — Vercel, Production Branch set to `03-nextjs`,
  **Root Directory** set to `completed`. No build step needed locally;
  Vercel builds it.

## Where the source material came from

`00-reference-original` is the first portfolio site built with this
account, years ago, learning web dev for the first time — reused here
as the running example for the whole workshop.
