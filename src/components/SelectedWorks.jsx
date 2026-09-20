import { ArrowUpRight, ImageIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { GithubIcon } from './SocialIcons'
import noteImg from '../image/noteImage.jpg'
import posImage from '../image/posImage.jpg'
import adanImage from '../image/adanImage.jpg'

const projects = [
  {
    title: 'Adan',
    subtitle: 'Graduation Project (MERN)',
    description: 'Graduation project on the MERN stack. Entire front end owned by Moaaz.',
    live: 'https://adan-animals.vercel.app', 
    repo: 'https://github.com/Elbedawy-dev/Adan-Animals.git',
    image: adanImage
  },
  {
    title: 'POS System',
    subtitle: 'Point of Sale application (MERN stack)',
    description: 'Point of Sale application (MERN stack).',
    live: 'https://pos-system-commercial.vercel.app', 
    repo: 'https://github.com/Elbedawy-dev/POS_System.git',
    image: posImage
  },
  {
    title: 'Notes App',
    subtitle: 'Notes/Notepad application (MERN stack)',
    description: 'Notes/Notepad application (MERN stack).',
    live: 'https://notpad-flow.vercel.app',
    repo: 'https://github.com/Elbedawy-dev/NotPad.git',
    image: noteImg
  },
]

const stack = ['MongoDB', 'Express', 'React', 'Node']

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
            className="overflow-hidden rounded-card border border-border bg-surface-1 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-active hover:shadow-card-hover"
          >
            <div className="aspect-16/10 overflow-hidden bg-surface-2">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <ImageIcon size={36} className="text-text-tertiary" />
                </div>
              )}
            </div>
            <div className="p-5">
              <p className="font-mono text-[11px] text-accent">{project.subtitle}</p>
              <h3 className="mt-1 font-heading text-xl font-bold tracking-heading">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-surface-2 px-2.5 
                    py-0.5 font-mono text-[11px] text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-4 text-sm">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-accent transition-colors 
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
