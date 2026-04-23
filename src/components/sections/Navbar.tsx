"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
// Import the MagneticButton component
import MagneticButton from "@/components/ui/MagneticButton";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Timeline", href: "#timeline" },
  { name: "Methodology", href: "#methodology" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 2.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 ${scrolled ? "py-2" : "py-4"}`}
      >
        <div
          className={`max-w-7xl mx-auto flex justify-between items-center glass rounded-full px-5 md:px-8 py-3 transition-all duration-300 ${scrolled ? "shadow-md" : "shadow-sm"}`}
        >
          <a href="#" className="flex items-center" aria-label="CORE Home">
            <Image
              src="/logo.png"
              alt="CORE"
              width={180}
              height={94}
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-slate-500">
            {navLinks.map((link) => (
              <MagneticButton
                key={link.name}
                href={link.href}
                // Added py-2 so the magnetic bounding box is easier to hit
                className="relative group hover:text-slate-900 transition-colors py-2 px-1 cursor-pointer inline-block"
              >
                {link.name}
                <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </MagneticButton>
            ))}

            {/* Main CTA with Magnetic Effect */}
            <MagneticButton
              href="#contact"
              className="bg-navy text-white px-6 py-2.5 rounded-full hover:bg-accent transition-all duration-300 inline-block cursor-pointer"
            >
              Inquire
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-500 hover:text-accent transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#fafafa]/95 backdrop-blur-xl flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-3xl font-serif font-bold text-slate-900 py-4 hover:text-accent transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                onClick={() => handleNavClick("#contact")}
                className="mt-8 inline-block bg-navy text-white px-8 py-4 rounded-full font-bold hover:bg-accent transition-colors"
              >
                Inquire
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
