'use client';

import dynamic from 'next/dynamic';
import { PageTransition } from '@/components/PageTransition';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';

const VideoSlider = dynamic(() => import('@/components/VideoSlider'), {
  ssr: false,
  loading: () => <div>Loading videos...</div>
});

type VideoItem = import('@/components/VideoSlider').VideoItem;

export default function DigitalPage() {
  // Content for each button
  const contentMap = [
    {
      title: 'Create Cults, Not Clients',
      subtitle: 'Your business is unique, and your software should be too. Our Custom Development services are designed to build tailor-made technology solutions that fit your specific needs, streamline your operations, and give you a powerful competitive advantage.',
      description: 'We go beyond off-the-shelf solutions. Our team of experienced developers and engineers works closely with you to understand your challenges and build scalable, secure, and high-performance applications that are designed to grow with your business.',
      buttons: [
        'Web\nApps',
        'Mobile\nApps',
        'AR/VR\nSolutions',
        'Interactive\nMedia'
      ],
      _animateOut: false
    },
    {
      title: 'Transform Followers into Fanatics',
      subtitle: 'Turning Engagement into Advocacy',
      description: 'Turn casual users into brand evangelists. Through immersive digital experiences, we help you build a movement that people want to be part of.',
      buttons: [
        'Social\nMedia',
        'Content\nMarketing',
        'SEO &\nPPC',
        'Email\nCampaigns'
      ],
      _animateOut: false
    },
    {
      title: 'Resolve to Build Community',
      subtitle: 'Creating Meaningful Digital Connections',
      description: 'We solve the challenge of digital disconnection by creating spaces where meaningful interactions happen. Build relationships, not just user bases.',
      buttons: [
        'Community\nPlatforms',
        'Forums &\nChat',
        'User\nGroups',
        'Engagement\nTools'
      ],
      _animateOut: false
    },
    {
      title: 'Create Cults, Not Clients',
      subtitle: 'Meaningful Interactions That Drive Results',
      description: 'Create digital experiences that matter. We help you engage your audience in ways that are meaningful, memorable, and mutually beneficial.',
      buttons: [
        'Analytics\n& Insights',
        'User\nResearch',
        'Conversion\nOptimization',
        'Retention\nStrategies'
      ],
      _animateOut: false
    }
  ];

  const [activeButton, setActiveButton] = useState(0);
  const [currentContent, setCurrentContent] = useState(contentMap[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleButtonClick = (id: number) => {
    if (isAnimating || id === activeButton) return;
    
    setIsAnimating(true);
    
    // First, animate out the current content
    setCurrentContent({ ...currentContent, _animateOut: true });
    
    // After the fade-out completes, update to the new content
    setTimeout(() => {
      setActiveButton(id);
      setCurrentContent({ ...contentMap[id], _animateOut: false });
      
      // Reset animation state after the new content has animated in
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, 400);
  };

  const [secondSectionActive, setSecondSectionActive] = useState(1);
  const [secondSectionVisible, setSecondSectionVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSecondSectionVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Service section buttons (now non-interactive)
  const buttons = [
    { id: 0, label: 'EXPERIENCES' },
    { id: 1, label: 'COMMERCE' },
    { id: 2, label: 'EDUCATION' },
    { id: 3, label: 'MARKETING' },
  ];

  const secondSectionButtons = [
    { id: 1, label: 'EXPERIENCES' },
    { id: 2, label: 'COMMERCE' },
    { id: 3, label: 'SOCIAL' },
    { id: 4, label: 'MOBILITY' }
  ];

  return (
    <div 
      className="snap-container h-screen overflow-y-auto relative"
      style={{
        scrollBehavior: 'smooth',
        scrollSnapType: 'y mandatory',
      }}
    >
      <PageTransition>
        <main className="min-h-screen snap-start flex flex-col">
          <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 py-4">
            <div className="flex flex-col md:flex-row mb-4 md:mb-12 px-4 sm:px-8">
              {/* Title */}
              <div className="md:w-1/2 mb-4 md:mb-0 md:pr-8">
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <div className="space-y-8">
                      <motion.h1
                        key={`title-${activeButton}`}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-black font-josefin tracking-normal pt-4 md:pt-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: currentContent._animateOut ? 0 : 1,
                          y: currentContent._animateOut ? -20 : 0,
                          transition: { 
                            duration: 0.4,
                            ease: [0.4, 0, 0.2, 1]
                          }
                        }}
                      >
                        {currentContent.title || '\u00A0'}
                      </motion.h1>
                      <motion.div
                        key={`subtitle-${activeButton}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ 
                          opacity: currentContent._animateOut ? 0 : 1,
                          y: currentContent._animateOut ? -10 : 0,
                          transition: { 
                            delay: 0.05,
                            duration: 0.4,
                            ease: [0.4, 0, 0.2, 1]
                          }
                        }}
                      >
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light mt-8">
                          {currentContent.subtitle || '\u00A0'}
                        </p>
                      </motion.div>
                    </div>
                  </AnimatePresence>
                </div>
                <div className="h-6 md:h-8"></div> {/* Reduced space before the description */}
              </div>
              
              {/* Description */}
              <div className="md:w-1/2 md:pl-8">
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`desc-${activeButton}`}
                      className="space-y-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: currentContent._animateOut ? 0 : 1,
                        y: currentContent._animateOut ? -10 : 0,
                        transition: { 
                          delay: currentContent._animateOut ? 0 : 0.1,
                          duration: 0.4,
                          ease: [0.4, 0, 0.2, 1]
                        }
                      }}
                    >
                      {currentContent.description ? (
                        currentContent.description.split('\n\n').map((paragraph, i) => (
                          <p
                            key={`${i}-${paragraph.substring(0,10)}`}
                            className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))
                      ) : (
                        <div className="h-24" />
                      )}
                      
                      {/* Circular Buttons */}
                      <div className="w-full mt-8">
                        <div className="flex justify-between">
                        {currentContent.buttons?.map((label, index) => (
                          <button
                            key={index}
                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-black text-white flex items-center justify-center 
                                      hover:bg-gray-800 transition-colors duration-200 flex-shrink-0"
                            aria-label={label.replace('\n', ' ')}
                          >
                            <span className="text-sm sm:text-base text-center font-medium leading-tight">
                              {label.split('\n').map((line, i) => (
                                <span key={i} className="block">{line}</span>
                              ))}
                            </span>
                          </button>
                        ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service Buttons - Affixed to bottom of first section */}
          <div className="w-full mt-auto">
            <div className="flex flex-col md:flex-row">
              {buttons.map((button, index) => (
                <button
                  key={button.id}
                  onClick={() => handleButtonClick(button.id)}
                  className={`w-full h-16 md:h-20 ${
                    [
                      activeButton === button.id ? 'bg-gray-600' : 'bg-gray-700 hover:bg-gray-600',
                      activeButton === button.id ? 'bg-gray-700' : 'bg-gray-800 hover:bg-gray-700',
                      activeButton === button.id ? 'bg-gray-800' : 'bg-gray-900 hover:bg-gray-800',
                      activeButton === button.id ? 'bg-gray-900' : 'bg-black hover:bg-gray-900'
                    ][button.id]
                  } text-white flex items-center justify-center font-josefin font-bold text-sm sm:text-base md:text-lg transition-colors duration-200`}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </main>
        
        {/* Second Section */}
        <section className="min-h-screen snap-start bg-black flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center">
            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: secondSectionVisible ? 1 : 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              We can help you go...
            </motion.p>
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white font-josefin mb-8 sm:mb-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: secondSectionVisible ? 1 : 0 }}
              transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
            >
              DIGITAL
            </motion.h2>
          </div>
          {/* Buttons container */}
          <div className="w-full">
            <div className="flex flex-col md:flex-row">
              {secondSectionButtons.map((button, index) => (
                <button
                  key={button.id}
                  className={`w-full h-16 md:h-24 ${[
                    'bg-gray-200',
                    'bg-gray-300',
                    'bg-gray-400',
                    'bg-gray-500'
                  ][index]} text-black flex items-center justify-center font-josefin font-bold text-sm sm:text-base md:text-lg`}
                  onClick={() => setSecondSectionActive(button.id)}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Third Section - CTA */}
        <section className="relative min-h-screen snap-start bg-black">
          <div className="h-full flex items-center justify-center px-8 sm:px-12 md:px-16 lg:px-24">
            <div className="w-full max-w-3xl text-left">
              <motion.h2 
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Ready to Transform Your Digital Presence?
              </motion.h2>
              
              <motion.p 
                className="text-xl sm:text-2xl text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Let's create something extraordinary together
              </motion.p>
              
              <motion.button
                className="bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </section>
      </PageTransition>
    </div>
  );
}
