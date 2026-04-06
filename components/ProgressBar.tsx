"use client";

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // This effect runs on every pathname/searchParams change
    setLoading(true);
    setProgress(30);

    const timer = setTimeout(() => {
      setProgress(100);
      const finishTimer = setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 200);
      return () => clearTimeout(finishTimer);
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname, searchParams]);

  if (!loading && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
      <div 
        className="h-[2px] bg-black transition-all duration-300 ease-out shadow-[0_0_10px_rgba(0,0,0,0.2)]"
        style={{ width: `${progress}%`, opacity: loading ? 1 : 0 }}
      />
    </div>
  );
}
