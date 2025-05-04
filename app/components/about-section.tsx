import Image from "next/image"
import { DollarSign, Lightbulb, Smile } from "lucide-react"
import TechBackground from "./tech-background"

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#050e2d] py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <TechBackground color="#0a78ff" density={40} speed={0.1} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-white mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Harlfid</h2>
          <p className="text-white/80 mb-8">
            Harlfid is a global leader in delivering innovative digital solutions designed to empower businesses of all
            sizes. Our mission is to bridge the gap between technology and business success by offering a comprehensive
            range of services, including web design, digital marketing, cybersecurity, graphic design, virtual
            assistance, data analysis, data science, DevOps engineering, and AI-driven solutions.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-white/80">
                To deliver exceptional digital services that are customized to meet the unique needs of our clients,
                while building a thriving community of freelancers and professionals who are connected, inspired, and
                equipped to make an impact.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-white/80">
                To be a global leader in digital transformation by providing innovative solutions that bridge the gap
                between technology and business, empowering our clients to thrive in a digital-first world.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative h-[400px]">
            <Image
              src="/img1.jpg"
              alt="Why Choose Us"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>

            <p className="text-white/80 mb-4">
              At Harlfid, we deliver comprehensive digital solutions tailored to your unique business needs. With a
              global reach and a skilled and passionate team, we ensure measurable results and excellence in every
              project. Choose Harlfid for personalized strategies, end-to-end support, and a commitment to helping your
              business succeed in the digital world.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors">
              Contact Us
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#0a3b7e] p-6 rounded-lg animate-float" style={{ animationDelay: "0.1s" }}>
            <DollarSign className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Competitive Pricing</h3>
            <p className="text-white/80">
              We offer high-quality services at affordable prices, ensuring maximum value without compromising excellent
              results.
            </p>
          </div>

          <div className="bg-[#0a3b7e] p-6 rounded-lg animate-float" style={{ animationDelay: "0.3s" }}>
            <Lightbulb className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Innovative Solution</h3>
            <p className="text-white/80">
              At Harlfid, we use advanced technologies and innovative strategies to help your brand excel in the dynamic
              digital world.
            </p>
          </div>

          <div className="bg-[#0a3b7e] p-6 rounded-lg animate-float" style={{ animationDelay: "0.5s" }}>
            <Smile className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Satisfaction</h3>
            <p className="text-white/80">
              We deliver exceptional results with quality, reliability, and personalized service, ensuring every project
              exceeds expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

