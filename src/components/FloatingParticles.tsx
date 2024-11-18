'use client'

import { useEffect, useState } from 'react'

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: string }>>([])

  useEffect(() => {
    // Generate particles only after component mounts on client
    const newParticles = Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute w-4 h-4 bg-white rounded-full opacity-20 animate-float"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}