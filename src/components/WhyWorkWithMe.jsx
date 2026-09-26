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
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent">Value</p>
      <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-heading text-text-primary">
        Why Work With Me
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {points.map((point) => {
          const Icon = point.icon
          return (
            <article
              key={point.title}
              className="
                group relative rounded-card border-2 border-border/80 bg-surface-1/95 p-6
                transition-all duration-300
                hover:-translate-y-1.5 hover:border-accent hover:shadow-card-hover
              "
            >
              <span
                className="
                  mb-4 flex h-11 w-11 items-center justify-center
                  rounded-control border-2 border-border-active/40
                  bg-accent-subtle text-accent shadow-xs
                  transition-all duration-300 group-hover:scale-110 group-hover:border-border-active group-hover:shadow-glow
                "
              >
                <Icon size={20} />
              </span>
              <h3 className="font-heading text-lg font-bold tracking-heading text-text-primary">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{point.body}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
