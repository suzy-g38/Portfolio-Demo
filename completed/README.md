# Stage 2: React (Vite) — Completed

**Branch: `02-react`.** This `completed/` folder is the finished,
deploy-ready version of the portfolio. Its sibling, `../starter/`, is
the boilerplate students build from during the session.

## Setup

```bash
npm install
npm run dev
```

## What's here vs. `../starter/`

- `src/components/Skill.jsx` + `src/components/Skills.jsx`: the two
  hardcoded skill blocks became one reusable `<Skill />` component driven
  by an array of data (`.map()`), instead of copy-pasted markup.
- `src/useTheme.js`: a custom hook wrapping the same
  `localStorage` + `classList.toggle` logic from Stage 1's `script.js`,
  now shared as a hook (`useTheme()`) instead of top-level script code.
- Full `src/index.css`, ported 1:1 from Stage 1 — same class names,
  same layout skills, now scoped to components instead of one HTML file.
- `vite.config.js` sets `base: './'` and all image paths are relative
  (`./images/...`) — both needed so the built site works correctly when
  deployed under a GitHub Pages subpath (`username.github.io/repo/`).
- `gh-pages` is already a devDependency, with a `deploy` script wired
  up — see below.

## Talking points for the session

- Show `Skills.jsx` side by side with the starter's version — this is
  the clearest "why componentize" moment in the whole workshop.
- Show `useTheme.js` next to Stage 1's `script.js` — same browser APIs
  (`localStorage`, `classList`), different organization.

## Deploy it

From inside this `completed/` folder:

```bash
npm install
npm run deploy
```

That builds the app and pushes `dist/` to a `gh-pages` branch (created
automatically, entirely separate from this one — unaffected by
`completed/` not being at the branch root). Then: Repo → **Settings →
Pages** → Source: **Deploy from a branch** → branch **`gh-pages`**,
folder **`/root`**.

Full deployment guide (all three stages, plus a Vercel alternative for
this stage): see `DEPLOYMENT.md` on the `main` branch.
