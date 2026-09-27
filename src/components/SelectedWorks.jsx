import { useTranslation } from 'react-i18next'
import { ArrowUpRight, ImageIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { GithubIcon } from './SocialIcons'
import { getTechIcon } from './TechIcons'
import { projects } from '../data/projects'

export default function SelectedWorks() {
  const { t } = useTranslation()
  const featured = projects.filter((project) => project.featured)

  return (
    <section className="mx-auto max-w-content px-5 py-16 lg:py-20">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
        {t('home.selectedWorks.eyebrow')}
      </p>
      <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-heading text-text-primary">
        {t('home.selectedWorks.title')}
      </h2>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {featured.map((project) => (
          <article
            key={project.id}
            className="group flex h-full flex-col overflow-hidden rounded-card border-2 
              border-border/80
              bg-surface-1/95 transition-all duration-300 hover:-translate-y-1.5
              hover:border-accent hover:shadow-card-hover min-w-0"
          >
            <div className="aspect-16/10 overflow-hidden bg-surface-2">
              {project.image ? (
                <img
                  src={project.image}
                  alt={t('common.previewAlt', { title: project.title })}
                  className="h-full w-full object-cover transition-transform duration-500 
                  group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <ImageIcon size={36} className="text-text-tertiary" />
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col p-5">
              <p className="font-mono text-[11px] font-semibold text-accent">
                {t(`projects.items.${project.id}.subtitle`)}
              </p>
              
              <h3 className="mt-1 font-heading text-xl font-bold tracking-heading text-text-primary">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {t(`projects.items.${project.id}.description`)}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => {
                  const icon = getTechIcon(tech, 13)
                  return (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-surface-2 px-2.5 py-0.5
                    font-mono text-[11px] text-text-secondary hover:border-accent/40"
                    >
                      {icon}
                      {tech}
                    </span>
                  )
                })}
              </div>
              <div className="mt-auto flex items-center gap-4 pt-5 text-sm">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-accent transition-colors 
                  hover:text-accent-hover"
                >
                  {t('common.liveDemo')}
                  <ArrowUpRight size={14} className="rtl:-scale-x-100" />
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-text-secondary transition-colors 
                  hover:text-text-primary"
                >
                  <GithubIcon size={14} />
                  {t('common.code')}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-6 text-sm text-text-secondary">
        <Link to="/projects" className="text-accent hover:text-accent-hover">
          {t('home.selectedWorks.moreFrontend')}
        </Link>
      </p>
    </section> 
  ) 
}
