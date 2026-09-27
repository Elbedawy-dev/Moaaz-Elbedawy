import { useTranslation } from 'react-i18next'
import { Code2, GraduationCap, MessageSquare, Wrench } from 'lucide-react'

const points = [
  {
    icon: MessageSquare,
    key: 'communication',
  },
  {
    icon: Code2,
    key: 'cleanCode',
  },
  {
    icon: Wrench,
    key: 'problemSolver',
  },
  {
    icon: GraduationCap,
    key: 'learner',
  },
]

export default function WhyWorkWithMe() {
  const { t } = useTranslation()

  return (
    <section className="mx-auto max-w-content px-5 py-16 lg:py-20">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        {t('home.why.eyebrow')}
      </p>
      <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-heading text-text-primary">
        {t('home.why.title')}
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {points.map((point) => {
          const Icon = point.icon
          return (
            <article
              key={point.key}
              className="
                group relative rounded-card border-2 border-border/80 bg-surface-1/95 p-6
                transition-all duration-300
                hover:-translate-y-1.5 hover:border-accent hover:shadow-card-hover
              "
            >
              <span
                className="
                  mb-4 flex h-11 w-11 items-center justify-center
                  rounded-control border-2 border-border-active/40
                  bg-accent-subtle text-accent shadow-xs
                  transition-all duration-300 group-hover:scale-110 group-hover:border-border-active group-hover:shadow-glow
                "
              >
                <Icon size={20} />
              </span>
              <h3 className="font-heading text-lg font-bold tracking-heading text-text-primary">
                {t(`home.why.${point.key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {t(`home.why.${point.key}.body`)}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
