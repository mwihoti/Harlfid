
"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowRight, Phone, MessageCircle } from "lucide-react"
import ServicesSection from "./components/services-section"
import TestimonialsSection from "./components/testimonials-section"
import CommunitySection from "./components/community-section"
import AboutSection from "./components/about-section"
import TechBackground from "./components/tech-background"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import FAQSection from "./components/faq-section"

export default function Home() {
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

    const currentStatsRef = statsRef.current

    if (currentStatsRef) {
      observer.observe(currentStatsRef)
    }
  
    return () => {
      if (currentStatsRef) {
        observer.unobserve(currentStatsRef)
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
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section id="home" className="flex-grow bg-[#050e2d] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent z-10"></div>
            <TechBackground color="#0a78ff" density={70} speed={0.3} />
          </div>

          <div className="container mx-auto px-4 py-16 md:py-24 relative z-20">
            <div className="max-w-2xl text-center flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-in opacity-0">
                Empowering Global Businesses with Cutting-Edge Digital Solutions at Harlfid.
              </h1>
              <p className="text-xl mb-8">
                Harlfid provides top-notch digital skills and services to help you scale your business globally.
              </p>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full  flex justify-center items-center transition-all animate-slide-in opacity-0"
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

        {/* Add a contact section for the navbar link */}
        <section id="contact" className="hidden">
          {/* This is a hidden section just to make the contact link work */}
        </section>

        {/* New sections */}
        <ServicesSection />
        <TestimonialsSection />
        <CommunitySection />
      
        <FAQSection />
        <AboutSection />

      </main>
      <Footer />
    </>
  )
}

