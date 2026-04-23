"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

interface CounterProps {
  value: number | string;
  suffix?: string;
}

export default function Counter({ value, suffix }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Extract just the numbers in case the value is passed as a string like "95"
  const numericValue =
    typeof value === "string"
      ? parseFloat(value.replace(/[^0-9.]/g, ""))
      : value;

  useEffect(() => {
    if (isInView && ref.current) {
      animate(0, numericValue, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(val) {
          if (ref.current) {
            ref.current.textContent = Math.round(val).toString();
          }
        },
      });
    }
  }, [isInView, numericValue]);

  return (
    <span className="inline-flex items-center">
      <span ref={ref}>0</span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
}
