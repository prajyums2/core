"use client"

import { motion } from "framer-motion"
import { METHODOLOGY } from "@/lib/constants"

const stepIcons: Record<string, React.ReactNode> = {
  "define": (
    <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="4" fill="currentColor" />
      <line x1="24" y1="2" x2="24" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="24" y1="38" x2="24" y2="46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="2" y1="24" x2="10" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="38" y1="24" x2="46" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "door-to-door": (
    <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
      <path d="M10 44V16L24 6L38 16V44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="18" y="26" width="12" height="18" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="27" cy="36" r="1.5" fill="currentColor" />
      <path d="M6 20L24 8L42 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "street-intercept": (
    <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
      <circle cx="18" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 34C10 28.477 13.582 24 18 24C22.418 24 26 28.477 26 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="32" cy="18" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M26 34C26 30.134 28.686 27 32 27C35.314 27 38 30.134 38 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="40" x2="42" y2="40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  "data-analysis": (
    <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
      <rect x="8" y="28" width="8" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="20" y="18" width="8" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="32" y="8" width="8" height="34" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 22L24 12L36 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

export default function Methodology() {
  return (
    <section id="methodology" className="section-padding bg-white" style={{ scrollMarginTop: "80px" }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
            Our Approach
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-4">
            The Science Behind <span className="italic text-accent">Every Survey</span>
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 text-lg font-light">
            Scientific sampling methods ensuring accuracy and representativeness
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {METHODOLOGY.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="bg-[#fafafa] rounded-3xl p-8 border border-slate-100 hover:border-accent/20 transition-colors group">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-bold text-accent tracking-widest">STEP {step.step}</span>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 border border-slate-100 group-hover:magenta-gradient transition-all duration-500 shadow-sm text-slate-700 group-hover:text-white">
                    {stepIcons[step.id]}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                </div>

                {i < METHODOLOGY.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 flex items-center justify-center z-10">
                    <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 12">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
