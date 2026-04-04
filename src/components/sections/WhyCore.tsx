"use client"

import { motion } from "framer-motion"
import { Shield, Target, Users, Award } from "lucide-react"
import { WHY_CORE, PARTIES } from "@/lib/constants"

const iconMap: Record<string, React.ElementType> = {
  "credibility": Shield,
  "accuracy": Target,
  "executives": Users,
  "number-one": Award,
}

export default function WhyCore() {
  return (
    <section className="section-padding bg-[#fafafa]" style={{ scrollMarginTop: "80px" }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-4">
            Why <span className="italic text-accent">CORE</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {WHY_CORE.map((reason, i) => {
            const Icon = iconMap[reason.id]
            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 hover:border-accent/20 transition-colors group text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mx-auto mb-6 border border-slate-100 group-hover:magenta-gradient transition-all duration-500">
                  {Icon && <Icon className="w-5 h-5 text-accent group-hover:text-white transition-colors" />}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{reason.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{reason.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 text-center border border-slate-100"
        >
          <h3 className="text-xl font-bold text-slate-900 font-serif mb-3">
            Trusted Across the Political Spectrum
          </h3>
          <p className="text-slate-400 mb-8 max-w-md mx-auto text-sm">
            CORE has conducted surveys for candidates and leaders from all major political parties in Kerala
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {PARTIES.map((party) => (
              <span
                key={party.name}
                className="px-5 py-2 rounded-full text-xs font-bold text-white transition-all duration-300 hover:scale-105 cursor-default"
                style={{
                  backgroundColor: party.color,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                  e.currentTarget.style.color = party.color
                  e.currentTarget.style.boxShadow = `inset 0 0 0 2px ${party.color}`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = party.color
                  e.currentTarget.style.color = "white"
                  e.currentTarget.style.boxShadow = "none"
                }}
              >
                {party.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
