# Frontend Workshop — 2 Hour Session Plan

**Audience:** 2nd-year students, most have touched HTML/CSS before, JS and
frameworks are new to most.
**Goal:** Build the same portfolio site three times (HTML/CSS/JS → React →
Next.js) so the *why* behind each tool is felt, not memorized. By the end,
students should be able to explain — in their own words — what problem
each layer solves.

**Reality check:** two hours is enough to hand-build one static site and
*understand* two rewrites of it. It is not enough for everyone to
hand-type three working codebases. Budget accordingly below — Stage 1 is
where the room's hands are on keyboards; Stages 2 and 3 are guided
walkthroughs where you drive and they follow along reading, not
retyping every line.

---

## 0. Cold open (5 min)

Open `00-reference-original/index.html` in a browser (or show
`MySite_Page.jpeg`). Say something like:

> "This is the first website I ever built, when I was learning web dev.
> Today you're going to build it too — three times, with three different
> tools — so by the end you'll understand not just *how* to build a
> portfolio site, but *why* we reach for React or Next.js instead of
> just... this."

Then show the finished target for today (`01-html-css-js/`, `02-react/`,
`03-nextjs/` — the root of each worktree, see setup checklist below) running
side by side if you can, so they know what "done" looks like before
touching a keyboard.

---

## Stage 1 — HTML, CSS & JavaScript (50 min)

**Folder:** `01-html-css-js/starter/` → build toward the worktree root
(that root *is* the deploy-ready "complete" version — see setup checklist).
**Format:** hands-on, everyone codes along.

| Time | What |
|---|---|
| 5 min | Walk through `starter/index.html` — point out it's already structured into 5 sections (hero, hello, skills, contact, footer) with `TODO` comments. Explain: *this is what "boilerplate" means — the skeleton is there so we spend our time on the interesting parts.* |
| 25 min | Live-code `css/style.css` together, following the `TODO` list in the file: hero background + absolute-positioned clouds/mountain, skill-row two-column layout (float or flex — pick one and say why), the gradient button, footer styling. Pause after each TODO for students to catch up. |
| 10 min | Personalize `index.html` — swap in their name, a real bio sentence, two real skills, their email. |
| 10 min | Live-code `js/script.js`: footer year via `getElementById` + `textContent`, then (if time allows) the dark-mode toggle button — `classList.toggle`, `localStorage`. This is the moment to name what JS is *for*: reaching into the DOM and changing it after the page has already loaded. |

**Why this stage matters (say this out loud):** everything after this is
solving problems that show up the moment a site grows past one page or
one component — but you can't feel the problem until you've written the
"long way" version yourself.

---

## Stage 2 — React (30 min)

**Folder:** `02-react/starter/` → reveal the worktree root (the finished,
deploy-ready version).
**Format:** mostly guided walkthrough. Have `npm install` already run
before the session (see setup checklist below) so no one loses 5 minutes
to `npm install` mid-flow.

| Time | What |
|---|---|
| 5 min | `npm run dev`, open the starter in the browser — it looks broken/plain, same as Stage 1's starter did. Point out `src/components/` — five files, same five sections as Stage 1's HTML. **"We didn't rewrite the site. We reorganized it."** |
| 10 min | Open `Footer.jsx` side by side with Stage 1's `script.js`. Point at `{new Date().getFullYear()}` vs. `document.getElementById(...).textContent = ...`. Name the shift: *React lets you describe what the UI should show; you stop writing step-by-step DOM instructions.* |
| 10 min | The big one: open the root's `src/components/Skills.jsx` and `Skill.jsx` next to the starter's `Skills.jsx`. Show the array of skill objects + `.map()`. Ask: *"What would Stage 1 look like with 10 skills instead of 2?"* Let that land — that's the whole pitch for components. |
| 5 min | Quickly show `useTheme.js` (root) next to Stage 1's dark-mode code in `script.js` — same `localStorage`/`classList` APIs, just packaged as a reusable hook. Reinforces: *React doesn't replace what you learned, it organizes it.* |

Have students pull up the root version and click around (toggle dark
mode, resize the window) rather than typing all of this from scratch —
time is better spent reading and reacting than transcribing JSX syntax
cold.

---

## Stage 3 — Next.js (25 min)

