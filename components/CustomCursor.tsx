"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteraction = 
        target.tagName.toLowerCase() === "button" || 
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") || 
        target.closest("a");
      
      setIsHovering(!!isInteraction);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", () => setIsVisible(false));
    document.addEventListener("mouseenter", () => setIsVisible(true));

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
          style={{
            x: cursorX,
            y: cursorY,
            left: -10,
            top: -10,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <motion.div
            className="bg-white"
            animate={{
              width: isHovering ? 64 : 20,
              height: isHovering ? 64 : 20,
              x: isHovering ? -22 : 0,
              y: isHovering ? -22 : 0,
              borderRadius: isHovering ? "50%" : "2px",
              opacity: isHovering ? 0.8 : 1,
            }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
