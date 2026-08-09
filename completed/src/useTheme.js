import { useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

// Same idea as Stage 1's script.js, wrapped in a hook so any
// component can read/toggle the theme without prop-drilling logic
// (just the value + the setter function get passed down).
export function useTheme() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(STORAGE_KEY) || 'light',
  )

  useEffect(() => {
    document.body.classList.toggle('dark-mode', theme === 'dark')
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  function toggleTheme() {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}
