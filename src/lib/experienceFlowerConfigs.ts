import { FlowerVariant } from '@/components/Flower';

export interface FlowerConfig {
  variant: FlowerVariant;
  position: string;
}

export const experienceFlowerConfigs: FlowerConfig[] = [
  {
    variant: 'three',
    position: 'top-20 sm:left-10 min-[320px]:left-2',
  },
  {
    variant: 'five',
    position: 'top-1/3 sm:right-15 min-[320px]:right-0',
  },
  {
    variant: 'two',
    position: 'bottom-20 sm:left-1/4 min-[320px]:left-10',
  },
  {
    variant: 'four',
    position: 'top-2/3 sm:right-10 min-[320px]:right-2',
  },
  {
    variant: 'one',
    position: 'bottom-10 sm:right-1/4 min-[320px]:right-10',
  },
];
