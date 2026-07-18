'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send, Twitter } from 'lucide-react'

const inputClasses =
  'w-full rounded-xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300 focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/20'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setSubmitStatus('success')
      setStatusMessage('Thank you for your message! I\'ll get back to you soon.')
      setFormState({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
      setStatusMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative w-full py-28">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label"
        >
          <Mail size={13} />
          Contact
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-4xl font-bold tracking-tight text-white md:text-5xl"
        >
          Let&apos;s{' '}
          <span className="font-serif-accent italic text-gradient">
            work together
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-md text-center text-zinc-400"
        >
          Have a project in mind, a role to fill, or just want to say hi? My
          inbox is always open.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card relative mt-10 w-full max-w-2xl overflow-hidden p-8 md:p-10"
        >
          <div className="pointer-events-none absolute -top-32 left-1/2 h-56 w-96 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

          <form onSubmit={handleSubmit} className="relative space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about it..."
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className={`${inputClasses} resize-none`}
              ></textarea>
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white text-sm font-semibold text-zinc-950 transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)] disabled:opacity-60"
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
              <Send size={15} />
            </motion.button>
          </form>

          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`relative mt-5 rounded-xl border px-4 py-3 text-sm ${
                submitStatus === 'success'
                  ? 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300'
                  : 'border-red-400/20 bg-red-400/10 text-red-300'
              }`}
            >
              {statusMessage}
            </motion.div>
          )}
        </motion.div>
      </div>

      <footer className="mt-24 border-t border-white/5 pt-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 pb-4">
          <div className="flex items-center gap-2">
            {[
              { href: 'https://github.com/shreenarayan123', icon: Github, label: 'GitHub' },
              {
                href: 'https://www.linkedin.com/in/shreenarayan-jaiswal-092025283/',
                icon: Linkedin,
                label: 'LinkedIn'
              },
              { href: 'https://x.com/Shreenarayan521', icon: Twitter, label: 'Twitter' }
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-full p-2.5 text-zinc-500 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} Shreenarayan Jaiswal · Built with
            Next.js
          </p>
        </div>
      </footer>
    </section>
  )
}
