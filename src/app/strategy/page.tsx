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

export default function StrategyPage() {
  const contentMap = [
    {
      title: 'Brand With Purpose',
      subtitle:
        'Your brand is more than just a logo—it\'s the story, feeling, and promise you make to every customer. In a digital-first world, a strong brand is the most powerful asset you can have. It\'s what makes you stand out, builds trust, and fosters loyalty.',
      description:
        'We help you define, develop, and launch a brand that truly resonates. Our approach combines creative vision with data-driven strategy to build a cohesive identity that tells your story and connects with your audience across all platforms.',
    },
    {
      title: 'Modernize. Optimize. Scale.',
      subtitle:
        'Digital transformation isn\'t just about adopting new technology; it\'s about reimagining your business for the digital age. It\'s a fundamental shift in how you operate, deliver value, and connect with customers. We help you navigate this complex journey, turning legacy systems into competitive advantages and new technologies into growth engines.',
      description:
        'Our approach combines strategic vision with hands-on expertise. We work with you to identify key areas for improvement, implement cutting-edge solutions, and empower your team to thrive in a constantly evolving digital landscape.',
    },
    {
      title: 'New Markets. Zero Guesswork',
      subtitle:
        'Expanding into new markets is a bold move that requires a clear strategy. We help you navigate the complexities of new territories, ensuring your entry is not only successful but also sustainable. Our approach combines deep market intelligence with a tech-driven focus on consumer behavior, giving you a comprehensive roadmap for growth.',
      description:
        'We don\'t just help you enter new markets; we help you own them. From initial research to launch and beyond, we provide the insights and strategic support to help you connect with new audiences and build a strong presence.',
    },
    {
      title: 'Create Cults Not Clients',
      subtitle:
        'In a world where attention is the most valuable currency, a powerful social media presence is non-negotiable. Our Social Strategy services go beyond content calendars and vanity metrics. We help you build a cohesive, data-driven plan that turns social media into a powerful engine for brand building, community engagement, and business growth.',
      description:
        'We combine an understanding of social media culture with the technology to listen, analyze, and engage authentically. This ensures every post, campaign, and interaction serves a strategic purpose, helping you connect with your audience on a deeper level.',
    },
  ];

  const [activeButton, setActiveButton] = useState(0);
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<number | null>(0); // First menu open by default

  const buttons = [
    { id: 0, label: 'BRANDING' },
    { id: 1, label: 'DIGITAL TRANSFORMATION' },
    { id: 2, label: 'MARKET EXPANSION' },
    { id: 3, label: 'SOCIAL' },
  ];

  const rightColumnTitles = [
    'Our Branding Services',
    'Our Digital Transformation Services',
    'Our Market Expansion Services',
    'Our Social Strategy Services',
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
        title: 'Brand Strategy',
        description:
          'We define your brand\'s purpose, values, and voice to create a solid foundation for your identity.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Visual Identity',
        description:
          'We design a memorable visual system, including logos, color palettes, and typography, that reflects your brand\'s personality.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Brand Messaging',
        description:
          'We craft a clear and compelling brand story and messaging framework that speaks directly to your target audience.',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Digital Brand Guidelines',
        description:
          'We create comprehensive guidelines to ensure your brand remains consistent and strong across every touchpoint, from your website to social media.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      },
    ],
    1: [
      {
        title: 'Technology & Infrastructure Modernization',
        description:
          'We help you move to the cloud, integrate new platforms, and modernize your tech stack to be more agile, scalable, and secure.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Customer Experience (CX) Transformation',
        description:
          'We redesign your customer journey with a digital-first mindset, creating seamless, personalized, and engaging experiences across all touchpoints.',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Operational Optimization',
        description:
          'We streamline your internal processes through automation and integrated systems, boosting efficiency and freeing up your team to focus on innovation.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Data & Analytics Integration',
        description:
          'We build a cohesive data strategy that connects different parts of your business, giving you a unified view of your operations and customers.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      },
    ],
    2: [
      {
        title: 'Market Opportunity Analysis',
        description:
          'We conduct in-depth research to identify and evaluate the most promising new markets for your business.',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Target Audience Profiling',
        description:
          'We create detailed profiles of potential customers in new markets, including their needs, preferences, and digital behaviors.',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Competitive Landscape Mapping',
        description:
          'We analyze the existing competition to help you identify your unique value proposition and position yourself for success.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Localized Go-to-Market Strategy',
        description:
          'We craft a tailored strategy that covers everything from product and pricing to messaging and technology, ensuring you resonate with local audiences.',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
      },
    ],
    3: [
      {
        title: 'Audience & Platform Analysis',
        description:
          'We identify where your target audience is most active and how they engage, ensuring you focus your efforts on the right platforms.',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Content & Campaign Planning',
        description:
          'We develop a strategic content plan that aligns with your business goals and resonates with your community, from viral campaigns to evergreen content.',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Social Listening & Insights',
        description:
          'We use technology to monitor online conversations, track brand sentiment, and uncover trends that inform your strategy in real-time.',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Community Building',
        description:
          'We help you foster a strong, engaged community around your brand, turning followers into loyal advocates.',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
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
                        {rightColumnTitles[activeButton] ?? 'Strategy Services'}
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

