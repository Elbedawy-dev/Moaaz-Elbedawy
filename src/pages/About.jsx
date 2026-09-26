import { motion, useReducedMotion } from 'framer-motion'
import {
  Briefcase,
  Clock,
  Download,
  Globe,
  GraduationCap,
  MapPin,
} from 'lucide-react'
import CV from '../pdf/CV.pdf'

// Reuses the same CV file wired up on the Home hero (see Hero.jsx).
const CV_URL = CV

const personalInfo = [
  { label: 'Name', value: 'Moaaz Elbedawy' },
  { label: 'Role', value: 'MERN Stack Developer', icon: Briefcase },
  {
    label: 'Education',
    value: 'CS Higher Diploma - Higher Institute for Statistical Studies and Research',
    icon: GraduationCap,
  },
  { label: 'Languages', value: 'Arabic, English', icon: Globe },
  { label: 'Availability', value: 'Freelance & full - time', icon: MapPin },
]

const stats = [
  {
    value: '3',
    label: 'Full MERN Stack Projects',
    sublabel: 'Adan, POS System, Notes App',
  },
  {
    value: '~15',
    label: 'Frontend Projects',
    sublabel: 'HTML, CSS, JavaScript',
  },
  {
    value: '120h',
    label: 'NTI Training Program',
    sublabel: 'Digital Egypt Youth Program',
  },
  {
    value: '88%',
    label: 'NTI Program Score',
    sublabel: 'Web Designer Track',
  },
]

const timeline = [
  {
    icon: GraduationCap,
    date: '1.5-Month Program',
    title: 'NTI - Digital Egypt Youth Program',
    org: 'Web Designer Track',
    description:
      'Completed 120 hours of intensive training in HTML5, CSS3, JavaScript, and Bootstrap, \
       scoring 88% on the program.',
  },
  {
    icon: GraduationCap,
    date: 'Expected 2026',
    title: 'Higher Institute for Statistical Studies and Research',
    org: 'Computer Science - Higher Diploma',
    description:
      '2-year Higher Diploma program building a strong foundation in computer science and \
       software development.',
  },
  {
    icon: Briefcase,
    date: 'Graduation Project',
    title: '"Adan" - Graduation Project',
    org: 'Full MERN Stack Application',
    description:
      'Led the Front End entirely for a full MERN Stack graduation project, from architecture \
      to UI implementation.',
  },
  {
    icon: Briefcase,
    date: 'Ongoing',
    title: 'Freelance MERN Stack Developer',
    org: 'Independent Projects',
    description:
      'Building real world projects like a POS System and Notes App, applying React, \
       Node.js, Express, and MongoDB end to end.',
  },
]

