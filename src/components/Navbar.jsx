import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Settings, Sun, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
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

  // Freeze page scroll while the mobile menu is open, and always restore
  // it on close/unmount so a stuck "no-scroll" state can never happen.
  useEffect(() => {
    if (open) {
      const prevBodyOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prevBodyOverflow
      }
    }
  }, [open])

  // Auto-close mobile menu if viewport resized to desktop or user presses Escape
  useEffect(() => {
    if (!open) return
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setOpen(false)
      }
    }
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <>
      <header
        className={`${
          open ? 'fixed inset-x-0 top-0' : 'sticky top-0'
        } z-50 h-navbar w-full border-b border-border-subdued bg-surface-1/80 backdrop-blur-md`}
      >
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
            {/* Theme toggle */}
            <button
              type="button"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="flex h-9 w-9 items-center justify-center rounded-control border border-border
              bg-surface-2 text-text-secondary transition-colors hover:border-border-active 
              hover:text-text-primary cursor-pointer"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* Accent color picker */}
            <div className="relative" ref={pickerRef}>
              <button
                type="button"
                aria-label="Change accent color"
                aria-expanded={colorPickerOpen}
                className="flex h-9 w-9 items-center justify-center rounded-control border border-border
                bg-surface-2 text-text-secondary transition-colors hover:border-border-active 
                hover:text-text-primary cursor-pointer"
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
              aria-expanded={open}
              aria-controls="mobile-menu-panel"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>
      {/* Spacer keeps normal document flow height while header is temporarily fixed */}
      {open && <div className="h-navbar" aria-hidden="true" />}

      {/* Mobile menu: dark overlay + backdrop blur + slide/fade-in panel.
          Rendered via React Portal directly into document.body to prevent the header's
          backdrop-blur-md (backdrop-filter) from acting as a containing block for fixed positioning,
          which previously collapsed the overlay height to 0. */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                key="mobile-menu-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="fixed inset-0 top-16 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
                onClick={() => setOpen(false)}
                aria-hidden="true"
              />
            )}

            {open && (
              <motion.div
                key="mobile-menu-panel"
                id="mobile-menu-panel"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="fixed inset-x-0 top-16 z-50 border-t border-border-subdued
                bg-surface-1 px-5 py-4 shadow-card-hover lg:hidden"
              >
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
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  )
}