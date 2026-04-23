// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import {
//   Calendar,
//   MapPin,
//   Users,
//   TrendingUp,
//   Award,
//   ChevronRight,
// } from "lucide-react";
// import { TIMELINE } from "@/lib/constants";

// const iconMap: Record<string, React.ElementType> = {
//   "2016": Calendar,
//   "2018": MapPin,
//   "2019a": Users,
//   "2019b": TrendingUp,
//   "2021": Award,
//   "2023": MapPin,
//   "2024a": TrendingUp,
//   "2024b": Users,
//   "2025a": Calendar,
//   "2025b": MapPin,
//   "2025c": TrendingUp,
//   "2026": Calendar,
// };

// function MobileStickyTimeline() {
//   const targetRef = useRef<HTMLDivElement>(null);
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const [scrollRange, setScrollRange] = useState(0);

//   // Measure the width of the track so we can translate exactly that many pixels
//   useEffect(() => {
//     const updateRange = () => {
//       if (carouselRef.current) {
//         setScrollRange(carouselRef.current.scrollWidth - window.innerWidth);
//       }
//     };

//     updateRange();
//     window.addEventListener("resize", updateRange);
//     return () => window.removeEventListener("resize", updateRange);
//   }, []);

//   // Use explicit offsets to ensure it tracks perfectly from top to bottom
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ["start start", "end end"],
//   });

//   // Interpolate using raw pixels for buttery smooth animation
//   const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

//   return (
//     <div ref={targetRef} className="relative h-[400vh] block lg:hidden">
//       <div className="sticky top-20 flex h-[80vh] flex-col justify-center overflow-hidden">
//         {/* Sleek Mobile Progress Indicator */}
//         <div className="absolute top-[15%] left-6 right-6 h-[2px] bg-slate-100 rounded-full overflow-hidden">
//           <motion.div
//             className="h-full bg-accent"
//             style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
//           />
//         </div>
//         <div className="absolute top-[10%] left-6 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
//           Scroll to explore
//         </div>

//         <motion.div
//           ref={carouselRef}
//           style={{ x }}
//           className="flex gap-4 px-6 items-center w-max"
//         >
//           {TIMELINE.map((item) => {
//             const Icon = iconMap[item.id] || Calendar;
//             return (
//               <div
//                 key={item.id}
//                 className="w-[80vw] max-w-[300px] bg-[#fafafa] rounded-3xl p-6 border border-slate-100 flex-shrink-0"
//               >
//                 <div className="flex items-center gap-2 mb-4">
//                   <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full">
//                     {item.year}
//                   </span>
//                   {Icon && <Icon className="w-4 h-4 text-accent" />}
//                 </div>

//                 <h3 className="text-lg font-bold text-slate-900 mb-2 font-serif">
//                   {item.title}
//                 </h3>

//                 <p className="text-sm text-slate-400 leading-relaxed">
//                   {item.description}
//                 </p>
//               </div>
//             );
//           })}

//           <div className="w-[10vw] flex-shrink-0 flex items-center justify-center text-slate-200">
//             <ChevronRight className="w-6 h-6 opacity-50" />
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// function DesktopTimeline() {
//   return (
//     <div className="hidden lg:block relative max-w-6xl mx-auto">
//       <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent" />

//       <div className="space-y-16">
//         {TIMELINE.map((item, i) => {
//           const Icon = iconMap[item.id];
//           const isEven = i % 2 === 0;

//           return (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-80px" }}
//               transition={{ delay: 0.1 }}
//               className="relative grid grid-cols-[1fr_auto_1fr] gap-8 items-center"
//             >
//               {isEven ? (
//                 <>
//                   <div className="flex justify-end">
//                     <div className="bg-[#fafafa] rounded-3xl p-8 border border-slate-100 hover:border-accent/20 transition-colors max-w-lg w-full">
//                       <div className="flex items-center gap-3 mb-3 justify-end">
//                         <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full">
//                           {item.year}
//                         </span>
//                         {Icon && <Icon className="w-4 h-4 text-accent" />}
//                       </div>
//                       <h3 className="text-lg font-bold text-slate-900 mb-2 font-serif">
//                         {item.title}
//                       </h3>
//                       <p className="text-sm text-slate-400 leading-relaxed">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="w-4 h-4 bg-accent rounded-full ring-4 ring-white ring-accent/20 z-10" />

//                   <div />
//                 </>
//               ) : (
//                 <>
//                   <div />

//                   <div className="w-4 h-4 bg-accent rounded-full ring-4 ring-white ring-accent/20 z-10" />

