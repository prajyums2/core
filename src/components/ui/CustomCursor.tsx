"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      // Removed mix-blend-difference so the color stays true
      className="hidden fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] md:flex items-center justify-center"
      animate={{
        x: mousePosition.x - 8,
        y: mousePosition.y - 8,
        scale: isHovering ? 2.5 : 1,
        // Solid magenta normally, transparent background when hovering
        backgroundColor: isHovering ? "rgba(229, 0, 126, 0.1)" : "#E5007E",
        // Adds a nice border ring when hovering
        border: isHovering
          ? "1px solid rgba(229, 0, 126, 0.4)"
          : "0px solid transparent",
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
    />
  );
}
