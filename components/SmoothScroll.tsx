"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import 'lenis/dist/lenis.css';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.2,
    });

    // Handle initial scroll
    window.scrollTo(0, 0);
    (window as any).lenis = lenis;

    // RAF Loop for frame-by-frame updates
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    }
  }, []);

  return <>{children}</>;
}
