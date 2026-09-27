import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function FinalCTA() {
  const { t } = useTranslation()

  return (
    <section className="mx-auto max-w-content px-5 pb-20 pt-8">
      <div className="rounded-card border border-border bg-surface-1 px-6 py-12 text-center 
      shadow-glow sm:px-12">
        <h2 className="mx-auto max-w-2xl font-heading text-3xl font-extrabold tracking-heading 
        text-text-primary">
          {t('home.cta.headline')}
        </h2>
        <p className="mt-4 text-text-secondary">
          {t('home.cta.text')}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            className="rounded-control bg-accent px-5 py-2.5 text-sm font-semibold text-text-primary 
            shadow-glow transition-all hover:bg-accent-hover hover:shadow-glow-strong"
          >
            {t('home.cta.getInTouch')}
          </Link>
          <Link
            to="/about"
            className="rounded-control border border-border px-5 py-2.5 text-sm font-semibold 
            text-text-primary transition-colors hover:border-border-active hover:bg-accent-subtle"
          >
            {t('home.cta.readBio')}
          </Link>
        </div>
      </div>
    </section>
  )
}
