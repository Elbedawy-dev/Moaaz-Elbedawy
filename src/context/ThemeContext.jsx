import { createContext, useContext, useEffect, useState, useCallback } from 'react'

// Each accent option: id (stored in localStorage), display name, and two
// RGB triplets (base + hover) written directly onto --color-accent /
// --color-accent-hover. Add/remove entries here to change what shows up
// in the gear picker.
export const ACCENTS = [
  { id: 'orange', name: 'Burnt Orange', rgb: '193 87 31', hoverRgb: '217 102 40' },
  { id: 'blue', name: 'Electric Blue', rgb: '59 130 246', hoverRgb: '96 165 250' },
  { id: 'emerald', name: 'Emerald', rgb: '16 185 129', hoverRgb: '52 211 153' },
  { id: 'violet', name: 'Violet', rgb: '139 92 246', hoverRgb: '167 139 250' },
  { id: 'rose', name: 'Rose', rgb: '244 63 94', hoverRgb: '251 113 133' },
  { id: 'amber', name: 'Amber', rgb: '245 158 11', hoverRgb: '251 191 36' },
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