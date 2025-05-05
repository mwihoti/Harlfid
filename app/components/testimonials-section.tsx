import Image from "next/image"
import { Star,  ChevronLeft, ChevronRight } from "lucide-react"
import TechBackground from "./tech-background"
import { useState, useRef, useEffect} from "react"

// Only keep the first 3 testimonials
// Include all 9 testimonials
const testimonials = [
  {
    name: "Brian James",
    role: "CEO, Amire Creatives",
    image: "/img2.png",
    rating: 5,
    text: "Harlfid's AI and ML solutions have revolutionized the way Amire Creatives operates. Their cutting-edge technology and data-driven insights have enhanced our efficiency, creativity, and decision-making. A game-changer for our business!",
  },
  {
    name: "Gladys Ann",
    role: "Content Writer",
    image: "/img3.png",
    rating: 4,
    text: "Harlfid has been a game-changer for my content writing career. Their expertise in digital solutions has helped me create, optimize, and market content more effectively. The support, tools, and guidance they provide ensure quality and success in every project.",
  },
  {
    name: "Mark Kamau",
    role: "SEO Expert",
    image: "/img5.png",
    rating: 4,
    text: "Harlfid has transformed the way I approach SEO. Their innovative strategies and deep understanding of search algorithms have helped me achieve higher rankings and better visibility for my clients. Their expertise is truly unmatched!",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Director, TechSolutions",
    image: "/img4.png",
    rating: 5,
    text: "Working with Harlfid has been a revelation for our marketing team. Their digital marketing strategies increased our conversion rates by 45% in just three months. Their team is responsive, innovative, and truly understands our business goals.",
  },
  {
    name: "David Chen",
    role: "CTO, InnovateTech",
    image: "/img3.png",
    rating: 5,
    text: "As a tech company, we have high standards for our digital partners. Harlfid exceeded all expectations with their cybersecurity solutions. They identified vulnerabilities we weren't aware of and implemented robust protection systems that give us peace of mind.",
  },
  {
    name: "Priya Patel",
    role: "E-commerce Manager",
    rating: 4,
    text: "Our online store's performance has improved dramatically since partnering with Harlfid. Their web development team optimized our site speed, enhanced the user experience, and implemented seamless payment integrations. Sales are up 60% year-over-year!",
  },
  {
    name: "Michael Rodriguez",
    image: "/img2.png",
    role: "Small Business Owner",
    rating: 5,
    text: "As a small business owner with limited resources, I was hesitant about investing in digital services. Harlfid created a customized package that fit my budget and delivered exceptional ROI. Their social media management has helped me compete with much larger companies.",
  },
  {
    name: "Emma Wilson",
    role: "Data Analyst, FinTech Solutions",
    rating: 4,
    text: "Harlfid's data science team helped us make sense of our massive datasets and extract actionable insights. Their visualizations and predictive models have become essential tools for our decision-making process. Highly recommended for any data-driven company.",
  },
  {
    name: "James Ochieng",
    role: "Creative Director",
    rating: 5,
    text: "The graphic design work from Harlfid transformed our brand identity. Their designers have an exceptional eye for detail and truly understood our vision. Our new visual identity has received overwhelmingly positive feedback from clients and partners alike.",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = Math.ceil(testimonials.length / 3) - 1
  const containerRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0))
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex))
  }

  // Touch handlers for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left, go next
      handleNext()
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right, go prev
      handlePrev()
    }
  }

  // Calculate visible testimonials based on current index
  const visibleTestimonials = isMobile
    ? testimonials.slice(currentIndex, currentIndex + 1)
    : testimonials.slice(currentIndex * 3, currentIndex * 3 + 3)

    return (
      <section id="testimonials" className="bg-[#050e2d] py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <TechBackground color="#0a78ff" density={25} speed={0.25} />
        </div>
  
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Success Stories from Our Clients
          </h2>
  
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 z-10 shadow-lg"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={24} />
            </button>
  
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 z-10 shadow-lg"
              aria-label="Next testimonials"
            >
              <ChevronRight size={24} />
            </button>
  
            {/* Testimonials Slider */}
            <div
              ref={containerRef}
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (isMobile ? 100 : 100 / 3)}%)` }}
              >
                <div className="flex flex-nowrap">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className={`${isMobile ? "w-full" : "w-1/3"} flex-shrink-0 px-3`}>
                      <div className="bg-[#0a4da8] p-6 rounded-lg h-full">
                        <div className="flex items-center mb-4">
                          <div className="relative w-12 h-12 mr-4">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={`${testimonial.name} - testimonials images`}
                              fill
                              className="rounded-full object-cover"
                              priority={index < 3}
                            />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">{testimonial.name}</h3>
                            <p className="text-white/70 text-sm">{testimonial.role}</p>
                          </div>
                        </div>
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-white/90 text-sm">{testimonial.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Pagination Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {[...Array(maxIndex + 1)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index ? "bg-blue-500" : "bg-gray-500 opacity-50"
                  }`}
                  aria-label={`Go to testimonial page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  