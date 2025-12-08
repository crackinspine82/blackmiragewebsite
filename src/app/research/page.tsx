'use client';

import { Fragment, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '@/components/PageTransition';
import { CollapsibleItem } from '@/components/CollapsibleItem';

type CollapsibleEntry = {
  title: string;
  description: string;
  image: string;
};

export default function ResearchPage() {
  const contentMap = [
    {
      title: 'Unlock Your Competitive Edge',
      subtitle:
        "In a crowded market, understanding your audience isn't a luxury—it's a necessity. Our Market Research services go beyond surface-level data to uncover the insights that truly matter, giving you a competitive edge.",
      description:
        "We combine advanced technology with strategic analysis to identify key trends, evaluate your competitive landscape, and deeply understand your customer's needs and behaviors. This isn't just about collecting data; it's about turning that data into a clear, actionable strategy.",
    },
    {
      title: 'Design That Actually Works',
      subtitle:
        'Great design is more than just aesthetics; it’s about solving problems for people. Our Design Research services provide the critical insights needed to create experiences that are not only beautiful but also intuitive, effective, and truly user-centered.',
      description:
        'We bridge the gap between user needs and business goals by putting real people at the center of the design process. Using a mix of qualitative and quantitative methods, we uncover what users think, feel, and do, ensuring your products, services, and websites are designed for success.',
    },
    {
      title: 'Decode Your Digital Tribe',
      subtitle:
        "In the digital age, understanding your audience means meeting them where they are: online. Our Virtual Ethnography services go beyond traditional analytics to provide rich, qualitative insights into your customers' natural digital habitats.",
      description:
        'We observe, analyze, and interpret human behavior in online communities, social media, and virtual environments. This deep-dive approach reveals the unspoken motivations, cultural norms, and authentic interactions that quantitative data simply can’t capture. By understanding the \"why\" behind the \"what,\" we help you create more meaningful and effective digital experiences.',
    },
    {
      title: 'From Numbers To Narrative',
      subtitle:
        "Data is everywhere, but without a clear strategy, it's just noise. Our Analytics & Insights services transform raw data into a powerful narrative, providing you with the intelligence needed to make smarter business decisions and drive measurable growth.",
      description:
        'We don\'t just track numbers; we uncover the "why" behind them. By combining advanced analytics with strategic interpretation, we help you understand your audience\'s behavior, optimize your campaigns, and find new opportunities to connect with your customers.',
    },
  ];

  const [activeButton, setActiveButton] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<number | null>(0); // First menu open by default

  const buttons = [
    { id: 0, label: 'MARKET RESEARCH' },
    { id: 1, label: 'DESIGN RESEARCH' },
    { id: 2, label: 'VIRTUAL ETHNOGRAPHY' },
    { id: 3, label: 'ANALYTICS & INSIGHTS' },
  ];

   const rightColumnTitles = [
     'Our Market Research Services Includes',
     'Design Research Methods Process Includes',
     'What We Observe & Analyze',
     'How We Turn Data Into Action',
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
    // If clicking the same menu, close it. Otherwise, open the clicked menu and close others
    setOpenMobileMenu((prev) => (prev === id ? null : id));
    setOpenItem(null); // Close any open collapsible items when switching menus
  };

  const collapsibleContent: Record<number, CollapsibleEntry[]> = {
    0: [
      {
        title: 'Competitive Analysis',
        description:
          "Analyze your competitors' strengths, weaknesses, and market positioning to help you identify untapped opportunities and build a smarter strategy.",
        image:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Audience Segmentation',
        description:
          'Define and understand your target audiences, allowing for more personalized and effective marketing campaigns.',
        image:
          'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Trend Forecasting',
        description:
          "Use data-driven insights to help you stay ahead of market shifts and consumer trends, ensuring your business is always prepared for what's next.",
        image:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Feasibility Studies',
        description:
          'Evaluate new business ideas and product launches to identify potential risks and opportunities, ensuring you make informed decisions.',
        image:
          'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      },
    ],
    1: [
      {
        title: 'User Interviews',
        description:
          'Conduct one-on-one sessions to uncover user goals, motivations, and pain points in their own words.',
        image:
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Usability Testing',
        description:
          'Observe users as they interact with your product to identify what works and where improvements are needed.',
        image:
          'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Journey Mapping',
        description:
          "Create visual representations of the user's journey to highlight key touchpoints, emotions, and opportunities for improvement.",
        image:
          'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Card Sorting & Tree Testing',
        description:
          'Test information architecture to ensure your content is logically organized and easy for users to find.',
        image:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      },
    ],
    2: [
      {
        title: 'Online Communities',
        description:
          'We immerse ourselves in forums, groups, and platforms where your audience congregates to understand their conversations, concerns, and interests.',
        image:
          'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Social Media Behavior',
        description:
          'We analyze how users interact, share content, and express themselves on social media to uncover brand perceptions and trends.',
        image:
          'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Digital Rituals',
        description:
          'We identify the unique behaviors, language, and rituals that define your audience\'s online culture.',
        image:
          'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'User-Generated Content',
        description:
          'We study how your brand is discussed and represented by users to gain authentic feedback and insights.',
        image:
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      },
    ],
    3: [
      {
        title: 'Data Strategy & Measurement',
        description:
          'We help you define your key performance indicators (KPIs) and set up the right tools to measure what truly matters for your business.',
        image:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Performance Analysis',
        description:
          "We analyze your digital campaigns, website traffic, and user behavior to identify what's working and where to improve your return on investment (ROI).",
        image:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Predictive Analytics',
        description:
          'We use historical data to forecast future trends and customer behavior, giving you a strategic advantage over the competition.',
        image:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Dashboarding & Reporting',
        description:
          'We create easy-to-understand dashboards and reports that put complex data into a clear, visual format, making insights accessible to everyone on your team.',
        image:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
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
          <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 py-4 pt-24 md:pt-4">
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
                        delay: 1.0, // Appears after title (0.7s) + subtitle (0.85s) + description (1.0s) finish
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
                          delay: 1.05, // Slight delay after parent container starts appearing
                          duration: 0.4,
                          ease: [0.4, 0, 0.2, 1]
                        }
                      }}
                    >
                      <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 font-light text-right">
                        {rightColumnTitles[activeButton] ?? 'Research Services'}
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
        <main className="md:hidden flex flex-col bg-white pt-20 pb-8">
          <div className="px-4 py-8 space-y-0">
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
