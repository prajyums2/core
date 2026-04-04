"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { STATS } from "@/lib/constants"

function SplitText({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ")

  return (
    <span className="inline">
      {words.map((word, i) => (
        <span key={i} className="inline-block mr-[0.25em]">
          {word.split("").map((char, j) => (
            <motion.span
              key={`${i}-${j}`}
              initial={{ opacity: 0, y: 60, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: delay + (i * 0.08) + (j * 0.02),
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, -80])
  const y2 = useTransform(scrollY, [0, 500], [0, -40])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStatsVisible(true), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fafafa]" style={{ scrollMarginTop: "80px" }} id="hero">
      <motion.div style={{ y: y2 }} className="absolute inset-0 grid-pattern opacity-60" />
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[15%] right-[15%] w-[500px] h-[500px] magenta-gradient opacity-[0.04] rounded-full blur-[120px]"
      />
      <motion.div
        style={{ y: y1, x: useTransform(scrollY, [0, 500], [0, 30]) }}
        className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] bg-accent/5 rounded-full blur-[100px]"
      />

      <motion.div style={{ opacity }} className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3 }}
        >
          <span className="inline-block px-4 py-1.5 mb-10 text-[11px] font-bold tracking-[0.3em] uppercase border border-slate-200 rounded-full text-slate-400">
            Citizens Opinion Research & Evaluation
          </span>
        </motion.div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-900 leading-[1.15] mb-8">
          <SplitText text="The Science of" delay={2.4} />
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.8 }}
            className="text-gradient"
          >
            Political Victory.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          className="text-base sm:text-lg text-slate-400 font-light leading-relaxed mb-10 max-w-xl mx-auto"
        >
          Kerala&apos;s premier political strategy firm. We transform raw public opinion into actionable electoral intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="#contact"
            className="group relative bg-navy text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide overflow-hidden shadow-xl"
          >
            <span className="relative z-10">Request Consultation</span>
            <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="#methodology"
            className="text-slate-500 text-sm font-bold tracking-wide flex items-center gap-2 group hover:text-slate-900 transition-colors"
          >
            Explore Approach
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 12">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={statsVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute bottom-8 left-0 right-0 px-6 z-10"
      >
        <div className="max-w-3xl mx-auto glass rounded-2xl px-6 py-5 border border-white/50 shadow-lg">
          <div className="grid grid-cols-4 divide-x divide-slate-100">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl md:text-2xl font-bold text-slate-900">{stat.value}{stat.suffix}</div>
                <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
