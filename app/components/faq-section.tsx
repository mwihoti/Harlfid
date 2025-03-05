"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How does Harlfid ensure quality service delivery?",
    answer:
      "We maintain high quality through rigorous quality assurance processes, experienced professionals, and continuous monitoring of project deliverables. Our team follows industry best practices and standards to ensure exceptional service delivery.",
  },
  {
    question: "Do you offer custom software development?",
    answer:
      "Yes, we offer custom software development services tailored to your specific business needs. Our experienced developers can create bespoke solutions that align with your requirements and objectives.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve a wide range of industries including healthcare, finance, education, retail, technology, and more. Our solutions are adaptable to various business sectors and requirements.",
  },
  {
    question: "What makes Harlfid different?",
    answer:
      "Our unique combination of technical expertise, industry experience, and client-focused approach sets us apart. We provide innovative solutions, personalized service, and measurable results.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes, we provide comprehensive ongoing support and maintenance services to ensure your digital solutions continue to perform optimally and remain up-to-date.",
  },
  {
    question: "What services does Harlfid offer?",
    answer:
      "We offer a wide range of digital services including digital marketing, web development, AI/ML solutions, cybersecurity, data science, virtual assistance, and more. Check our services section for the complete list.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-[#050e2d] py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Frequently Asked Questions?</h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