//                   <div className="flex justify-start">
//                     <div className="bg-[#fafafa] rounded-3xl p-8 border border-slate-100 hover:border-accent/20 transition-colors max-w-lg w-full">
//                       <div className="flex items-center gap-3 mb-3">
//                         <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full">
//                           {item.year}
//                         </span>
//                         {Icon && <Icon className="w-4 h-4 text-accent" />}
//                       </div>
//                       <h3 className="text-lg font-bold text-slate-900 mb-2 font-serif">
//                         {item.title}
//                       </h3>
//                       <p className="text-sm text-slate-400 leading-relaxed">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 </>
//               )}
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default function Timeline() {
//   return (
//     <section
//       id="timeline"
//       className="py-20 md:py-28 bg-white"
//       style={{ scrollMarginTop: "80px" }}
//     >
//       <div className="container-custom">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-12 md:mb-16"
//         >
//           <span className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4 block">
//             Our Journey
//           </span>
//           <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-4">
//             Decisive Presence in{" "}
//             <span className="italic text-[#D81159]">Kerala&apos;s</span>{" "}
//             Political Destiny
//           </h2>
//         </motion.div>

//         <DesktopTimeline />
//       </div>

//       <MobileStickyTimeline />
//     </section>
//   );
// }

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TIMELINE } from "@/lib/constants";

// Helper function to group timeline events by year
const groupedTimeline = TIMELINE.reduce(
  (acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = [];
    }
    acc[item.year].push(item);
    return acc;
  },
  {} as Record<string, typeof TIMELINE>,
);

function MobileSnapTimeline() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: carouselRef });

  return (
    <div className="block lg:hidden relative mt-8">
      {/* Minimalist Progress Line */}
      <div className="px-6 mb-8">
        <div className="h-[1px] w-full bg-slate-200 overflow-hidden">
          <motion.div
            className="h-full bg-accent origin-left"
            style={{ scaleX: scrollXProgress }}
          />
        </div>
        <div className="mt-3 flex justify-between items-center text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">
          <span>Swipe to explore</span>
          <span>{TIMELINE.length} Milestones</span>
        </div>
      </div>

      {/* Typography-driven native snap scroll */}
      <div
        ref={carouselRef}
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory px-6 pb-12 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {TIMELINE.map((item, index) => (
          <div
            key={item.id}
            className="w-[85vw] max-w-[320px] snap-center flex-shrink-0 flex flex-col justify-center"
          >
            {/* Massive faded year serving as a design element */}
            <span className="text-6xl font-serif italic text-slate-200 mb-4 block leading-none">
              {item.year}
            </span>

            <div className="pl-4 border-l-2 border-accent/20">
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          </div>
        ))}

        {/* Spacer for the last item to hit center */}
        <div className="w-[10vw] flex-shrink-0" />
      </div>
    </div>
  );
}

function DesktopTimeline() {
  return (
    <div className="hidden lg:block relative max-w-5xl mx-auto mt-24">
      <div className="space-y-32">
        {Object.entries(groupedTimeline).map(([year, events], index) => (
          <div
            key={year}
            className="grid grid-cols-[1fr_2fr] gap-16 items-start relative"
          >
            {/* LEFT COLUMN: Massive Sticky Year */}
            <div className="relative h-full">
              <div className="sticky top-32 text-right pr-8">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="text-7xl lg:text-8xl font-serif italic text-slate-200 leading-none select-none"
                >
                  {year}
                </motion.h3>
              </div>
            </div>

            {/* RIGHT COLUMN: Event Content & Connecting Line */}
            <div className="relative border-l border-slate-200 pl-12 pb-8">
              {/* Timeline active indicator dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="absolute top-4 -left-[5px] w-2.5 h-2.5 rounded-full bg-accent"
              />

              <div className="space-y-16">
                {events.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    <h4 className="text-2xl font-bold text-slate-900 mb-4 font-serif">
                      {item.title}
                    </h4>
                    <p className="text-base text-slate-500 leading-relaxed font-light max-w-xl">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="py-24 md:py-32 bg-white overflow-hidden"
      style={{ scrollMarginTop: "80px" }}
    >
      <div className="container-custom">
        {/* Sleek, minimalist header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left max-w-4xl mx-auto px-6"
        >
          <span className="inline-block px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.3em] uppercase border border-slate-200 rounded-full text-slate-400">
            Our Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-tight">
            Decisive Presence in <br className="hidden md:block" />
            <span className="italic text-accent">Kerala&apos;s</span> Political
            Destiny
          </h2>
        </motion.div>

        <DesktopTimeline />
      </div>

      <MobileSnapTimeline />
    </section>
  );
}
