"use client"

import { motion } from "framer-motion"
import TiltCard from "@/components/ui/TiltCard"
import { SERVICES } from "@/lib/constants"
import { BarChart3, Megaphone, TrendingUp, Newspaper } from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  "opinion-analytics": BarChart3,
  "campaign-strategy": Megaphone,
  "political-intelligence": TrendingUp,
  "media-perception": Newspaper,
}

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white" style={{ scrollMarginTop: "80px" }}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
              Our Expertise
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-6">
              Unrivaled Expertise in the Electoral Battlefield
            </h2>
            <p className="text-slate-500 text-lg">
              We provide a decisive presence in political destiny through high-fidelity data collection and strategic foresight.
            </p>
          </motion.div>
          <div className="h-px flex-grow bg-slate-100 mx-12 hidden lg:block" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.id]
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <TiltCard className="h-full">
                  <div className="h-full bg-slate-50 rounded-[32px] p-8 border border-transparent hover:border-slate-200 transition-colors group cursor-default">
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:magenta-gradient transition-all duration-500">
                      {Icon && <Icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">{service.description}</p>
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
