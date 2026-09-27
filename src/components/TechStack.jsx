import { useTranslation } from 'react-i18next'
import { Code2, Server, Database } from 'lucide-react'
import { getTechIcon } from './TechIcons'

const categories = [
  {
    icon: Code2,
    titleKey: 'home.techStack.frontend',
    items: [
      { name: 'React.js', highlight: true },
      { name: 'JavaScript (ES6+)', highlight: false },
      { name: 'HTML5', highlight: false },
      { name: 'CSS3', highlight: false },
      { name: 'Bootstrap', highlight: false },
      { name: 'Tailwind CSS', highlight: false },
    ],
  },
  {
    icon: Server,
    titleKey: 'home.techStack.backend',
    items: [
      { name: 'Node.js', highlight: true },
      { name: 'Express.js', highlight: false },
      { name: 'REST APIs', highlight: false },
    ],
  },
  {
    icon: Database,
    titleKey: 'home.techStack.databaseTools',
    items: [
      { name: 'MongoDB', highlight: true },
      { name: 'Git & GitHub', highlight: false },
      { name: 'Postman', highlight: false },
      { name: 'VS Code', highlight: false },
    ],
  },
]

export default function TechStack() {
  const { t } = useTranslation()

  return (
    <section className="mx-auto max-w-content px-5 py-16 lg:py-20">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        {t('home.techStack.eyebrow')}
      </p>
      <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-heading text-text-primary">
        {t('home.techStack.title')}
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {categories.map((category) => {
          const CategoryIcon = category.icon
          return (
            <article
              key={category.titleKey}
              className="
                group relative flex flex-col rounded-card
                border-2 border-border/80 bg-surface-1/95 p-6
                transition-all duration-300
                hover:-translate-y-1.5 hover:border-accent hover:shadow-card-hover
              "
            >
              <div className="flex items-center gap-3">
                <span
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-control border-2 border-border-active/40
                    bg-accent-subtle text-accent shadow-xs
                    transition-all duration-300 group-hover:scale-110 group-hover:border-border-active group-hover:shadow-glow
                  "
                >
                  <CategoryIcon size={18} />
                </span>
                <h3 className="font-heading text-lg font-bold tracking-heading text-text-primary">
                  {t(category.titleKey)}
                </h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.items.map((item) => {
                  const icon = getTechIcon(item.name, 14)
                  return (
                    <span
                      key={item.name}
                      className={`
                        inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs
                        transition-colors duration-200
                        ${
                          item.highlight
                            ? 'border-accent bg-accent-subtle text-accent font-semibold shadow-xs'
                            : 'border-border/80 bg-surface-2 text-text-secondary hover:border-accent/40'
                        }
                      `}
                    >
                      {icon}
                      {item.name}
                    </span>
                  )
                })}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
