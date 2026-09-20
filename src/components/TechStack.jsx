const categories = [
  {
    title: 'Frontend',
    items: [
      { name: 'React.js', highlight: true },
      { name: 'JavaScript (ES6+)', highlight: false },
      { name: 'HTML5', highlight: false },
      { name: 'CSS3', highlight: false },
      { name: 'Bootstrap', highlight: false },
      { name: 'Tailwind CSS', highlight: false },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', highlight: true },
      { name: 'Express.js', highlight: false },
      { name: 'REST APIs', highlight: false },
    ],
  },
  {
    title: 'Database & Tools',
    items: [
      { name: 'MongoDB', highlight: true },
      { name: 'Git & GitHub', highlight: false },
      { name: 'Postman', highlight: false },
      { name: 'VS Code', highlight: false },
    ],
  },
]

export default function TechStack() {
  return (
    <section className="mx-auto max-w-content px-5 py-16 lg:py-20">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
        What I Work With
      </p>
      <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-heading text-text-primary">
        Core Tech Stack
      </h2>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {categories.map((category) => (
          <article
            key={category.title}
            className="rounded-card border border-border bg-surface-1 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-active hover:shadow-card-hover"
          >
            <h3 className="font-heading text-lg font-bold tracking-heading">{category.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item.name}
                  className={`rounded-full border px-3 py-1 font-mono text-xs ${
                    item.highlight
                      ? 'border-border-active bg-accent-subtle text-accent'
                      : 'border-border bg-surface-2 text-text-secondary'
                  }`}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
