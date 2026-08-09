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
