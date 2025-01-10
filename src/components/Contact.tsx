'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<string | null>(null)

  const handleChange = (e:any) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    setIsSubmitting(true)
    // and handle the submission process. For this example, we'll just simulate a delay.
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setSubmitStatus('success')
    // Reset form after successful submission
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <BackgroundBeamsWithCollision>
    <section id="contact" className="py-20 bg-white dark:bg-gray-800 w-[50%]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">Get In Touch</h2>
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-700 rounded-lg shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md font-semibold shadow-md hover:shadow-lg transition duration-300"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-green-100 text-green-700 rounded-md"
            >
              Thank you for your message! I'll get back to you soon.
            </motion.div>
          )}
          <div className="mt-8 flex justify-center space-x-6">
            <a href="https://github.com/shreenarayan123"  target='_blank' className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/shreenarayan-jaiswal-092025283/" target='_blank' className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <Linkedin size={24} />
            </a>
            <a href="https://x.com/Shreenarayan521" target='_blank' className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
    </BackgroundBeamsWithCollision>
  )
}