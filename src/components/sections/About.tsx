"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-white "
      style={{ scrollMarginTop: "80px" }}
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <span className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
              Our Insight
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 leading-tight mb-6">
              Neutrality is our
              <br />
              <span className="italic text-accent">Greatest Asset.</span>
            </h2>
            <div className="space-y-4 text-slate-500 leading-relaxed text-lg font-light">
              <p>
                CORE was founded on the principle that political data should be
                objective. We serve as the primary choice for leaders in Kerala
                because our methodology removes bias, delivering the cold, hard
                facts needed to win.
              </p>
              <p>
                Our team of young professionals is dedicated to providing
                valuable insights that pave the way for political accomplishment
                through high-fidelity data collection and strategic foresight.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            <div className="aspect-square bg-slate-50 rounded-[60px] flex items-center justify-center p-10 md:p-12 relative overflow-hidden border border-slate-100">
              <div className="absolute inset-0 magenta-gradient opacity-5" />
              <div className="relative z-10 text-center">
                <div className="text-8xl font-black text-slate-900/5 absolute -top-10 left-0">
                  "
                </div>
                <p className="text-lg md:text-xl font-light italic leading-relaxed text-slate-600">
                  &ldquo;Our team of young professionals is dedicated to
                  providing valuable insights that pave the way for political
                  accomplishment.&rdquo;
                </p>
                <div className="mt-8">
                  <p className="font-bold text-lg text-slate-900">
                    Akhil Suresh
                  </p>
                  <p className="text-accent font-semibold text-xs uppercase tracking-tighter">
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
