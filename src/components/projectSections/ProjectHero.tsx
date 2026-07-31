'use client';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import React, { useRef } from 'react';
import { useProjectHeroAnimation } from '@/hooks/useProjectHeroAnimation';
import AnimatedButton from '../AnimatedButton';

interface ProjectHeroProps {
  text: string;
  link: string;
  image: string;
}

const ProjectHero: React.FC<ProjectHeroProps> = ({ text, link, image }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useProjectHeroAnimation({ containerRef, btnRef, imageRef });

  return (
    <div
      ref={containerRef}
      className='relative p-8 text-center spidey-bg-pattern h-dvh overflow-hidden'
    >
      {/* Back Button */}
      <div ref={btnRef} className='absolute top-4 left-4'>
        <AnimatedButton text='←' />
      </div>

      {/* Text Content */}
      <div className='absolute min-[320px]:bottom-[10vh] sm:bottom-[15vh] left-4 flex flex-col items-start justify-start w-fit z-30'>
        <h1 className='split-title text-[clamp(2rem,6vw,5rem)] font-holtwood mb-6 w-full text-start z-20 spidey-text-shadow text-white leading-[1.2] pb-4'>
          {text}
        </h1>

        {/* Live Version Link */}
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='split-title flex flex-col items-start justify-start z-20 text-white cursor-pointer group livevers'
        >
          <p className='text-white/70'>Live Version</p>
          <div className='flex flex-row gap-2 items-center relative'>
            <p className='text-lg group-hover:text-xl group-hover:font-bold transition-all font-normal duration-200'>
              {text}
            </p>
            <ArrowUpRight className='transition-all duration-200 text-white group-hover:text-[#E23636]' />
            <div className='absolute bottom-0 left-0 w-full h-[3px] bg-white group-hover:bg-[#E23636] transition-colors duration-200' />
          </div>
        </a>
      </div>

      {/* Background Image */}
      <div
        ref={imageRef}
        className='absolute w-full min-[320px]:top-[40%] sm:top-1/2 left-[30vw] -translate-y-1/2 z-10 opacity-0 will-change-transform'
      >
        <Image
          src={image}
          alt='Website screenshot'
          width={2880}
          height={1800}
          className='min-[320px]:h-[50vh] sm:h-[90vh] w-auto object-cover object-left spidey-border'
          priority
          unoptimized
        />
      </div>
    </div>
  );
};

export default ProjectHero;
