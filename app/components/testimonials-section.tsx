import Image from "next/image"
import { Star } from "lucide-react"
import TechBackground from "./tech-background"

// Only keep the first 3 testimonials
const testimonials = [
  {
    name: "Brian James",
    role: "CEO, Amire Creatives",
    rating: 5,
    text: "Harlfid's AI and ML solutions have revolutionized the way Amire Creatives operates. Their cutting-edge technology and data-driven insights have enhanced our efficiency, creativity, and decision-making. A game-changer for our business!",
  },
  {
    name: "Gladys Ann",
    role: "Content Writer",
    rating: 4,
    text: "Harlfid has been a game-changer for my content writing career. Their expertise in digital solutions has helped me create, optimize, and market content more effectively. The support, tools, and guidance they provide ensure quality and success in every project.",
  },
  {
    name: "Mark Kamau",
    role: "SEO Expert",
    rating: 4,
    text: "Harlfid has transformed the way I approach SEO. Their innovative strategies and deep understanding of search algorithms have helped me achieve higher rankings and better visibility for my clients. Their expertise is truly unmatched!",
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#050e2d] py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <TechBackground color="#0a78ff" density={25} speed={0.25} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Success Stories from Our Clients
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#0a4da8] p-6 rounded-lg hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
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
          ))}
        </div>
      </div>
    </section>
  )
}

