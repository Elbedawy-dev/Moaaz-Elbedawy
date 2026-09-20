import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="mx-auto max-w-content px-5 pb-20 pt-8">
      <div className="rounded-card border border-border bg-surface-1 px-6 py-12 text-center 
      shadow-glow sm:px-12">
        <h2 className="mx-auto max-w-2xl font-heading text-3xl font-extrabold tracking-heading 
        text-text-primary">
          Have a project in mind or looking for a full-stack developer to join
          your team?
        </h2>
        <p className="mt-4 text-text-secondary">
          Open to freelance engagements and full-time opportunities.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            className="rounded-control bg-accent px-5 py-2.5 text-sm font-semibold text-text-primary 
            shadow-glow transition-all hover:bg-accent-hover hover:shadow-glow-strong"
          >
            Get in Touch
          </Link>
          <Link
            to="/about"
            className="rounded-control border border-border px-5 py-2.5 text-sm font-semibold 
            text-text-primary transition-colors hover:border-border-active hover:bg-accent-subtle"
          >
            Read Bio
          </Link>
        </div>
      </div>
    </section>
  );
}
