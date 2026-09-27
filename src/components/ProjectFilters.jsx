import { useTranslation } from 'react-i18next'

export const PROJECT_FILTERS = [
  { id: 'all', labelKey: 'projects.filters.all' },
  { id: 'fullstack', labelKey: 'projects.filters.fullstack' },
  { id: 'frontend', labelKey: 'projects.filters.frontend' },
]

export default function ProjectFilters({ value, onChange }) {
  const { t } = useTranslation()

  return (
    <div
      className="inline-flex rounded-full border border-border bg-surface-1 p-1"
      role="tablist"
      aria-label={t('projects.filterAria')}
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
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors 
              cursor-pointer ${
              active
                ? 'bg-accent text-text-primary shadow-glow'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            {t(filter.labelKey)}
          </button>
        )
      })}
    </div>
  )
}
