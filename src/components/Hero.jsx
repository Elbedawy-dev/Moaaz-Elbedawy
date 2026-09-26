import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Code2, Download, Sparkles, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import me from '../image/me.jpg'
import CV from '../pdf/CV.pdf'

const heroDescription =
  "I'm Moaaz Elbedawy, a MERN Stack developer specializing in building \
  web applications for the education and e-commerce sectors - from learning \
  platforms and tutoring marketplaces to point-of-sale and online store \
  systems."

export default function Hero() {
  const reduceMotion = useReducedMotion()

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

    const typeNextCharacter = () => {
      if (index >= heroDescription.length) {
        setIsTyping(false)
        return
      }

      const character = heroDescription[index]

      setDisplayText(heroDescription.slice(0, index + 1))
      index += 1

      // Base typing speed
      let delay = 50

      // Natural pause after spaces
      if (character === ' ') {
        delay = 42
      }

      // Slight pause after commas and hyphens
      if (character === ',' || character === '-') {
        delay = 120
      }

      // Longer pause after a full stop
      if (character === '.') {
        delay = 280
      }

      // Small random variation makes the typing
      // feel less robotic.
      const variation = Math.floor(Math.random() * 16) - 8

      timeoutId = setTimeout(
        typeNextCharacter,
        Math.max(18, delay + variation)
      )
    }

    // Small delay before typing starts
    timeoutId = setTimeout(typeNextCharacter, 500)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [reduceMotion])

  return (
    <section className="mx-auto grid max-w-content items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-20">

      {/* ==================== LEFT ==================== */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >

        {/* Availability Badge */}
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
            Open to Freelance & full-time Opportunities
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="
            font-heading text-3xl font-extrabold
            leading-[1.1] tracking-heading-tight
            text-text-primary sm:text-5xl
          "
        >
          I&apos;m
          <span className="text-accent"> MERN</span> Stack{' '}
          <span className="text-accent">Web</span> Developer.
        </h1>

        {/* ==================== TYPEWRITER ==================== */}
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

            {/* Professional Cursor */}
            <span
              aria-hidden="true"
              className={`
                relative ml-1 inline-block
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

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3">

          <Link
            to="/projects"
            className="
              rounded-control bg-accent
              px-5 py-2.5 text-sm font-semibold
              text-text-primary shadow-glow
              transition-all
              hover:bg-accent-hover
              hover:shadow-glow-strong
            "
          >
            Explore Selected Works
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
            Download CV
          </a>

        </div>

        {/* Skills */}
        <div
          className="
            mt-8 flex flex-wrap
            items-center gap-x-3 gap-y-2
            text-sm text-text-secondary
          "
        >

          <span className="inline-flex items-center gap-1.5">
            <Code2 size={14} className="text-accent" />
            Clean Code
          </span>

          <span className="text-border">·</span>

          <span className="inline-flex items-center gap-1.5">
            <Sparkles size={14} className="text-accent" />
            MERN Specialist
          </span>

          <span className="text-border">·</span>

          <span className="inline-flex items-center gap-1.5">
            <UserRound size={14} className="text-accent" />
            Hands-on Learner
          </span>

        </div>
      </motion.div>

      {/* ==================== RIGHT ==================== */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.55,
          delay: 0.08,
        }}
        className="
          overflow-hidden rounded-card
          border border-border
          bg-surface-1
        "
      >

        {/* Browser Header */}
        <div
          className="
            flex items-center justify-between
            bg-surface-2 px-2 py-2.5
            sm:px-4
          "
        >

          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#C1571F]/80" />

            <span className="h-2.5 w-2.5 rounded-full bg-text-tertiary/50" />

            <span className="h-2.5 w-2.5 rounded-full bg-text-tertiary/30" />
          </div>

          <span className="font-mono text-[11px] text-text-tertiary">
            moaaz.elbedawy//mern-stack
          </span>

          <span
            className="
              rounded-full bg-accent-subtle
              px-2 py-0.5
              font-mono text-[10px]
              text-accent
            "
          >
            Open to Work
          </span>

        </div>

        {/* Profile Image */}
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
              alt="Moaaz Elbedawy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

      </motion.div>
    </section>
  )
}