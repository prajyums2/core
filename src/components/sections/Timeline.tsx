"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, Users, TrendingUp } from "lucide-react"
import { TIMELINE } from "@/lib/constants"

const iconMap: Record<string, React.ElementType> = {
  "2016": Calendar,
  "2018": MapPin,
  "2019": Users,
  "2021": TrendingUp,
  "2023": MapPin,
  "2024": Calendar,
}

function MobileTimeline() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div className="lg:hidden relative">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {TIMELINE.map((item, i) => {
          const Icon = iconMap[item.id]
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex-shrink-0 w-[280px] snap-center"
            >
              <div className="bg-[#fafafa] rounded-3xl p-6 border border-slate-100 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full">
                    {item.year}
                  </span>
                  {Icon && <Icon className="w-4 h-4 text-accent" />}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-serif">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Fade gradient on right edge as visual cue */}
      <div className="absolute top-0 right-0 bottom-4 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none rounded-r-3xl" />
    </div>
  )
}

function DesktopTimeline() {
  return (
    <div className="hidden lg:block relative">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent" />

      <div className="space-y-16">
        {TIMELINE.map((item, i) => {
          const Icon = iconMap[item.id]
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1 }}
              className="relative grid grid-cols-[1fr_auto_1fr] gap-8 items-center"
            >
              {i % 2 === 0 ? (
                <>
                  <div className="flex justify-end">
                    <div className="bg-[#fafafa] rounded-3xl p-8 border border-slate-100 hover:border-accent/20 transition-colors max-w-lg w-full">
                      <div className="flex items-center gap-3 mb-3 justify-end">
                        <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full">
                          {item.year}
                        </span>
                        {Icon && <Icon className="w-4 h-4 text-accent" />}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 font-serif">{item.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-accent rounded-full ring-4 ring-white ring-accent/20 z-10" />
                  <div />
                </>
              ) : (
                <>
                  <div />
                  <div className="w-4 h-4 bg-accent rounded-full ring-4 ring-white ring-accent/20 z-10" />
                  <div className="flex justify-start">
                    <div className="bg-[#fafafa] rounded-3xl p-8 border border-slate-100 hover:border-accent/20 transition-colors max-w-lg w-full">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full">
                          {item.year}
                        </span>
                        {Icon && <Icon className="w-4 h-4 text-accent" />}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 font-serif">{item.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 md:py-28 bg-white" style={{ scrollMarginTop: "80px" }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
            Our Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-4">
            Decisive Presence in <span className="italic text-accent">Kerala&apos;s</span> Political Destiny
          </h2>
        </motion.div>

        <DesktopTimeline />
        <MobileTimeline />
      </div>
    </section>
  )
}
