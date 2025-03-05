"use client"

import type React from "react"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Community", href: "#community" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Function to handle smooth scrolling
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }

    // Get the target element
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Scroll to the target element
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      // Update URL without page reload
      window.history.pushState(null, "", href)
    }
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-gray-900">HAR L</span>
              <span className="text-blue-500">FID</span>
            </div>
            <div className="text-xs text-gray-600 ml-1">YOUR DIGITAL PARTNER</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-gray-700 hover:text-blue-500 transition-colors px-4 py-2"
                >
                  {link.name}
                </a>
              ))}
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors mx-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

