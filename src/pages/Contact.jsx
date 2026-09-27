import { useState, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Mail, MapPin, Clock, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons'
import emailjs from '@emailjs/browser'

const infoRows = [
  {
    icon: MapPin,
    id: 'location',
    valueKey: 'contact.locationValue',
  },
  {
    icon: Clock,
    id: 'availability',
    valueKey: 'contact.availabilityValue',
  },
  {
    icon: Mail,
    id: 'email',
    value: 'moaazelbedawy@email.com',
    href: 'https://moaazelbedawy@gmail.com',
  },
  {
    icon: LinkedinIcon,
    id: 'linkedin',
    value: 'linkedin.com/in/moaaz-elbedawy',
    href: 'https://linkedin.com/in/moaaz-elbedawy',
  },
]

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default function Contact() {
  const { t } = useTranslation()
  const formRef = useRef(null)

  const reduceMotion = useReducedMotion()

  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  function handleChange(e) {
    const { name, value } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function sendEmail(e) {
    e.preventDefault()

    if (
      !form.name ||
      !form.email ||
      !form.subject ||
      !form.message
    ) {
      return
    }

    setStatus('sending')

    emailjs
      .sendForm(
        'service_q3mt8dq',
        'template_9vozvm7',
        formRef.current,
        'tAwY3uBcUszexyzGS'
      )
      .then(
        () => {
          setStatus('success')
          setForm(initialForm)
          setTimeout(() => {
          setStatus('idle')
        }, 3000)
        },
        (error) => {
          console.error('EmailJS Error:', error)
          setStatus('error')
        }
      )
  }

  const fadeUp = {
    hidden: reduceMotion
      ? { opacity: 1 }
      : { opacity: 0, y: 20 },

    show: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section className="mx-auto max-w-content px-5 py-16 lg:py-20">
      <motion.div
        initial={reduceMotion ? false : 'hidden'}
        whileInView="show"
        viewport={{
          once: true,
          margin: '-80px',
        }}
        variants={fadeUp}
        transition={{
          duration: 0.5,
        }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
          ● {t('contact.eyebrow')}
        </p>

        <h1
          className="mt-2 font-heading text-4xl font-extrabold tracking-heading text-text-primary sm:text-5xl"
        >
          {t('contact.title')}
        </h1>

        <p className="mt-4 max-w-2xl text-base text-text-secondary">
          {t('contact.intro')}
        </p>
      </motion.div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={reduceMotion ? false : 'hidden'}
          whileInView="show"
          viewport={{
            once: true,
            margin: '-80px',
          }}
          variants={fadeUp}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
        >
          <div className="rounded-card border-2 border-border/80 bg-surface-1/95 p-6 shadow-xs">
            <dl className="flex flex-col divide-y divide-border">

              {infoRows.map((row) => {
                const Icon = row.icon

                const content = (
                  <>
                    <dt className="text-xs font-medium text-text-tertiary">
                      {t(`contact.${row.id}`)}
                    </dt>

                    <dd className="mt-0.5 text-sm font-semibold text-text-primary">
                      {row.valueKey ? t(row.valueKey) : row.value}
                    </dd>
                  </>
                )

                return (
                  <div
                    key={row.id}
                    className="flex items-center gap-3.5 py-4 first:pt-0 last:pb-0"
                  >
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-control border-2 border-border-active/40 bg-accent-subtle text-accent shadow-xs"
                    >
                      <Icon size={18} />
                    </span>

                    {row.href ? (
                      <a
                        href={row.href}
                        target={
                          row.href.startsWith('http')
                            ? '_blank'
                            : undefined
                        }
                        rel="noreferrer"
                        className="transition-colors hover:text-accent"
                      >
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
            <a
              href="https://github.com/Elbedawy-dev"
              target="_blank"
              rel="noreferrer"
              aria-label={t('contact.githubAria')}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-secondary transition-all hover:border-border-active hover:bg-accent hover:text-text-primary"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href="https://linkedin.com/in/moaaz-elbedawy"
              target="_blank"
              rel="noreferrer"
              aria-label={t('contact.linkedinAria')}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-secondary transition-all hover:border-border-active hover:bg-accent hover:text-text-primary"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="show"
          viewport={{
            once: true,
            margin: '-80px',
          }}
          variants={fadeUp}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          className="rounded-card border-2 border-border/80 bg-surface-1/95 p-6 shadow-card-hover"
        >
          <div className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="name"
                className="text-xs text-text-tertiary"
              >
                {t('contact.fullName')}
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-1 w-full rounded-control border border-border bg-transparent px-3.5 py-2.5 text-sm text-text-primary outline-none transition-all focus:border-accent focus:shadow-glow"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-xs text-text-tertiary"
              >
                {t('contact.emailAddress')}
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-1 w-full rounded-control border border-border bg-transparent px-3.5 py-2.5 text-sm text-text-primary outline-none transition-all focus:border-accent focus:shadow-glow"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="text-xs text-text-tertiary"
              >
                {t('contact.subject')}
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={form.subject}
                onChange={handleChange}
                className="mt-1 w-full rounded-control border border-border bg-transparent px-3.5 py-2.5 text-sm text-text-primary outline-none transition-all focus:border-accent focus:shadow-glow"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-xs text-text-tertiary"
              >
                {t('contact.message')}
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className="mt-1 w-full resize-none rounded-control border border-border bg-transparent px-3.5 py-2.5 text-sm text-text-primary outline-none transition-all focus:border-accent focus:shadow-glow"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-control bg-accent px-5 py-2.5 text-sm font-semibold text-text-primary shadow-glow transition-all hover:bg-accent-hover hover:shadow-glow-strong disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={16} className="rtl:-scale-x-100" />

              {status === 'sending'
                ? t('contact.sending')
                : t('contact.send')}
            </button>

            {status === 'success' && (
              <p className="text-sm text-accent">
                {t('contact.success')}
              </p>
            )}

            {status === 'error' && (
              <p className="text-sm text-red-400/80">
                {t('contact.error')}
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  )
}
