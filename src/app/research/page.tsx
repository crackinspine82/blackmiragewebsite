'use client';

import { Fragment, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '@/components/PageTransition';
import { CollapsibleItem } from '@/components/CollapsibleItem';
import { useTheme } from '@/contexts/ThemeContext';

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
  const [openMobileItem, setOpenMobileItem] = useState<{ section: number; index: number } | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { isInverted, setIsInverted } = useTheme();
  const theme = isInverted ? 'dark' : 'light';
  const effectiveInverted = isMobile ? false : isInverted;

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);
    const handler = () => setIsMobile(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

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
    setIsInverted(!isInverted);
  };

  const collapsibleContent: Record<number, CollapsibleEntry[]> = {
    0: [
      {
        title: 'Competitive Analysis',
        description:
          "Analyze your competitors' strengths, weaknesses, and market positioning to help you identify untapped opportunities and build a smarter strategy.",
        image: '/images/research/Competitive Analysis.jpg',
      },
      {
        title: 'Audience Segmentation',
        description:
          'Define and understand your target audiences, allowing for more personalized and effective marketing campaigns.',
        image: '/images/research/Audience Segmentation.jpg',
      },
      {
        title: 'Trend Forecasting',
        description:
          "Use data-driven insights to help you stay ahead of market shifts and consumer trends, ensuring your business is always prepared for what's next.",
        image: '/images/research/Trend-Forecasting.jpg',
      },
      {
        title: 'Feasibility Studies',
        description:
          'Evaluate new business ideas and product launches to identify potential risks and opportunities, ensuring you make informed decisions.',
        image: '/images/research/Feasibility Studies.jpg',
      },
    ],
    1: [
      {
        title: 'User Interviews',
        description:
          'Conduct one-on-one sessions to uncover user goals, motivations, and pain points in their own words.',
        image: '/images/research/User Interviews.jpg',
      },
      {
        title: 'Usability Testing',
        description:
          'Observe users as they interact with your product to identify what works and where improvements are needed.',
        image: '/images/research/Usability Testing.jpg',
      },
      {
        title: 'Journey Mapping',
        description:
          "Create visual representations of the user's journey to highlight key touchpoints, emotions, and opportunities for improvement.",
        image: '/images/research/Journey Mapping.jpg',
      },
      {
        title: 'Card Sorting & Tree Testing',
        description:
          'Test information architecture to ensure your content is logically organized and easy for users to find.',
        image: '/images/research/Card Sorting & Tree Testing.jpg',
      },
    ],
    2: [
      {
        title: 'Online Communities',
        description:
          'We immerse ourselves in forums, groups, and platforms where your audience congregates to understand their conversations, concerns, and interests.',
        image: '/images/research/Online Communities.jpg',
      },
      {
        title: 'Social Media Behavior',
        description:
          'We analyze how users interact, share content, and express themselves on social media to uncover brand perceptions and trends.',
        image: '/images/research/Social Media Behaviors.jpg',
      },
      {
        title: 'Digital Rituals',
        description:
          'We identify the unique behaviors, language, and rituals that define your audience’s online culture.',
        image: '/images/research/Digital Rituals.jpg',
      },
      {
        title: 'User-Generated Content',
        description:
          'We study how your brand is discussed and represented by users to gain authentic feedback and insights.',
        image: '/images/research/User Generated Content.jpg',
      },
    ],
    3: [
      {
        title: 'Data Strategy & Measurement',
        description:
          'We help you define your key performance indicators (KPIs) and set up the right tools to measure what truly matters for your business.',
        image: '/images/research/Data-strategy-and-measurements.jpg',
      },
      {
        title: 'Performance Analysis',
        description:
          "We analyze your digital campaigns, website traffic, and user behavior to identify what's working and where to improve your return on investment (ROI).",
        image: '/images/research/Performance-Analysis.jpg',
      },
      {
        title: 'Predictive Analytics',
        description:
          'We use historical data to forecast future trends and customer behavior, giving you a strategic advantage over the competition.',
        image: '/images/research/Predictive-Analysis.jpg',
      },
      {
        title: 'Dashboarding & Reporting',
        description:
          'We create easy-to-understand dashboards and reports that put complex data into a clear, visual format, making insights accessible to everyone on your team.',
        image: '/images/research/Dashboarding-&-Reporting.jpg',
      },
    ],
  } as const;

  const activeCollapsibleItems = collapsibleContent[activeButton as keyof typeof collapsibleContent] ?? collapsibleContent[0];

  const currentContent = contentMap[activeButton];

  return (
    <div className="relative min-h-screen">
      <PageTransition>
        <motion.div
          className="min-h-screen"
          animate={{
            backgroundColor: effectiveInverted ? '#000000' : '#ffffff',
            color: effectiveInverted ? '#ffffff' : '#000000',
          }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <main className="min-h-screen snap-start flex flex-col pt-20 md:pt-24">
          {/* Mobile: stacked sections, single theme */}
          <div className="md:hidden px-4 sm:px-8 py-6 space-y-12">
            {buttons.map((button, sectionIndex) => {
              const content = contentMap[sectionIndex];
              const collapsibles = collapsibleContent[sectionIndex as keyof typeof collapsibleContent] ?? collapsibleContent[0];
              const sectionTitle = rightColumnTitles[sectionIndex] ?? 'Research Services';
              return (
                <section key={button.id} className="space-y-6">
                  <h2 className="text-2xl font-black font-josefin text-black tracking-tight border-b border-gray-200 pb-2">
                    {button.label}
                  </h2>
                  <h3 className="text-3xl font-black font-josefin text-black">
                    {content?.title || '\u00A0'}
                  </h3>
                  <p className="text-lg font-light text-gray-600">{content?.subtitle || '\u00A0'}</p>
                  {content?.description && (
                    <p className="text-lg font-light text-gray-600 leading-relaxed">{content.description}</p>
                  )}
                  <h4 className="text-lg font-light text-gray-700 pt-2">{sectionTitle}</h4>
                  <div className="space-y-0">
                    {collapsibles.map((item, index) => (
                      <CollapsibleItem
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        isLast={index === collapsibles.length - 1}
                        isOpen={openMobileItem?.section === sectionIndex && openMobileItem?.index === index}
                        onToggle={() => setOpenMobileItem((prev) =>
                          prev?.section === sectionIndex && prev?.index === index ? null : { section: sectionIndex, index }
                        )}
                        imageSrc={item.image}
                        theme="light"
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          {/* Desktop: single view with swapping content */}
          <div className="hidden md:flex flex-1 flex-col justify-center px-4 sm:px-8 py-4">
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
                      className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-josefin tracking-normal ${
                        effectiveInverted ? 'text-white' : 'text-black'
                      }`}
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
                        className={`text-lg sm:text-xl md:text-2xl font-light ${
                          effectiveInverted ? 'text-gray-300' : 'text-gray-600'
                        }`}
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
                          <p
                            className={`text-lg sm:text-xl md:text-2xl font-light leading-relaxed ${
                              effectiveInverted ? 'text-gray-300' : 'text-gray-600'
                            }`}
                          >
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
                      <h2
                        className={`text-lg sm:text-xl md:text-2xl font-light text-right ${
                          effectiveInverted ? 'text-gray-200' : 'text-gray-700'
                        }`}
                      >
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
                        theme={theme}
                      />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Service Buttons - Desktop only */}
          <motion.div 
            className="hidden md:block w-full mt-auto"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.7, 
              delay: 0.5,
              ease: [0.4, 0, 0.2, 1] 
            }}
          >
            <div className="flex flex-col md:flex-row">
              {buttons.map((button) => (
                <button
                  key={button.id}
                  onClick={() => handleButtonClick(button.id)}
                  className={`w-full h-16 md:h-20 ${
                    activeButton === button.id
                      ? 'bg-red-600 hover:bg-red-600'
                      : [
                          'bg-gray-700 hover:bg-gray-600',
                          'bg-gray-800 hover:bg-gray-700',
                          'bg-gray-900 hover:bg-gray-800',
                          'bg-black hover:bg-gray-900',
                        ][button.id]
                  } text-white flex items-center justify-center font-josefin font-bold text-sm sm:text-base md:text-lg transition-colors duration-200`}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </motion.div>
          </main>
        </motion.div>
      </PageTransition>
    </div>
  );
}
