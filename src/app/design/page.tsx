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
        'In today\'s digital landscape, your website and mobile presence are often the first points of contact with your customers. Our Mobile & Web Design services are focused on creating beautiful, high-performing digital platforms that not only capture attention but also drive results.',
      description:
        'We blend modern aesthetics with user-centric functionality. By leveraging the latest design trends and technology, we build experiences that are seamless across all devices, ensuring your brand makes a powerful impression, whether on a desktop or a smartphone.',
    },
    {
      title: 'A Picture Worth A Thousand Words',
      subtitle:
        'Visual Design is the face of your brand. It\'s how your business communicates its personality, values, and quality at a glance. We create stunning and strategic visual identities that not only look great but also build trust, convey professionalism, and capture your audience\'s attention.',
      description:
        'We combine artistic creativity with a deep understanding of user psychology and digital technology. Our goal is to craft a visual language that is not only beautiful but also functional, consistent, and memorable across every digital and physical touchpoint.',
    },
    {
      title: 'It\'s Alive!',
      subtitle:
        'Bringing an idea to life requires more than just a concept—it requires a tangible form. Our Prototyping services help you visualize and test your digital products before any code is written, saving you time, money, and costly mistakes.',
      description:
        'We believe in the power of "show, don\'t tell." By creating interactive prototypes, we allow you to experience the user journey firsthand, gather critical feedback, and iterate quickly. This agile approach ensures your final product is not only beautiful but also intuitive, functional, and fully aligned with user needs.',
    },
  ];

  const [activeButton, setActiveButton] = useState(0);
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<number | null>(0); // First menu open by default

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
  };

  const handleMobileMenuToggle = (id: number) => {
    setOpenMobileMenu((prev) => (prev === id ? null : id));
    setOpenItem(null); // Close any open collapsible items when switching menus
  };

  const collapsibleContent: Record<number, CollapsibleEntry[]> = {
    0: [
      {
        title: 'UX Audit & Strategy',
        description:
          'We evaluate your current digital platforms to identify pain points and opportunities for improvement, creating a strategic roadmap for a better user experience.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Information Architecture',
        description:
          'We organize and structure your content in a way that is logical and easy for users to navigate, ensuring they can always find what they\'re looking for.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Wireframing & Prototyping',
        description:
          'We create a blueprint for your digital product, allowing you to test and refine the user journey before any code is written.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Usability Testing',
        description:
          'We observe how real users interact with your product to uncover usability issues and validate design decisions.',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      },
    ],
    1: [
      {
        title: 'Custom Website Design',
        description:
          'We build custom websites from the ground up that are visually stunning, easy to navigate, and optimized for performance and conversions.',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Mobile App UI/UX',
        description:
          'We design intuitive and engaging user interfaces for mobile applications, ensuring a smooth and enjoyable experience for your users.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Responsive Design',
        description:
          'We guarantee your website looks and works flawlessly on any device, from laptops and tablets to smartphones.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Website Redesign',
        description:
          'We revitalize existing websites with modern design principles and updated technology to improve functionality, aesthetics, and overall performance.',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      },
    ],
    2: [
      {
        title: 'Brand Identity & Style Guides',
        description:
          'We develop a comprehensive visual identity, including logo design, color palettes, typography, and imagery, with a detailed style guide to ensure consistency.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'UI (User Interface) Design',
        description:
          'We design intuitive and visually appealing interfaces for websites, mobile apps, and software, making every interaction feel polished and effortless.',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Illustration & Iconography',
        description:
          'We create custom illustrations and icons that add personality to your brand and help simplify complex information for users.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Marketing Collateral',
        description:
          'We design high-impact visuals for your marketing campaigns, including social media graphics, ads, presentations, and digital reports.',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
      },
    ],
    3: [
      {
        title: 'Low-Fidelity Prototyping',
        description:
          'We create simple, clickable wireframes to quickly validate your core concept and user flow.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'High-Fidelity Prototyping',
        description:
          'We build realistic, interactive prototypes that closely mimic the final product, allowing for detailed usability testing and stakeholder feedback.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Interactive Demos',
        description:
          'We create engaging demos to showcase your product\'s key features to investors, partners, or internal teams.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Usability Testing Integration',
        description:
          'We use prototypes as the foundation for user testing, gathering actionable insights to refine the design before it moves into development.',
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

