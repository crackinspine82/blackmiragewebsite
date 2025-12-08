'use client';

import { motion } from 'framer-motion';
import { PageTransition } from '@/components/PageTransition';

export default function CrewPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-white pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 md:px-16 lg:px-24">
          {/* First Section: Title (Left) + The Story (Right) */}
          <section className="flex items-center justify-center py-8 md:py-12">
            <div className="w-full">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-start md:items-center">
                {/* Title - Left Half */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                  className="w-full md:w-1/2 flex items-center justify-center md:justify-start"
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-black font-josefin tracking-tight">
                    Your Success Is Our Spotlight
                  </h1>
                </motion.div>

                {/* The Story - Right Half */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  className="w-full md:w-1/2 space-y-4"
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black font-josefin tracking-tight">
                    The Story
                  </h2>
                  <div className="space-y-3">
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                      Since 2006, Black Mirage has called Mumbai home. In a city that never stops, we learned early on that resilience and adaptability matter more than buzzwords.
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                      We started as an ITES & Media company, but we've grown into something much more personal: a dedicated partner for businesses ready to evolve.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Second Section: Our Philosophy (Left) + What We Do (Right) */}
          <section className="flex items-center justify-center py-8 md:py-12">
            <div className="w-full">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-start">
                {/* Our Philosophy - Left Half */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                  className="w-full md:w-1/2 space-y-4"
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black font-josefin tracking-tight">
                    Our Philosophy
                  </h2>
                  <div className="space-y-3">
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                      We don't believe in "vendor" relationships; we believe in being in the trenches with you. Our culture is simple and egoless: the best idea wins, regardless of who it comes from.
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                      Whether we are coding a complex software solution, conducting deep-dive market research, or producing a film in our pinch harmonics studio, our goal is the same—to make you look good.
                    </p>
                  </div>
                </motion.div>

                {/* What We Do - Right Half */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  className="w-full md:w-1/2 space-y-4 pb-8 md:pb-0"
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black font-josefin tracking-tight">
                    What We Do
                  </h2>
                  <div className="space-y-3">
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                      From our two offices in Mumbai, we blend creativity with logic. We handle everything from Branding and Digital Marketing to Custom Software and E-Learning.
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                      We are the tech geeks and the creative storytellers working under one roof, committed to your success, not our own spotlight.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </PageTransition>
  );
}

