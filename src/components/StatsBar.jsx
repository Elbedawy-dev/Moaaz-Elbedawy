import { useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Award, Clock, FolderGit2, Layers } from 'lucide-react'

const stats = [
  {
    icon: Layers,
    value: 3,
    suffix: '+',
    label: 'MERN Stack Projects',
    sublabel: 'Adan, POS System, Notes App',
  },
  {
    icon: FolderGit2,
    value: 18,
    suffix: '+',
    label: 'Total Projects Built',
    sublabel: 'Full-stack & front-end',
  },
  {
    icon: Clock,
    value: 120,
    suffix: 'h',
    label: 'Intensive Training',
    sublabel: 'NTI Digital Egypt Program',
  },
  {
    icon: Award,
    value: 88,
    suffix: '%',
    label: 'Program Score',
    sublabel: 'NTI Web Designer Track',
  },
]

function CountUp({ value, suffix, start }) {
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!start || reduceMotion) return undefined

    const duration = 1100
    const startedAt = performance.now()
    let frame = 0

    const tick = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      setDisplay(Math.round(value * progress))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [start, value, reduceMotion])

  const shown = start && reduceMotion ? value : display

  return (
    <span>
      {shown}
      {suffix}
    </span>
  )
}

export default function StatsBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative my-10 border-y border-border/90 bg-surface-1/70 py-10 shadow-xs backdrop-blur-md"
    >
      {/* Subtle accent glow across the highlighted band */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-radial from-accent/15 via-accent/5 to-transparent"
      />

      <div className="mx-auto max-w-content px-5">
        <div
          className="
            relative overflow-hidden rounded-card
            border-2 border-border/80
            bg-surface-1/95 backdrop-blur-md
            shadow-card-hover transition-all duration-300
            hover:border-border-active
          "
        >
          <div className="grid divide-y divide-border/60 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-border/60">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className={`
                    group relative flex flex-col justify-between p-6
                    transition-all duration-300 hover:bg-surface-hover/60
                    ${idx % 2 === 1 ? 'sm:border-l sm:border-border/60 lg:border-l-0' : ''}
                  `}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="
                        flex h-11 w-11 items-center justify-center
                        rounded-control border-2 border-border-active/40
                        bg-accent-subtle text-accent shadow-xs
                        transition-transform duration-300 group-hover:scale-110 group-hover:border-border-active
                      "
                    >
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-text-tertiary">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="mt-4">
                    <p className="font-heading text-4xl font-black tracking-heading text-accent lg:text-5xl">
                      <CountUp value={stat.value} suffix={stat.suffix} start={inView} />
                    </p>
                    <p className="mt-1.5 font-heading text-base font-bold tracking-heading text-text-primary">
                      {stat.label}
                    </p>
                    <p className="mt-0.5 font-mono text-xs text-text-tertiary">
                      {stat.sublabel}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
