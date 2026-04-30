"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PARTNERS = [
  {
    id: "24news",
    logo: "/24news-logo.png",
    alt: "24 News Kerala",
    description:
      'Collaborated with 24 News Kerala for the Lok Sabha 2024 Phase Prepoll Survey — "Mood of the State"',
  },
  {
    id: "mathrubhumi",
    logo: "/MAthrubhumi logo.png",
    alt: "Mathrubhumi News & Mathrubhumi Daily",
    description:
      "Partnered with Mathrubhumi News and Mathrubhumi Daily to provide expert electoral intelligence and comprehensive public opinion analysis.",
  },
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-[#fafafa] border-y border-slate-100 overflow-hidden">
      <div className="container-custom max-w-5xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16 gap-4"
        >
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-2">
            <svg
              className="w-5 h-5 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
            Trusted Media Partners
          </h2>
          <p className="text-sm text-slate-500 max-w-xl">
            Our insights and accurate electoral intelligence are trusted by
            premier broadcasting networks across the state.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16 md:gap-24">
          {PARTNERS.map((partner, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Visual/Logo Side */}
                <div className="w-full md:w-1/2 flex justify-center">
                  {/* Container aggressively sized up */}
                  <div className="relative w-full max-w-[320px] md:max-w-[420px] aspect-[4/3] rounded-2xl bg-white border border-slate-200/60 shadow-lg flex items-center justify-center p-8 md:p-12 group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-50" />

                    {/* Image forced to fill the massive container */}
                    <div className="relative w-full h-full">
                      <Image
                        src={partner.logo}
                        alt={partner.alt}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Text Content Side */}
                <div
                  className={`w-full md:w-1/2 flex flex-col ${isEven ? "md:items-start md:text-left" : "md:items-end md:text-right"} items-center text-center`}
                >
                  <div className="inline-block px-3 py-1 mb-6 text-[10px] font-bold tracking-widest uppercase border border-slate-200 rounded-full text-slate-400">
                    Collaboration
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 font-serif">
                    {partner.alt}
                  </h3>
                  <p className="text-base text-slate-500 leading-relaxed max-w-md">
                    {partner.description}
                  </p>

                  <div className="mt-8 h-px w-16 bg-accent/20" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}