'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { handleButtonClick } from '@/helpers/handleButtonClick';

const ArcadeButton = ({ text }: { text: string }) => {
  const router = useRouter();

  return (
    <button
      className='iron-btn px-6 py-4 md:px-10 min-[320px]:text-lg md:text-xl min-[320px]:w-full sm:w-auto text-center'
      onClick={() => handleButtonClick(text, router)}
    >
      <span className='relative z-10'>{text}</span>
    </button>
  );
};

export default ArcadeButton;
