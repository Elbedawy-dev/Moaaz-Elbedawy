import { Link } from 'react-router-dom'

export default function Logo({ compact = false }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 text-text-primary no-underline">
      <span className="flex h-8 w-8 items-center justify-center rounded-control border border-border bg-surface-2 font-mono text-[11px] font-medium text-accent">
        {'</>'}
      </span>
      <span
        className={`font-heading text-sm font-bold tracking-heading ${compact ? 'hidden sm:inline' : ''}`}
      >
        Moaaz Elbedawy
      </span>
    </Link>
  )
}
