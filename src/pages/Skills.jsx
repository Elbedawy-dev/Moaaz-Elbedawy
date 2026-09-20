import { motion, useReducedMotion } from 'framer-motion'
import { Code2, Wrench, Boxes } from 'lucide-react'

// Proficiency shown as filled/empty dots (1-5), not a fake percentage.
// Estimates based on 3 full MERN projects + ~15 frontend projects + the
// NTI program — adjust any number that doesn't feel right.
const mernSkills = [
  { name: 'HTML5', level: 4 },
  { name: 'CSS3', level: 4 },
  { name: 'JavaScript', level: 4 },
  { name: 'Tailwind CSS', level: 4 },
  { name: 'React', level: 3 },
  { name: 'Node.js', level: 3 },
  { name: 'Express.js', level: 3 },
  { name: 'MongoDB', level: 3 },
]

const toolSkills = [
  { name: 'Git & GitHub', level: 3 },
  { name: 'VS Code', level: 4 },
  { name: 'Figma', level: 2 },
  { name: 'Postman', level: 3 },
]

function ProficiencyDots({ level, max = 5 }) {
  return (
    <div className="mt-2 flex items-center gap-1" aria-label={`${level} out of ${max}`}>
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${i < level ? 'bg-accent' : 'bg-border'}`}
        />
      ))}
    </div>
  )
}

function SkillCard({ name, level }) {
  return (
    <div className="rounded-card border border-border bg-surface-1 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-active hover:shadow-card-hover">
      <p className="text-sm font-semibold text-text-primary">{name}</p>
      <ProficiencyDots level={level} />
    </div>
  )
}

function SkillCategory({ icon: Icon, title, skills, delay = 0 }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-control border border-border-active bg-accent-subtle text-accent">
          <Icon size={16} />
        </span>
        <h2 className="font-heading text-lg font-bold tracking-heading text-text-primary">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="mx-auto max-w-content px-5 py-16 lg:py-20">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
          ● Technical Expertise
        </p>
        <h1 className="mt-2 font-heading text-4xl font-extrabold tracking-heading text-text-primary sm:text-5xl">
          Skills &amp; Tools
        </h1>
        <p className="mt-4 max-w-2xl text-base text-text-secondary">
          A MERN-stack foundation built through hands - on projects, backed by
          structured training in HTML, CSS, JavaScript, and modern tooling.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
        <SkillCategory icon={Code2} title="MERN Stack Development" skills={mernSkills} />
        <SkillCategory icon={Wrench} title="Tools & Design" skills={toolSkills} delay={0.1} />
      </div>

      <div className="mt-12 border-t border-border pt-6">
        <p className="inline-flex items-center gap-2 text-sm italic text-text-tertiary">
          <Boxes size={14} className="text-accent" />
          {/* TODO: confirm what you're currently learning before this ships */}
          Currently deepening: TypeScript, Next.js
        </p>
      </div>
    </section>
  )
}