'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import AnimatedTitle from '@/components/AnimatedTitle';
import dynamic from 'next/dynamic';
import { PageTransition } from '@/components/PageTransition';
import { videoItems } from '@/lib/videos';

// Dynamically import the VideoSlider component with SSR disabled
const VideoSlider = dynamic(() => import('@/components/VideoSlider').then(mod => mod.default), {
  ssr: false,
});

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-white flex flex-col pt-20 overflow-x-hidden">
        <Navbar />
        <div className="pt-32 pl-16 pr-8 pb-4">
          <AnimatedTitle />
        </div>
        
        <div className="flex-1 px-4 pb-4 mt-32 w-full overflow-x-hidden">
          <VideoSlider items={videoItems} />
        </div>
      </main>
    </PageTransition>
  );
}
