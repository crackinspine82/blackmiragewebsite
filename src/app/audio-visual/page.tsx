'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '@/components/PageTransition';
import { CollapsibleItem } from '@/components/CollapsibleItem';

type CollapsibleEntry = {
  title: string;
  description: string;
  image: string;
};

export default function AudioVisualPage() {
  const contentMap = [
    {
      title: 'World-Class Audio. Local Vibes.',
      subtitle:
        'Sound is a powerful and often underestimated tool in digital marketing. Our Audio Production services go beyond simple voiceovers to create a rich, immersive soundscape for your brand. We help you use audio to build deeper connections, evoke emotion, and make your message resonate long after it\'s heard.',
      description:
        'We combine technical expertise with creative storytelling to produce audio that is clear, professional, and strategically aligned with your brand\'s voice. From compelling podcasts to crisp sound design, we ensure your audio is as impactful as your visuals.',
    },
    {
      title: 'Because Stories Live Forever',
      subtitle:
        'Video is the most powerful tool for telling your story and connecting with your audience. Our Video Production services are focused on creating high-quality, impactful visual content that drives engagement, builds brand trust, and delivers your message with clarity and style.',
      description:
        'We combine cinematic storytelling with a strategic, data-driven approach. From initial concept to final delivery, we handle every stage of the production process, ensuring your video is not only visually stunning but also a powerful asset for your marketing and communication goals.',
    },
    {
      title: 'Scale Smarter, Not Harder',
      subtitle:
        'Artificial Intelligence has revolutionized the way we earn online. Our AI-driven Affiliate Marketing services harness the power of automation and machine learning to identify high-converting opportunities, optimize campaigns in real-time, and maximize your revenue with precision and speed.',
      description:
        'We move beyond traditional referral methods by integrating advanced algorithms with strategic partnerships. From predicting market trends to automating content creation and performance tracking, we build a self-sustaining ecosystem. This ensures your campaigns are not just reactive but proactive, delivering consistent growth and measurable ROI.',
    },
    {
      title: 'The Line Just Disappeared',
      subtitle:
        'The future isn\'t just on a screen—it\'s all around us. Our Emerging Tech - AR/VR services use augmented reality (AR) and virtual reality (VR) to create immersive experiences that captivate audiences and transform how they interact with your brand. We go beyond traditional visuals to build engaging, interactive worlds that leave a lasting impression.',
      description:
        'We combine a deep understanding of storytelling with the latest technology to bring your vision to life. From a virtual product tour to an interactive training simulation, we help you harness the power of AR/VR to create experiences that are not only memorable but also strategically aligned with your business goals.',
    },
  ];

  const [activeButton, setActiveButton] = useState(0);
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<number | null>(0); // First menu open by default

  const buttons = [
    { id: 0, label: 'AUDIO PRODUCTION' },
    { id: 1, label: 'VIDEO PRODUCTION' },
    { id: 2, label: 'AFFILIATE MARKETING' },
    { id: 3, label: 'AR/VR' },
  ];

  const rightColumnTitles = [
    'Our Audio Production Services',
    'Our Video Production Services',
    'Our AI Affiliate Services',
    'Our AR/VR Services',
  ];

  const handleItemToggle = (index: number) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === index ? null : index));
  };

  const handleButtonClick = (id: number) => {
    if (id === activeButton) return;
    setOpenItem(null);
    setActiveButton(id);
  };

  const handleMobileMenuToggle = (id: number) => {
    setOpenMobileMenu((prev) => (prev === id ? null : id));
    setOpenItem(null); // Close any open collapsible items when switching menus
  };

  const collapsibleContent: Record<number, CollapsibleEntry[]> = {
    0: [
      {
        title: 'Podcast Production',
        description:
          'We handle everything from recording and editing to sound mixing and distribution, helping you launch a professional podcast that engages your audience.',
        image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Dubbing & Recording',
        description:
          'We provide high-quality voiceover services for commercials, IVRs, e-learning courses, explainer videos, and corporate presentations across Indian languages.',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Radio Spots',
        description:
          'We create impactful radio spots and jingles, offering professional voiceover and sound design services tailored for radio and digital audio platforms in various Indian languages.',
        image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Sound Design & Branding',
        description:
          'We create custom sound effects, jingles, and audio logos that build brand recognition and enhance the user experience.',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Audio Post-Production',
        description:
          'We refine and mix your audio content to ensure it is clear, balanced, and ready for any platform.',
        image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80',
      },
    ],
    1: [
      {
        title: 'Corporate & Brand Videos',
        description:
          'We produce professional videos that showcase your company culture, highlight your services, and communicate your brand\'s unique story.',
        image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Commercials & Promotional Content',
        description:
          'We create compelling video ads and promotional content designed to capture attention and drive conversions.',
        image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Explainer Videos & Product Demos',
        description:
          'We simplify complex ideas and products through engaging animated and live-action videos that educate your audience and generate leads.',
        image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Video Post-Production',
        description:
          'We handle all the technical and creative aspects of post-production, including editing, color grading, motion graphics, and sound design to bring your vision to life.',
        image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
      },
    ],
    2: [
      {
        title: 'AI-Driven Niche Research',
        description:
          'We use predictive algorithms to analyze market trends and competition, helping you identify high-profit niches and products before they saturate the market.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Automated Content Generation',
        description:
          'We leverage generative AI to create high-quality, SEO-optimized content—from blog posts to social media captions—at scale, ensuring you never run out of ways to engage your audience.',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Smart Campaign Optimization',
        description:
          'We utilize machine learning to monitor your campaigns 24/7, automatically adjusting bids, targeting, and messaging to ensure the highest possible conversion rates.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Performance Analytics',
        description:
          'We provide deep-dive reporting that goes beyond clicks, using data to forecast future revenue and identify the exact behaviors driving your sales.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      },
    ],
    3: [
      {
        title: 'Augmented Reality (AR)',
        description:
          'We develop AR experiences that overlay digital content onto the real world through mobile devices, perfect for interactive marketing campaigns, retail experiences, and product visualization.',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Virtual Reality (VR)',
        description:
          'We create fully immersive VR environments for product demos, virtual tours, educational content, and corporate training.',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Interactive Installations',
        description:
          'We design and build custom AR/VR installations for events, trade shows, and physical locations to create unique and engaging experiences.',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'WebAR/VR Solutions',
        description:
          'We develop browser-based AR/VR experiences that don\'t require an app download, making them accessible to a wider audience.',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
      },
    ],
  } as const;

  const activeCollapsibleItems = collapsibleContent[activeButton as keyof typeof collapsibleContent] ?? collapsibleContent[0];
  const currentContent = contentMap[activeButton];

  return (
    <div
      className="snap-container min-h-screen md:h-screen overflow-y-auto relative md:[scroll-snap-type:y_mandatory]"
      style={{
        scrollBehavior: 'smooth',
      }}
    >
      <PageTransition>
        {/* Desktop Layout - Hidden on mobile */}
        <main className="hidden md:flex min-h-screen snap-start flex-col">
          <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 py-4 pt-20 md:pt-4">
            <div className="flex flex-col md:flex-row mb-4 md:mb-12 px-4 sm:px-8 gap-8">
              {/* Left Column - Content */}
              <div className="md:w-1/2 space-y-6 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`content-${activeButton}`}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className="space-y-6"
                  >
                    <motion.h1
                      key={`title-${activeButton}`}
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 40 }}
                      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-black font-josefin tracking-normal"
                    >
                      {currentContent.title || '\u00A0'}
                    </motion.h1>

                    <div className="space-y-4">
                      <motion.p
                        key={`subtitle-${activeButton}`}
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 40 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
                        className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light"
                      >
                        {currentContent.subtitle || '\u00A0'}
                      </motion.p>

                      {currentContent.description && (
                        <motion.div
                          key={`description-${activeButton}`}
                          initial={{ opacity: 0, x: -40 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 40 }}
                          transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                          className="pt-4"
                        >
                          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                            {currentContent.description}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Column - Collapsible Items + Images */}
              <div className="md:w-1/2 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`collapsible-${activeButton}`}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: 1,
                      transition: { 
                        delay: 1.0,
                        duration: 0.7, 
                        ease: [0.4, 0, 0.2, 1] 
                      }
                    }}
                    exit={{ 
                      opacity: 0,
                      transition: { 
                        duration: 0.3, 
                        ease: [0.4, 0, 1, 1] 
                      }
                    }}
                    className="p-6 w-full"
                  >
                    <motion.div 
                      className="flex justify-end mb-4"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { 
                          delay: 1.05,
                          duration: 0.4,
                          ease: [0.4, 0, 0.2, 1]
                        }
                      }}
                    >
                      <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 font-light text-right">
                        {rightColumnTitles[activeButton] ?? 'Audio-Visual Services'}
                      </h2>
                    </motion.div>
                    {activeCollapsibleItems.map((item, index) => (
                      <CollapsibleItem
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        isLast={index === activeCollapsibleItems.length - 1}
                        isOpen={openItem === index}
                        onToggle={() => handleItemToggle(index)}
                        imageSrc={item.image}
                      />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Service Buttons - Affixed to bottom of first section */}
          <div className="w-full mt-auto">
            <div className="flex flex-col md:flex-row">
              {buttons.map((button) => {
                const isActive = activeButton === button.id;
                return (
                  <motion.button
                    key={button.id}
                    onClick={() => handleButtonClick(button.id)}
                    className={`w-full h-16 md:h-20 flex items-center justify-center font-josefin font-bold text-sm sm:text-base md:text-lg relative overflow-hidden`}
                    animate={{
                      backgroundColor: isActive ? '#ffffff' : [
                        '#374151', // gray-700
                        '#1f2937', // gray-800
                        '#111827', // gray-900
                        '#000000', // black
                      ][button.id],
                      color: isActive ? '#000000' : '#ffffff',
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    whileHover={!isActive ? {
                      backgroundColor: [
                        '#4b5563', // gray-600
                        '#374151', // gray-700
                        '#1f2937', // gray-800
                        '#111827', // gray-900
                      ][button.id],
                    } : {}}
                  >
                    {button.label}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </main>

        {/* Mobile Layout - Vertical Collapsible Menus */}
        <main className="md:hidden min-h-screen flex flex-col bg-white pt-20">
          <div className="flex-1 px-4 py-8 space-y-0">
            {buttons.map((button, index) => {
              const isOpen = openMobileMenu === button.id;
              const content = contentMap[button.id];
              const collapsibleItems = collapsibleContent[button.id as keyof typeof collapsibleContent] ?? [];
              const menuTitle = rightColumnTitles[button.id];

              return (
                <div
                  key={button.id}
                  className="w-full"
                >
                  {/* Menu Button */}
                  <button
                    onClick={() => handleMobileMenuToggle(button.id)}
                    className={`w-full text-left p-5 ${
                      [
                        'bg-gray-700',
                        'bg-gray-800',
                        'bg-gray-900',
                        'bg-black',
                      ][button.id]
                    } text-white flex items-center justify-between font-josefin font-bold text-base transition-all duration-200 border-b border-gray-600`}
                  >
                    <span>{button.label}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-xl"
                    >
                      ▼
                    </motion.span>
                  </button>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden bg-white"
                      >
                        <div className="p-6 space-y-6">
                          {/* Title */}
                          <h1 className="text-3xl sm:text-4xl font-black text-black font-josefin tracking-normal">
                            {content.title}
                          </h1>

                          {/* Subtitle */}
                          <p className="text-lg sm:text-xl text-gray-600 font-light">
                            {content.subtitle}
                          </p>

                          {/* Description */}
                          {content.description && (
                            <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
                              {content.description}
                            </p>
                          )}

                          {/* Collapsible Items Section */}
                          <div className="pt-4">
                            <h2 className="text-lg sm:text-xl text-gray-700 font-light mb-4">
                              {menuTitle}
                            </h2>
                            <div className="space-y-0">
                              {collapsibleItems.map((item, itemIndex) => (
                                <CollapsibleItem
                                  key={item.title}
                                  title={item.title}
                                  description={item.description}
                                  isLast={itemIndex === collapsibleItems.length - 1}
                                  isOpen={openItem === itemIndex && openMobileMenu === button.id}
                                  onToggle={() => {
                                    if (openMobileMenu === button.id) {
                                      handleItemToggle(itemIndex);
                                    }
                                  }}
                                  imageSrc={item.image}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </main>
      </PageTransition>
    </div>
  );
}

