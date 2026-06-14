import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

interface UseExperienceAnimationParams {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  titleRef: React.RefObject<HTMLHeadingElement | null>;
  trackRef: React.RefObject<HTMLDivElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export const useExperienceAnimation = ({
  sectionRef,
  titleRef,
  trackRef,
  containerRef,
}: UseExperienceAnimationParams) => {
  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const track = trackRef.current;
    const container = containerRef.current;

    if (!section || !title || !track || !container) return;

    let ctx = gsap.context(() => {
      // Title Entrance Animation
      const chars = title.querySelectorAll('.title-char');

      gsap.set(title, { visibility: 'visible', opacity: 1 });
      gsap.set(chars, { y: -100, opacity: 0 });

      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          toggleActions: 'play reverse play reverse',
        },
      });

      titleTl.to(chars, {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.6,
        ease: 'power2.out',
      });

      // Horizontal Scroll Animation
      const getScrollAmount = () => {
        let trackWidth = track.scrollWidth;
        return -(trackWidth - window.innerWidth + 100); // 100px padding adjustment
      };

      gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getScrollAmount() * -1}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [sectionRef, titleRef, trackRef, containerRef]);
};
