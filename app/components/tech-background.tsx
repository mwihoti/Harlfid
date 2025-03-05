"use client"

import { useEffect, useRef } from "react"

interface TechBackgroundProps {
  className?: string
  color?: string
  density?: number
  speed?: number
}

export default function TechBackground({
  className = "",
  color = "#0a78ff",
  density = 50,
  speed = 0.5,
}: TechBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let connections: Connection[] = []

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initParticles()
    }

    // Particle class
    class Particle {
        x!: number
        y!: number
        size!: number
        speedX!: number
        speedY!: number
        opacity!: number
      

      constructor() {
        if (!canvas) return // Exit early if canvas is null

        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = (Math.random() - 0.5) * speed
        this.speedY = (Math.random() - 0.5) * speed
        this.opacity = Math.random() * 0.5 + 0.2
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (!canvas) return // Exit early if canvas is null


        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.globalAlpha = this.opacity
        ctx.fill()
      }
    }

    // Connection class
    class Connection {
      from: Particle
      to: Particle
      distance: number
      opacity: number
      life: number
      maxLife: number

      constructor(from: Particle, to: Particle) {
        this.from = from
        this.to = to
        this.distance = Math.hypot(from.x - to.x, from.y - to.y)
        this.opacity = Math.max(0, 1 - this.distance / 100) * 0.5
        this.life = 0
        this.maxLife = 100 + Math.random() * 150
      }

      update() {
        this.distance = Math.hypot(this.from.x - this.to.x, this.from.y - this.to.y)
        this.opacity = Math.max(0, 1 - this.distance / 100) * 0.5
        this.life++
        return this.life < this.maxLife && this.distance < 150
      }

      draw() {
        if (this.opacity <= 0) return
        if (!ctx) return

        ctx.beginPath()
        ctx.moveTo(this.from.x, this.from.y)
        ctx.lineTo(this.to.x, this.to.y)
        ctx.strokeStyle = color
        ctx.globalAlpha = this.opacity * (1 - this.life / this.maxLife)
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
    }

    // Initialize particles
    const initParticles = () => {
      particles = []
      connections = []
      const particleCount = Math.floor((canvas.width * canvas.height) / (10000 / density))

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    // Create new connections
    const createConnections = () => {
      if (Math.random() > 0.95 && particles.length > 1) {
        const from = particles[Math.floor(Math.random() * particles.length)]
        const to = particles[Math.floor(Math.random() * particles.length)]
        if (from !== to) {
          connections.push(new Connection(from, to))
        }
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Create new connections
      createConnections()

      // Update and draw connections
      connections = connections.filter((connection) => {
        const isAlive = connection.update()
        if (isAlive) connection.draw()
        return isAlive
      })

      // Add digital circuit elements
      drawCircuitElements()

      animationFrameId = requestAnimationFrame(animate)
    }

    // Draw circuit-like elements
    const drawCircuitElements = () => {
      // Draw a few horizontal and vertical lines
      const lineCount = Math.floor(canvas.width / 200)

      ctx.globalAlpha = 0.15
      ctx.lineWidth = 1
      ctx.strokeStyle = color

      // Horizontal lines
      for (let i = 0; i < lineCount; i++) {
        const y = Math.random() * canvas.height
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Vertical lines
      for (let i = 0; i < lineCount; i++) {
        const x = Math.random() * canvas.width
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw some nodes/connection points
      const nodeCount = lineCount * 2
      ctx.fillStyle = color

      for (let i = 0; i < nodeCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 3 + 1

        ctx.globalAlpha = Math.random() * 0.3 + 0.1
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()

        // Sometimes draw a small ring around nodes
        if (Math.random() > 0.7) {
          ctx.globalAlpha = Math.random() * 0.2 + 0.05
          ctx.beginPath()
          ctx.arc(x, y, size + Math.random() * 10 + 5, 0, Math.PI * 2)
          ctx.stroke()
        }
      }
    }

    // Handle resize
    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [color, density, speed])

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} />
}

