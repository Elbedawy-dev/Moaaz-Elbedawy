import { motion, useReducedMotion } from 'framer-motion'
import { Code2, Download, Sparkles, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import me from '../image/me.jpg'
import CV from '../pdf/CV.pdf'

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="mx-auto grid max-w-content items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-20">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface-1 
        px-3 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70
             motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-xs text-text-secondary">
            Open to Freelance & Full-Time Opportunities
          </span>
        </div>

        <h1 className="font-heading text-3xl font-extrabold leading-[1.1] tracking-heading-tight 
        text-text-primary sm:text-5xl">I'm 
          <span className="text-accent"> Mearn</span> Stack {' '}
          <span className="text-accent">Web</span> Develober.
        </h1>
    {/* I'm Mearn Stack Web Develober */}
        <p className="mt-5 max-w-xl text-base text-text-secondary">
          Hi, I&apos;m <strong className="font-semibold text-text-primary">Moaaz Elbedawy</strong>{' '}
          - a Computer Science student and Full-Stack MERN Developer, building real - world
          web applications through hands - on projects using React, Node.js, Express, and
          MongoDB.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            to="/projects"
            className="rounded-control bg-accent px-5 py-2.5 text-sm font-semibold text-text-primary shadow-glow 
            transition-all hover:bg-accent-hover hover:shadow-glow-strong"
          >
            Explore Selected Works
          </Link>
          {/* TODO: replace # with the real CV file URL */}
          <a href={CV}
            className="inline-flex items-center gap-2 rounded-control border border-border bg-transparent
             px-5 py-2.5 text-sm font-semibold text-text-primary transition-colors 
             hover:border-border-active hover:bg-accent-subtle">
            <Download size={16} />
            Download CV
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-text-secondary">
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
            Hands - On Learner
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="overflow-hidden rounded-card border border-border bg-surface-1"
      >
        <div className="flex items-center justify-between
         bg-surface-2 px-2 sm:px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#C1571F]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-text-tertiary/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-text-tertiary/30" />
          </div>
          <span className="font-mono text-[11px] text-text-tertiary gap-1">
            moaaz.elbedawy//mearn-stack
          </span>
          <span className="rounded-full bg-accent-subtle px-2 py-0.5 font-mono text-[10px]
           text-accent">
            Open to Work
          </span>
        </div>

        <div className="relative flex aspect-3/4 items-center justify-center bg-surface-2 sm:aspect-3/4">      
          <div className="flex h-full w-full items-center justify-center bg-linear-to-b 
          from-surface-hover to-surface-2">
            <img src={me} alt="Moaaz Elbedawy" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
