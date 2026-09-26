/**
 * TechIcons.jsx
 *
 * Single source of truth for all brand-colored technology icons used
 * site-wide (Hero, Skills, Projects, TechStack, etc.).
 * All icons come from `react-icons/si` (Simple Icons set) so they are
 * pixel-accurate, officially branded, and always up-to-date.
 *
 * Each named export is a thin wrapper that applies the correct brand
 * colour and forwards a `size` prop so call-sites don't need to think
 * about colours.
 *
 * `getTechIcon(name, size)` is a convenience factory used wherever
 * we only have a plain-text tech name (e.g. from project stack arrays).
 */

import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiGit,
  SiPostman,
  SiFigma,
  SiBootstrap,
  SiVite,
  SiNextdotjs,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

// ─── Named icon wrappers ───────────────────────────────────────────────────

export function ReactIcon({ size = 28 }) {
  return <SiReact size={size} color="#61DAFB" aria-label="React" />
}

export function JavaScriptIcon({ size = 28 }) {
  return <SiJavascript size={size} color="#F7DF1E" aria-label="JavaScript" />
}

export function TypeScriptIcon({ size = 28 }) {
  return <SiTypescript size={size} color="#3178C6" aria-label="TypeScript" />
}

export function NodeIcon({ size = 28 }) {
  return <SiNodedotjs size={size} color="#5FA04E" aria-label="Node.js" />
}

export function ExpressIcon({ size = 28, isDark = true }) {
  // Express has no single brand colour — white on dark, black on light.
  return <SiExpress size={size} color={isDark ? '#FFFFFF' : '#000000'} aria-label="Express.js" />
}

export function MongoIcon({ size = 28 }) {
  return <SiMongodb size={size} color="#47A248" aria-label="MongoDB" />
}

export function HtmlIcon({ size = 28 }) {
  return <SiHtml5 size={size} color="#E34F26" aria-label="HTML5" />
}

export function CssIcon({ size = 28 }) {
  return <SiCss size={size} color="#1572B6" aria-label="CSS3" />
}

export function TailwindIcon({ size = 28 }) {
  return <SiTailwindcss size={size} color="#06B6D4" aria-label="Tailwind CSS" />
}

export function GitIcon({ size = 28 }) {
  return <SiGit size={size} color="#F05032" aria-label="Git" />
}

export function VSCodeIcon({ size = 28 }) {
  return <VscVscode size={size} color="#007ACC" aria-label="VS Code" />
}

export function PostmanIcon({ size = 28 }) {
  return <SiPostman size={size} color="#FF6C37" aria-label="Postman" />
}

export function FigmaIcon({ size = 28 }) {
  return <SiFigma size={size} color="#F24E1E" aria-label="Figma" />
}

export function BootstrapIcon({ size = 28 }) {
  return <SiBootstrap size={size} color="#7952B3" aria-label="Bootstrap" />
}

export function ViteIcon({ size = 28 }) {
  return <SiVite size={size} color="#646CFF" aria-label="Vite" />
}

export function NextIcon({ size = 28 }) {
  return <SiNextdotjs size={size} color="#000000" aria-label="Next.js" />
}

// ─── getTechIcon factory ────────────────────────────────────────────────────
/**
 * Map a plain-text technology name (e.g. "React", "Node.js", "Tailwind CSS")
 * to the matching branded icon component. Returns `null` if no match.
 *
 * `isDark` is forwarded to ExpressIcon so it can adapt its colour to the
 * current theme, but all other icons use fixed brand colours regardless.
 */
export function getTechIcon(name, size = 16, isDark = true) {
  const n = name.toLowerCase().replace(/[\s.]/g, '')

  if (n.includes('react') && !n.includes('native')) return <ReactIcon size={size} />
  if (n.includes('javascript') || n === 'js') return <JavaScriptIcon size={size} />
  if (n.includes('typescript') || n === 'ts') return <TypeScriptIcon size={size} />
  if (n.includes('node')) return <NodeIcon size={size} />
  if (n.includes('express')) return <ExpressIcon size={size} isDark={isDark} />
  if (n.includes('mongo')) return <MongoIcon size={size} />
  if (n.includes('html')) return <HtmlIcon size={size} />
  if (n.includes('tailwind')) return <TailwindIcon size={size} />
  if (n.includes('css') && !n.includes('tailwind')) return <CssIcon size={size} />
  if (n.includes('bootstrap')) return <BootstrapIcon size={size} />
  if (n === 'git' || n.includes('github')) return <GitIcon size={size} />
  if (n.includes('vscode') || n === 'vscode') return <VSCodeIcon size={size} />
  if (n.includes('postman')) return <PostmanIcon size={size} />
  if (n.includes('figma')) return <FigmaIcon size={size} />
  if (n.includes('vite')) return <ViteIcon size={size} />
  if (n.includes('next')) return <NextIcon size={size} />

  return null
}
