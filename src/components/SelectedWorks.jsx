import { ArrowUpRight, ImageIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { GithubIcon } from './SocialIcons'

const projects = [
  {
    title: 'Adan',
    subtitle: 'Graduation Project (MERN)',
    // TODO: add a richer one-line description for Adan
    description: 'Graduation project on the MERN stack. Entire front end owned by Moaaz.',
    // TODO: add preview image, live demo URL, and GitHub repo for Adan
  },
  {
    title: 'POS System',
    subtitle: 'Point of Sale application (MERN stack)',
    // TODO: add a richer one-line description for the POS System
    description: 'Point of Sale application (MERN stack).',
    // TODO: add preview image, live demo URL, and GitHub repo for POS System
  },
  {
    title: 'Notes App',
    subtitle: 'Notes/Notepad application (MERN stack)',
    // TODO: add a richer one-line description for the Notes App
    description: 'Notes/Notepad application (MERN stack).',
    // TODO: add preview image, live demo URL, and GitHub repo for Notes App
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
            <div className="flex aspect-16/10 items-center justify-center bg-surface-2">
              {/* TODO: replace with a real project screenshot */}
              <ImageIcon size={36} className="text-text-tertiary" />
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
                  href="#"
                  className="inline-flex items-center gap-1 text-accent transition-colors 
                  hover:text-accent-hover"
                >
                  Live Demo
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href="#"
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
