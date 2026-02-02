'use client';

import { motion } from 'framer-motion';
import { PageTransition } from '@/components/PageTransition';
import Navbar from '@/components/Navbar';

export default function CrewPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-white pt-20 md:pt-24">
        <Navbar />
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 md:px-16 lg:px-24">
          {/* The Story Section */}
          <section className="flex items-center justify-center py-8 md:py-12">
            <div className="w-full">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-start md:items-center">
                {/* Left Column - Tagline */}
                <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start">
                  <motion.h1
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-black font-josefin tracking-tight"
                  >
                    Your Success Is Our Spotlight
                  </motion.h1>
                </div>

                {/* Right Column - Story */}
                <div className="w-full md:w-1/2 space-y-4">
                  <motion.h2
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-black font-josefin tracking-tight"
                  >
                    The Story
                  </motion.h2>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="space-y-3"
                  >
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                      Since 2006, Black Mirage has called Mumbai home. In a city that never stops, we learned early on that resilience and adaptability matter more than buzzwords.
                    </p>
                    
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                      We are an Integrated Media & Technology services company, but we've grown into something much more personal: a dedicated partner for businesses ready to evolve.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Philosophy and What We Do Section */}
          <section className="flex items-center justify-center py-8 md:py-12">
            <div className="w-full">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-start">
                {/* Left Column - Our Philosophy */}
                <div className="w-full md:w-1/2 space-y-4">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-black font-josefin tracking-tight"
                  >
                    Our Philosophy
                  </motion.h2>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="space-y-3"
                  >
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                      We don't believe in "vendor" relationships; we believe in being in the trenches with you. Our culture is simple and egoless: the best idea wins, regardless of who it comes from.
                    </p>
                    
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                      Whether we are coding a complex software solution, conducting deep-dive market research, or producing a film, our goal is the same—to make you look good.
                    </p>
                  </motion.div>
                </div>

                {/* Right Column - What We Do */}
                <div className="w-full md:w-1/2 space-y-4 pb-8 md:pb-0">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-black font-josefin tracking-tight"
                  >
                    What We Do
                  </motion.h2>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className="space-y-3"
                  >
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                      From our two offices in Mumbai, we blend creativity with logic. We handle everything from Branding and Digital Marketing to Custom Software and E-Learning.
                    </p>
                    
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                      We are the tech geeks and the creative storytellers working under one roof, committed to your success, not our own spotlight.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </PageTransition>
  );
}

