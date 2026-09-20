export const PROJECT_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Full-Stack (MERN)' },
  { id: 'frontend', label: 'Frontend (HTML/CSS/JS)' },
]

export default function ProjectFilters({ value, onChange }) {
  return (
    <div
      className="inline-flex flex-wrap gap-2 rounded-full border border-border bg-surface-1 p-1"
      role="tablist"
      aria-label="Filter projects by category"
    >
      {PROJECT_FILTERS.map((filter) => {
        const active = value === filter.id

        return (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(filter.id)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              active
                ? 'bg-accent text-text-primary shadow-glow'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            {filter.label}
          </button>
        )
      })}
    </div>
  )
}
