import { createContext, useContext, useEffect, useState, useCallback } from 'react'

// Each accent option: id (stored in localStorage), display name, and two
// RGB triplets (base + hover) written directly onto --color-accent /
// --color-accent-hover. Add/remove entries here to change what shows up
// in the gear picker.
export const ACCENTS = [
  { id: 'orange', name: 'Burnt Orange', rgb: '193 87 31', hoverRgb: '217 102 40' },
  { id: 'blue', name: 'Steel Blue', rgb: '91 124 153', hoverRgb: '108 145 176' },
  { id: 'sage', name: 'Sage Green', rgb: '138 154 126', hoverRgb: '158 174 146' },
  { id: 'violet', name: 'Muted Violet', rgb: '124 124 155', hoverRgb: '145 145 178' },
  { id: 'rose', name: 'Dusty Rose', rgb: '155 107 122', hoverRgb: '175 127 142' },
]

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return localStorage.getItem('theme') || 'dark'
  })
  const [accentId, setAccentId] = useState(() => {
    if (typeof window === 'undefined') return 'orange'
    return localStorage.getItem('accent') || 'orange'
  })

  // Apply theme to <html data-theme="..."> so the CSS overrides in index.css kick in.
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  // Apply the chosen accent by writing the RGB triplets straight onto :root
  // as inline style properties — this overrides the :root defaults from
  // index.css and every component using accent/border-active/shadow-glow
  // updates instantly, with no re-render of the components themselves needed.
  useEffect(() => {
    const accent = ACCENTS.find((a) => a.id === accentId) ?? ACCENTS[0]
    document.documentElement.style.setProperty('--color-accent', accent.rgb)
    document.documentElement.style.setProperty('--color-accent-hover', accent.hoverRgb)
    localStorage.setItem('accent', accentId)
  }, [accentId])

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, accentId, setAccentId, accents: ACCENTS }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider')
  return ctx
}