import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  Briefcase,
  Clock,
  Download,
  Globe,
  GraduationCap,
  MapPin,
} from 'lucide-react'
import CV from '../pdf/CV.pdf'

const CV_URL = CV

const personalInfo = [
  { id: 'name', value: 'Moaaz Elbedawy' },
  { id: 'role', valueKey: 'about.info.roleValue', icon: Briefcase },
  { id: 'education', valueKey: 'about.info.educationValue', icon: GraduationCap },
  { id: 'languages', valueKey: 'about.info.languagesValue', icon: Globe },
  { id: 'availability', valueKey: 'about.info.availabilityValue', icon: MapPin },
]

const stats = [
  { id: 'mern', value: '3' },
  { id: 'frontend', value: '~15' },
  { id: 'training', value: '120h' },
  { id: 'score', value: '88%' },
]

const timeline = [
  { id: 'nti', icon: GraduationCap },
  { id: 'diploma', icon: GraduationCap },
  { id: 'adan', icon: Briefcase },
  { id: 'freelance', icon: Briefcase },
]

export default function About() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()

  const fadeUp = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <>
      <section className="mx-auto max-w-content px-5 py-16 lg:py-20">
        <motion.div
          initial={reduceMotion ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
            ● {t('about.eyebrow')}
          </p>
          <h1
            className="mt-2 font-heading text-4xl font-extrabold tracking-heading 
            text-text-primary sm:text-5xl"
          >
            {t('about.title')}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-text-secondary">
            {t('about.intro')}
          </p>
        </motion.div>
      </section>

      <section
        className="mx-auto max-w-content px-5 pb-16 lg:grid lg:grid-cols-2 lg:gap-8 
    lg:pb-20"
      >
        <motion.div
          initial={reduceMotion ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="rounded-card border-2 border-border/80 bg-surface-1/95 p-6 shadow-xs"
        >
          <h2 className="font-heading text-lg font-bold tracking-heading text-text-primary">
            {t('about.personalInfo')}
          </h2>

          <dl className="mt-4 flex flex-col gap-4">
            {personalInfo.map((row) => (
              <div key={row.id} className="flex flex-col gap-1">
                <dt className="inline-flex items-center gap-2 text-sm text-text-tertiary">
                  {row.icon ? <row.icon size={14} className="text-accent" /> : null}
                  {t(`about.info.${row.id}`)}
                </dt>
                <dd className="text-start text-sm font-medium text-text-primary">
                  {row.valueKey ? t(row.valueKey) : row.value}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href={CV_URL}
            download
            className="mt-6 inline-flex items-center gap-2 rounded-control bg-accent 
          px-5 py-2.5 text-sm font-semibold text-text-primary shadow-glow transition-all 
          hover:bg-accent-hover hover:shadow-glow-strong"
          >
            <Download size={16} />
            {t('common.downloadCV')}
          </a>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 grid grid-cols-2 gap-4 lg:mt-0"
        >
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group rounded-card border-2 border-border/80 bg-surface-1/95 p-5 transition-all 
            duration-300 hover:-translate-y-1.5 hover:border-accent hover:shadow-card-hover"
            >
              <p className="font-heading text-3xl font-extrabold tracking-heading text-accent">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-bold text-text-primary">
                {t(`about.stats.${stat.id}.label`)}
              </p>
              <p className="font-mono text-xs text-text-tertiary">
                {t(`about.stats.${stat.id}.sublabel`)}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-content px-5 pb-20">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          ● {t('about.timelineEyebrow')}
        </p>
        <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-heading text-text-primary">
          {t('about.journey')}
        </h2>

        <div className="relative mt-12">
          <div className="absolute start-5 top-0 h-full w-px bg-border/80 lg:start-auto lg:left-1/2" />

          <div className="flex flex-col gap-10 lg:gap-14">
            {timeline.map((item, index) => {
              const Icon = item.icon
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={item.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-8"
                >
                  <span
                    className="absolute start-5 top-0 z-10 flex h-11 w-11 -translate-x-1/2 items-center
                  justify-center rounded-full border-2 border-accent bg-surface-1 text-accent shadow-glow
                  transition-transform duration-300 hover:scale-110 rtl:translate-x-1/2
                  lg:start-auto lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rtl:-translate-x-1/2"
                  >
                    <Icon size={18} />
                  </span>

                  <div
                    className={`ps-14 lg:ps-0 ${
                      isLeft ? 'lg:col-start-1 lg:pe-12' : 'lg:col-start-2 lg:ps-12'
                    }`}
                  >
                    <div
                      className="rounded-card border-2 border-border/80 bg-surface-1/95 p-6 text-start 
                  transition-all duration-300 hover:-translate-y-1.5 hover:border-accent 
                  hover:shadow-card-hover"
                    >
                      <p className="inline-flex items-center gap-1.5 font-mono text-xs text-text-tertiary">
                        <Clock size={12} className="text-accent" />
                        {t(`about.timeline.${item.id}.date`)}
                      </p>
                      <h3 className="mt-1 font-heading text-lg font-bold tracking-heading text-text-primary">
                        {t(`about.timeline.${item.id}.title`)}
                      </h3>
                      <p className="text-sm font-medium text-text-secondary">
                        {t(`about.timeline.${item.id}.org`)}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                        {t(`about.timeline.${item.id}.description`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
