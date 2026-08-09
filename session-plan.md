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

**How stages work on disk:** each stage is a git branch (`01-html-css-js`,
`02-react`, `03-nextjs`), and you move between them live with
`git checkout <branch>` — deliberately, not via worktrees, so students
see a branch switch actually change the files on disk in real time.
Only one stage's files exist at once; see the facilitator checklist at
the bottom for the transition ritual (stop server → checkout → reinstall
deps if needed → restart server). Within a stage, `starter/` and
`completed/` are sibling folders that both exist at once — `starter/`
is boilerplate students build from, `completed/` is the finished,
deploy-ready reference. No checkout needed to flip between those two.

---

## 0. Cold open (5 min)

Open `index.html` in a browser (or show `MySite_Page.jpeg`) while on the
`00-reference-original` branch. Say something like:

> "This is the first website I ever built, when I was learning web dev.
> Today you're going to build it too — three times, with three different
> tools — so by the end you'll understand not just *how* to build a
> portfolio site, but *why* we reach for React or Next.js instead of
> just... this."

If you have time pre-session to spin up the three deployed URLs (see
`DEPLOYMENT.md`), show all three finished versions side by side so
students know what "done" looks like before touching a keyboard.

---

## Stage 1 — HTML, CSS & JavaScript (50 min)

**Branch:** `01-html-css-js` (checked out already from the cold open, or
`git checkout 01-html-css-js` now). Work in `starter/`; its sibling
`completed/` is the finished version.
**Format:** hands-on, everyone codes along.

| Time | What |
|---|---|
| 5 min | Walk through `starter/index.html` — point out it's already structured into 5 sections (hero, hello, skills, contact, footer) with `TODO` comments. Explain: *this is what "boilerplate" means — the skeleton is there so we spend our time on the interesting parts.* |
| 25 min | Live-code `starter/css/style.css` together, following the `TODO` list in the file: hero background + absolute-positioned clouds/mountain, skill-row two-column layout (float or flex — pick one and say why), the gradient button, footer styling. Pause after each TODO for students to catch up. |
| 10 min | Personalize `starter/index.html` — swap in their name, a real bio sentence, two real skills, their email. |
| 10 min | Live-code `starter/js/script.js`: footer year via `getElementById` + `textContent`, then (if time allows) the dark-mode toggle button — `classList.toggle`, `localStorage`. This is the moment to name what JS is *for*: reaching into the DOM and changing it after the page has already loaded. |

**Why this stage matters (say this out loud):** everything after this is
solving problems that show up the moment a site grows past one page or
one component — but you can't feel the problem until you've written the
"long way" version yourself.

---

## Stage 2 — React (30 min)

**Transition ritual first:** stop Stage 1's server (Ctrl+C), `cd` back
to the repo root if you're inside `starter/` or `completed/`, then:
```bash
git checkout 02-react
cd starter
npm install
```
Narrate this live — see `SCRIPT.md` for the exact line. The `npm install`
pause is a natural moment to explain *why* `node_modules` isn't tracked
by git in the first place (huge, regenerable, differs per branch).

**Branch:** `02-react`. Work in `starter/`; its sibling `completed/` is
the finished, deploy-ready version.
**Format:** mostly guided walkthrough. `npm install` (above) is already
done so no one loses 5 minutes to it mid-flow.

| Time | What |
|---|---|
| 5 min | `npm run dev` inside `starter/`, open it in the browser — looks broken/plain, same as Stage 1's starter did. Point out `src/components/` — five files, same five sections as Stage 1's HTML. **"We didn't rewrite the site. We reorganized it."** |
| 10 min | Open `completed/src/components/Footer.jsx`. Point at `{new Date().getFullYear()}` and recall Stage 1's `document.getElementById(...).textContent = ...` from memory (that branch isn't checked out anymore — a good moment to name the tradeoff, see `SCRIPT.md`). Name the shift: *React lets you describe what the UI should show; you stop writing step-by-step DOM instructions.* |
| 10 min | The big one: open `completed/src/components/Skills.jsx` and `Skill.jsx` next to the starter's `Skills.jsx`. Show the array of skill objects + `.map()`. Ask: *"What would Stage 1 look like with 10 skills instead of 2?"* Let that land — that's the whole pitch for components. |
| 5 min | Quickly show `completed/src/useTheme.js` — same `localStorage`/`classList` APIs as Stage 1's dark-mode code, just packaged as a reusable hook. Reinforces: *React doesn't replace what you learned, it organizes it.* |

Have students pull up `completed/` and click around (toggle dark mode,
resize the window) rather than typing all of this from scratch — time
is better spent reading and reacting than transcribing JSX syntax
cold.

