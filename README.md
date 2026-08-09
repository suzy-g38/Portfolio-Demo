# Stage 1: HTML, CSS & JavaScript

**Branch: `01-html-css-js`.** This branch root is the finished,
deploy-ready version of the portfolio. `starter/` inside this same
branch is the boilerplate students build from during the session.

Use the root version as:
- The **"this is what we're building"** reveal at the start of the
  session (open `index.html` in a browser before writing any code).
- A **reference** for students who get stuck (`starter/README.md`
  points back here).

## What's here vs. `starter/`

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

This is a static site with `index.html` at the branch root, so GitHub
Pages' simplest mode works with zero config:

1. Push this branch: `git push -u origin 01-html-css-js`
2. Repo → **Settings → Pages** → Source: **Deploy from a branch** →
   branch **`01-html-css-js`**, folder **`/root`**.
3. Live at `https://<username>.github.io/<repo>/`.

Full deployment guide (all three stages): see `DEPLOYMENT.md` on the
`main` branch.
