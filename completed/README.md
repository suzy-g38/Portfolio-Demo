# Stage 3: Next.js (App Router) — Completed

**Branch: `03-nextjs`.** This `completed/` folder is the finished,
deploy-ready version of the portfolio. Its sibling, `../starter/`, is
the boilerplate students build from during the session.

## Setup

```bash
npm install
npm run dev
```

## What's here vs. `../starter/`

- `app/components/ThemeToggle.jsx`: the one `'use client'` component on
  the page — everything else is a Server Component and ships no JS.
- `app/components/Hero.jsx` + `Skill.jsx`: swapped `<img>` for
  `next/image` (automatic optimization, no layout shift).
- `app/layout.js`: fonts loaded via `next/font/google` instead of a
  `<link>` tag — self-hosted, no request to Google at runtime.
- `app/projects/page.js`: a second route, added by adding a folder.
  Linked from the footer with `next/link`.
- `app/components/Skills.jsx` + `Skill.jsx`: same data-array +
  reusable-component refactor as the React stage.

## Talking points for the session

- Open dev tools → Network tab on this page vs. the Stage 2 (React)
  completed version. Notice how much less JS ships here — most of this
  page is server-rendered HTML.
- Add a `console.log` inside `ThemeToggle.jsx` vs. inside `Hero.jsx` —
  only `ThemeToggle`'s log appears in the *browser* console (it's the
  only client component); `Hero`'s appears in the *terminal* running
  `next dev` (it runs on the server).
- Show `app/projects/page.js` next to Stage 2's setup — ask what it
  would take to add a second page there (a router library + config)
  vs. here (a folder).

## Deploy it

1. [vercel.com/new](https://vercel.com/new) → import this repo.
2. Set **Production Branch** to `03-nextjs`, **Root Directory** to
   `completed` (not the branch root — that's now where `starter/` also
   lives).
3. Deploy. No config needed — Vercel auto-detects Next.js.

Full deployment guide (all three stages): see `DEPLOYMENT.md` on the
`main` branch.
