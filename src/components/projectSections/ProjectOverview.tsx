'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import {
  handleLeave,
  handleMove,
  useProjectOverviewAnimations,
} from '@/hooks/useProjectOverviewAnimation';

const ProjectOverview = ({
  description,
  pics,
}: {
  description: string;
  pics: string[];
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const innerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useProjectOverviewAnimations({ containerRef, textRef, imageRefs });

  return (
    <div
      ref={containerRef}
      className='relative flex flex-col items-center justify-between h-dvh px-8 overflow-hidden spidey-bg-pattern transition-colors duration-200'
    >
      {/* Images Area */}
      <div className='relative flex flex-col items-center justify-center w-full h-[65vh] pt-10 z-10'>
        <div className='relative flex flex-col items-center justify-center w-full h-full'>
          {pics.map((pic, i) => (
            <div
              key={i}
              ref={(el) => {
                innerRefs.current[i] = el;
              }}
              className='absolute top-0 sm:top-4 left-0 right-0'
              style={{ zIndex: i === 1 ? 10 : 1 }}
            >
              <div
                ref={(el) => {
                  imageRefs.current[i] = el;
                }}
                className='mx-auto min-[320px]:w-[85vw] sm:w-[70vw] md:w-[40vw] lg:w-[35vw] aspect-16/10 spidey-border overflow-hidden bg-white'
                style={{ transform: 'translateX(-150vw)' }}
                onMouseMove={(e) => handleMove(e, i, imageRefs, innerRefs)}
                onMouseLeave={() => handleLeave(i, innerRefs)}
              >
                <Image
                  src={pic}
                  alt={`project image ${i + 1}`}
                  fill
                  className='object-cover'
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div
        ref={textRef}
        className='w-full text-white tracking-tight text-center flex flex-col items-center justify-center h-[35vh] pb-8 z-20'
      >
        <p className='text-white font-bold pb-4 spidey-text-shadow-sm text-2xl uppercase font-holtwood'>Project overview</p>
        <p className='max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed bg-black/70 p-4 sm:p-6 spidey-border-sm'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectOverview;
