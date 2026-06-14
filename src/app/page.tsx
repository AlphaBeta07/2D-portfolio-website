'use client';
import { useRef } from 'react';
import LenisWrapper from '@/components/LenisWrapper';
import AboutSection from '@/components/sections/AboutSection';
import ContactsSection from '@/components/sections/ContactsSection';
import HeroSection from '@/components/sections/HeroSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import PageWithLoader from '@/components/PageWithLoader';

export default function Home() {
  const portfolioSectionRef = useRef<HTMLDivElement | null>(null);
  const contactsSectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <LenisWrapper>
      <main className='min-h-dvh overflow-hidden w-screen relative bg-neutral-900'>
        <PageWithLoader>
          <HeroSection  />
          <AboutSection  />
          <ExperienceSection />
          <PortfolioSection portfolioSectionRef={portfolioSectionRef} />
          <ContactsSection contactsSectionRef={contactsSectionRef} />
        </PageWithLoader>
      </main>
    </LenisWrapper>
  );
}
