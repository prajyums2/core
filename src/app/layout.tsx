import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "CORE | Strategic Political Intelligence — Kerala's #1 Election Survey Firm",
  description:
    "Kerala's premier political strategy firm. 100+ surveys, 95% accuracy, 7+ years transforming raw public opinion into actionable electoral intelligence.",
  keywords:
    "election survey, political strategy, opinion poll, Kerala elections, campaign management, CORE, political consulting",
  openGraph: {
    title: "CORE | Strategic Political Intelligence",
    description:
      "Kerala's premier political strategy firm. 100+ surveys, 95% accuracy.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable}`}>
      <body className="font-sans bg-[#fafafa] text-slate-600 antialiased overflow-x-hidden">
        <div
          className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
