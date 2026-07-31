// page transition animations
'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SPIDERMAN_COLORS = [
  '#E23636', // Spidey Red
  '#000000', // Black
  '#504CE2', // Spidey Blue
  '#E23636', // Extra red for more prevalence
  '#FFFFFF', // Web White
];

export default function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const blocksRef = useRef<(HTMLDivElement | null)[]>([]);
  const pendingPathRef = useRef<string | null>(null);
  const isClosingRef = useRef(false);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const blockSize = 60; // Size of each "pixel"

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const cols = Math.ceil(dimensions.width / blockSize);
  const rows = Math.ceil(dimensions.height / blockSize);
  const numBlocks = cols > 0 && rows > 0 ? cols * rows : 0;

  const startTransition = useCallback(
    (to: string) => {
      if (isClosingRef.current || numBlocks === 0) return;

      isClosingRef.current = true;
      pendingPathRef.current = to;

      // Assign random Spiderman colors and reset state
      blocksRef.current.forEach((block) => {
        if (block) {
          const color =
            SPIDERMAN_COLORS[Math.floor(Math.random() * SPIDERMAN_COLORS.length)];
          gsap.set(block, { backgroundColor: color, scale: 0, opacity: 0 });
        }
      });

      gsap.set(containerRef.current, { display: 'grid' });

      const tl = gsap.timeline({
        onComplete: () => {
          window.scrollTo(0, 0);
          router.push(to);
        },
      });

      tl.to(blocksRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: 'power1.inOut',
        stagger: {
          amount: 0.5,
          from: 'random',
        },
      });
    },
    [router, numBlocks]
  );

  // exporting global function
  useEffect(() => {
    window.pageTransition = (to: string) => startTransition(to);
    return () => {
      delete window.pageTransition;
    };
  }, [startTransition]);

  useEffect(() => {
    if (!isClosingRef.current) return;

    window.scrollTo(0, 0);

    const tl = gsap.timeline({
      onComplete: () => {
        isClosingRef.current = false;
        pendingPathRef.current = null;
        gsap.set(containerRef.current, { display: 'none' });
        ScrollTrigger.refresh();
      },
    });

    tl.to(blocksRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.3,
      ease: 'power1.inOut',
      stagger: {
        amount: 0.5,
        from: 'random',
      },
      delay: 0.1,
    });
  }, [pathname]);

  return (
    <div
      ref={containerRef}
      className='fixed top-0 left-0 w-full h-full z-[9999] pointer-events-none'
      style={{
        display: 'none',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {numBlocks > 0 &&
        Array.from({ length: numBlocks }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              blocksRef.current[i] = el;
            }}
            style={{
              width: '102%',
              height: '102%',
              transformOrigin: 'center',
            }}
          />
        ))}
    </div>
  );
}
