import TechBackground from "../components/tech-background"
import { Check, X } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Basic",
    price: 386.74,
    features: {
      "Mobile Marketing": true,
      "Content Marketing": true,
      "Social Media Marketing": true,
      "Email Marketing": true,
      "Analytics and Reporting": false,
      "Affiliate Marketing": false,
      "Pay-Per-Click (PPC) Advertising": false,
      "Search Engine Optimization": false,
      "Public Relations": false,
      "Influencer Marketing": false,
    },
  },
  {
    name: "Business",
    price: 773.64,
    features: {
      "Mobile Marketing": true,
      "Content Marketing": true,
      "Social Media Marketing": true,
      "Email Marketing": true,
      "Analytics and Reporting": true,
      "Affiliate Marketing": true,
      "Pay-Per-Click (PPC) Advertising": true,
      "Search Engine Optimization": false,
      "Public Relations": false,
      "Influencer Marketing": false,
    },
  },
  {
    name: "Premium",
    price: 1160.45,
    features: {
      "Mobile Marketing": true,
      "Content Marketing": true,
      "Social Media Marketing": true,
      "Email Marketing": true,
      "Analytics and Reporting": true,
      "Affiliate Marketing": true,
      "Pay-Per-Click (PPC) Advertising": true,
      "Search Engine Optimization": true,
      "Public Relations": true,
      "Influencer Marketing": true,
    },
  },
]

const individualServices = [
  {
    name: "Digital Marketing",
    description: "Comprehensive digital marketing services to grow your online presence",
    price: 299.99,
  },
  {
    name: "Web Design & Development",
    description: "Custom website design and development tailored to your business needs",
    price: 499.99,
  },
  {
    name: "Social Media Management",
    description: "Professional management of your social media accounts to boost engagement",
    price: 249.99,
  },
  {
    name: "SEO Services",
    description: "Search engine optimization to improve your website's visibility",
    price: 349.99,
  },
  {
    name: "Content Creation",
    description: "High-quality content creation for your website and marketing campaigns",
    price: 199.99,
  },
  {
    name: "Graphic Design",
    description: "Professional graphic design services for all your visual needs",
    price: 179.99,
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#050e2d]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <TechBackground color="#0a78ff" density={70} speed={0.3} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Flexible and Transparent Pricing to Suit Your Needs.
          </h1>
          <p className="text-white/80 text-center max-w-3xl mx-auto">
            Harlfid believes in offering value-driven services with pricing models designed to accommodate businesses of
            all sizes. Whether you're a startup, a growing business, or an established enterprise, our packages are
            tailored to meet your unique requirements while staying within your budget.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8">1. Digital Marketing Service{"{Pricing}"}</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className="bg-[#0a4da8] rounded-lg p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-white">
                    ${plan.price}
                    <span className="text-sm font-normal text-white/70">/per Month</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {Object.entries(plan.features).map(([feature, included]) => (
                    <div key={feature} className="flex items-center">
                      {included ? (
                        <Check className="h-5 w-5 text-green-400 mr-2" />
                      ) : (
                        <X className="h-5 w-5 text-red-400 mr-2" />
                      )}
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-full transition-colors">
                  Purchase
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Service Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8">Individual Service Pricing{"{Monthly}"}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {individualServices.map((service) => (
              <div key={service.name} className="bg-[#0a4da8] rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-white/80 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-white mb-4">
                  ${service.price}
                  <span className="text-sm font-normal text-white/70">/month</span>
                </div>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-full transition-colors">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-[#0a3b7e] rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              We understand that every business has unique needs. Contact us for a personalized quote tailored
              specifically to your requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-colors"
            >
              Contact Us for Custom Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

