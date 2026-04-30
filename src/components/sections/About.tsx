"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-white"
      style={{ scrollMarginTop: "80px" }}
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Staggered Text Reveal */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.span variants={fadeUp(0)} className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
              Our Insight
            </motion.span>
            
            <motion.h2 variants={fadeUp(0)} className="font-serif text-4xl md:text-5xl text-slate-900 leading-tight mb-8">
              Neutrality is our
              <br />
              <span className="italic text-accent">Greatest Asset.</span>
            </motion.h2>
            
            <div className="space-y-6 text-slate-500 leading-relaxed text-lg font-light">
              <motion.p variants={fadeUp(0)}>
                CORE was founded on the principle that political data should be
                objective. We serve as the primary choice for leaders in Kerala
                because our methodology removes bias, delivering the cold, hard
                facts needed to win.
              </motion.p>
              <motion.p variants={fadeUp(0)}>
                Our team of young professionals is dedicated to providing
                valuable insights that pave the way for political accomplishment
                through high-fidelity data collection and strategic foresight.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Column: Quote Card */}
          <motion.div
            variants={fadeUp(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            <div className="aspect-square bg-slate-50 rounded-[3rem] md:rounded-[4rem] flex items-center justify-center p-10 md:p-16 relative overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-500">
              <div className="absolute inset-0 magenta-gradient opacity-5" />
              <div className="relative z-10 text-center">
                <div className="text-8xl font-black text-slate-900/5 absolute -top-10 left-0 select-none">
                  "
                </div>
                <p className="text-xl md:text-2xl font-light italic leading-relaxed text-slate-700">
                  &ldquo;Our team of young professionals is dedicated to
                  providing valuable insights that pave the way for political
                  accomplishment.&rdquo;
                </p>
                <div className="mt-10 pt-8 border-t border-slate-200/60">
                  <p className="font-bold text-lg text-slate-900">
                    Akhil Suresh
                  </p>
                  <p className="text-accent font-semibold text-xs uppercase tracking-[0.2em] mt-1">
                    CEO, CORE Kochi
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}