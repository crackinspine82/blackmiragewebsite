'use client';

import dynamic from 'next/dynamic';
import { PageTransition } from '@/components/PageTransition';
import { CollapsibleItem } from '@/components/CollapsibleItem';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { useTheme } from '@/contexts/ThemeContext';

const VideoSlider = dynamic(() => import('@/components/VideoSlider'), {
  ssr: false,
  loading: () => <div>Loading videos...</div>
});

type VideoItem = import('@/components/VideoSlider').VideoItem;

export default function DigitalPage() {
  // Content for each button
  const contentMap = [
    {
      title: 'Engineered Design-Craft',
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
      title: 'Connect Everything, Everywhere',
      subtitle: 'In today\'s interconnected world, your business systems need to communicate seamlessly. Our Service Bus Integration services create a robust and reliable backbone for your technology, ensuring that data flows smoothly between all your applications and services.',
      description: 'We specialize in building the critical connections that eliminate silos and automate your workflows. By implementing a service bus, we create a centralized communication channel that not only improves efficiency but also makes your entire technology ecosystem more resilient and scalable.',
      buttons: [
        'Social\nMedia',
        'Content\nMarketing',
        'SEO &\nPPC',
        'Email\nCampaigns'
      ],
      _animateOut: false
    },
    {
      title: 'Commerce That Converts',
      subtitle: 'In a digital-first economy, a powerful e-commerce platform is the engine of your business. It\'s more than just an online store; it\'s a strategic tool designed to attract customers, drive sales, and build lasting relationships.',
      description: 'We combine a deep understanding of consumer behavior with cutting-edge technology to build platforms that are not only visually compelling but also optimized for performance and conversion. From seamless checkout experiences to intelligent product recommendations, we create e-commerce solutions that turn browsers into buyers.',
      buttons: [
        'Community\nPlatforms',
        'Forums &\nChat',
        'User\nGroups',
        'Engagement\nTools'
      ],
      _animateOut: false
    },
    {
      title: 'Leave Them Kids Alone…',
      subtitle: 'The way we learn is changing, and so is the technology that powers it. Our E-Learning services are focused on creating engaging, intuitive, and scalable learning platforms that deliver knowledge effectively and inspire continuous growth.',
      description: 'We combine instructional design principles with cutting-edge technology to build platforms that are not only easy to use but also optimized for retention and engagement. From corporate training modules to academic courses, we create learning experiences that truly make a difference.',
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
  const [openItem, setOpenItem] = useState<number | null>(null);
  const { isInverted, setIsInverted } = useTheme();
  const theme = isInverted ? 'dark' : 'light';

  const handleButtonClick = (id: number) => {
    if (isAnimating || id === activeButton) return;
    
    setIsAnimating(true);
    setOpenItem(null);
    setIsInverted(!isInverted);
    
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

  const handleItemToggle = (index: number) => {
    setOpenItem(prevOpenItem => (prevOpenItem === index ? null : index));
  };

  const rightColumnTitles = [
    'Our Custom Development Services',
    'Service Bus Integration Services',
    'E-Commerce Services',
    'E-Learning Services',
  ];

  const collapsibleContent: Record<
    number,
    Array<{ title: string; description: string; image?: string }>
  > = {
    0: [
      {
        title: 'Web Application Development',
        description: 'Custom web applications built with modern technologies to solve your business challenges. We create responsive, scalable, and secure web solutions tailored to your needs.',
        image:
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications that deliver seamless user experiences across iOS and Android devices. We build apps that users love to engage with.',
        image:
          'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'API & System Integration',
        description: 'Enterprise-grade API and system integration solutions that connect your applications and services. We ensure reliable, scalable, and secure communication between your systems.',
        image:
          'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'SaaS Product Development',
        description: 'End-to-end development of scalable and secure Software as a Service (SaaS) products. From concept to deployment, we help you build and grow your SaaS business.',
        image:
          'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=400&q=80',
      },
    ],
    1: [
      {
        title: 'System & Application Integration',
        description: 'Integrate all your systems and applications into a unified, efficient ecosystem that eliminates data silos and streamlines operations.',
        image:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'API Management',
        description: 'Implement comprehensive API management solutions that secure, monitor, and optimize all your API interactions.',
        image:
          'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Data Orchestration',
        description: 'Orchestrate data flows across your systems to ensure consistent, timely, and accurate information exchange.',
        image:
          'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Legacy System Modernization',
        description: 'Modernize and integrate legacy systems with modern applications, extending their lifespan while improving functionality.',
        image:
          'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=400&q=80',
      },
    ],
    2: [
      {
        title: 'Custom E-Commerce Development',
        description: 'Build custom e-commerce platforms tailored to your business needs, from product catalogs to checkout and order management.',
        image:
          'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Platform Integration',
        description: 'Integrate your e-commerce platform with existing systems, third-party services, and business tools for seamless operations.',
        image:
          'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'User Experience (UX) Design',
        description: 'Design intuitive and conversion-focused user experiences that guide customers smoothly from discovery to purchase.',
        image:
          'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Payment & Security Solutions',
        description: 'Implement secure payment processing and robust security measures to protect customer data and build trust.',
        image:
          'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80',
      },
    ],
    3: [
      {
        title: 'Custom Learning Management Systems (LMS)',
        description: 'Build comprehensive learning management systems tailored to your organization\'s needs, delivering, tracking, and managing educational content effectively.',
        image:
          'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Interactive Course Development',
        description: 'Create engaging, interactive courses that combine multimedia content, assessments, and collaborative learning tools.',
        image:
          'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Mobile Learning Solutions',
        description: 'Develop mobile-first learning solutions that enable learners to access content anytime, anywhere, on any device.',
        image:
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Integration with Existing Systems',
        description: 'Integrate e-learning platforms with your existing HR, CRM, and business systems for seamless data flow and reporting.',
        image:
          'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Immersive Learning',
        description: 'Create immersive learning experiences using AR, VR, and gamification to enhance engagement and retention.',
        image:
          'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=400&q=80',
      },
    ],
  };

  // Service section buttons (now non-interactive)
  const buttons = [
    { id: 0, label: 'CUSTOM DEVELOPMENT' },
    { id: 1, label: 'SERVICE BUS INTEGRATIONS' },
    { id: 2, label: 'E-COMMERCE' },
    { id: 3, label: 'E-LEARNING' },
  ];

  return (
    <div className="relative min-h-screen">
      <PageTransition>
        <motion.div
          className="min-h-screen"
          animate={{
            backgroundColor: isInverted ? '#000000' : '#ffffff',
            color: isInverted ? '#ffffff' : '#000000',
          }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <main className="min-h-screen snap-start flex flex-col">
          <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 py-4">
            <div className="flex flex-col md:flex-row mb-4 md:mb-12 px-4 sm:px-8 gap-8">
              {/* Left Column - Original Content */}
              <div className="md:w-1/2 space-y-6 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`title-group-${activeButton}`}
                    className="space-y-6"
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
                    <motion.h1
                      key={`title-${activeButton}`}
                      className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-josefin tracking-normal ${
                        isInverted ? 'text-white' : 'text-black'
                      }`}
                    >
                      {currentContent.title || '\u00A0'}
                    </motion.h1>
                    
                    <motion.div
                      key={`subtitle-${activeButton}`}
                      className="space-y-4"
                    >
                      <p
                        className={`text-lg sm:text-xl md:text-2xl font-light ${
                          isInverted ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        {currentContent.subtitle || '\u00A0'}
                      </p>
                      
                      {currentContent.description && (
                        <div className="pt-4">
                          <p
                            className={`text-lg sm:text-xl md:text-2xl font-light leading-relaxed ${
                              isInverted ? 'text-gray-300' : 'text-gray-600'
                            }`}
                          >
                            {currentContent.description}
                          </p>
                        </div>
                      )}
                    </motion.div>
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
                          isInverted ? 'text-gray-200' : 'text-gray-700'
                        }`}
                      >
                        {rightColumnTitles[activeButton] ?? 'Digital Services'}
                      </h2>
                    </motion.div>
                    {(collapsibleContent[activeButton] ?? collapsibleContent[0]).map((item, index) => (
                      <CollapsibleItem 
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        isLast={index === (collapsibleContent[activeButton] ?? collapsibleContent[0]).length - 1}
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
          
          {/* Service Buttons - Affixed to bottom of first section */}
          <motion.div 
            className="w-full mt-auto"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.7, 
              delay: 0.5,
              ease: [0.4, 0, 0.2, 1] 
            }}
          >
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
          </motion.div>
        </main>
        </motion.div>
      </PageTransition>
    </div>
  );
}
