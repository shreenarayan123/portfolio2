
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center py-10 w-full'>
      <Navigation />
      <div className='flex flex-col items-center w-[90%] md:w-2/3'>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      </div>
    </div>
    )
}