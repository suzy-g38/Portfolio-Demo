# Stage 1: HTML, CSS & JavaScript — Completed

**Branch: `01-html-css-js`.** This `completed/` folder is the finished,
deploy-ready version of the portfolio. Its sibling, `../starter/`, is
the boilerplate students build from during the session.

Use this version as:
- The **"this is what we're building"** reveal at the start of the
  session (open `index.html` in a browser before writing any code).
- A **reference** for students who get stuck (`../starter/README.md`
  points back here).

## What's here vs. `../starter/`

- Full CSS: hero layout with absolutely-positioned clouds/mountain,
  two-column skill rows, gradient button, responsive breakpoint.
- `js/script.js`:
  - Sets the footer year automatically (`Date.getFullYear()`).
  - Light/dark mode toggle (the 🌙/☀️ button, top-right of the hero),
    persisted via `localStorage` — a good live demo of DOM events +
    `classList.toggle` + Web Storage in ~15 lines.

## Run it locally

Open `index.html` directly, or use VS Code's "Live Server" extension.
No build step, no `npm install`.

## Deploy it

This folder isn't at the branch root, so GitHub Pages' simplest
"deploy from a branch" mode (which only serves the repo root or a
`/docs` folder) can't point at it directly. Use GitHub Actions instead
— a workflow file is already set up at
`../.github/workflows/pages.yml`, which publishes this `completed/`
folder on every push to this branch:

1. Push this branch: `git push -u origin 01-html-css-js`
2. Repo → **Settings → Pages** → Source: **GitHub Actions** (not
   "Deploy from a branch").
3. The workflow runs automatically and deploys. Live at
   `https://<username>.github.io/<repo>/` within a minute or two.

Full deployment guide (all three stages): see `DEPLOYMENT.md` on the
`main` branch.
