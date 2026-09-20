import { useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const stats = [
  {
    value: 3,
    suffix: '+',
    label: 'MERN Stack Projects',
    sublabel: 'Adan, POS System, Notes App',
  },
  {
    value: 18,
    suffix: '+',
    label: 'Total Projects Built',
    sublabel: 'Full-stack & front-end',
  },
  {
    value: 120,
    suffix: 'h',
    label: 'Intensive Training',
    sublabel: 'NTI Digital Egypt Program',
  },
  {
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
    <section ref={ref} className="mx-auto max-w-content px-5 pb-4">
      <div className="grid gap-4 rounded-card border border-border bg-surface-1 p-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="px-2 py-3">
            <p className="font-heading text-3xl font-extrabold tracking-heading text-accent">
              <CountUp value={stat.value} suffix={stat.suffix} start={inView} />
            </p>
            <p className="mt-1 text-sm font-medium text-text-primary">{stat.label}</p>
            <p className="font-mono text-xs text-text-tertiary">{stat.sublabel}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
