/**
 * SocialIcons.jsx
 *
 * GitHub and LinkedIn icons using react-icons/si (Simple Icons).
 * The components keep the same public API (size prop, currentColor for
 * container-controlled colour) so every call-site still works unchanged.
 */
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'

export function GithubIcon({ size = 18, className = '' }) {
  return (
    <SiGithub
      size={size}
      className={className}
      aria-label="GitHub"
      // Uses currentColor so the parent container's `text-*` class controls the fill.
      style={{ color: 'currentColor' }}
    />
  )
}

export function LinkedinIcon({ size = 18, className = '' }) {
  return (
    <FaLinkedin
      size={size}
      className={className}
      aria-label="LinkedIn"
      style={{ color: 'currentColor' }}
    />
  )
}
