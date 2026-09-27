import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Trans, useTranslation } from 'react-i18next'
import { Code2, Download, Sparkles, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import me from '../image/me.jpg'
import CV from '../pdf/CV.pdf'
import {
  ReactIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  NodeIcon,
  ExpressIcon,
  MongoIcon,
} from './TechIcons'

export default function Hero() {
  const { t, i18n } = useTranslation()
  const reduceMotion = useReducedMotion()
  const heroDescription = t('home.hero.description')

  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (reduceMotion) {
      setDisplayText(heroDescription)
      setIsTyping(false)
      return
    }

    let index = 0
    let timeoutId
    setDisplayText('')
    setIsTyping(true)

    const typeNextCharacter = () => {
      if (index >= heroDescription.length) {
        setIsTyping(false)
        return
      }

      const character = heroDescription[index]

      setDisplayText(heroDescription.slice(0, index + 1))
      index += 1

      let delay = 50

      if (character === ' ') {
        delay = 42
      }

      if (character === ',' || character === '-') {
        delay = 120
      }

      if (character === '.') {
        delay = 280
      }

      const variation = Math.floor(Math.random() * 16) - 8

      timeoutId = setTimeout(
        typeNextCharacter,
        Math.max(18, delay + variation)
      )
    }

    timeoutId = setTimeout(typeNextCharacter, 500)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [reduceMotion, heroDescription, i18n.language])

  return (
    <section className="mx-auto grid max-w-content items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-20">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface-1 px-3 py-1.5">
          <span className="relative flex h-2 w-2">
            <span
              className="
                absolute inline-flex h-full w-full
                animate-ping rounded-full bg-accent opacity-70
                motion-reduce:animate-none
              "
            />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>

          <span className="font-mono text-xs text-text-secondary">
            {t('home.hero.badge')}
          </span>
        </div>

        <h1
          className="
            font-heading text-3xl font-extrabold
            leading-[1.1] tracking-heading-tight
            text-text-primary sm:text-5xl
          "
        >
          <Trans
            i18nKey="home.hero.title"
            components={{
              0: <span className="text-accent" />,
              1: <span className="text-accent" />,
            }}
          />
        </h1>

        <div
          className="
            mt-5 min-h-42
            max-w-2xl text-base
            leading-7 text-text-secondary
            sm:min-h-35
          "
          aria-live="polite"
          aria-label={heroDescription}
        >
          <p>
            {displayText}
            <span
              aria-hidden="true"
              className={`
                relative ms-1 inline-block
                h-[1.05em] w-0.5
                translate-y-0.5
                rounded-full bg-accent
                transition-opacity duration-700
                ${isTyping ? 'opacity-100' : 'opacity-0'}
              `}
            >
              <span
                className={`
                  absolute inset-0
                  rounded-full bg-accent
                  ${isTyping ? 'animate-cursor-blink' : ''}
                `}
              />
            </span>
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            to="/projects"
            className="
              rounded-control bg-accent
              px-5 py-2.5 text-sm font-semibold
              text-text-primary 
              transition-all
              hover:bg-accent-hover">
            {t('home.hero.exploreWorks')}
          </Link>

          <a
            href={CV}
            download
            className="
              inline-flex items-center gap-2
              rounded-control border border-border
              bg-transparent px-5 py-2.5
              text-sm font-semibold
              text-text-primary
              transition-colors
              hover:border-border-active
              hover:bg-accent-subtle
            "
          >
            <Download size={16} />
            {t('common.downloadCV')}
          </a>
        </div>

        <div className="mt-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
            {t('home.hero.coreTech')}
          </p>
          <div className="mt-2.5 flex flex-wrap items-center gap-2.5">
            {[
              { component: ReactIcon, name: 'React' },
              { component: JavaScriptIcon, name: 'JavaScript' },
              { component: TypeScriptIcon, name: 'TypeScript' },
              { component: NodeIcon, name: 'Node.js' },
              { component: ExpressIcon, name: 'Express' },
              { component: MongoIcon, name: 'MongoDB' },
            ].map(({ component: Icon, name }) => (
              <div
                key={name}
                title={name}
                className="
                  group relative flex h-11 w-11 items-center justify-center
                  rounded-card border border-border bg-surface-1/90
                  shadow-xs transition-all duration-300
                  hover:-translate-y-1 hover:border-border-active
                  hover:bg-surface-hover hover:shadow-card-hover
                "
              >
                <Icon size={26} />
                <span
                  className="
                    pointer-events-none absolute -bottom-7 z-30
                    whitespace-nowrap rounded-md bg-surface-2
                    border border-border px-2 py-0.5
                    font-mono text-[10px] text-text-primary
                    opacity-0 shadow-md transition-opacity duration-200
                    group-hover:opacity-100
                  "
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="
            mt-7 flex flex-wrap
            items-center gap-x-3 gap-y-2
            text-sm text-text-secondary
          "
        >
          <span className="inline-flex items-center gap-1.5">
            <Code2 size={14} className="text-accent" />
            {t('home.hero.cleanCode')}
          </span>

          <span className="text-border">·</span>

          <span className="inline-flex items-center gap-1.5">
            <Sparkles size={14} className="text-accent" />
            {t('home.hero.mernSpecialist')}
          </span>

          <span className="text-border">·</span>

          <span className="inline-flex items-center gap-1.5">
            <UserRound size={14} className="text-accent" />
            {t('home.hero.handsOnLearner')}
          </span>
        </div>
      </motion.div>

      <div className="relative isolate mx-auto w-full max-w-105 lg:max-w-none">
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute -inset-6 z-0
            rounded-full bg-radial from-accent/45 via-accent/15 to-transparent
            blur-3xl
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute -inset-2.5 z-0
            -rotate-2 rounded-card border-2 border-accent/50
            bg-accent/10 shadow-glow
            transition-transform duration-500
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute -bottom-4 -end-4 z-0
            h-full w-full rotate-2 rounded-card
            border border-accent/30 bg-accent/5
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute -top-5 -end-5 z-0
            h-24 w-24 rotate-12 rounded-xl
            border border-accent/40 bg-accent/15
            shadow-glow backdrop-blur-xs
          "
        />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.08,
          }}
          className="
            relative z-10 overflow-hidden rounded-card
            border-2 border-border/80
            bg-surface-1 shadow-card-hover
            transition-all duration-300
            hover:border-border-active hover:shadow-glow
          "
        >
          <div
            className="
              flex items-center justify-between
              bg-surface-2 px-2 py-2.5
              sm:px-4
            "
          >
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-text-tertiary/50" />
              <span className="h-2.5 w-2.5 rounded-full bg-text-tertiary/30" />
            </div>

            <span className="font-mono text-[11px] text-text-tertiary">
              {t('home.hero.browserHandle')}
            </span>

            <span
              className="
                rounded-full bg-accent-subtle
                px-2 py-0.5
                font-mono text-[10px]
                text-accent
              "
            >
              {t('home.hero.openToWork')}
            </span>
          </div>

          <div
            className="
              relative flex aspect-3/4
              items-center justify-center
              bg-surface-2
            "
          >
            <div
              className="
                flex h-full w-full
                items-center justify-center
                bg-linear-to-b
                from-surface-hover
                to-surface-2
              "
            >
              <img
                src={me}
                alt={t('home.hero.photoAlt')}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="
            absolute -bottom-5 -start-3 sm:-bottom-6 sm:-start-6 z-20
            flex items-center gap-3.5
            rounded-card border-2 border-border-active
            bg-surface-1/95 px-4 py-3
            shadow-glow-strong backdrop-blur-md
            transition-transform duration-300
            hover:scale-[1.03]
          "
        >
          <div
            className="
              flex h-11 w-11 shrink-0 items-center justify-center
              rounded-control bg-accent text-text-primary shadow-glow
            "
          >
            <Sparkles size={20} />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-heading text-lg font-extrabold tracking-heading text-text-primary">
                {t('home.hero.floatingStatValue')}
              </span>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
            </div>
            <p className="font-mono text-xs text-text-secondary">
              {t('home.hero.floatingStatLabel')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
