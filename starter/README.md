# Portfolio Website — Next.js Starter

Same portfolio as Stages 1 & 2, rebuilt with Next.js (App Router). The
component breakdown is identical to Stage 2 — the difference is *where*
the code runs.

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## What to do

1. Style it — `app/globals.css` (same `TODO`s as Stages 1 & 2, same class
   names).
2. Fill in your info in each file under `app/components/`.
3. Stretch goals (see the `TODO` comments in the files themselves):
   - Refactor `Skills.jsx` into a data array + reusable component.
   - Add a second page at `/projects` and link to it with `next/link`.
   - See the sibling `../completed/` folder for the answers.

## Why Next.js, after just finishing React?

- **File-based routing** — a `projects/page.js` file *is* the `/projects`
  route. No router library to install or configure.
- **Server Components by default** — everything in `app/components/`
  currently renders on the server and ships as HTML. No React JS bundle
  is needed just to display this page (compare to Stage 2, where the
  whole app is a JS bundle that renders in the browser).
- **Built-in optimization** — fonts (`next/font/google` in `layout.js`)
  and images (`next/image`, see `../completed/app/components/Hero.jsx`)
  are optimized automatically.

## Stuck?

Finished version: the sibling `../completed/` folder — that's also
the version that gets deployed.
