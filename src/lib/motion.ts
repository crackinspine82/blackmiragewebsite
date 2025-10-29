import { Variants } from 'framer-motion';

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0.1): Variants => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

export const slideIn = (direction: 'left' | 'right' | 'up' | 'down' = 'up', amount = 100) => ({
  initial: {
    opacity: 0,
    ...(direction === 'left' && { x: -amount }),
    ...(direction === 'right' && { x: amount }),
    ...(direction === 'up' && { y: amount }),
    ...(direction === 'down' && { y: -amount }),
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});
