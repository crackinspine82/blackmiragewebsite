'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import AnimatedTitle from '@/components/AnimatedTitle';
import dynamic from 'next/dynamic';
import { PageTransition } from '@/components/PageTransition';
import { videoItems } from '@/lib/videos';
import { useTheme } from '@/contexts/ThemeContext';

// Dynamically import the VideoSlider component with SSR disabled
const VideoSlider = dynamic(() => import('@/components/VideoSlider').then(mod => mod.default), {
  ssr: false,
});

export default function Home() {
  const { setIsInverted } = useTheme();

  // Reset theme to black (non-inverted) when on homepage
  useEffect(() => {
    setIsInverted(false);
  }, [setIsInverted]);

  return (
    <PageTransition>
      <motion.main 
        className="min-h-screen bg-white flex flex-col pt-20 overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <Navbar />
        <motion.div 
          className="pt-32 pl-16 pr-8 pb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <AnimatedTitle />
        </motion.div>
        
        <motion.div 
          className="flex-1 px-4 pb-4 mt-32 w-full overflow-x-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <VideoSlider items={videoItems} />
        </motion.div>
      </motion.main>
    </PageTransition>
  );
}
