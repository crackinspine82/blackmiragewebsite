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

export default function DesignPage() {
  const contentMap = [
    {
      title: 'We Are Addicted To Simplicity',
      subtitle:
        'In the digital world, User Experience (UX) is what separates a good product from a great one. It\'s the feeling someone gets when they interact with your website, app, or software. Our UX services are designed to ensure that every touchpoint is intuitive, efficient, and enjoyable, turning casual users into loyal customers.',
      description:
        'We believe that great UX is a blend of psychology, technology, and design. Our team uses a human-centered approach to create experiences that not only meet user needs but also exceed their expectations, driving engagement and conversions for your business.',
    },
    {
      title: 'Where Beauty Meets Form',
      subtitle:
        'In today\'s digital landscape, your website and mobile presence are often the first points of contact with your customers. Our Mobile & Web Design services are focused on creating beautiful, high-performing digital experiences that make lasting impressions.',
      description:
        'We blend modern aesthetics with user-centric functionality. By leveraging the latest design trends and technology, we build experiences that are seamless across all devices, ensuring your brand makes a powerful impact from the first interaction.',
    },
    {
      title: 'A Picture Worth A Thousand Words',
      subtitle:
        'Visual Design is the face of your brand. It\'s how your business communicates its personality, values, and quality at a glance. We create stunning and strategic visual identities that not only look great but also work hard to build recognition and trust.',
      description:
        'We combine artistic creativity with a deep understanding of user psychology and digital technology. Our goal is to craft a visual language that is not only beautiful but also functional, consistent, and aligned with your brand strategy.',
    },
    {
      title: 'It\'s Alive!',
      subtitle:
        'Bringing an idea to life requires more than just a concept—it requires a tangible form. Our Prototyping services help you visualize and test your digital products before any code is written, saving you time and resources.',
      description:
        'We believe in the power of "show, don\'t tell." By creating interactive prototypes, we allow you to experience the user journey firsthand, gather critical feedback, and iterate quickly. This agile approach ensures you build products that truly resonate with users.',
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
    { id: 0, label: 'USER EXPERIENCE' },
    { id: 1, label: 'MOBILE & WEB DESIGN' },
    { id: 2, label: 'VISUAL DESIGN' },
    { id: 3, label: 'PROTOTYPING' },
  ];

  const rightColumnTitles = [
    'Our User Experience Services',
    'Our Mobile & Web Design Services',
    'Our Visual Design Services',
    'Our Prototyping Services',
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
        title: 'UX Audit & Strategy',
        description:
          'Comprehensive UX audits that identify opportunities for improvement and develop strategic roadmaps for enhancing user experiences.',
        image: '/images/design/UX-Audit-&-Strategy.jpg',
      },
      {
        title: 'Information Architecture',
        description:
          'Design clear and logical information structures that help users find what they need quickly and intuitively.',
        image: '/images/design/Information-Architecture.jpg',
      },
      {
        title: 'Wireframing & Prototyping',
        description:
          'Create wireframes and interactive prototypes that structure user flows and allow for early testing and refinement.',
        image: '/images/design/Wireframing-&-Prototyping.jpg',
      },
      {
        title: 'Usability Testing',
        description:
          'Test designs with real users to identify improvements, validate solutions, and ensure your product meets user needs effectively.',
        image: '/images/design/Usability-Testing.jpg',
      },
    ],
    1: [
      {
        title: 'Custom Website Design',
        description:
          'Create unique, tailored website designs that reflect your brand and engage your audience effectively.',
        image: '/images/design/Custom-Website-Design.jpg',
      },
      {
        title: 'Mobile App UI/UX',
        description:
          'Design intuitive and beautiful mobile app interfaces that provide exceptional user experiences across iOS and Android.',
        image: '/images/design/Mobile-App-UI-UX.jpg',
      },
      {
        title: 'Responsive Design',
        description:
          'Ensure your website looks and functions perfectly across all devices, from mobile phones to desktop computers.',
        image: '/images/design/Responsive-Design.jpg',
      },
      {
        title: 'Website Redesign',
        description:
          'Transform your existing website with a modern redesign that improves user experience and reflects your brand evolution.',
        image: '/images/design/Website-Redesign.jpg',
      },
    ],
    2: [
      {
        title: 'Brand Identity & Style Guide',
        description:
          'Create comprehensive brand identities and style guides that define your visual language and ensure consistent application across all touchpoints.',
        image: '/images/design/Brand-Identity-&-Style-Guide.jpg',
      },
      {
        title: 'UI (User Interface) Design',
        description:
          'Design intuitive and visually appealing user interfaces that enhance usability and create engaging digital experiences.',
        image: '/images/design/UI-(User-Interface)-Design.jpg',
      },
      {
        title: 'Illustration & Iconography',
        description:
          'Create custom illustrations and iconography that add personality, clarity, and visual interest to your digital products.',
        image: '/images/design/Illustration-&-Iconography.jpg',
      },
      {
        title: 'Marketing Collateral',
        description:
          'Design marketing materials and collateral that effectively communicate your brand message and drive engagement.',
        image: '/images/design/Marketing-Collateral.jpg',
      },
    ],
    3: [
      {
        title: 'Low-Fidelity Prototyping',
        description:
          'Create quick, simple prototypes to test core concepts and user flows early in the design process.',
        image: '/images/design/Low-Fidelity-Prototyping.jpg',
      },
      {
        title: 'High-Fidelity Prototyping',
        description:
          'Build detailed, interactive prototypes that closely resemble the final product for comprehensive testing and stakeholder approval.',
        image: '/images/design/High-Fidelity-Prototyping.jpg',
      },
      {
        title: 'Interactive Demo',
        description:
          'Create engaging interactive demos that showcase your product\'s functionality and user experience to stakeholders and investors.',
        image: '/images/design/Interactive-Demo.jpg',
      },
      {
        title: 'Usability Testing Integration',
        description:
          'Integrate usability testing into the prototyping process to gather user feedback and validate design decisions early.',
        image: '/images/design/Usability-Testing-Integration.jpg',
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
              const sectionTitle = rightColumnTitles[sectionIndex] ?? 'Design Services';
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
                        {rightColumnTitles[activeButton] ?? 'Design Services'}
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

