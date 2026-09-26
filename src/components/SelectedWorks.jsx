import { ArrowUpRight, ImageIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { GithubIcon } from './SocialIcons'
import { getTechIcon } from './TechIcons'
import noteImg from '../image/noteImage.jpg'
import posImage from '../image/posImage.jpg'
import adanImage from '../image/adanImage.jpg'

const projects = [
  {
    title: 'Adan',
    subtitle: 'Graduation Project (MERN)',
    description: 'A full MERN Stack graduation project where I owned the entire Front End, \
    from architecture through UI using React.',
    stack: ['React', 'Node'],
    live: 'https://adan-animals.vercel.app', 
    repo: 'https://github.com/Elbedawy-dev/Adan-Animals.git',
    image: adanImage
  },
  {
    title: 'POS System',
    subtitle: 'Point of Sale application (MERN stack)',
    description: 'A full MERN Stack Point of Sale system handling products, orders, \
    and authentication, refined through fixing 20+ real production-level bugs.',
    stack: ['MongoDB', 'Express', 'React', 'Node'],
    live: 'https://pos-system-commercial.vercel.app', 
    repo: 'https://github.com/Elbedawy-dev/POS_System.git',
    image: posImage
  },
  {
    title: 'Notes App',
    subtitle: 'Notes/Notepad application (MERN stack)',
    description: 'A full MERN Stack notes app with JWT authentication, pinned notes, \
    Cloudinary image uploads, and a dashboard tracking note statistics.',
    stack: ['MongoDB', 'Express', 'React', 'Node'],
    live: 'https://notpad-flow.vercel.app',
    repo: 'https://github.com/Elbedawy-dev/NotPad.git',
    image: noteImg
  },
]



export default function SelectedWorks() {
  return (
    <section className="mx-auto max-w-content px-5 py-16 lg:py-20">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">Selected Work</p>
      <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-heading text-text-primary">
        Selected Works
      </h2>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex h-full flex-col overflow-hidden rounded-card border-2 border-border/80
              bg-surface-1/95 transition-all duration-300 hover:-translate-y-1.5
              hover:border-accent hover:shadow-card-hover min-w-0"
          >
            <div className="aspect-16/10 overflow-hidden bg-surface-2">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover transition-transform duration-500 
                  group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <ImageIcon size={36} className="text-text-tertiary" />
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="font-mono text-[11px] font-semibold text-accent">{project.subtitle}</p>
              <h3 className="mt-1 font-heading text-xl font-bold tracking-heading text-text-primary">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => {
                  const icon = getTechIcon(tech, 13)
                  return (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-surface-2 px-2.5 py-0.5
                    font-mono text-[11px] text-text-secondary hover:border-accent/40"
                    >
                      {icon}
                      {tech}
                    </span>
                  )
                })}
              </div>
              <div className="mt-auto flex items-center gap-4 pt-5 text-sm">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-accent transition-colors 
                  hover:text-accent-hover"
                >
                  Live Demo
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-text-secondary transition-colors 
                  hover:text-text-primary"
                >
                  <GithubIcon size={14} />
                  Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-6 text-sm text-text-secondary">
        <Link to="/projects" className="text-accent hover:text-accent-hover">
          +15 more front-end projects (HTML, CSS, JavaScript)
        </Link>
      </p>
    </section> 
  ) 
}