---

## Stage 3 — Next.js (25 min)

**Transition ritual first:** stop Stage 2's server, `cd` back to the
repo root, then:
```bash
git checkout 03-nextjs
cd starter
rm -rf node_modules
npm install
```
The `rm -rf node_modules` matters here specifically — React's leftover
`node_modules` doesn't match Next.js's `package.json`, so it needs a
clean reinstall (Stage 1 → 2 didn't need this since Stage 1 has no
`node_modules` at all).

**Branch:** `03-nextjs`. Work in `starter/`; its sibling `completed/`
is the finished, deploy-ready version.
**Format:** guided walkthrough, lighter on typing than even Stage 2.

| Time | What |
|---|---|
| 5 min | `npm run dev` inside `starter/`, open it — looks identical to the React version. Ask: *"So why does this exist?"* before answering. |
| 8 min | Show the file-based routing: `completed/app/page.js` is `/`, `completed/app/projects/page.js` is `/projects`. Compare to React: *in plain React, navigating to a second page means adding a router library and configuring it yourself. Here, adding a folder + file is the router.* |
| 6 min | Show `completed/app/layout.js` and the `metadata` export — point out this is what sets the tab title and meta tags per page, and that it's rendered on the server before the page ever reaches the browser (briefly gesture at "server components" without a deep dive — that's a future-workshop topic). |
| 6 min | Show `next/image` usage in `completed/app/components/Hero.jsx` vs. a plain `<img>` tag — automatic sizing/optimization is why frameworks like this exist once a site has real content and needs to load fast. |

**Land the plane:** three tools, one UI. Plain HTML/CSS/JS for anything
small or a learning exercise. React when the UI has real interactive
complexity and you're already comfortable with JS. Next.js when you need
routing, SEO, or server-side rendering out of the box.

---

## Deployment walkthrough (10 min — this one you actually run live)

Each stage lives on its own branch (`01-html-css-js`, `02-react`,
`03-nextjs`), and `completed/` on that branch is the deploy-ready
site — so this is a real live deploy, not a slides-only demo. Full
commands in `DEPLOYMENT.md`. Three flows, one per stage:

1. **Stage 1 (HTML/CSS/JS)** → GitHub Pages via a GitHub Actions
   workflow (already committed at `.github/workflows/pages.yml` on
   this branch, since `completed/` isn't at the branch root so classic
   "deploy from a branch" can't reach it). Set Pages Source to
   **GitHub Actions**, then push — it deploys automatically. Refresh
   the URL live in front of the room.
2. **Stage 2 (React)** → `git checkout 02-react`, `cd completed`,
   `npm run deploy` (runs `gh-pages -d dist` under the hood, pushes
   the build to a `gh-pages` branch) *or* Vercel (Root Directory set
   to `completed`).
3. **Stage 3 (Next.js)** → Vercel, Production Branch set to
   `03-nextjs`, Root Directory set to `completed` (this is what
   Next.js/Vercel are built for together — SSR features need a Node
   server or Vercel's infrastructure; GitHub Pages can't run them).
   Push to the branch and watch the deployment happen in the Vercel
   dashboard live.

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

No worktrees this time — you'll `git checkout` between branches live,
on purpose, so students see a branch switch physically change the
working directory. Do this once beforehand so you know installs are
fast from local npm cache on the day, not to leave anything checked out
permanently:

```bash
cd TaruGurdian-Session
git checkout 01-html-css-js   # no install needed, static site
cd starter && cd ..
cd completed && cd ..

git checkout 02-react
cd starter && npm install && cd ..
cd completed && npm install && cd ..

git checkout 03-nextjs
cd starter && npm install && cd ..
cd completed && npm install && cd ..

git checkout 01-html-css-js   # leave it staged on Stage 1, ready for the cold open
```

- [ ] Run the sanity-check sequence above once
- [ ] Confirm the deploy targets are wired up *before* class (GitHub
      Pages settings, Vercel project connected to `03-nextjs`, the
      `gh-pages` package installed in `02-react`) — see `DEPLOYMENT.md`.
      You still want the actual deploy to happen live in front of the
      room, but the one-time setup shouldn't eat session time.
- [ ] Decide where the deployed URLs will be shown from during the cold
      open — since deploying happens live at the end, the cold-open
      "three finished versions side by side" bit needs either
      pre-existing deployments from a rehearsal, or `npm run
      dev`/`python3 -m http.server` running locally instead.
- [ ] Browser tabs pre-opened: GitHub Pages settings, Vercel dashboard
- [ ] Read `SCRIPT.md` for the exact narration at each `git checkout`
      transition — it's written as a teaching beat, not just plumbing
