import Link from "next/link"

export default function ServicePricingButton() {
  return (
    <Link
      href="/pricing"
      className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-medium transition-colors"
    >
      Service Pricing
    </Link>
  )
}

