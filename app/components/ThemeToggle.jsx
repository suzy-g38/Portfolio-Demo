'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

// The "use client" directive at the top of this file is the whole
// story: this is the ONE component on the page that needs to run in
// the browser (it uses useState/useEffect and touches localStorage).
// Every other component in app/components/ is a Server Component by
// default and ships zero JavaScript to the browser — compare that to
// Stage 2, where the entire app is client-side JS just to render text.
function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  // Reads localStorage after mount only — the server can't see
  // localStorage, so the first render has to match on both sides
  // ('light'), then this effect corrects it once we're in the browser.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from a browser-only API on mount, not derivable during render
    setTheme(localStorage.getItem(STORAGE_KEY) || 'light')
  }, [])

  useEffect(() => {
    document.body.classList.toggle('dark-mode', theme === 'dark')
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  function toggleTheme() {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <button id="theme-toggle" aria-label="Toggle dark mode" onClick={toggleTheme}>
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}

export default ThemeToggle
