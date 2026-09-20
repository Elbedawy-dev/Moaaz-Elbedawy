import { Menu, Moon, Settings, Sun, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../data/navLinks'
import { useTheme } from '../context/ThemeContext'
import Logo from './Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [colorPickerOpen, setColorPickerOpen] = useState(false)
  const pickerRef = useRef(null)

  const { theme, toggleTheme, accentId, setAccentId, accents } = useTheme()

  // Close the color picker on outside click.
  useEffect(() => {
    if (!colorPickerOpen) return
    function handleClickOutside(e) {
      if (pickerRef.current && !pickerRef.current.contains(e.target)) {
        setColorPickerOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [colorPickerOpen])

  return (
    <header className="sticky top-0 z-50 h-navbar border-b border-border-subdued bg-surface-1/80 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-content items-center justify-between gap-4 px-5">
        <Logo compact />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-3 py-1.5 text-sm transition-colors ${
                  isActive
                    ? 'bg-accent-subtle text-accent'
                    : 'text-text-secondary hover:text-text-primary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Theme toggle — now actually functional */}
          <button
            type="button"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-9 w-9 items-center justify-center rounded-control border border-border
            bg-surface-2 text-text-secondary transition-colors hover:border-border-active hover:text-text-primary"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          {/* Accent color picker — gear icon, always pinned next to the theme toggle */}
          <div className="relative" ref={pickerRef}>
            <button
              type="button"
              aria-label="Change accent color"
              aria-expanded={colorPickerOpen}
              className="flex h-9 w-9 items-center justify-center rounded-control border border-border
              bg-surface-2 text-text-secondary transition-colors hover:border-border-active hover:text-text-primary"
              onClick={() => setColorPickerOpen((v) => !v)}
            >
              <Settings size={16} />
            </button>

            {colorPickerOpen ? (
              <div
                className="absolute right-0 top-full mt-2 flex gap-2 rounded-card border border-border
                bg-surface-1 p-3 shadow-card-hover"
              >
                {accents.map((a) => (
                  <button
                    key={a.id}
                    type="button"
                    aria-label={a.name}
                    title={a.name}
                    onClick={() => {
                      setAccentId(a.id)
                      setColorPickerOpen(false)
                    }}
                    className={`h-7 w-7 rounded-full border-2 transition-transform hover:scale-110 ${
                      accentId === a.id ? 'border-text-primary' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: `rgb(${a.rgb})` }}
                  />
                ))}
              </div>
            ) : null}
          </div>

          <Link
            to="/contact"
            className="hidden rounded-control bg-accent px-4 py-2 text-sm font-semibold text-text-primary
            shadow-glow transition-all hover:bg-accent-hover hover:shadow-glow-strong sm:inline-flex"
          >
            Get in Touch
          </Link>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-control border border-border text-text-secondary lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border-subdued bg-surface-1 px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-control px-3 py-2 text-sm ${
                    isActive ? 'bg-accent-subtle text-accent' : 'text-text-secondary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-control bg-accent px-4 py-2 text-center text-sm font-semibold
              text-text-primary sm:hidden"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  )
}