'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '@/components/PageTransition';
import { CollapsibleItem } from '@/components/CollapsibleItem';
import { useTheme } from '@/contexts/ThemeContext';

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
        'Digital transformation isn\'t just about adopting new technology; it\'s about reimagining your business for the digital age. It\'s a fundamental shift in how you operate, deliver value, and connect with customers.',
      description:
        'Our approach combines strategic vision with hands-on expertise. We work with you to identify key areas for improvement, implement cutting-edge solutions, and empower your team to thrive in a constantly evolving digital landscape.',
    },
    {
      title: 'New Markets. Zero Guesswork.',
      subtitle:
        'Expanding into new markets is a bold move that requires a clear strategy. We help you navigate the complexities of new territories, ensuring your entry is not only successful but also sustainable.',
      description:
        'We don\'t just help you enter new markets; we help you own them. From initial research to launch and beyond, we provide the insights and strategic support to help you connect with new audiences and build lasting presence in new regions.',
    },
    {
      title: 'Create Cults Not Clients',
      subtitle:
        'In a world where attention is the most valuable currency, a powerful social media presence is non-negotiable. Our Social Strategy services go beyond content calendars and vanity metrics. We help you build communities that are engaged, loyal, and actively advocate for your brand.',
      description:
        'We combine an understanding of social media culture with the technology to listen, analyze, and engage authentically. This ensures every post, campaign, and interaction serves a strategic purpose, helping you turn followers into brand evangelists.',
    },
  ];

  const [activeButton, setActiveButton] = useState(0);
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
    { id: 0, label: 'BRANDING' },
    { id: 1, label: 'DIGITAL TRANSFORMATION' },
    { id: 2, label: 'MARKET EXPANSION' },
    { id: 3, label: 'SOCIAL' },
  ];

  const rightColumnTitles = [
    'Our Branding Services',
    'Digital Transformation Services',
    'Market Expansion Services',
    'Social Strategy Services',
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
        title: 'Brand Strategy',
        description:
          'Develop comprehensive brand strategies that define your unique position, values, and promise to customers.',
        image: '/images/strategy/Brand-Strategy.jpg',
      },
      {
        title: 'Visual Identity',
        description:
          'Create distinctive visual identities that capture your brand essence and resonate with your audience.',
        image: '/images/strategy/Visual-Identity.jpg',
      },
      {
        title: 'Brand Messaging',
        description:
          'Craft compelling brand messages that communicate your story and connect with your audience across all touchpoints.',
        image: '/images/strategy/Brand-Messaging.jpg',
      },
      {
        title: 'Digital Brand Guidelines',
        description:
          'Establish comprehensive digital brand guidelines that ensure consistent application across all digital platforms and channels.',
        image: '/images/strategy/Digital-Brand-Guidelines.jpg',
      },
    ],
    1: [
      {
        title: 'Technology & Infrastructure Modernization',
        description:
          'Modernize your technology infrastructure to improve performance, scalability, and security while reducing operational costs.',
        image: '/images/strategy/Technology-&-Infrastructure-modernization.jpg',
      },
      {
        title: 'Customer Experience (CX) Transformation',
        description:
          'Transform how customers interact with your brand by redesigning touchpoints and creating seamless, personalized experiences.',
        image: '/images/strategy/Customer-Experience-(CX)-Transformation.jpg',
      },
      {
        title: 'Operational Optimization',
        description:
          'Streamline operations and workflows to increase efficiency, reduce waste, and improve overall business performance.',
        image: '/images/strategy/Operational-Optimization.jpg',
      },
      {
        title: 'Data & Analytics Integration',
        description:
          'Leverage data and analytics to make informed decisions, predict trends, and drive measurable business outcomes.',
        image: '/images/strategy/Data-&-Analytics-Integration.jpg',
      },
    ],
    2: [
      {
        title: 'Market Opportunity Analysis',
        description:
          'Identify and evaluate new market opportunities through comprehensive analysis of market size, trends, and potential.',
        image: '/images/strategy/Market-Opportunity-Analysis.jpg',
      },
      {
        title: 'Target Audience Profiling',
        description:
          'Develop detailed profiles of your target audiences in new markets to inform marketing and product strategies.',
        image: '/images/strategy/Target-Audience-Profiling.jpg',
      },
      {
        title: 'Competitive Landscape Mapping',
        description:
          'Map the competitive landscape in new markets to identify opportunities, threats, and positioning strategies.',
        image: '/images/strategy/Competitive-Landscape-Mapping.jpg',
      },
      {
        title: 'Localized Go-to-Market Strategy',
        description:
          'Develop tailored go-to-market strategies that account for local market conditions, regulations, and cultural factors.',
        image: '/images/strategy/Localized-Go-to-Market-Strategy.jpg',
      },
    ],
    3: [
      {
        title: 'Audience & Platform Analysis',
        description:
          'Identify the right platforms and understand your audience to create targeted, effective social media strategies.',
        image: '/images/strategy/Audience-&-Platform-Analysis.jpg',
      },
      {
        title: 'Content & Campaign Planning',
        description:
          'Develop comprehensive content strategies and campaign plans that align with your brand and drive engagement.',
        image: '/images/strategy/Content-&-Campaign-Planning.jpg',
      },
      {
        title: 'Social Listening & Insights',
        description:
          'Monitor conversations, track sentiment, and gather insights to inform your social media strategy and decision-making.',
        image: '/images/strategy/Social-Listening-&-Insights.jpg',
      },
      {
        title: 'Community Building',
        description:
          'Build and nurture online communities that foster brand loyalty, create authentic connections, and turn followers into advocates.',
        image: '/images/strategy/Community-Building.jpg',
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
              const sectionTitle = rightColumnTitles[sectionIndex] ?? 'Strategy Services';
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

              {/* Right Column - Collapsible Items */}
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
                      <h2
                        className={`text-lg sm:text-xl md:text-2xl font-light text-right ${
                          effectiveInverted ? 'text-gray-200' : 'text-gray-700'
                        }`}
                      >
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

