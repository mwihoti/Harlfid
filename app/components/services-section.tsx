import Image from "next/image"
import { ArrowRight } from "lucide-react"
import TechBackground from "./tech-background"

const services = [
  {
    title: "Digital Marketing Services",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Digital Marketing",
  },
  {
    title: "Web Design and Development Services",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Web Design",
  },
  {
    title: "Executive Virtual Assistance Services",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Virtual Assistance",
  },
  {
    title: "Social Media Management Services",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Social Media",
  },
  {
    title: "Artificial Intelligence and Machine Learning Services",
    image: "/placeholder.svg?height=200&width=300",
    alt: "AI/ML",
  },
  {
    title: "Cybersecurity Services",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Cybersecurity",
  },
  {
    title: "Data Science Services",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Data Science",
  },
  {
    title: "Data Analysis Services",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Data Analysis",
  },
  {
    title: "Graphic Design Services",
    image: "/placeholder.svg?height=200&width=300",
    alt: "Graphic Design",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#050e2d] py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <TechBackground color="#0a78ff" density={30} speed={0.2} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Our Services</h2>
        <p className="text-white/80 text-center mb-12">
          Check out some of the services we offer. "Our Expertise, Your Growth".
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#0a4da8] rounded-lg overflow-hidden transform transition-all hover:scale-105"
            >
              <div className="relative h-48">
                <Image src={service.image || "/placeholder.svg"} alt={service.alt} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-white font-semibold mb-4">{service.title}</h3>
                <button className="flex items-center text-white hover:text-blue-300 transition-colors">
                  View More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

