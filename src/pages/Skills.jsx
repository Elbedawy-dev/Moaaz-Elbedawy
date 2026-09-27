import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Code2, Wrench, Boxes, Cpu } from 'lucide-react'
import {
  ReactIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  NodeIcon,
  ExpressIcon,
  MongoIcon,
  HtmlIcon,
  CssIcon,
  TailwindIcon,
  GitIcon,
  VSCodeIcon,
  PostmanIcon,
  FigmaIcon,
  getTechIcon,
} from '../components/TechIcons'

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

const techOverview = [
  { component: ReactIcon, name: 'React' },
  { component: JavaScriptIcon, name: 'JavaScript' },
  { component: TypeScriptIcon, name: 'TypeScript' },
  { component: NodeIcon, name: 'Node.js' },
  { component: ExpressIcon, name: 'Express' },
  { component: MongoIcon, name: 'MongoDB' },
  { component: HtmlIcon, name: 'HTML5' },
  { component: CssIcon, name: 'CSS3' },
  { component: TailwindIcon, name: 'Tailwind' },
  { component: GitIcon, name: 'Git' },
  { component: VSCodeIcon, name: 'VS Code' },
  { component: PostmanIcon, name: 'Postman' },
  { component: FigmaIcon, name: 'Figma' },
]

function ProgressBar({ level, max = 5 }) {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()
  const percentage = Math.min(100, Math.max(0, level * 20))

  const trackRef = useRef(null)
  const isInView = useInView(trackRef, { once: true, margin: '-10% 0px' })
  const showFilled = reduceMotion || isInView

  return (
    <div className="mt-3">
      <div ref={trackRef} className="relative h-2 w-full overflow-hidden rounded-full bg-surface-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: showFilled ? `${percentage}%` : 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-full rounded-full bg-accent shadow-glow rtl:ms-auto"
        >
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent rtl:bg-linear-to-l" />
        </motion.div>
      </div>

      <div className="mt-2 flex items-center justify-between text-[11px] text-text-tertiary">
        <div className="flex items-center gap-1" aria-label={t('skills.levelAria', { level, max })}>
          {Array.from({ length: max }).map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${i < level ? 'bg-accent' : 'bg-surface-hover'}`}
            />
          ))}
        </div>
        <span className="font-mono text-[10px] text-text-tertiary">
          {t('skills.level', { level, max })}
        </span>
      </div>
    </div>
  )
}

function SkillCard({ name, level }) {
  const icon = getTechIcon(name, 16)
  const percentage = level * 20

  return (
    <div
      className="
        group rounded-card border-2 border-border/80 bg-surface-1/95 p-4
        transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-card-hover
      "
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon && <span className="shrink-0">{icon}</span>}
          <span className="font-heading text-sm font-bold text-text-primary">
            {name}
          </span>
        </div>
        <span className="font-mono text-xs font-bold text-accent">
          {percentage}%
        </span>
      </div>

      <ProgressBar level={level} />
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
      <div className="mb-4 flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-control border-2 border-border-active/40 bg-accent-subtle text-accent shadow-xs">
          <Icon size={18} />
        </span>
        <h2 className="font-heading text-xl font-bold tracking-heading text-text-primary">
          {title}
        </h2>
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()

  return (
    <section className="mx-auto max-w-content px-5 py-16 lg:py-20">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          ● {t('skills.eyebrow')}
        </p>
        <h1 className="mt-2 font-heading text-4xl font-extrabold tracking-heading text-text-primary sm:text-5xl">
          {t('skills.title')}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-text-secondary">
          {t('skills.intro')}
        </p>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-10 overflow-hidden rounded-card border-2 border-border/80 bg-surface-1/95 p-6 shadow-card-hover"
      >
        <div className="flex items-center gap-2 text-accent">
          <Cpu size={18} />
          <h2 className="font-heading text-base font-bold tracking-heading text-text-primary">
            {t('skills.technologies')}
          </h2>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
          {techOverview.map(({ component: Icon, name }) => (
            <div
              key={name}
              className="
                group relative flex flex-col items-center justify-center gap-2 rounded-control
                border border-border/80 bg-surface-2/60 p-3 transition-all duration-300
                hover:-translate-y-1 hover:border-accent hover:bg-surface-hover hover:shadow-card-hover
              "
            >
              <Icon size={30} />
              <span className="font-mono text-[11px] font-medium text-text-secondary group-hover:text-text-primary">
                {name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
        <SkillCategory icon={Code2} title={t('skills.mernCategory')} skills={mernSkills} />
        <SkillCategory icon={Wrench} title={t('skills.toolsCategory')} skills={toolSkills} delay={0.1} />
      </div>

      <div className="mt-12 border-t border-border pt-6">
        <p className="inline-flex items-center gap-2 text-sm text-text-tertiary">
          <Boxes size={14} className="text-accent" />
          {t('skills.deepening')}
        </p>
      </div>
    </section>
  )
}
