import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google"
import "./globals.css"

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "CORE | Strategic Political Intelligence — Kerala's #1 Election Survey Firm",
  description: "Kerala's premier political strategy firm. 100+ surveys, 95% accuracy, 7+ years transforming raw public opinion into actionable electoral intelligence.",
  keywords: "election survey, political strategy, opinion poll, Kerala elections, campaign management, CORE, political consulting",
  openGraph: {
    title: "CORE | Strategic Political Intelligence",
    description: "Kerala's premier political strategy firm. 100+ surveys, 95% accuracy.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "CORE | Strategic Political Intelligence",
    description: "Kerala's premier political strategy firm.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable}`}>
      <body className="font-sans bg-[#fafafa] text-slate-600 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
