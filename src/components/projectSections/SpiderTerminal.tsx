'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ArrowLeft, Terminal, FileText, Cpu, LayoutList, Image as ImageIcon, ExternalLink, Github, X } from 'lucide-react';
import Link from 'next/link';

interface Project {
  slug: string;
  text: string;
  image: string;
  aboutPics: string[];
  description: string;
  link: string;
  github?: string;
  more: string[];
  moreImgs: string[];
  features?: { title: string; description: string }[];
  technologies?: { title: string; description: string }[];
  video?: string;
  tagline?: string;
  mainTagline?: string;
  category?: string;
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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
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

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev! + 1) % project.aboutPics.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev! - 1 + project.aboutPics.length) % project.aboutPics.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, project.aboutPics]);

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
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='flex items-center gap-2 p-2.5 text-[#E53935] hover:bg-[#E53935]/20 transition-all uppercase text-sm'
                >
                  <ExternalLink size={16} /> {project.link.includes('github.com') ? 'GITHUB REPO' : 'DEMO'}
                </a>
              )}
              {project.github && !project.link.includes('github.com') && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='flex items-center gap-2 p-2.5 text-[#2E86FF] hover:bg-[#2E86FF]/20 transition-all uppercase text-sm'
                >
                  <Github size={16} /> REPO
                </a>
              )}
            </div>
          </div>

          {/* Main Content Area */}
          <div className='flex-1 bg-[#0A0A0A] p-4 sm:p-8 overflow-y-auto relative' ref={contentRef}>
            {activeTab === 'MISSION' && (
              <div className='text-white space-y-6'>
                <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
                  <div>
                    <div className='flex items-center gap-3 flex-wrap'>
                      <h2 className='text-3xl sm:text-4xl text-white font-bold uppercase tracking-wide'>
                        MISSION: {project.text}
                      </h2>
                      {project.tagline && (
                        <span className='px-2.5 py-0.5 text-xs font-mono font-bold uppercase bg-[#F5BA13] text-[#221C18] border border-[#221C18]'>
                          {project.tagline}
                        </span>
                      )}
                    </div>
                    {project.mainTagline && (
                      <p className='text-[#2E86FF] text-lg font-mono mt-1 uppercase'>
                        &ldquo;{project.mainTagline}&rdquo;
                      </p>
                    )}
                  </div>
                  <div className='flex items-center gap-3 flex-wrap'>
                    {project.link && (
                      <a
                        href={project.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='pixel-btn px-4 py-2 flex items-center gap-2 text-white bg-[#E53935] hover:bg-white hover:text-[#E53935] text-base uppercase tracking-wider w-fit'
                      >
                        <ExternalLink size={16} />
                        {project.link.includes('github.com') ? 'GITHUB REPO' : 'DEMO'}
                      </a>
                    )}
                    {project.github && !project.link.includes('github.com') && (
                      <a
                        href={project.github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='pixel-btn px-4 py-2 flex items-center gap-2 text-white bg-[#0D47A1] hover:bg-white hover:text-[#0D47A1] text-base uppercase tracking-wider w-fit'
                      >
                        <Github size={16} />
                        REPO
                      </a>
                    )}
                  </div>
                </div>
                <div className='pixel-panel-blue p-6 leading-relaxed text-base sm:text-lg text-gray-300'>
                  {project.description}
                </div>
              </div>
            )}

            {activeTab === 'OVERVIEW' && (
              <div className='flex flex-col items-center gap-6 w-full'>
                {project.video ? (
                  <div className='pixel-panel p-2 w-full max-w-4xl aspect-video relative bg-black flex items-center justify-center overflow-hidden'>
                    <video
                      src={project.video}
                      controls
                      autoPlay
                      loop
                      muted
                      playsInline
                      className='w-full h-full object-contain'
                    />
                  </div>
                ) : (
                  <div
                    className='pixel-panel p-2 w-full max-w-4xl min-h-[340px] max-h-[60vh] aspect-video relative bg-black flex items-center justify-center overflow-hidden cursor-pointer'
                    onClick={() => setLightboxIndex(0)}
                  >
                    <Image
                      src={project.image}
                      alt={project.text}
                      fill
                      className='object-contain'
                      unoptimized
                      priority
                    />
                  </div>
                )}
                {project.video ? (
                  <div className='pixel-panel-blue p-2 w-full max-w-3xl min-h-[260px] max-h-[50vh] aspect-video relative bg-[#071B38] flex items-center justify-center overflow-hidden'>
                    <Image
                      src={project.image}
                      alt={project.text}
                      fill
                      className='object-contain'
                      unoptimized
                    />
                  </div>
                ) : (
                  project.aboutPics[0] && (
                    <div
                      className='pixel-panel-blue p-2 w-full max-w-3xl min-h-[260px] max-h-[50vh] aspect-video relative bg-[#071B38] flex items-center justify-center overflow-hidden cursor-pointer'
                      onClick={() => setLightboxIndex(1)}
                    >
                      <Image
                        src={project.aboutPics[0]}
                        alt="Overview 2"
                        fill
                        className='object-contain'
                        unoptimized
                      />
                    </div>
                  )
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
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {project.aboutPics.filter(Boolean).map((img, i) => {
                  const isPortrait = img.includes('camassis');
                  return (
                    <div
                      key={i}
                      onClick={() => setLightboxIndex(i)}
                      className={`pixel-panel p-2 relative group cursor-pointer hover:scale-[1.03] transition-transform bg-[#0A0A0A] flex items-center justify-center overflow-hidden ${
                        isPortrait ? 'aspect-[9/16] min-h-[300px] max-h-[55vh]' : 'aspect-video min-h-[180px]'
                      }`}
                    >
                      <div className='absolute inset-0 bg-[#E53935]/10 group-hover:opacity-0 transition-opacity z-10 pointer-events-none' />
                      <Image
                        src={img}
                        alt={`Screenshot ${i + 1}`}
                        fill
                        className='object-contain p-1'
                        unoptimized
                      />
                      <div className='absolute bottom-2 right-2 z-20 px-2 py-0.5 bg-black/90 border border-[#E53935] text-[11px] text-[#2E86FF] uppercase font-mono opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1'>
                        EXPAND 🔍
                      </div>
                    </div>
                  );
                })}
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

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className='fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4'
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className='relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center justify-center pixel-panel bg-[#0A0A0A] p-4'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className='w-full flex items-center justify-between pb-3 mb-3 border-b-2 border-[#E53935] text-white'>
              <div className='flex items-center gap-3'>
                <span className='text-[#E53935] font-bold uppercase tracking-wider text-xl'>
                  {project.text} • SCREENSHOT {lightboxIndex + 1} OF {project.aboutPics.length}
                </span>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className='pixel-btn px-2.5 py-1 text-white hover:bg-white hover:text-[#E53935] transition-colors cursor-pointer text-sm font-bold flex items-center gap-1.5'
                title='Close (ESC)'
              >
                <X size={16} /> CLOSE
              </button>
            </div>

            {/* Image Viewer */}
            <div className='relative w-full h-[65vh] flex items-center justify-center bg-black overflow-hidden'>
              <Image
                src={project.aboutPics[lightboxIndex]}
                alt={`Screenshot ${lightboxIndex + 1}`}
                fill
                className='object-contain'
                unoptimized
              />
            </div>

            {/* Navigation buttons */}
            <div className='w-full flex items-center justify-between pt-3 mt-3 border-t-2 border-[#0D47A1]'>
              <button
                onClick={() =>
                  setLightboxIndex(
                    (prev) => (prev! - 1 + project.aboutPics.length) % project.aboutPics.length
                  )
                }
                className='pixel-btn px-4 py-1.5 text-white bg-[#0D47A1] hover:bg-white hover:text-[#0D47A1] transition-colors cursor-pointer text-sm'
              >
                ← PREV
              </button>
              <button
                onClick={() =>
                  setLightboxIndex((prev) => (prev! + 1) % project.aboutPics.length)
                }
                className='pixel-btn px-4 py-1.5 text-white bg-[#E53935] hover:bg-white hover:text-[#E53935] transition-colors cursor-pointer text-sm'
              >
                NEXT →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
