# Facilitator Script — Full Word-by-Word Run of Show

This is the detailed companion to `session-plan.md`: exact commands to
run, exact code to type or point at, what to say, what to emphasize,
and what to deliberately skip. `session-plan.md` is the map; this is
turn-by-turn directions.

**Legend:**
- 🗣️ **SAY** — a line or talking point, adapt to your voice, don't read robotically
- ⌨️ **DO** — a literal command or action to perform on screen
- 🔦 **EMPHASIZE** — slow down, make sure it lands, maybe ask a question here
- ⏭️ **SKIP** — don't explain this even if asked casually in passing; redirect if a question goes here
- ⏱️ time marks assume a 2:00 start; adjust to your actual start time

**On navigation:** stages are git branches, not folders. You move
between them live with `git checkout <branch>` — deliberately, as a
teaching moment (students watch the working directory actually change),
not for convenience. That means only one stage's files exist on disk
at a time, and `node_modules/` needs reinstalling after checking into
a React or Next.js branch (it's gitignored, never committed). Budget
the `npm install` pauses into the transitions below — they're marked.

**Within a stage**, `starter/` and `completed/` are sibling folders
that both exist on disk at once — no checkout needed to flip between
"what I'm building" and "what it should look like." `starter/` is
boilerplate; `completed/` is the finished, deploy-ready reference.

---

## Pre-session setup (do this before students arrive, not live)

```bash
cd TaruGurdian-Session
git branch                      # confirm all 5 branches exist

git checkout 01-html-css-js     # no install needed, static site

git checkout 02-react
cd starter && npm install && cd ..
cd completed && npm install && cd ..

git checkout 03-nextjs
cd starter && npm install && cd ..
cd completed && npm install && cd ..

git checkout 01-html-css-js     # leave it staged here for the cold open
```

This is a rehearsal, not a permanent setup — you're just confirming
installs are fast from local npm cache on the actual day, and leaving
the repo parked on Stage 1's branch so the cold open starts clean.

Editor: open the `TaruGurdian-Session` folder as one workspace — the
file tree will visibly change contents every time you check out a
different branch, which is fine and expected (point this out to
students the first time it happens live).

Browser tabs pre-opened: blank tabs for `localhost:8000`,
`localhost:5173`, `localhost:3000` (you'll start servers into these),
plus GitHub repo Settings → Pages, and vercel.com/new.

Confirm deploy targets are reachable (you did the `gh-pages` install,
the GitHub Actions Pages source setting, and the Vercel project
connection ahead of time — see `DEPLOYMENT.md` — so the live deploy at
the end is just running one command / pushing / clicking Import, not
troubleshooting auth).

**Cold-open caveat:** since the three deployed URLs only go live during
the deployment walkthrough at the *end* of the session, you can't show
"three finished versions side by side, deployed" at the cold open on
the actual day. Either show them running locally (`python3 -m
http.server` / `npm run dev`, one per branch's `completed/`, from a
rehearsal earlier) or skip that beat and rely on the screenshot +
verbal pitch instead.

---

## 0. Cold open — ⏱️ 2:00–2:05 (5 min)

⌨️ **DO:** You should already be on the `00-reference-original` branch
(check out now if not: `git checkout 00-reference-original`). Open
`index.html` in the browser (or just show `MySite_Page.jpeg`
full-screen if you'd rather not context-switch).

🗣️ **SAY:**
> "This is the first website I ever built, back when I was learning
> web dev. Today you're going to build it too — three times, with
> three different tools. By the end, you won't just know *how* to
> build a portfolio site, you'll understand *why* people reach for
> React or Next.js instead of just... this."

🔦 **EMPHASIZE:** this is a real site you built as a beginner — it's
not a polished agency template. That's the point: it's achievable
today.

⏭️ **SKIP:** Don't explain the workshop's full timing breakdown out
loud — it creates clock-anxiety. Just move.

⌨️ **DO:**
```bash
git checkout 01-html-css-js
```
🗣️ **SAY, as you run it:**
> "Watch the file tree — I just switched git branches, and the files
> on disk changed completely. That's not a metaphor, that's literally
> what a branch is: a different version of the whole project, one
> command away. We'll do this three more times today, once per stage.
> You'll also notice two folders drop in: `starter/` and `completed/`
> — that's this stage's boilerplate and its finished answer key,
> sitting side by side."

This is the first of several deliberate checkout moments — see them
called out below wherever they happen again.

---

## Stage 1 — HTML, CSS & JavaScript — ⏱️ 2:05–2:55 (50 min)

### 1a. Orient — ⏱️ 2:05–2:10 (5 min)

⌨️ **DO:**
```bash
cd starter
code .          # or however you open your editor
python3 -m http.server 8000
```
Open `http://localhost:8000` — it'll look like plain unstyled black
text on white. That's expected and part of the reveal.

⌨️ **DO:** Open `index.html`. Scroll through it slowly once.

🗣️ **SAY:**
> "Notice this isn't a blank file — it's already broken into five
> sections: hero, hello, skills, contact, footer. That's what
> 'boilerplate' means: the skeleton's done so we spend our time on the
> interesting parts, not retyping `<div>` tags."

🔦 **EMPHASIZE:** point at the `TODO` comments — there's one per
section. "These are your breadcrumbs for the rest of the hour."

⏭️ **SKIP:** don't explain `<!DOCTYPE html>`, `<meta charset>`, or the
Google Fonts `<link>` tags line by line — assume basic HTML familiarity
from prerequisite courses. If someone asks, one sentence and move on.

### 1b. Live-code the CSS — ⏱️ 2:10–2:35 (25 min)

⌨️ **DO:** Open `css/style.css` (inside `starter/`) side-by-side with
the browser tab. Refresh after each block below so the change is
visible immediately — this is the single best way to keep the room's
attention.

Type these **in this order**, pausing ~90 seconds after each for the
room to catch up:

**1. Base reset + typography** (mostly copy this, it's not the
interesting part — say so explicitly):
```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  text-align: center;
  font-family: 'Merriweather', serif;
  color: #00416d;
}

h1 {
  font-family: 'Sacramento', cursive;
  font-size: 5.62rem;
  margin-top: 50px;
}

h2, h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
}
```
🗣️ **SAY:** "This part's just typography bookkeeping — I'm typing it
fast on purpose. The interesting CSS starts now."

**2. The hero background + positioned images** — 🔦 **EMPHASIZE this
block hardest**, it's the one real "aha" of the CSS portion:
```css
.top-container {
  background-color: #a3d2ca;
  padding-top: 100px;
  position: relative;
}

#top-cloud {
  position: absolute;
  right: 250px;
  top: 50px;
}

#bottom-cloud {
  position: absolute;
  left: 250px;
  bottom: 300px;
}
```
🗣️ **SAY, right after typing `position: relative` on `.top-container`:**
> "Watch what happens if I delete this one line." *(delete it, show
> the clouds jump to the top-left of the whole page, re-add it)*
> "`position: absolute` always positions relative to the nearest
> positioned ancestor. No ancestor, it goes all the way up to the
> page. This `relative` on the parent is what pins them back inside
> the hero. This trick — relative parent, absolute children — comes up
> constantly, everywhere, forever."

This is the moment to ask the room a question and wait for an answer:
*"What do you think happens if I remove `position: relative` here?"*
— ask *before* you demo it, not after.

**3. Skills layout** (two-column via float):
```css
.skill-row {
  width: 50%;
  margin: 100px auto;
  text-align: left;
  overflow: auto;
}

.image-computer {
  width: 25%;
  float: left;
  margin-right: 30px;
}

.image-chillies {
  width: 25%;
  float: right;
  margin-left: 30px;
}
```
🗣️ **SAY:** "Float is old-school — most new layouts use flexbox or
grid instead. I'm using it here because it's three lines and gets the
job done; mention flexbox exists as the modern default, but don't
rabbit-hole into it today."

⏭️ **SKIP:** a full flexbox tangent. One sentence: "if you want to try
this with `display: flex` instead as homework, go for it — same
result, different tool."

**4. The button:**
```css
.btn {
  background: #317599;
  background-image: linear-gradient(to bottom, #317599, #136875);
  border-radius: 26px;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px;
  text-decoration: none;
  display: inline-block;
}

.btn:hover {
  background-image: linear-gradient(to bottom, #2bd6a5, #37c7a3);
}
```
🗣️ **SAY:** "`:hover` — this is CSS reacting to user interaction with
zero JavaScript. Worth noticing before Stage 3, when we add a
`useState`-powered toggle for the exact same kind of 'this changes
when you interact with it' idea."

**5. Footer:**
```css
.bottom-container {
  background-color: #a3d2ca;
  padding: 50px 0 20px;
}

.copyright {
  color: #EAF6F6;
  font-size: 0.75rem;
}
```

🔦 **EMPHASIZE (once, at the end of this block):** "In twenty-five
minutes, with about 40 lines of CSS, we went from unstyled text to a
real page. That ratio — how much you get for how little you write — is
worth noticing. It changes a lot once we get to React."

### 1c. Personalize — ⏱️ 2:35–2:45 (10 min)

🗣️ **SAY:** "Now make it yours — five minutes, heads down." Walk the
room while they edit `starter/index.html`:
- `<h1>I'm Your Name</h1>` → their name
- `<h3>your role</h3>` → what they're studying / building
- The `profile-description` paragraph → 2–3 real sentences
- The two skill `<h3>`/`<p>` pairs → real skills
- The `mailto:name@email.com` → their real email

⏭️ **SKIP:** don't require them to swap the images — that's cosmetic
and eats time for no teaching value. Mention it's possible, move on.

### 1d. Live-code the JavaScript — ⏱️ 2:45–2:55 (10 min)

⌨️ **DO:** Open `starter/js/script.js`.

🗣️ **SAY:** "Everything so far — HTML says what's on the page, CSS
says how it looks. JavaScript is the only one of the three that can
*change things after the page has already loaded*, in response to
something happening. That's its whole job."

**1. Footer year — type this first, it's a fast win:**
```js
document.getElementById('year').textContent = new Date().getFullYear();
```
Point back at `index.html`'s `<span id="year"></span>` — "that's the
`getElementById` target."

**2. Dark mode toggle — the bigger piece, budget ~7 of the 10 minutes:**

First, add the button to `index.html` inside `.top-container`:
```html
<button id="theme-toggle" aria-label="Toggle dark mode">🌙</button>
```

Then in `script.js`:
```js
const toggleButton = document.getElementById('theme-toggle');
const STORAGE_KEY = 'theme';

function applyTheme(theme) {
  document.body.classList.toggle('dark-mode', theme === 'dark');
  toggleButton.textContent = theme === 'dark' ? '☀️' : '🌙';
}

const savedTheme = localStorage.getItem(STORAGE_KEY) || 'light';
applyTheme(savedTheme);

toggleButton.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark-mode');
  const nextTheme = isDark ? 'light' : 'dark';
  applyTheme(nextTheme);
  localStorage.setItem(STORAGE_KEY, nextTheme);
});
```

🔦 **EMPHASIZE, narrating as you type, in this order:**
1. `getElementById` — "find the thing"
2. `addEventListener('click', ...)` — "wait for the interaction"
3. `classList.toggle('dark-mode', ...)` — "change the thing"
4. `localStorage.setItem` / `getItem` — "remember the change after the
   page reloads — this is the browser's built-in tiny database"

This won't work yet because there's no `body.dark-mode` CSS rule —
that's expected. Say so: *"Nothing visually changes yet — we wired the
behavior but haven't styled the result. That's normal; behavior and
appearance are separate layers."* If time allows, add:
```css
body.dark-mode {
  background-color: #0f1b26;
  color: #d7e6ea;
}
```
and show it working. If you're behind schedule, **cut this CSS line
and move on** — the JS concepts are what matter here, not a fully
polished dark mode.

⏭️ **SKIP:** don't explain event bubbling, don't explain
`localStorage` size limits or security — out of scope for today.

---

## Stage 2 — React — ⏱️ 2:55–3:25 (30 min)

### Transition: Stage 1 → Stage 2

⌨️ **DO:** Stop the Stage 1 server (Ctrl+C in its terminal). Then:
```bash
cd ..              # back to the branch root, out of starter/
git checkout 02-react
cd starter
npm install
```

🗣️ **SAY, while `npm install` runs:**
> "Same move as the cold open — I'm checking out a different branch,
> and the whole project just became something else. Notice we have to
> reinstall dependencies here, where Stage 1 needed nothing. That's
> because `node_modules` — the folder holding every package your code
> depends on — is never committed to git. It's huge, it's fully
> derivable from `package.json`, and it can differ per platform. Every
> JavaScript project you'll ever clone starts with `npm install` for
> exactly this reason."

This is real dead time (10–30 seconds) — use it for the talking point
above rather than standing there silently.

⌨️ **DO:**
```bash
npm run dev
```
Open the printed URL (usually `http://localhost:5173`).

### 2a. Reorient — ⏱️ 2:55–3:00 (5 min)

🗣️ **SAY:**
> "This looks almost identical to where Stage 1's starter began —
> plain, unstyled. But look at the file structure now."

⌨️ **DO:** Open `src/components/` in the sidebar (still inside
`starter/`). Show the five files: `Hero.jsx`, `About.jsx`,
`Skills.jsx`, `Contact.jsx`, `Footer.jsx`.

🔦 **EMPHASIZE:**
> "We didn't rewrite the site. We reorganized it. Same five sections
> as Stage 1's HTML — now each one is its own file, its own unit."

Open `src/App.jsx` and show it's just:
```jsx
<Hero />
<About />
<Skills />
<Contact />
<Footer />
```
🗣️ **SAY:** "This reads almost like the outline of the page. That's
the pitch for components in one sentence: the code's *shape* matches
the page's *shape*."

⏭️ **SKIP:** don't explain JSX transpilation, Babel, or how Vite's dev
server works under the hood. Not today's topic.

### 2b. Declarative vs. imperative — ⏱️ 3:00–3:10 (10 min)

⌨️ **DO:** Open a second editor tab on `completed/` (`cd ../completed`
from `starter/` in a second terminal — no checkout needed, both
folders coexist on disk once you're on this branch). Open
`completed/src/components/Footer.jsx` next to Stage 1's `js/script.js`
(you'll need to recall its contents from memory or a note — it's not
on disk right now since Stage 1's branch isn't checked out anymore;
this is a good moment to say so out loud, see the emphasize note below).

🗣️ **SAY, pointing at both:**
> Stage 1:
> ```js
> document.getElementById('year').textContent = new Date().getFullYear();
> ```
> React:
> ```jsx
> <p className="copyright">© {new Date().getFullYear()} Sulagna Ghosh.</p>
> ```
> "Same value, same JS function underneath. But in React you just...
> put the expression in curly braces, right where it's displayed. You
> stop writing step-by-step instructions for *how* to find and change
> an element — you just describe *what* should be on the screen, and
> React handles making it true."

🔦 **EMPHASIZE:** this is the single most important mental model shift
of the whole workshop. Say it plainly, maybe twice, in slightly
different words. Ask: *"Who can tell me back, in their own words, what
'declarative' means here?"*

🔦 **EMPHASIZE (small aside, optional):** if a student asks to see
Stage 1's file again, that's a great excuse to name the tradeoff
directly: *"This is the cost of the branch-per-stage setup — I can't
have two* stages *open on disk at once, even though I can have two
folders within a stage. In a real project you'd keep these as
separate folders or repos if you needed to compare across stages
constantly. For today, we're trading that convenience for seeing
branches do something real."*

### 2c. The componentization payoff — ⏱️ 3:10–3:20 (10 min)

This is the centerpiece of Stage 2 — protect this time block above all
others in this stage if you're running behind.

⌨️ **DO:** Open the starter's `src/components/Skills.jsx` — show the
two hardcoded, nearly-identical `<div className="skill-row">` blocks.

🗣️ **SAY:** "Two skills, so two copy-pasted blocks. Fine for two. What
about ten?"

⌨️ **DO:** Now open `completed/`'s two files side by side:
`src/components/Skill.jsx`:
```jsx
function Skill({ image, imageClass, title, description }) {
  return (
    <div className="skill-row">
      <img className={imageClass} src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
```
and `src/components/Skills.jsx`:
```jsx
const skills = [
  { id: 'html-css-js', image: './images/computer.png', imageClass: 'image-computer',
    title: 'HTML, CSS & JavaScript', description: '...' },
  { id: 'git-deploy', image: './images/chillies.png', imageClass: 'image-chillies',
    title: 'Git & Deployment', description: '...' },
]

function Skills() {
  return (
    <div className="skills">
      <h2>My Skills.</h2>
      {skills.map((skill) => (
        <Skill key={skill.id} {...skill} />
      ))}
    </div>
  )
}
```

🔦 **EMPHASIZE — this is the moment, take your time:**
> "The markup exists exactly *once* now, in `Skill.jsx`. `Skills.jsx`
> is just data — an array — mapped onto that one component. Adding a
> third skill means adding one object to the array. Zero markup to
> copy-paste, zero risk of the copies drifting out of sync."

Ask the room directly: *"What would Stage 1 look like with ten
skills instead of two?"* Let someone answer before you say it: ten
manually copy-pasted blocks, ten chances to typo one.

⏭️ **SKIP:** don't explain the spread operator (`{...skill}`) syntax
in depth — say "this spreads all the object's fields as props" in one
sentence and move on. Don't derail into prop-types or TypeScript.

### 2d. Same idea, packaged differently — ⏱️ 3:20–3:25 (5 min)

⌨️ **DO:** Open `completed/src/useTheme.js`.

🗣️ **SAY:** "Same two browser APIs — `localStorage` and
`classList.toggle` — same logic as Stage 1's dark-mode code, if you
recall it. The only difference is it's now wrapped in a function
called `useTheme()` that any component can call. React doesn't replace
what you learned in Stage 1. It organizes it."

⌨️ **DO:** Toggle dark mode live in the browser (if you have
`completed/` running in another terminal/port), or narrate it from the
code. Let it be visibly *the same site* as Stage 1, running differently
underneath.

---

## Stage 3 — Next.js — ⏱️ 3:25–3:50 (25 min)

### Transition: Stage 2 → Stage 3

⌨️ **DO:** Stop Stage 2's server (running in `starter/`) — and the
second terminal on `completed/` from §2b/2d, if still open. From the
`starter/` terminal:
```bash
cd ..               # back to the branch root, out of starter/
git checkout 03-nextjs
cd starter
rm -rf node_modules
npm install
```

🗣️ **SAY, while it runs:**
> "Same branch switch as before, but notice the extra step —
> `rm -rf node_modules` before installing. Stage 2's React packages
> are still sitting in that folder from a minute ago, and git doesn't
> touch it on checkout because it was never tracked. Left alone, we'd
> be running Next.js with React's leftover dependencies, which breaks.
> Deleting first forces a clean install that actually matches this
> branch's `package.json`."

⌨️ **DO:**
```bash
npm run dev
```
Open `http://localhost:3000`.

### 3a. "So why does this exist?" — ⏱️ 3:25–3:30 (5 min)

🗣️ **SAY:** "Looks identical to the React version. So — why bother?"
*(pause, let it be a real question, don't answer immediately)*
"Three reasons, and we'll look at each one."

### 3b. File-based routing — ⏱️ 3:30–3:38 (8 min)

⌨️ **DO:** Open `completed/app/page.js` and
`completed/app/projects/page.js` (`starter/` doesn't have this page
yet).

🗣️ **SAY:**
> "In plain React, if you want a second page, you install a router
> library — react-router is the usual one — and configure which
> component renders for which URL. Here?" *(point at the file tree)*
> "This folder, `app/projects/`, containing a `page.js` file, **is**
> the `/projects` route. That's the whole implementation."

⌨️ **DO:** In the running dev server, navigate to
`http://localhost:3000/projects` — show it just works. Click "← Back
home" (built with `next/link`) — show the navigation happens instantly,
no full page reload.

🔦 **EMPHASIZE:** "A folder plus a file *is* a route. No router
library, no config file, no route array to maintain."

⏭️ **SKIP:** dynamic routes (`[slug]`), route groups, parallel routes —
all real Next.js features, all out of scope today. If asked, say
"there's a lot more the file-based router can do — dynamic routes,
nested layouts — worth exploring on your own."

### 3c. Fonts, metadata, and where code runs — ⏱️ 3:38–3:44 (6 min)

⌨️ **DO:** Open `completed/app/layout.js`.

🗣️ **SAY:** "Two things happening in this one file that used to be
separate concerns in Stages 1 and 2:"

Point at:
```js
import { Sacramento, Merriweather, Montserrat } from 'next/font/google'
```
> "Stage 1 and 2 both loaded fonts with a `<link>` tag pointing at
> Google's servers — every visitor's browser makes a request to Google
> before your fonts show up. Next.js downloads and self-hosts them at
> build time instead. Same fonts, one less external request."

Point at:
```js
export const metadata = {
  title: 'Sulagna Ghosh — Portfolio',
  description: '...',
}
```
> "This is the page `<title>` and meta description — the stuff search
> engines and link previews read — set once, here, instead of hand-
> written `<meta>` tags in every HTML file."

⏭️ **SKIP:** don't go deep on Server Components vs. Client Components
theory here — that's coming next, more concretely, with the theme
toggle. One line is enough now: "by default, everything you write in
Next.js runs on the server first, and only becomes HTML by the time it
reaches the browser — we'll see exactly what that buys us in a minute."

### 3d. The one client component — ⏱️ 3:44–3:50 (6 min)

This is Stage 3's version of Stage 2's "componentization payoff" —
give it real weight.

⌨️ **DO:** Open `completed/app/components/ThemeToggle.jsx`. Point at
line 1:
```jsx
'use client'
```

🗣️ **SAY:**
> "This one line is the entire story. This file is the *only*
> component on this page that needs to run in the browser — it's the
> only one using `useState`, clicking, `localStorage`. Every other file
> in `app/components/` — `Hero`, `About`, `Skills`, `Contact`,
> `Footer` — is a Server Component by default. They render to plain
> HTML on the server and ship *zero* JavaScript to the browser."

🔦 **EMPHASIZE — do this live if you have two minutes to spare:**
Open browser dev tools → Network tab, reload the Next.js page. Point at
the JS bundle size. If you still have the Stage 2 deployed URL or a
screenshot handy, compare against it. *"Stage 2 ships one big JS
bundle just to render text. Stage 3 ships almost nothing — just enough
to run this one button."*

If you don't have time for the live Network tab demo, say the same
point verbally and move on — don't let this overrun into deployment
time.

⏭️ **SKIP:** streaming SSR, hydration internals, the exact mechanics
of how Server/Client Components communicate — genuinely out of scope,
these are advanced topics even for working developers.

🗣️ **Land the plane (transition line into deployment):**
> "Three tools, one UI. Plain HTML/CSS/JS for anything small, or when
> you're learning. React once the UI has real interactive complexity.
> Next.js once you need routing, SEO, or server rendering out of the
> box. None of them are 'better' in a vacuum — they solve different
> amounts of problem."

---

## Deployment walkthrough — ⏱️ 3:50–4:00 (10 min, live)

This is a real deploy, not a slideshow — that's the payoff of having
restructured everything into branches (and each branch into
`starter/`/`completed/`) ahead of time.

### Stage 1 → GitHub Pages via GitHub Actions — ⏱️ 3:50–3:53

⌨️ **DO** (repo → Settings → Pages, on screen):
1. Source: **GitHub Actions** (not "Deploy from a branch" — that mode
   can only serve the repo root or `/docs`, and the site now lives in
   `completed/`)
2. The workflow at `.github/workflows/pages.yml` is already committed
   on this branch and runs automatically on push.

🗣️ **SAY:** "No manual build step from us — the workflow builds and
publishes `completed/` on every push. Live in about a minute." Refresh
the Pages URL live while you talk through Stage 2's setup, then come
back and show it's live.

🔦 **EMPHASIZE:** "This is the one place where moving the site into a
`completed/` folder cost us something — classic 'deploy from a branch'
mode only looks at the repo root. A few lines of GitHub Actions config
gets the same result."

### Stage 2 → GitHub Pages via `gh-pages` — ⏱️ 3:53–3:56

You're currently on the `03-nextjs` branch from Stage 3 — this is
another live checkout, back to `02-react`, worth narrating the same
way as the earlier transitions.

⌨️ **DO:**
```bash
cd ..                  # out of 03-nextjs's starter/, back to that branch's root
git checkout 02-react
cd completed
npm install
npm run deploy
```
🗣️ **SAY, while it runs:** "This one command does two things: builds
the app, then pushes the built output to a `gh-pages` branch." Then
flip Settings → Pages source to the `gh-pages` branch, same as before.

🔦 **EMPHASIZE:** "Notice this needed an extra tool and an extra
branch, where Stage 1 needed nothing (well — nothing beyond that
Actions workflow). That gap is a real reason teams move to Vercel or
Netlify once a project has a build step."

### Stage 3 → Vercel — ⏱️ 3:56–4:00

⌨️ **DO:** vercel.com/new (already connected ahead of time, see
pre-session setup) → confirm Production Branch is `03-nextjs` and
**Root Directory is `completed`** → push a trivial change (or just
show the existing deployment) → open the live URL.

🗣️ **SAY:** "Vercel builds this automatically on every push — no
manual deploy command, unlike Stage 2's GitHub Pages route. And
because Vercel lets you just point it at a subfolder, we didn't need
anything like Stage 1's Actions workflow here."

---

## Wrap-up — ⏱️ 4:00–4:05 (5 min)

🗣️ **SAY, as closing questions to the room (wait for actual answers,
don't just answer them yourself):**
- "What does React give you that plain JavaScript doesn't?"
- "What does Next.js give you that React doesn't?"

🗣️ **SAY:**
> "The repo has a branch per stage, each with `starter/` and
> `completed/` folders inside it — if you want to redo any of this on
> your own, that's where to start: `git checkout <branch-name>`. I'll
> drop the repo link and the three live URLs in the chat/group now."

⌨️ **DO:** Share the repo link and the three deployed URLs.

---

## If you're running behind schedule (cut in this order)

1. Cut the CSS `body.dark-mode` styling in Stage 1 (§1d) — leave the
   JS wired but unstyled, say so explicitly.
2. Cut the live Network-tab bundle-size demo in Stage 3 (§3d) — make
   the point verbally instead.
3. Shorten Stage 1 personalization (§1c) to 5 minutes instead of 10 —
   tell students to finish personalizing on their own time.
4. As a last resort, cut Stage 3's fonts/metadata walkthrough (§3c) —
   routing (§3b) and the client-component payoff (§3d) matter more.

**Never cut:** the Stage 2 `Skills.jsx`/`Skill.jsx` reveal (§2c) or the
Stage 3 `'use client'` reveal (§3d) — these are the two moments that
actually justify the whole workshop's premise. Also never skip the
`npm install` / `rm -rf node_modules && npm install` steps in the
transitions — without them the dev servers simply won't start.

## If you're running ahead of schedule (add in this order)

1. Live-code the `body.dark-mode` CSS in Stage 1 if you skipped it.
2. Add a third skill to the React `skills` array live (§2c) — since
   it's now just one array entry, this takes 30 seconds and makes the
   payoff concrete.
3. Open the Stage 3 `completed/app/globals.css` and point out it's the
   *same* CSS skills from Stage 1, just referencing fonts via
   `var(--font-...)` instead of hardcoded family names — full-circle
   moment.
4. Show `git log --all --oneline --graph` in the terminal — the whole
   workshop's history as five branches, visually.

---

## Full command reference (everything you'll type, in order)

```bash
# Pre-session rehearsal (not part of the live session)
cd TaruGurdian-Session
git checkout 01-html-css-js
git checkout 02-react
cd starter && npm install && cd ..
cd completed && npm install && cd ..
git checkout 03-nextjs
cd starter && npm install && cd ..
cd completed && npm install && cd ..
git checkout 01-html-css-js

# Cold open (already on 01-html-css-js)

# Stage 1
cd starter
python3 -m http.server 8000

# Transition to Stage 2
cd ..
git checkout 02-react
cd starter
npm install
npm run dev

# Transition to Stage 3
cd ..
git checkout 03-nextjs
cd starter
rm -rf node_modules
npm install
npm run dev

# Deploy — Stage 2 (checking back out from 03-nextjs)
cd ..
git checkout 02-react
cd completed
npm install
npm run deploy
```
