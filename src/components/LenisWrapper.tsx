// smooth scrolling wrapper used on all pages
'use client';
import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);
export default function LenisWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.1,
    });

    lenisRef.current = lenis;
    lenis.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);

    // Sync Lenis with GSAP's ticker
    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    
    // Turn off GSAP's lag smoothing to avoid jumps with Lenis
    gsap.ticker.lagSmoothing(0);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', onResize);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
    
    // Refresh immediately
    ScrollTrigger.refresh();

    // Force multiple refreshes to catch any late layout shifts (like images loading)
    const timeouts = [
      setTimeout(() => ScrollTrigger.refresh(), 100),
      setTimeout(() => ScrollTrigger.refresh(), 200),
      setTimeout(() => ScrollTrigger.refresh(), 300),
      setTimeout(() => ScrollTrigger.refresh(), 400),
    ];

    return () => timeouts.forEach(clearTimeout);
  }, [pathname]);

  return <>{children}</>;
}
