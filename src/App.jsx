
import './App.css'
import  { useEffect,useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import SmoothScrollWrapper from './components/SmoothScrollWrapper'
import ParticleBackground from './components/ParticleBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import SocialLinks from './components/SocialLinks'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <SmoothScrollWrapper>
      <div className="relative min-h-screen bg-black">
        <ParticleBackground />
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Education />
        <Projects />
        <Skills />
        <Contact />
        <SocialLinks />
      </div>
    </SmoothScrollWrapper>
  )
}

export default App
