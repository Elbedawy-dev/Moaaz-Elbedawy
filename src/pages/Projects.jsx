import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ProjectFilters from "../components/ProjectFilters";
import { GithubIcon } from "../components/SocialIcons";
import { projects } from "../data/projects";

// Human-readable label for each category id used in data/projects.js
const CATEGORY_LABELS = {
  fullstack: "Full-Stack (MERN)",
  frontend: "Frontend",
};

export default function Projects() {
  const reduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState("all");

  // Filter the real projects by the selected tab. "all" shows everything.
  const visibleProjects = useMemo(
    () =>
      activeFilter === "all" ? projects : projects
      .filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  // Stagger the cards in as they appear when the filter changes.
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.06 },
    },
  };

  const cardVariants = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="mx-auto max-w-content px-5 py-16 lg:py-20">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
        Portfolio
      </p>
      <h1 className="mt-2 font-heading text-4xl font-extrabold tracking-heading text-text-primary">
        Projects
      </h1>
      <p className="mt-3 max-w-xl text-text-secondary">
        Real projects I have built end to end — from full MERN-stack
        applications to focused front-end interfaces.
      </p>

      <div className="mt-8">
        <ProjectFilters value={activeFilter} onChange={setActiveFilter} />
      </div>

      {visibleProjects.length > 0 ? (
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3 "
        >
          {visibleProjects.map((project) => {
            const hasLive = project.live && project.live !== "#";
            const hasRepo = project.repo && project.repo !== "#";

            return (
              <motion.article
                key={project.title}
                variants={cardVariants}
                className="flex flex-col overflow-hidden rounded-card border border-border 
                bg-surface-1 transition-all duration-300 hover:-translate-y-0.5 
                hover:border-border-active hover:shadow-card-hover"
              >
                <div className="flex aspect-16/10 items-center justify-center bg-surface-2">
                  {/* TODO: replace with a real project screenshot */}
                  <ImageIcon size={36} className="text-text-tertiary" />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="font-mono text-[11px] text-accent">
                    {CATEGORY_LABELS[project.category] ?? project.category}
                  </p>
                  <h2 className="mt-1 font-heading text-xl font-bold tracking-heading">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm text-text-secondary">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-surface-2 px-2.5 py-0.5 
                        font-mono text-[11px] text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-4 pt-5 text-sm">
                    {hasLive ? (
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
                    ) : (
                      <span className="inline-flex items-center gap-1 text-text-tertiary">
                        Live Demo (soon)
                        <ArrowUpRight size={14} />
                      </span>
                    )}

                    {hasRepo ? (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-text-secondary transition-colors hover:text-text-primary"
                      >
                        <GithubIcon size={14} />
                        Code
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-text-tertiary">
                        <GithubIcon size={14} />
                        Code (soon)
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      ) : (
        <div className="mt-8 rounded-card border border-border bg-surface-1 px-6 py-12 text-center">
          <p className="text-text-secondary">
            No projects in this category yet.
          </p>
        </div>
      )}

      <p className="mt-8 text-sm text-text-secondary">
        {/* TODO (Moaaz): the ~12 smaller HTML/CSS/JS projects still need real names,
            descriptions and links — once added to data/projects.js they show up here. */}
        ~12 more front-end projects (HTML, CSS, JavaScript) are being documented
        and will appear here soon.{" "}
        <Link to="/contact" className="text-accent hover:text-accent-hover">
          Get in touch
        </Link>
      </p>
    </section>
  );
}
