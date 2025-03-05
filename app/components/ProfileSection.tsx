"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowRight, Phone, MessageCircle } from "lucide-react"

import TechBackground from "./tech-background"

export default function ProfileSection() {
  const [clientsCount, setClientsCount] = useState(0)
  const [reviewsCount, setReviewsCount] = useState(0)
  const [satisfactionCount, setSatisfactionCount] = useState(0)
  const statsRef = useRef<HTMLDivElement>(null)
  const animationTriggered = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !animationTriggered.current) {
          animationTriggered.current = true
          animateNumbers()
        }
      },
      { threshold: 0.1 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  const animateNumbers = () => {
    const duration = 2000 // 2 seconds
    const clientsTarget = 50
    const reviewsTarget = 45
    const satisfactionTarget = 100
    const framesPerSecond = 60
    const totalFrames = (duration / 1000) * framesPerSecond

    let frame = 0

    const timer = setInterval(() => {
      frame++
      const progress = frame / totalFrames

      setClientsCount(Math.floor(clientsTarget * progress))
      setReviewsCount(Math.floor(reviewsTarget * progress))
      setSatisfactionCount(Math.floor(satisfactionTarget * progress))

      if (frame === totalFrames) {
        clearInterval(timer)
        setClientsCount(clientsTarget)
        setReviewsCount(reviewsTarget)
        setSatisfactionCount(satisfactionTarget)
      }
    }, 1000 / framesPerSecond)
  }

  return (
    <main className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white p-4 shadow-md">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-gray-900">HAR L</span>
              <span className="text-blue-500">FID</span>
            </div>
            <div className="text-xs text-gray-600 ml-1">YOUR DIGITAL PARTNER</div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-grow bg-[#050e2d] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent z-10"></div>
          <TechBackground color="#0a78ff" density={70} speed={0.3} />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-20">
          <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-in opacity-0">
          Empowering Global Businesses with Cutting-Edge Digital Solutions at Harlfid.
            </h1>
            <p className="text-xl mb-8">
              Harlfid provides top-notch digital skills and services to help you scale your business globally.
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full flex items-center transition-all animate-slide-in opacity-0"
              style={{ animationDelay: "0.5s" }}
            >
              Try Now <ArrowRight className="ml-2" />
            </button>
          </div>

          {/* Stats Section */}
          <div className="mt-16 md:mt-24" ref={statsRef}>
            <div className="flex flex-col md:flex-row">
              <div className="bg-[#0a3b7e] p-8 md:w-1/2 text-white">
                <p className="mb-4">You can give us a call or WhatsApp us today through the numbers below:</p>
                <div className="flex items-center mb-3">
                  <MessageCircle className="mr-2" />
                  <span>+254741677399</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2" />
                  <span>+254741677399</span>
                </div>
              </div>

              <div className="bg-[#0a4da8] p-8 md:w-1/2 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold">{clientsCount}</div>
                  <div className="text-sm mt-2">Client Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold">{reviewsCount}</div>
                  <div className="text-sm mt-2">5 Star Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold">{satisfactionCount}%</div>
                  <div className="text-sm mt-2">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </main>
  )
}

