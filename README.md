# Frontend Workshop — Build a Portfolio Site 3 Ways

Materials for a workshop for 2nd-year students: build the same
personal portfolio site first in plain HTML/CSS/JS, then React, then
Next.js — so the *why* behind each tool is felt, not memorized.

**Start here:** [`STUDENT-GUIDE.md`](STUDENT-GUIDE.md) — a copy-paste-
ready, step-by-step guide covering all three stages: clone → checkout
→ command → code → deploy.

**This is the `main` branch — the home base.** It only holds the
overview docs. Each stage of the workshop lives on its own branch, so
it can be deployed independently:

| Branch | What it is | Deploys to |
|---|---|---|
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
specific to that stage.
