import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Mail, MapPin, Clock, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons'

// TODO: replace with your real Formspree form ID.
// Sign up free at https://formspree.io, create a form, paste the ID here.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

const infoRows = [
  { icon: MapPin, label: 'Location', value: 'Egypt' /* TODO: confirm exact city */ },
  { icon: Clock, label: 'Availability', value: 'Open to Freelance & full - time' },
  {
    icon: Mail,
    label: 'Email',
    value: 'moaazelbedawy@email.com', // TODO: insert real email
    href: 'mailto:your@email.com', // TODO: insert real email
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/moaaz-elbedawy',
    href: 'https://linkedin.com/in/moaaz-elbedawy',
  },
]

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const reduceMotion = useReducedMotion()
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.email || !form.subject || !form.message) return

    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })
      if (res.ok) {
        setStatus('success')
        setForm(initialForm)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const fadeUp = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="mx-auto max-w-content px-5 py-16 lg:py-20">
      <motion.div
        initial={reduceMotion ? false : 'hidden'}
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
          ● Get in Touch
        </p>
        <h1 className="mt-2 font-heading text-4xl font-extrabold tracking-heading text-text-primary sm:text-5xl">
          Let&apos;s Build Something Together
        </h1>
        <p className="mt-4 max-w-2xl text-base text-text-secondary">
          Open to full - time opportunities and freelance/contract projects.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* LEFT: info + socials */}
        <motion.div
          initial={reduceMotion ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="rounded-card border border-border bg-surface-1 p-6">
            <dl className="flex flex-col divide-y divide-border">
              {infoRows.map((row) => {
                const Icon = row.icon
                const content = (
                  <>
                    <dt className="text-xs text-text-tertiary">{row.label}</dt>
                    <dd className="mt-0.5 text-sm font-medium text-text-primary">{row.value}</dd>
                  </>
                )

                return (
                  <div key={row.label} className="flex items-center gap-3 py-4 first:pt-0 last:pb-0">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-control border border-border-active bg-accent-subtle text-accent">
                      <Icon size={16} />
                    </span>
                    {row.href ? (
                      <a href={row.href} target={row.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="transition-colors hover:text-accent">
                        {content}
                      </a>
                    ) : (
                      <div>{content}</div>
                    )}
                  </div>
                )
              })}
            </dl>
          </div>

          <div className="mt-6 flex gap-3">
            {/* TODO: insert real GitHub URL */}
            
            <a  href="https://github.com/Elbedawy-dev"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-secondary transition-all hover:border-border-active hover:bg-accent hover:text-text-primary"
            >
              <GithubIcon size={18} />
            </a>
            
            <a href="https://linkedin.com/in/moaaz-elbedawy"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-secondary transition-all hover:border-border-active hover:bg-accent hover:text-text-primary"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT: form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-card border border-border bg-surface-1 p-6"
        >
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="text-xs text-text-tertiary">Full Name</label>
              <input
                id="name" name="name" type="text" required
                value={form.name} onChange={handleChange}
                className="mt-1 w-full rounded-control border border-border bg-transparent px-3.5 py-2.5 text-sm text-text-primary outline-none transition-all focus:border-accent focus:shadow-glow"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-xs text-text-tertiary">Email Address</label>
              <input
                id="email" name="email" type="email" required
                value={form.email} onChange={handleChange}
                className="mt-1 w-full rounded-control border border-border bg-transparent px-3.5 py-2.5 text-sm text-text-primary outline-none transition-all focus:border-accent focus:shadow-glow"
              />
            </div>

            <div>
              <label htmlFor="subject" className="text-xs text-text-tertiary">Subject</label>
              <input
                id="subject" name="subject" type="text" required
                value={form.subject} onChange={handleChange}
                className="mt-1 w-full rounded-control border border-border bg-transparent px-3.5 py-2.5 text-sm text-text-primary outline-none transition-all focus:border-accent focus:shadow-glow"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-xs text-text-tertiary">Message</label>
              <textarea
                id="message" name="message" rows={5} required
                value={form.message} onChange={handleChange}
                className="mt-1 w-full resize-none rounded-control border border-border bg-transparent px-3.5 py-2.5 text-sm text-text-primary outline-none transition-all focus:border-accent focus:shadow-glow"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-control bg-accent px-5 py-2.5 text-sm font-semibold text-text-primary shadow-glow transition-all hover:bg-accent-hover hover:shadow-glow-strong disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={16} />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && <p className="text-sm text-accent">Message sent — thank you!</p>}
            {status === 'error' && (
              <p className="text-sm text-red-400/80">Something went wrong. Please try again or email me directly.</p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  )
}