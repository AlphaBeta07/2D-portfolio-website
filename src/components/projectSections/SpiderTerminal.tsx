'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ArrowLeft, Terminal, FileText, Cpu, LayoutList, Image as ImageIcon, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface Project {
  slug: string;
  text: string;
  image: string;
  aboutPics: string[];
  description: string;
  link: string;
  more: string[];
  moreImgs: string[];
  features?: { title: string; description: string }[];
  technologies?: { title: string; description: string }[];
}

const TABS = [
  { id: 'MISSION', label: 'MISSION', icon: <FileText size={16} /> },
  { id: 'OVERVIEW', label: 'OVERVIEW', icon: <Terminal size={16} /> },
  { id: 'TECH_STACK', label: 'TECH STACK', icon: <Cpu size={16} /> },
  { id: 'FEATURES', label: 'FEATURES', icon: <LayoutList size={16} /> },
  { id: 'SCREENSHOTS', label: 'SCREENSHOTS', icon: <ImageIcon size={16} /> },
];

export default function SpiderTerminal({ project }: { project: Project }) {
  const [activeTab, setActiveTab] = useState('MISSION');
  const [time, setTime] = useState('');
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Clock effect
  useEffect(() => {
    const interval = setInterval(() => {
      const d = new Date();
      setTime(d.toLocaleTimeString('en-US', { hour12: false }) + '.' + Math.floor(d.getMilliseconds() / 100));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Entrance animation
  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { scale: 0.95, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );
    }
  }, []);

  // Glitch effect on tab change
  useEffect(() => {
    if (contentRef.current) {
      const el = contentRef.current;
      el.classList.remove('glitch-anim');
      // Trigger reflow
      void el.offsetWidth;
      el.classList.add('glitch-anim');
      const timer = setTimeout(() => {
        el.classList.remove('glitch-anim');
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [activeTab]);

  return (
    <div className='spidey-blueprint-bg min-h-dvh w-full flex items-center justify-center p-2 sm:p-8 relative font-vt323 overflow-hidden'>
      <div className='crt-overlay' />
      
      {/* Back Button */}
      <Link href='/' className='absolute top-4 left-4 z-50 pixel-btn p-2 flex items-center gap-2 hover:bg-white hover:text-[#E53935]'>
        <ArrowLeft size={16} /> <span className='hidden sm:inline'>HQ</span>
      </Link>

      <div 
        ref={containerRef}
        className='pixel-panel w-full max-w-7xl h-[90dvh] flex flex-col relative z-20 overflow-hidden mt-8 sm:mt-0'
      >
        {/* Terminal Header */}
        <div className='bg-[#0A0A0A] border-b-4 border-[#E53935] p-3 flex justify-between items-center text-white'>
          <div className='flex items-center gap-4'>
            <div className='w-4 h-4 bg-[#E53935] animate-pulse' />
            <h1 className='text-xl sm:text-2xl tracking-widest text-[#E53935] spidey-text-shadow-sm uppercase'>
              {project.slug}
            </h1>
          </div>
          <div className='hidden sm:flex gap-4 text-[#2E86FF] tracking-wider opacity-80 uppercase'>
            <span>SYS.OP.NORMAL</span>
            <span>T-{time}</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className='flex flex-col md:flex-row flex-1 overflow-hidden'>
          
          {/* Left Sidebar */}
          <div className='md:w-64 border-b-4 md:border-b-0 md:border-r-4 border-[#0D47A1] bg-[#071B38] p-4 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-y-auto shrink-0'>
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 p-3 text-left transition-all duration-200 whitespace-nowrap uppercase ${
                  activeTab === tab.id 
                    ? 'bg-[#E53935] text-white pixel-border' 
                    : 'text-[#2E86FF] hover:bg-[#2E86FF]/20 hover:text-white'
                }`}
              >
                {tab.icon}
                <span className='tracking-widest'>{tab.label}</span>
              </button>
            ))}
            
            <div className='mt-auto pt-4 hidden md:flex flex-col gap-2 border-t-4 border-[#0D47A1]'>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className='flex items-center gap-3 p-3 text-[#E53935] hover:bg-[#E53935]/20 transition-all uppercase'>
                <ExternalLink size={16} /> LIVE DEMO
              </a>
              {/* <a href="#" className='flex items-center gap-3 p-3 text-[#2E86FF] hover:bg-[#2E86FF]/20 transition-all opacity-50 cursor-not-allowed uppercase'>
                <Code size={16} /> SOURCE CODE
              </a> */}
            </div>
          </div>

          {/* Main Content Area */}
          <div className='flex-1 bg-[#0A0A0A] p-4 sm:p-8 overflow-y-auto relative' ref={contentRef}>
            {activeTab === 'MISSION' && (
              <div className='text-white space-y-6'>
                <h2 className='text-3xl text-[#2E86FF] mb-6 uppercase'>MISSION: {project.text}</h2>
                <div className='pixel-panel-blue p-6 leading-relaxed text-lg sm:text-lg text-gray-300'>
                  {project.description}
                </div>
              </div>
            )}

            {activeTab === 'OVERVIEW' && (
              <div className='flex flex-col items-center gap-6'>
                <div className='pixel-panel p-2 w-full max-w-4xl aspect-video relative'>
                  <Image src={project.image} alt={project.text} fill className='object-cover' unoptimized priority />
                </div>
                {project.aboutPics[0] && (
                  <div className='pixel-panel-blue p-2 w-full max-w-3xl aspect-video relative'>
                     <Image src={project.aboutPics[0]} alt="Overview 2" fill className='object-cover' unoptimized />
                  </div>
                )}
              </div>
            )}

            {activeTab === 'TECH_STACK' && (
              <div className='space-y-6'>
                <h2 className='text-3xl text-[#2E86FF] uppercase'>DEPLOYED TECHNOLOGIES</h2>
                <div className='flex flex-wrap gap-4'>
                  {project.technologies?.map((tech, i) => (
                    <div key={i} className='pixel-panel-blue px-4 py-2 group cursor-pointer hover:bg-[#2E86FF]/20'>
                      <span className='text-[#2E86FF] group-hover:text-white transition-colors text-xl uppercase'>{tech.title}</span>
                      <p className='text-sm text-gray-500 mt-2 max-w-xs hidden group-hover:block'>{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'FEATURES' && (
              <div className='space-y-4'>
                <h2 className='text-3xl text-[#2E86FF] mb-6 uppercase'>SYSTEM CAPABILITIES</h2>
                {project.features?.map((feature, i) => (
                  <div key={i} className='border-l-4 border-[#E53935] pl-4 py-2 bg-[#071B38]/50'>
                    <h3 className='text-white text-xl uppercase'>&gt; {feature.title}</h3>
                    <p className='text-[#2E86FF] mt-1 text-lg'>{feature.description}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'SCREENSHOTS' && (
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {project.aboutPics.filter(Boolean).map((img, i) => (
                  <div key={i} className='pixel-panel p-2 aspect-video relative group cursor-crosshair hover:scale-105 transition-transform'>
                    <div className='absolute inset-0 bg-[#E53935]/20 group-hover:opacity-0 transition-opacity z-10' />
                    <Image src={img} alt={`Screenshot ${i}`} fill className='object-cover' unoptimized />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right HUD Sidebar */}
          <div className='hidden lg:flex w-64 border-l-4 border-[#0D47A1] bg-[#0A0A0A] p-4 flex-col gap-6 text-[#2E86FF] shrink-0'>
            <div className='pixel-panel-blue p-4'>
              <div className='text-xs opacity-70 mb-1'>STATUS</div>
              <div className='text-xl text-[#E53935] animate-pulse'>CLASSIFIED</div>
            </div>
            
            <div className='pixel-panel-blue p-4'>
              <div className='text-xs opacity-70 mb-1'>CLEARANCE</div>
              <div className='text-xl text-white'>LEVEL 4</div>
            </div>

            <div className='pixel-panel-blue p-4'>
              <div className='text-xs opacity-70 mb-1'>TECH ASSIGNED</div>
              <div className='text-2xl text-white'>{project.technologies?.length || 0}</div>
            </div>

            <div className='pixel-panel-blue p-4'>
              <div className='text-xs opacity-70 mb-1'>TARGET ID</div>
              <div className='text-lg text-white break-all uppercase'>{project.slug}</div>
            </div>
            
            <div className='mt-auto flex justify-center opacity-50 relative'>
              {/* Retro Radar */}
              <div className='w-32 h-32 rounded-full border-2 border-dashed border-[#2E86FF] animate-spin absolute' style={{ animationDuration: '10s' }} />
              <div className='w-24 h-24 rounded-full border border-[#2E86FF] absolute top-4' />
              <div className='w-16 h-16 rounded-full border border-[#2E86FF] absolute top-8' />
              <div className='w-1 h-32 bg-[#2E86FF] absolute opacity-50 animate-pulse' />
              <div className='h-1 w-32 bg-[#2E86FF] absolute top-16 opacity-50 animate-pulse' />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