export default function About() {
  const reduceMotion = useReducedMotion()

  const fadeUp = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

return (
  <>
    {/* INTRO */}
    <section className="mx-auto max-w-content px-5 py-16 lg:py-20">
      <motion.div
        initial={reduceMotion ? false : 'hidden'}
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
          ● About Me
        </p>
        <h1 className="mt-2 font-heading text-4xl font-extrabold tracking-heading 
            text-text-primary sm:text-5xl">
          CS Student &amp; Mearn - Stack Developer
        </h1>
        <p className="mt-5 max-w-2xl text-base text-text-secondary">
          I am a computer science student at the Graduate School of Statistical Research. 
          I am a  MERN Stack web developer, specializing in creating commercial and educational 
          systems and websites.
        </p>
      </motion.div>
    </section>

    {/* PERSONAL INFO + STATS */}
    <section className="mx-auto max-w-content px-5 pb-16 lg:grid lg:grid-cols-2 lg:gap-8 
    lg:pb-20">
      <motion.div
        initial={reduceMotion ? false : 'hidden'}
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="rounded-card border border-border bg-surface-1 p-6">
        <h2 className="font-heading text-lg font-bold tracking-heading text-text-primary">
          Personal Info
        </h2>

        <dl className="mt-4 flex flex-col gap-4">
          {personalInfo.map((row) => (
            <div key={row.label} className="flex flex-col gap-1">
              <dt className="inline-flex items-center gap-2 text-sm text-text-tertiary">
                {row.icon ? <row.icon size={14} className="text-accent" /> : null}
                {row.label}
              </dt>
              <dd className="text-left text-sm font-medium text-text-primary">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* TODO: CV_URL currently points at src/pdf/CV.pdf (same file used on the Home hero) —
          swap in an updated CV when available */}
        
        <a href={CV_URL}
          download
          className="mt-6 inline-flex items-center gap-2 rounded-control bg-accent 
          px-5 py-2.5 text-sm font-semibold text-text-primary shadow-glow transition-all 
          hover:bg-accent-hover hover:shadow-glow-strong">
          <Download size={16} />
          Download CV
        </a>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : 'hidden'}
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8 grid grid-cols-2 gap-4 lg:mt-0">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-card border border-border bg-surface-1 p-5 transition-all 
            duration-300 hover:-translate-y-0.5 hover:border-border-active hover:shadow-card-hover">
            <p className="font-heading text-3xl font-extrabold tracking-heading text-accent">
              {stat.value}
            </p>
            <p className="mt-1 text-sm font-medium text-text-primary">{stat.label}</p>
            <p className="font-mono text-xs text-text-tertiary">{stat.sublabel}</p>
          </div>
        ))}
      </motion.div>
    </section>

    {/* EDUCATION & EXPERIENCE TIMELINE */}
    <section className="mx-auto max-w-content px-5 pb-20">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
        ● Education &amp; Experience
      </p>
      <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-heading text-text-primary">
        My Journey
      </h2>

      {/* Outer wrapper: holds the single continuous line behind ALL items */}
      <div className="relative mt-12">
        {/* connecting line — mobile: fixed left offset, desktop: centered */}
        <div className="absolute left-5 top-0 h-full w-px bg-border lg:left-1/2" />

        {/* Each item gets its OWN grid — this is the key fix.
            Before, all 4 items shared ONE lg:grid-cols-2 grid, so the
            browser's auto-placement packed pairs of items into the same
            row (item 0 + item 1 side-by-side, item 2 + item 3 side-by-side),
            which is why the icons looked doubled/overlapping on the line.
            Giving every item its own grid forces each one onto its own row. */}
        <div className="flex flex-col gap-10 lg:gap-14">
          {timeline.map((item, index) => {
            const Icon = item.icon
            const isLeft = index % 2 === 0

            return (
              <motion.div
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-8">
                {/* single icon, centered exactly on the line */}
                <span
                  className="absolute left-5 top-0 z-10 flex h-10 w-10 -translate-x-1/2 items-center
                  justify-center rounded-full border border-border-active bg-surface-1 text-accent
                  lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2">
                  <Icon size={18} />
                </span>

                {/* content card — mobile: always to the right of the line;
                    desktop: alternates left/right column, empty column left implicit */}
                
                <div className={`pl-14 lg:pl-0 ${
                    isLeft
                      ? 'lg:col-start-1 lg:pr-12 lg:text-right'
                      : 'lg:col-start-2 lg:pl-12'
                  }`}>
                <div
                  className={`pl-14 lg:pl-0 ${
                    isLeft ? 'lg:col-start-1 lg:pr-12' : 'lg:col-start-2 lg:pl-12'
                  }`}>
                  <div className="rounded-card border border-border bg-surface-1 p-6 text-left 
                  transition-all duration-300 hover:-translate-y-0.5 hover:border-border-active 
                  hover:shadow-card-hover">
                    <p className="inline-flex items-center gap-1.5 font-mono text-xs text-text-tertiary">
                      <Clock size={12} className="text-accent" />
                      {item.date}
                    </p>
                    <h3 className="mt-1 font-heading text-lg font-bold tracking-heading text-text-primary">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary">{item.org}</p>
                    <p className="mt-2 text-sm text-text-secondary">{item.description}</p>
                  </div>
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