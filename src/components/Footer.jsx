import { Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { navLinks } from '../data/navLinks'
import Logo from './Logo'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-border-subdued bg-surface-1">
      <div className="mx-auto grid max-w-content gap-10 px-5 py-16 md:grid-cols-3">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-sm text-sm text-text-secondary">
            {t('footer.blurb')}
          </p>
        </div>

        <nav className="flex flex-col gap-2" aria-label={t('footer.navAria')}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-text-secondary transition-colors hover:text-accent"
            >
              {t(link.labelKey)}
            </Link>
          ))}
        </nav>

        <div className="flex items-start gap-3">
          <a
            href="https://github.com/Elbedawy-dev"
            aria-label={t('footer.githubAria')}
            className="flex h-10 w-10 items-center justify-center rounded-control border border-border text-text-secondary transition-colors hover:border-border-active hover:text-accent"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://linkedin.com/in/moaaz-elbedawy"
            target="_blank"
            rel="noreferrer"
            aria-label={t('footer.linkedinAria')}
            className="flex h-10 w-10 items-center justify-center rounded-control border border-border text-text-secondary transition-colors hover:border-border-active hover:text-accent"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="https://moaazelbedawy@gmail.com"
            aria-label={t('footer.emailAria')}
            className="flex h-10 w-10 items-center justify-center rounded-control border border-border text-text-secondary transition-colors hover:border-border-active hover:text-accent"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <div className="border-t border-border-subdued">
        <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-3 px-5 py-4 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-text-tertiary">{t('footer.copyright')}</p>
          <span className="inline-flex items-center gap-2 font-mono text-xs text-text-secondary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {t('footer.openToOpportunities')}
          </span>
        </div>
      </div>
    </footer>
  )
}
