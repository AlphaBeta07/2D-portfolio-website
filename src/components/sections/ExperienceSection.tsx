'use client';

import React, { useRef } from 'react';
import { useExperienceAnimation } from '@/hooks/useExperienceAnimation';
import { experienceInfo } from '@/lib/experienceInfo';
import { useTiltAnimation } from '@/hooks/useTiltAnimation';
import { Cpu } from 'lucide-react';

const bgConfigs = [
  // You can change 'theme' to 'light' or 'dark' depending on whether the image is mostly light or dark
  { src: '/bg1.png', theme: 'dark' },
  { src: '/bg2.png', theme: 'light' },
  { src: '/bg3.png', theme: 'dark' },
  { src: '/bg4.png', theme: 'light' },
];

const TiltCard = ({
  exp,
  index,
}: {
  exp: { role: string; company: string; period: string; points: string[]; skills?: string };
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useTiltAnimation(cardRef);

  const bgConfig = bgConfigs[index % bgConfigs.length];
  const isDarkTheme = bgConfig.theme === 'dark';

  // Dynamic colors based on the background image theme
  const primaryText = isDarkTheme ? 'text-white drop-shadow-sm' : 'text-neutral-900';
  const secondaryText = isDarkTheme ? 'text-white/80' : 'text-neutral-800';
  const mutedText = isDarkTheme ? 'text-white/50' : 'text-neutral-600';
  const iconColor = isDarkTheme ? 'text-white/90 drop-shadow-md' : 'text-neutral-900';
  const highlightText = isDarkTheme ? 'group-hover:text-blue-300' : 'group-hover:text-blue-700';
  const glassBg = isDarkTheme ? 'bg-white/10 border-white/20' : 'bg-white/40 border-white/40';

  return (
    <div
      className='experience-item w-[85vw] sm:w-[35rem] h-[25rem] sm:h-[28rem] shrink-0 rounded-3xl overflow-hidden relative cursor-pointer group'
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Background Image Container */}
      <div 
        className='absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105'
        style={{ backgroundImage: `url(${bgConfig.src})` }}
      />
      
      {/* Subtle overlay to ensure text remains readable */}
      <div className={`absolute inset-0 z-0 ${isDarkTheme ? 'bg-black/20' : 'bg-white/10'}`} />

      {/* Glassmorphic Credit Card Content */}
      <div
        ref={cardRef}
        className={`absolute inset-0 p-6 sm:p-8 flex flex-col justify-between font-mono backdrop-blur-md border shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] rounded-3xl overflow-hidden z-10 ${glassBg}`}
        style={{
          transform: 'translateZ(30px)',
          backfaceVisibility: 'hidden',
        }}
      >
        {/* Chip & Number */}
        <div className='flex justify-between items-center select-none pointer-events-none z-20'>
          <Cpu size={44} className={`${iconColor}`} strokeWidth={1.5} />
          <div className={`text-xl sm:text-2xl font-bold tracking-widest ${mutedText}`}>
            0{index + 1}
          </div>
        </div>
        
        {/* Role & Points */}
        <div className='flex-1 py-2 sm:py-4 z-20 mt-1 sm:mt-2 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent'>
          <h3 className={`font-semibold uppercase tracking-widest text-lg sm:text-2xl transition-colors duration-300 ${primaryText} ${highlightText}`}>
            {exp.role}
          </h3>
          <ul className={`list-disc list-inside mt-2 sm:mt-4 space-y-1 sm:space-y-2 text-xs sm:text-sm font-sans ${secondaryText}`}>
            {exp.points.map((point: string, i: number) => (
              <li key={i} className='leading-relaxed'>
                {point}
              </li>
            ))}
          </ul>
          {exp.skills && (
            <div className='mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-white/10'>
              <span className={`text-[10px] sm:text-xs uppercase tracking-widest block mb-1 ${mutedText}`}>
                Skills
              </span>
              <p className={`text-xs sm:text-sm font-sans leading-relaxed ${secondaryText}`}>
                {exp.skills}
              </p>
            </div>
          )}
        </div>

        {/* Footer info (like cardholder and expiry) */}
        <div className='flex justify-between items-end pb-2 z-20 pt-2'>
          <div>
            <span className={`text-[10px] sm:text-xs uppercase tracking-widest block mb-1 ${mutedText}`}>
              Company
            </span>
            <p className={`text-sm sm:text-base font-semibold tracking-wide ${primaryText}`}>
              {exp.company}
            </p>
          </div>
          <div className='text-right'>
            <span className={`text-[10px] sm:text-xs uppercase tracking-widest block mb-1 ${mutedText}`}>
              Valid Thru
            </span>
            <p className={`text-sm sm:text-base font-semibold tracking-wide ${primaryText}`}>
              {exp.period}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useExperienceAnimation({
    sectionRef,
    titleRef,
    trackRef,
    containerRef,
  });

  return (
    <div
      ref={sectionRef}
      className='h-screen w-full bg-neutral-900 relative text-white overflow-hidden'
    >
      <h1
        ref={titleRef}
        className='opacity-0 absolute top-10 md:top-20 left-1/2 -translate-x-1/2 font-holtwood tracking-wide min-[320px]:text-4xl sm:text-6xl w-full text-center z-10 flex justify-center'
      >
        {'experience'.split('').map((char, index) => (
          <span key={index} className='title-char inline-block'>
            {char}
          </span>
        ))}
      </h1>

      {/* Horizontal Scroll Container */}
      <div ref={containerRef} className='h-full w-full flex items-center'>
        <div
          ref={trackRef}
          className='flex gap-10 sm:gap-20 px-[10vw] md:px-[30vw] pt-20'
        >
          {experienceInfo.map((exp, index) => (
            <TiltCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
