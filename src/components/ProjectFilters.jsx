export const PROJECT_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'MERN Stack' },
  { id: 'frontend', label: 'Frontend (Native)' },
]

export default function ProjectFilters({ value, onChange }) {
  return (
    <div
      className="inline-flex flex-wrap rounded-full border border-border
      bg-surface-1 p-1"
      role="tablist"
      aria-label="Filter projects by category">
      {PROJECT_FILTERS.map((filter) => {
        const active = value === filter.id

        return (
          <button
            key={filter.id}
            type="button"
            // role="tab"
            aria-selected={active}
            onClick={() => onChange(filter.id)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium 
              transition-colors cursor-pointer 
              
            ${ active
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
