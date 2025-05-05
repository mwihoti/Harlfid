import Image from "next/image"
import { ArrowRight } from "lucide-react"
import TechBackground from "./tech-background"

const services = [
  {
    title: "Digital Marketing Services",
    image: "/f1.webp",
    alt: "Digital Marketing",
    href: "/services#digital-marketing",

  },
  {
    title: "Web Design and Development Services",
    image: "/f2.webp",
    alt: "Web Design",
    href: "/services#web-design",

  },
  {
    title: "Executive Virtual Assistance Services",
    image: "/f3.webp",
    alt: "Virtual Assistance",
    href: "/services#virtual-assistance",

  },
  {
    title: "Social Media Management Services",
    image: "/f4.webp",
    alt: "Social Media",
    href: "/services#social-media",

  },
  {
    title: "Artificial Intelligence and Machine Learning Services",
    image: "/f5.webp",
    alt: "AI/ML",
    href: "/services#ai-ml",
  },
  {
    title: "Cybersecurity Services",
    image: "/f6.webp",
    alt: "Cybersecurity",
    href: "/services#cybersecurity",

  },
  {
    title: "Data Science Services",
    image: "/f7.webp",
    alt: "Data Science",
    href: "/services#data-science",

  },
  {
    title: "Data Analysis Services",
    image: "/f8.webp",
    alt: "Data Analysis",
    href: "/services#data-analysis",

  },
  {
    title: "Graphic Design Services",
    image: "/f9.webp",
    alt: "Graphic Design",
    href: "/services#graphic-design",
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
          Check out some of the services we offer. &quot;Our Expertise, Your Growth&quot;.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#0a4da8] rounded-lg overflow-hidden transform transition-all hover:scale-105"
            >
              <div className="relative h-48">
                <Image src={service.image || "/placeholder.svg"} alt={`${service.alt} - Harlfid digital services`} fill className="object-cover" priority={index < 3} />
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

