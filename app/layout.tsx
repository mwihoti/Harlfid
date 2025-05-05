import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Harlfid - Your Digital Partner",
  description: "Explore Harlfid's comprehensive range of digital services including web development, digital marketing, AI solutions, and more.",
  openGraph: {
    title: "Harlfid - Your Digital Partner",
  description: "Explore Harlfid's comprehensive range of digital services including web development, digital marketing, AI solutions, and more.",
  }

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

