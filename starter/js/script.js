// ============================================
// BOILERPLATE — this is where we add interactivity.
// Compare against ../completed/js/script.js
// if you get stuck.
// ============================================

// TODO 1: Find the <span id="year"> element and set
// its text to the current year, so the footer never
// goes out of date.
//
// Hint: document.getElementById(...) then set
// .textContent to new Date().getFullYear()


// TODO 2 (stretch goal): Add a light/dark mode toggle.
//   a) Add a <button id="theme-toggle">🌙</button>
//      somewhere in index.html (e.g. inside .top-container)
//   b) Listen for a "click" on that button
//   c) Toggle a class (e.g. "dark-mode") on <body>
//   d) In style.css, style body.dark-mode with a
//      dark background + light text


// Footer year — never goes stale.
document.getElementById('year').textContent = new Date().getFullYear();

// Light/dark mode toggle, persisted in localStorage.
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
