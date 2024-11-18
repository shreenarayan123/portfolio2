'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
  backend: ['Node.js', 'Express', 'MongoDb', 'PostgreSQL', ],
  tools: ['Git', 'Docker', 'Prisma ORM',]
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [skillPercentages, setSkillPercentages] = useState<Record<string, number>>({})

  useEffect(() => {
    // Generate random percentages once on mount
    const percentages: Record<string, number> = {}
    Object.values(skills).flat().forEach(skill => {
      percentages[skill] = Math.floor(Math.random() * 30) + 70
    })
    setSkillPercentages(percentages)
  }, [])

  return (
    <section id="skills" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white capitalize">{category}</h3>
              {skillList.map((skill, index) => (
                <div key={skill} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {skillPercentages[skill] ? `${skillPercentages[skill]}%` : ''}
                    </span>
                  </div>
                  <motion.div
                    className="h-2 bg-gray-300 dark:bg-gray-700 rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: skillPercentages[skill] ? `${skillPercentages[skill]}%` : '0%' } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    ></motion.div>
                  </motion.div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}