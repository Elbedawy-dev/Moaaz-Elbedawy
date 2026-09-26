import { Code2, GraduationCap, MessageSquare, Wrench } from 'lucide-react'

const points = [
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    body: 'Regular updates and direct availability during agreed working hours.',
  },
  {
    icon: Code2,
    title: 'Clean, Readable Code',
    body: "Every project follows organized, maintainable coding practices - not just 'it works' code.",
  },
  {
    icon: Wrench,
    title: 'Hands - On Problem Solver',
    body: 'Learns and builds through real projects rather than passive tutorials.',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learner',
    body: 'Currently completing a Computer Science diploma while actively building production style MERN projects.',
  },
]

export default function WhyWorkWithMe() {
  return (
    <section className="mx-auto max-w-content px-5 py-16 lg:py-20">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Value</p>
      <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-heading text-text-primary">
        Why Work With Me
      </h2>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {points.map((point) => {
          const Icon = point.icon
          return (
            <article
              key={point.title}
              className="rounded-card border border-border bg-surface-1 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-active hover:shadow-card-hover"
            >
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-control bg-accent-subtle text-accent">
                <Icon size={18} />
              </span>
              <h3 className="font-heading text-lg font-bold tracking-heading">{point.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{point.body}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
