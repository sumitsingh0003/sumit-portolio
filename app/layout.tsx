import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sumit - Portfolio Search",
  description: "Senior Software Engineer & Full Stack Developer - Building real-time, AI-powered solutions",
  generator: "Sumit Portfolio Search",
  icons: {
    icon: [
      {
        url: "/mainFav.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/mainFav.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/mainFav.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/mainFav.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
