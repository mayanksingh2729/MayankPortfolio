import { useEffect, useRef } from "react"

export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()

    const particles = []

    const initParticles = () => {
      particles.length = 0
      const count = 80

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.3,
          life: 0,
          maxLife: 0,
        })
      }
    }

    initParticles()

    let mouseX = 0
    let mouseY = 0
    let isMouseOver = false

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      isMouseOver = true
    }

    const handleMouseLeave = () => {
      isMouseOver = false
    }

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const clickY = e.clientY - rect.top

      for (let i = 0; i < 8; i++) {
        particles.push({
          x: clickX,
          y: clickY,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8,
          size: Math.random() * 4 + 2,
          opacity: 1,
          life: 0,
          maxLife: 60,
        })
      }
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)
    canvas.addEventListener("click", handleClick)

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        if (isMouseOver) {
          const dx = mouseX - particle.x
          const dy = mouseY - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 140) {
            const force = (140 - distance) / 140
            particle.vx += (dx / distance) * force * 0.02
            particle.vy += (dy / distance) * force * 0.02
          }
        }

        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.maxLife > 0) {
          particle.life++
          particle.opacity = 1 - particle.life / particle.maxLife
          particle.vx *= 0.98
          particle.vy *= 0.98

          if (particle.life >= particle.maxLife) {
            particles.splice(index, 1)
            return
          }
        }

        if (particle.maxLife === 0) {
          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(108, 71, 255, ${particle.opacity})`
        ctx.fill()

        if (particle.maxLife === 0) {
          particles.slice(index + 1).forEach((otherParticle) => {
            if (otherParticle.maxLife > 0) return

            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 150) {
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.strokeStyle = `rgba(108, 71, 255, ${0.4 * (1 - distance / 150)})`
              ctx.lineWidth = 1
              ctx.stroke()
            }
          })
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      resizeCanvas()
      initParticles()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      canvas.removeEventListener("click", handleClick)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-auto z-0" />
}
