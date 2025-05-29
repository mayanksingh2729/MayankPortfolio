import { useState, useEffect } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about-us" },
    { name: "Qualification", id: "qualification" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact Us", id: "contact-us" },
  ]

  return (
    <nav className="sticky top-0 w-full z-50 transition-all duration-300">
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? " backdrop-blur-md shadow-lg border-b border-purple-500/20"
            : " backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              MAYANK
            </div>

            <div className="flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/80 font-semibold hover:text-white transition-colors duration-300 hover:scale-105 transform text-base relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
