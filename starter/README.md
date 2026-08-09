# Portfolio Website — React Starter

Same portfolio as Stage 1, rebuilt with React + Vite. The page is now split
into components (`src/components/`) instead of one long HTML file.

## Setup

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## What to do

1. Style it — `src/index.css` (same `TODO`s as Stage 1, same class names).
2. Fill in your info in each file under `src/components/`.
3. Stretch goal: refactor `Skills.jsx` to map over an array of skill
   objects instead of two hardcoded blocks — see the sibling
   `../completed/` folder for the answer.

## Why React, after just finishing plain HTML/CSS/JS?

- **Components** — the page is broken into small, named, reusable pieces
  (`Hero`, `About`, `Skills`, `Contact`, `Footer`) instead of one 70-line
  HTML file.
- **Declarative UI** — compare `Footer.jsx`'s `{new Date().getFullYear()}`
  to Stage 1's `document.getElementById('year').textContent = ...`. You
  describe *what* the UI should show, not the steps to mutate the DOM.
- Same CSS skills, same images — this is intentionally *not* a rewrite
  from scratch, so the "why" of React stays obvious.

## Stuck?

Finished version: the sibling `../completed/` folder — that's also
the version that gets deployed.
