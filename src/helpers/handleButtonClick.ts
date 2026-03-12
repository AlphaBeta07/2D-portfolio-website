// clicks on AnimatedButton
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const handleButtonClick = (text: string, router: AppRouterInstance) => {
  if (text === 'LinkedIn') {
    window.open('https://www.linkedin.com/in/anish-landage-774511298/', '_blank');
  } else if (text === 'GitHub') {
    window.open('https://github.com/AlphaBeta07', '_blank');
  } else if (text === '←') {
    const animate = window.pageTransition;
    if (animate) animate('/');
    else router.push('/');
  } else if (text === 'Email') {
    window.location.href = 'mailto:anishlandage007@gmail.com';
  }
};
