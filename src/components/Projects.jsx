import { useEffect, useRef, useState } from "react"
import project1 from "../assets/Project1.png"
import project2 from "../assets/Project2.png"
import project3 from "../assets/Project3.png"
import project4 from "../assets/Project4.png"
import project5 from "../assets/Project5.png"
import git from "../assets/Github.png"
import link from "../assets/Link.png" 

const projectsData = [
  {
    id: "01",
    name: "GadgetEase",
    description: "A full-stack e-commerce platform Where people can Rent Expensive Product in affordable Price. ON GOING PROJECT",
    image: project1,
    github: "#",
    demo: "#",
    tech: ["Tailwind", "React", "Nodejs", "Express", "MongoDB"],
  },
  {
    id: "02",
    name: "Blood Connect",
    description: "A platform where life can be saved by donating Blood to urgent needy People. User can also check the avilibility of blood from nearby hospitals.",
    image: project2,
    github: "https://github.com/mayanksingh2729/Blood_Connect",
    demo: "https://blood-connect27.netlify.app/",
    tech: ["Javascript", "React","Responsive", "Nodejs", "MongoDB"],
  },
  {
    id: "03",
    name: "Travelling Blog Website",
    description:"A travelling blog website Where i post my experiences of trips specially in Uttarakhand. I share what is the best time to visit and beautiful places where you must visit",
    image: project3,
    github: "https://github.com/mayanksingh2729/Pahadi-Traveller",
    demo: "https://pahadi-traveller.onrender.com/",
    tech: ["Javascript", "React", "Tailwind", "Responsive","Typescript"],
  },
  {
    id: "04",
    name: "Portfolio",
    description: "A Portfolio which describe Me",
    image: project4,
    github: "#",
    demo: "#",
    tech: ["Tailwind", "Javascript", "React"],
  },
  {
    id: "05",
    name: "MOMOMIA",
    description: "A Static food Ordering website",
    image: project5,
    github: "https://github.com/mayanksingh2729/MomoMia",
    demo: "https://momomia-emux.onrender.com/",
    tech: ["HTML", "CSS", "JS"],
  },
]

export default function Projects() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isSpread, setIsSpread] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => {
            setIsSpread(true)
          }, 300)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const ProjectCard = ({ project, index }) => {
    const isEven = index % 2 === 0

    const InfoSection = () => (
      <>
        <div className="text-4xl font-bold text-purple-400 mb-2">{project.id}</div>
        <a
          href={project.github}
          target="_blank"
          className="text-xl font-semibold text-white hover:text-cyan-400 transition-colors duration-200 block mb-3"
        >
          {project.name}
        </a>
        <p className="text-white/70 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-md text-xs font-bold"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4 items-center mt-2">
          {/* GitHub Link */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 transform transition-transform duration-300 hover:scale-110 cursor-pointer"
          >
            <img src={git} alt="GitHub" className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-purple-200 text-transparent bg-clip-text">
              GitHub
            </span>
          </a>

          {/* Demo Link */}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 transform transition-transform duration-300 hover:scale-110 cursor-pointer"
          >
            <img src={link} alt="Demo" className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-cyan-200 text-transparent bg-clip-text">
              Demo
            </span>
          </a>
        </div>
      </>
    )

    const projectContent = (
      <>
        <div className="p-6">
          <InfoSection />
        </div>
        <img src={project.image || "/placeholder.svg"} alt={project.name} className="w-full h-48 object-cover" />
      </>
    )

    const reversedContent = (
      <>
        <img src={project.image || "/placeholder.svg"} alt={project.name} className="w-full h-48 object-cover" />
        <div className="p-6">
          <InfoSection />
        </div>
      </>
    )

    return (
      <div
        className={`bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 ${
          isSpread
            ? "opacity-100 scale-100 translate-x-0 translate-y-0"
            : "opacity-80 scale-75 translate-x-0 translate-y-0"
        }`}
        style={{
          transform: isSpread ? "translate(0, 0) scale(1)" : "translate(calc(50vw - 50%), calc(50vh - 50%)) scale(0.3)",
          transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.08}s`,
          position: isSpread ? "relative" : "absolute",
          zIndex: isSpread ? 1 : 10 - index,
        }}
      >
        {isEven ? projectContent : reversedContent}
      </div>
    )
  }

  return (
    <section ref={sectionRef} id="projects" className="py-5">
      <div className="max-w-7xl mx-auto px-20">
        <div className="flex justify-center items-center mb-12">
          <h2
            className={`text-5xl font-bold text-white transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            My <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Work</span>
          </h2>
        </div>

        <div className={`${isSpread ? "grid grid-cols-3 gap-8" : "relative h-96"}`}>
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
