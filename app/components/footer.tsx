import Image from "next/image"
import Link from "next/link"
import {
  Facebook,
  Twitter,
  Youtube,
  InstagramIcon as Tiktok,
  Linkedin,
  Instagram,
  PhoneIcon as WhatsApp,
  Home,
  Mail,
  Phone,
} from "lucide-react"
import TechBackground from "./tech-background"

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Tiktok, href: "#", label: "TikTok" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: WhatsApp, href: "#", label: "WhatsApp" },
]

const services = [
  "Digital Marketing",
  "Web Design and Development",
  "Executive Virtual Assistance",
  "Social Media Management",
  "AI and Machine Learning",
  "Cybersecurity",
  "Data Science",
  "Data Analysis",
  "Graphic Design",
]

const usefulLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact Us", href: "/contact" },
  { name: "Community", href: "/community" },
]

export default function Footer() {
  return (
    <footer className="bg-[#050e2d] text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <TechBackground color="#0a78ff" density={20} speed={0.1} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Image
                src="/harlfidlogo.jpg"
                alt="Harlfid Logo"
                width={200}
                height={120}
                className="mb-4 rounded-xl"
              />
              <p className="text-gray-300">
                We empower businesses with cutting-edge digital solutions tailored to drive growth and innovation.
              </p>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-[#7FE1E5] text-gray-900 px-4 py-2">USEFUL LINKS</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-[#7FE1E5] text-gray-900 px-4 py-2">SERVICES</h3>
            <ul className="space-y-2 list-disc pl-5">
              {services.map((service) => (
                <li key={service}>
                  <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-[#7FE1E5] text-gray-900 px-4 py-2">FOLLOW US</h3>
            <div className="grid grid-cols-4 gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="bg-black text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info with Map */}
        <div className="grid md:grid-cols-2 gap-8 mt-8 mb-8">
          <div className="bg-[#0078D4] grid-flow-col  justify-items-center  text-white p-3 rounded-full md:rounded-[100px]">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Home size={20} />
                <span>Nairobi City, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} />
                <span>info@harlfid.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={20} />
                <span>+254701601126</span>
              </div>
            </div>
          </div>

          <div className="h-[200px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19891888058!2d36.70730744863281!3d-1.3028617999999908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1635835836264!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 border-t border-gray-800 pt-8">
          <p>Copyright © 2025 Harlfid | Powered by Harlfid</p>
        </div>
      </div>
    </footer>
  )
}

