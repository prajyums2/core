"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { STATS } from "@/lib/constants";
// Import our new reusable, animated Counter component
import Counter from "@/components/ui/Counter";

// 1. Text Animation Component
function SplitText({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ");
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
                delay: delay + i * 0.08 + j * 0.02,
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
  );
}

// 2. Main Hero Component
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, -80]);
  const y2 = useTransform(scrollY, [0, 500], [0, -40]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStatsVisible(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#fafafa] px-6 py-24"
      id="hero"
    >
      {/* Background Decorators */}
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 grid-pattern opacity-60"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[15%] right-[15%] w-[500px] h-[500px] magenta-gradient opacity-[0.04] rounded-full blur-[120px]"
      />
      <motion.div
        style={{ y: y1, x: useTransform(scrollY, [0, 500], [0, 30]) }}
        className="absolute bottom-[10%] left-[10%] w-[350px] h-[350px] bg-accent/5 rounded-full blur-[100px]"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-12">
        {/* TOP SECTION: Fades away on scroll */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="text-center flex flex-col items-center pt-12"
        >
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
            <SplitText text="CORE - The Election" delay={2.4} />
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.8 }}
              className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent pb-2"
            >
              Specialist
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.2 }}
            className="text-base sm:text-lg text-slate-400 font-light leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Kerala&apos;s premier political strategy firm. We transform raw
            public opinion into actionable electoral intelligence.
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
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* BOTTOM SECTION: Persistent Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={statsVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hidden md:block w-full mt-4"
        >
          <div className="flex flex-row w-full divide-x divide-slate-200/60 glass rounded-2xl border border-slate-200/60 shadow-sm bg-white/40 backdrop-blur-md overflow-hidden">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: STATS.indexOf(stat) * 0.1 }}
                className="flex-1 text-center py-6 px-4 flex flex-col justify-center"
              >
                <motion.div className="text-xl lg:text-2xl font-bold text-slate-900">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </motion.div>
                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
