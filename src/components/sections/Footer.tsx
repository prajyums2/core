"use client"

import { useState } from "react"
import Image from "next/image"
import { CONTACT, COMPANY } from "@/lib/constants"
import { Linkedin, Twitter, Instagram, Facebook, Mail, MapPin, Phone, ChevronUp } from "lucide-react"

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Timeline", href: "#timeline" },
  { name: "Methodology", href: "#methodology" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
]

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image src="/logo.png" alt="CORE" width={160} height={84} className="h-10 w-auto object-contain mb-4 brightness-0 invert" />
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Citizens Opinion Research and Evaluation — Kerala&apos;s premier political strategy firm.
            </p>
            <div className="space-y-3">
              <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors">
                <Phone size={14} />
                {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors">
                <Mail size={14} />
                {CONTACT.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <MapPin size={14} />
                {CONTACT.location}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {["Opinion Analytics", "Campaign Strategy", "Political Intelligence", "Media Perception"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-slate-400 hover:text-white transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent transition-colors duration-300"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Stay updated with our latest survey insights and political analysis.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} {COMPANY.fullName}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent transition-colors duration-300"
              aria-label="Back to top"
            >
              <ChevronUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
