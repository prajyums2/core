"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function SocialProof() {
  return (
    <section className="py-16 bg-[#fafafa] border-y border-slate-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">As Featured On</p>
              <p className="text-xs text-slate-400">Trusted Media Partner</p>
            </div>
          </div>

          <div className="h-8 w-px bg-slate-200 hidden md:block" />

          <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-3">
            <Image src="/24news-logo.png" alt="24 News Kerala" width={120} height={40} className="h-8 w-auto object-contain" />
          </div>

          <div className="h-8 w-px bg-slate-200 hidden md:block" />

          <div className="text-center md:text-left max-w-sm">
            <p className="text-sm text-slate-500">
              Collaborated with 24 News Kerala for the Lok Sabha 2024 Phase Prepoll Survey — &ldquo;Mood of the State&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
