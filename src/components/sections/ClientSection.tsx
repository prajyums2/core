"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TiltCard from "@/components/ui/TiltCard";

export default function ClientsSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#fafafa] border-y border-slate-100 overflow-hidden">
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(216,17,89,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="container-custom relative z-10 max-w-4xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.2em] uppercase border border-slate-200/60 rounded-full text-slate-500 bg-white/50 backdrop-blur-md shadow-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D81159] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#D81159]"></span>
            </span>
            Trusted Partnership
          </span>
          
          <h2 className="font-serif text-4xl md:text-5xl text-slate-900 tracking-tight">
            Empowering Growth For
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex justify-center perspective-[2000px]"
        >
          <TiltCard className="w-full max-w-2xl">
            <div className="relative group w-full h-full">
              
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-[#D81159]/15 to-transparent rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative h-full bg-white/60 backdrop-blur-xl border border-slate-200/50 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.05)] rounded-[2rem] p-12 md:p-20 overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_70px_-15px_rgba(0,0,0,0.08)]">
                
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />
                <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-white/50 to-transparent opacity-50" />

                <div className="relative z-10 flex flex-col items-center justify-center">
                  
                  {/* SCALED UP MASSIVELY: w-80 on mobile, w-[28rem] on desktop */}
                  <div className="relative w-80 md:w-[28rem] aspect-[2/1] mb-10">
                    <Image
                      src="/cropped-Brief-India-1.png"
                      alt="BRIEF India"
                      fill
                      className="object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 320px, 448px"
                      priority
                    />
                  </div>

                  <div className="w-12 h-px bg-slate-200 mb-6 group-hover:w-24 group-hover:bg-[#D81159]/30 transition-all duration-700 ease-out" />

                  <p className="text-xs font-bold tracking-[0.3em] text-slate-400 group-hover:text-slate-700 transition-colors duration-500 uppercase">
                    Brief India
                  </p>
                  
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>

      </div>
    </section>
  );
}
