'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useExperienceAnimation } from '@/hooks/useExperienceAnimation';
import { experienceInfo } from '@/lib/experienceInfo';
import { useTiltAnimation } from '@/hooks/useTiltAnimation';
import { Cpu } from 'lucide-react';

const TiltCard = ({ exp, index }: { exp: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  useTiltAnimation(cardRef);

  return (
    <div
      className='experience-item w-[85vw] sm:w-[35rem] h-[20rem] sm:h-[22rem] shrink-0 rounded-2xl bg-neutral-200/10 shadow-2xl overflow-hidden relative cursor-pointer group'
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        ref={cardRef}
        className='absolute inset-0 p-6 sm:p-8 flex flex-col justify-between font-mono text-white bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700/50 rounded-2xl'
        style={{
          transform: 'translateZ(20px)',
          backfaceVisibility: 'hidden',
        }}
      >
        <div className='flex justify-between items-center select-none pointer-events-none opacity-80'>
          <Cpu size={40} className='text-neutral-400' />
          <div className='text-xl sm:text-2xl font-bold tracking-widest text-neutral-500 opacity-50'>
            0{index + 1}
          </div>
        </div>
        
        <div className='flex-1 py-4'>
          <h3 className='font-semibold uppercase tracking-widest text-xl sm:text-2xl text-neutral-100 group-hover:text-blue-400 transition-colors duration-300'>
            {exp.role}
          </h3>
          <ul className='list-disc list-inside mt-4 space-y-2 text-neutral-400 text-xs sm:text-sm'>
            {exp.points.map((point: string, i: number) => (
              <li key={i} className='leading-relaxed'>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className='flex justify-between items-end pb-2'>
          <div>
            <span className='opacity-60 text-[10px] sm:text-xs uppercase tracking-widest block mb-1'>
              Company
            </span>
            <p className='text-sm sm:text-base font-semibold tracking-wide'>
              {exp.company}
            </p>
          </div>
          <div className='text-right'>
            <span className='opacity-60 text-[10px] sm:text-xs uppercase tracking-widest block mb-1'>
              Tenure
            </span>
            <p className='text-sm sm:text-base font-semibold tracking-wide'>
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
