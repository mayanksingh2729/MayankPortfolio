import { useEffect, useRef, useState } from "react"
import html from "../assets/Html.png"
import css from "../assets/Css.png"
import js from "../assets/Javascript.png"
import tailwind from "../assets/Tailwind_css.png"
import react from "../assets/React.png"
import node from "../assets/Nodejs.png"
import mongo from "../assets/Mongodb.png"
import mysql from "../assets/Mysql.png"
import figma from "../assets/Figma.png"

const skillsData = [
  { name: "HTML", img: html, level: 95,},
  { name: "CSS", img: css, level: 90},
  { name: "JavaScript", img: js, level: 85},
  { name: "Tailwind", img: tailwind, level: 88},
  { name: "React", img: react, level: 82},
  { name: "Node.js", img: node, level: 78},
  { name: "MongoDB", img: mongo, level: 75},
  { name: "MySQL", img: mysql, level: 80},
  { name: "Figma", img: figma, level: 85},
]

export default function Skills() {
  const containerRef = useRef(null)
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [balls, setBalls] = useState([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!containerRef.current || !isVisible) return

    const container = containerRef.current
    const rect = container.getBoundingClientRect()

    const initialBalls = skillsData.map((skill, index) => ({
      id: index,
      x: Math.random() * (rect.width - 80) + 40,
      y: -50,
      vx: (Math.random() - 0.5) * 2,
      vy: Math.random() * 2 + 1,
      skill,
    }))

    setBalls(initialBalls)

    const animate = () => {
      setBalls((prevBalls) =>
        prevBalls.map((ball) => {
          let newX = ball.x + ball.vx
          let newY = ball.y + ball.vy
          let newVx = ball.vx
          let newVy = ball.vy

          const currentRect = container.getBoundingClientRect()

          if (newX <= 30 || newX >= currentRect.width - 30) {
            newVx = -newVx * 0.8
            newX = Math.max(30, Math.min(currentRect.width - 30, newX))
          }
          if (newY >= currentRect.height - 30) {
            newVy = -newVy * 0.7
            newY = currentRect.height - 30
          }

          newVy += 0.15
          newVx *= 0.999
          newVy *= 0.999

          return {
            ...ball,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          }
        }),
      )
    }

    const interval = setInterval(animate, 16)
    return () => clearInterval(interval)
  }, [isVisible])

  const handleBallClick = (ballId) => {
    setBalls((prevBalls) =>
      prevBalls.map((ball) =>
        ball.id === ballId
          ? {
              ...ball,
              vx: (Math.random() - 0.5) * 8,
              vy: -Math.random() * 6 - 4,
            }
          : ball,
      ),
    )
  }

  return (
    <section ref={sectionRef} id="skills" className="py-10 relative z-10">
      <div className="max-w-6xl mx-auto px-8">
        <h2
          className={`text-5xl font-bold text-center text-white mb-12 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          My <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
        </h2>

        <div
          ref={containerRef}
          className={`relative w-full h-80 bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-3xl overflow-hidden transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          {balls.map((ball) => (
            <div
              key={ball.id}
              className="absolute cursor-pointer"
              style={{
                left: ball.x - 25,
                top: ball.y - 25,
                transition: "none",
              }}
              onClick={() => handleBallClick(ball.id)}
            >
              <div
                className={`w-14 h-14 bg-gradient-to-r ${ball.skill.color} rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 border-2 border-white/20`}
              >
                <img src={ball.skill.img} alt={ball.skill.name} className="w-11 h-11 object-contain" />
              </div>
            </div>
          ))}

          <div className="absolute left-1/2 transform -translate-x-1/2 text-white/60 text-sm text-center px-4">
            Click on the skill balls to make them bounce!
          </div>
        </div>
      </div>
    </section>
  )
}
