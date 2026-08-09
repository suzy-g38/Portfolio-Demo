# Build a Portfolio Site, Three Ways — Student Guide

Follow this guide during the session (or on your own afterward) to
build the same personal portfolio site three times: plain HTML/CSS/JS,
then React, then Next.js. Every command is copy-paste ready. Where
there's code to type, it's given in full.

**What you need before starting:**
- [Node.js](https://nodejs.org) installed (includes `npm`) — version 18 or newer
- [Git](https://git-scm.com) installed
- A code editor — [VS Code](https://code.visualstudio.com) recommended
- A terminal (Terminal on Mac, Command Prompt/PowerShell on Windows, or your editor's built-in terminal)

---

## Get the code

Open a terminal, `cd` into wherever you keep your projects, then:

```bash
git clone https://github.com/suzy-g38/Portfolio-Demo.git
cd Portfolio-Demo
```

This repo has one branch per stage of today's session. You'll switch
between them with `git checkout <branch-name>` as you go — each switch
changes every file in the folder to that stage's version. That's
expected; it's what a git branch actually is.

---

## Stage 1 — HTML, CSS & JavaScript

```bash
git checkout 01-html-css-js
cd starter
```

**Everything for this stage — editing, previewing, all of it — happens
inside this `starter/` folder.** Open the whole `Portfolio-Demo` folder
in your code editor, then open `starter/index.html` — it's already
split into five sections (hero, hello, skills, contact, footer), each
marked with a `TODO` comment. Those comments are your guide for the
rest of this stage.

Now preview it in a browser. Pick whichever of these is easiest on
your machine — they all show the same page, just choose one:

- **Simplest, no setup:** find `starter/index.html` in your file
  explorer/Finder and double-click it. It opens directly in your
  browser — no terminal needed. This works because the page doesn't
  fetch anything that requires a real server, so opening the file
  directly is perfectly fine here.
- **Auto-refreshes on save:** if you're using VS Code, install the
  "Live Server" extension, right-click `starter/index.html` in the
  file explorer, and choose "Open with Live Server." The page reloads
  automatically every time you save — handy while live-coding the CSS
  below.
- **Terminal, if you prefer it:** from inside `starter/`,
  ```bash
  python3 -m http.server 8000
  ```
  then open **http://localhost:8000**. Note: on Windows this command
  is sometimes `python` instead of `python3` (or Python may not be
  installed at all) — if it doesn't run, use one of the two options
  above instead.

It'll look like plain unstyled text right now — that's expected,
styling comes next.

### Style it — `css/style.css`

Add these blocks one at a time, saving and refreshing the browser
after each one so you can see the effect. They go in
`starter/css/style.css`.

**1. Base reset and typography:**
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

**2. The hero background and positioned images:**
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
💡 **Why `position: relative` on `.top-container`?** `position:
absolute` always positions an element relative to its nearest
*positioned* ancestor. Without `relative` here, the clouds would jump
all the way up to the top of the whole page instead of staying inside
the hero section. Try deleting that one line and refreshing to see it
happen, then put it back.

**3. Skills layout (two columns):**
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

### Make it yours — `index.html`

Edit these in `starter/index.html`:
- `<h1>I'm Your Name</h1>` → your name
- `<h3>your role</h3>` → what you're studying or building
- The paragraph under "Hello." → 2–3 real sentences about yourself
- The two skill blocks under "My Skills." → two real skills
- `mailto:name@email.com` → your real email address

### Add interactivity — `js/script.js`

**1. Make the footer year update automatically:**
```js
document.getElementById('year').textContent = new Date().getFullYear();
```
This targets the `<span id="year"></span>` already sitting in the
footer of `index.html`.

**2. Add a light/dark mode toggle.** First, add this button inside
`.top-container` in `index.html`:
```html
<button id="theme-toggle" aria-label="Toggle dark mode">🌙</button>
```
Then add this to `js/script.js`:
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
And this to `css/style.css` so the click actually changes how the page
looks:
```css
body.dark-mode {
  background-color: #0f1b26;
  color: #d7e6ea;
}
```

**Stuck at any point?** The finished version lives in the sibling
`completed/` folder — run `cd ../completed` and open `index.html`
there to compare.

### Deploy it — GitHub Pages

You don't have push access to this shared repo, so to put *your*
version online you'll push it to a brand-new repo of your own. Make
sure you're back at the `Portfolio-Demo` folder first (the one
containing `starter/` and `completed/` — `cd` there if you followed
the "stuck?" comparison above and ended up in `completed/`), then:

```bash
cp -r starter ~/my-portfolio-html   # copy your work out of this repo
cd ~/my-portfolio-html
git init
git add .
git commit -m "My portfolio"
git branch -M main
```

*(Windows and not using Git Bash? `cp -r` won't work in plain
Command Prompt — use PowerShell's `Copy-Item -Recurse starter
~\my-portfolio-html` instead, or just copy the `starter` folder in
File Explorer.)*

💡 Consider deleting or rewriting `README.md` in your copied folder
before pushing — it currently has workshop instructions in it, and
GitHub shows that file on your new repo's homepage.

Then on GitHub: [github.com/new](https://github.com/new) → create a
new **empty** repository (don't add a README or .gitignore — you
already have files to push). Copy the URL it gives you, then:

```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Finally: repo → **Settings → Pages** → Source: **Deploy from a
branch** → Branch: **main**, folder **/root** → Save. Live at
`https://<your-username>.github.io/<repo-name>/` within a minute or
two — no build step needed, since this is plain HTML/CSS/JS.

---

## Stage 2 — React

Stop your Stage 1 server (press `Ctrl+C` in its terminal). If you just
did the deploy walkthrough above, you're currently inside
`~/my-portfolio-html` — navigate back to the `Portfolio-Demo` folder
you cloned at the start (e.g. `cd ~/Portfolio-Demo`, adjusted to
wherever you actually cloned it). From there:

```bash
git checkout 02-react
cd starter
npm install
```

💡 **Why `npm install` this time and not in Stage 1?** React projects
depend on packages that aren't stored in the repo itself —
`node_modules/`, the folder holding all of them, is regenerated from
`package.json` every time. This is normal for basically every
JavaScript project you'll ever clone.

```bash
npm run dev
```

Open the URL your terminal prints (usually **http://localhost:5173**).
It'll look plain again, same as Stage 1's starter did.

### What's different

Open `src/components/` — the same five sections from Stage 1's HTML
now live as five separate files: `Hero.jsx`, `About.jsx`,
`Skills.jsx`, `Contact.jsx`, `Footer.jsx`. Open `src/App.jsx` — it's
just those five components listed in order:
```jsx
<Hero />
<About />
<Skills />
<Contact />
<Footer />
```
The site wasn't rewritten, just reorganized: one file per section
instead of one long HTML file.

Fill in your info in each file under `src/components/` (same fields as
Stage 1 — name, role, bio, skills, email).

### The big idea: components + data

Open `starter/src/components/Skills.jsx` — notice it's two
hand-written, nearly identical blocks, one per skill. Now compare it
to the finished version (`cd ../completed` from `starter/`, then open
`src/components/Skill.jsx` and `src/components/Skills.jsx` there):

```jsx
// Skill.jsx — one reusable piece
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
```jsx
// Skills.jsx — data, mapped onto that piece
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
💡 The markup exists exactly once, in `Skill.jsx`. Adding a third
skill means adding one object to the `skills` array — no HTML to
copy-paste. **Stretch goal:** try this refactor yourself in your
`starter/` version.

### Same logic, better organized

Open the finished version's `src/useTheme.js` — it's the exact same
`localStorage` and `classList.toggle` logic from Stage 1's
`script.js`, just packaged as a reusable function any component can
call. React doesn't replace what you learned in Stage 1 — it organizes
it.

### Deploy it — Vercel

Same idea as Stage 1: copy your work to its own new repo, then deploy
from there (back at the `Portfolio-Demo` folder — see the Windows note
in Stage 1's deploy section if `cp -r` doesn't work for you):

```bash
cp -r starter ~/my-portfolio-react
cd ~/my-portfolio-react
rm -rf node_modules   # don't copy/commit this — it gets regenerated
git init
git add .
git commit -m "My portfolio"
git branch -M main
```

Push it to a new GitHub repo the same way as Stage 1 (create an empty
repo at [github.com/new](https://github.com/new), then
`git remote add origin ...` and `git push -u origin main`).

Then, instead of GitHub Pages, use **Vercel** — React needs a build
step first, and Vercel handles that automatically:

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with
   GitHub.
2. Import the repo you just pushed.
3. Vercel auto-detects Vite — click **Deploy**, no configuration
   needed.
4. You get a live URL immediately, and it redeploys automatically
   every time you push again.

💡 **Why Vercel instead of GitHub Pages here?** GitHub Pages only
serves static files as-is — it can't run a build step. Vercel builds
your project (`npm run build`) before publishing it. You *can* still
use GitHub Pages for a React site, but it takes an extra tool (the
`gh-pages` package) — see `DEPLOYMENT.md` on the `main` branch if
you'd rather do that.

---

## Stage 3 — Next.js

Stop your Stage 2 server. If you just did the deploy walkthrough
above, you're currently inside `~/my-portfolio-react` — navigate back
to the `Portfolio-Demo` folder you cloned at the start first. From
there:

```bash
git checkout 03-nextjs
cd starter
rm -rf node_modules
npm install
```

💡 **Why delete `node_modules` first this time?** Stage 2's React
packages are still sitting in that folder, and they don't match this
branch's `package.json` (Next.js instead of plain React + Vite).
Deleting first guarantees a clean install for this branch.

```bash
npm run dev
```

Open **http://localhost:3000** — looks identical to the React version.

### File-based routing

`cd ../completed` to the finished version and look at `app/page.js`
(this is the `/` route) and `app/projects/page.js` (this is the
`/projects` route).
In plain React, adding a second page means installing and configuring
a router library. Here, a folder (`app/projects/`) containing a
`page.js` file *is* the route — nothing else to set up.

Try it: with the dev server running, visit
**http://localhost:3000/projects**.

**Stretch goal:** add a second page yourself in your `starter/`
version — create `starter/app/projects/page.js` with the same shape
as `starter/app/page.js`, then link to it from the footer using
`<Link href="/projects">` (`import Link from 'next/link'`).

### One component runs in the browser — the rest don't

Open the finished version's `app/components/ThemeToggle.jsx`. Notice
line 1:
```jsx
'use client'
```
This is the *only* component on the page that needs to run in the
browser — it's the only one using `useState` and responding to clicks.
Every other component (`Hero`, `About`, `Skills`, `Contact`, `Footer`)
renders to plain HTML on the server and ships zero JavaScript to your
browser. That's the core idea behind Next.js: pay the JavaScript cost
only where you actually need interactivity.

### Deploy it — Vercel

Same copy-to-a-new-repo flow as the last two stages (back at the
`Portfolio-Demo` folder):

```bash
cp -r starter ~/my-portfolio-nextjs
cd ~/my-portfolio-nextjs
rm -rf node_modules
git init
git add .
git commit -m "My portfolio"
git branch -M main
```

Push it to a new empty GitHub repo (same steps as Stage 1 and 2), then:

1. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
2. Vercel auto-detects Next.js — click **Deploy**, no configuration
   needed.
3. Live immediately, and it redeploys automatically on every push.

💡 **Why Vercel and not GitHub Pages at all here?** Next.js features
like Server Components need an actual server to run, not just static
files — GitHub Pages can only serve static files. Vercel is built by
the Next.js team specifically to run this.

---

## Where to go from here

- Every stage's `starter/` folder has its own `README.md` with the
  same instructions plus additional stretch goals.
- Compare your `starter/` work against the finished version any time —
  it's the sibling `completed/` folder, one `cd ../completed` away.
- Want to build your own version from scratch? Fork this repo, or just
  copy a stage's `starter/` folder into a new project of your own.
- To come back to any stage later: `git checkout <branch-name>` from
  inside the `Portfolio-Demo` folder — the branches are
  `00-reference-original`, `01-html-css-js`, `02-react`, `03-nextjs`.