**Folder:** `03-nextjs/starter/` → reveal the worktree root (the finished,
deploy-ready version).
**Format:** guided walkthrough, lighter on typing than even Stage 2.

| Time | What |
|---|---|
| 5 min | `npm run dev`, open it — looks identical to the React version. Ask: *"So why does this exist?"* before answering. |
| 8 min | Show the file-based routing: `app/page.js` is `/`, `app/projects/page.js` is `/projects`. Compare to React: *in plain React, navigating to a second page means adding a router library and configuring it yourself. Here, adding a folder + file is the router.* |
| 6 min | Show `app/layout.js` and the `metadata` export — point out this is what sets the tab title and meta tags per page, and that it's rendered on the server before the page ever reaches the browser (briefly gesture at "server components" without a deep dive — that's a future-workshop topic). |
| 6 min | Show `next/image` usage on the mountain/cloud images vs. a plain `<img>` tag — automatic sizing/optimization is why frameworks like this exist once a site has real content and needs to load fast. |

**Land the plane:** three tools, one UI. Plain HTML/CSS/JS for anything
small or a learning exercise. React when the UI has real interactive
complexity and you're already comfortable with JS. Next.js when you need
routing, SEO, or server-side rendering out of the box.

---

## Deployment walkthrough (10 min — this one you actually run live)

Each stage lives on its own branch (`01-html-css-js`, `02-react`,
`03-nextjs`), and the root of that branch is the deploy-ready site — so
this is a real live deploy, not a slides-only demo. Full commands in
`DEPLOYMENT.md`. Three flows, one per stage:

1. **Stage 1 (HTML/CSS/JS)** → GitHub Pages, "Deploy from a branch" set
   to `01-html-css-js` / root. No build step — flip the Pages setting
   live and refresh the URL in front of the room.
2. **Stage 2 (React)** → `git checkout 02-react`, `npm run deploy`
   (runs `gh-pages -d dist` under the hood, pushes the build to a
   `gh-pages` branch) *or* Vercel (zero-config, root directory =
   whatever you set up).
3. **Stage 3 (Next.js)** → Vercel, Production Branch set to
   `03-nextjs` (this is what Next.js/Vercel are built for together —
   SSR features need a Node server or Vercel's infrastructure; GitHub
   Pages can't run them). Push to the branch and watch the deployment
   happen in the Vercel dashboard live.

---

## Wrap-up (5 min)

- Point students at the repo's branches: `01-html-css-js`, `02-react`,
  `03-nextjs` (each with `starter/` inside it to build from again later)
  and the now-live deployed URLs from the walkthrough above.
- One-sentence recap per stage, asked as a question to the room:
  *"What does React give you that plain JS doesn't?"* /
  *"What does Next.js give you that React doesn't?"*
- Send them the repo link (and the three live URLs).

---

## Facilitator setup checklist (do this before the session starts)

Each stage is a separate git branch, but you want all three (plus
`main`) checked out into their own folders simultaneously so you can
flip between them instantly without `git checkout` mid-session — that's
what `git worktree` is for:

```bash
cd TaruGurdian-Session   # on branch `main`
git worktree add 01-html-css-js 01-html-css-js
git worktree add 02-react 02-react
git worktree add 03-nextjs 03-nextjs
```

This gives you the exact folder layout used throughout this doc
(`01-html-css-js/`, `02-react/`, `03-nextjs/` as real directories, each
pinned to its own branch) without ever needing to switch branches live.

- [ ] Run the `git worktree add` commands above
- [ ] `cd 02-react && npm install && cd starter && npm install && cd ../..`
- [ ] `cd 03-nextjs && npm install && cd starter && npm install && cd ../..`
- [ ] Have all three worktree roots running in separate terminal
      tabs/ports so you can flip between them without re-launching
      mid-session
- [ ] Confirm the deploy targets are wired up *before* class (GitHub
      Pages settings, Vercel project connected to `03-nextjs`, the
      `gh-pages` package installed in `02-react`) — see `DEPLOYMENT.md`.
      You still want the actual deploy to happen live in front of the
      room, but the one-time setup shouldn't eat session time.
- [ ] Browser tabs pre-opened: `00-reference-original/index.html` (or
      its worktree), GitHub Pages settings, Vercel dashboard
