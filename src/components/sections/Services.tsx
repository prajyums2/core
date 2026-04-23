"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";
import { SERVICES } from "@/lib/constants";
import { BarChart3, Megaphone, TrendingUp, Newspaper } from "lucide-react";
import Image from "next/image";

const iconMap: Record<string, React.ElementType> = {
  "opinion-analytics": BarChart3,
  "campaign-strategy": Megaphone,
  "political-intelligence": TrendingUp,
  "media-perception": Newspaper,
};

export default function Services() {
  // 1. Create a ref SPECIFICALLY for the image container, not the whole section
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // 2. Track the scroll progress of just the image
  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start end", "end start"],
  });

  // 3. Increased the parallax travel distance for a more noticeable effect
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      id="services"
      className="section-padding bg-white"
      style={{ scrollMarginTop: "80px" }}
    >
      <div className="container-custom">
        <div className="flex flex-col gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl text-center md:text-left"
          >
            <span className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
              Our Expertise
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-6">
              Unrivaled Expertise in the <br className="hidden md:block" />{" "}
              Electoral Battlefield
            </h2>
            <p className="text-slate-500 text-lg">
              We provide a decisive presence in political destiny through
              high-fidelity data collection and strategic foresight.
            </p>
          </motion.div>

          {/* Full-Width Cinematic Parallax Window */}
          <motion.div
            // 4. ATTACH REF HERE
            ref={imageContainerRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full h-[250px] sm:h-[350px] lg:h-[450px] rounded-[2rem] overflow-hidden relative shadow-lg border border-slate-100"
          >
            <motion.div
              style={{ y }}
              // 5. Updated bounds: 140% height with -20% top offset to match the new transform
              className="absolute left-0 right-0 -top-[20%] w-full h-[140%]"
            >
              <Image
                src="/background.png"
                alt="Electoral Battlefield Strategy"
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent mix-blend-multiply" />
            </motion.div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.id];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="h-full"
              >
                <TiltCard className="h-full">
                  <div className="h-full bg-slate-50 rounded-[32px] p-8 border border-transparent hover:border-slate-200 transition-colors group cursor-default">
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:magenta-gradient transition-all duration-500">
                      {Icon && (
                        <Icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
