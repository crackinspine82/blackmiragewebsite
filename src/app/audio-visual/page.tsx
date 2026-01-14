'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransition } from '@/components/PageTransition';
import { CollapsibleItem } from '@/components/CollapsibleItem';
import { useTheme } from '@/contexts/ThemeContext';

type CollapsibleEntry = {
  title: string;
  description: string;
  image: string;
};

export default function AudioVisualPage() {
  const contentMap = [
    {
      title: 'World-Class Audio. Local Vibe.',
      subtitle:
        'Sound is a powerful and often underestimated tool in digital marketing. Our Audio Production services go beyond simple voiceovers to create a rich, immersive soundscape for your brand. We help you use audio strategically to connect with your audience, build brand recognition, and create memorable experiences.',
      description:
        'We combine technical expertise with creative storytelling to produce audio that is clear, professional, and strategically aligned with your brand\'s voice. From compelling podcasts to crisp sound design, we deliver audio solutions that elevate your brand and engage your audience.',
    },
    {
      title: 'Because Stories Live Forever',
      subtitle:
        'Video is the most powerful tool for telling your story and connecting with your audience. Our Video Production services are focused on creating high-quality, impactful visual content that drives engagement and delivers results.',
      description:
        'We combine cinematic storytelling with a strategic, data-driven approach. From initial concept to final delivery, we handle every stage of the production process, ensuring your video is not only visually stunning but also strategically aligned with your brand goals.',
    },
    {
      title: 'Scale Smarter, Not Harder',
      subtitle:
        'Artificial Intelligence has revolutionized the way we earn online. Our AI-driven Affiliate Marketing services harness the power of automation and machine learning to identify high-converting opportunities and optimize your affiliate strategy.',
      description:
        'We move beyond traditional referral methods by integrating advanced algorithms with strategic partnerships. From predicting market trends to automating content creation and performance tracking, we build affiliate programs that scale efficiently and deliver measurable results.',
    },
    {
      title: 'The Line Just Disappeared',
      subtitle:
        'The future isn\'t just on a screen—it\'s all around us. Our Emerging Tech - AR/VR services use augmented reality (AR) and virtual reality (VR) to create immersive experiences that captivate audiences and transform how they interact with your brand.',
      description:
        'We combine a deep understanding of storytelling with the latest technology to bring your vision to life. From a virtual product tour to an interactive training simulation, we help you harness the power of AR/VR to create experiences that are not just seen but felt.',
    },
  ];

  const [activeButton, setActiveButton] = useState(0);
  const [openItem, setOpenItem] = useState<number | null>(null);
  const { isInverted, setIsInverted } = useTheme();
  const theme = isInverted ? 'dark' : 'light';

  const buttons = [
    { id: 0, label: 'AUDIO PRODUCTION' },
    { id: 1, label: 'VIDEO PRODUCTION' },
    { id: 2, label: 'AFFILIATE MARKETING' },
    { id: 3, label: 'AR/VR' },
  ];

  const rightColumnTitles = [
    'Our Audio Production Services',
    'Video Production Services',
    'Affiliate Marketing Services',
    'AR/VR Services',
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
        title: 'Podcast Production',
        description:
          'Produce professional podcasts with high-quality audio and engaging content that captivates your audience.',
        image:
          'https://images.unsplash.com/photo-1524503033411-c9566986fc8f?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Dubbing & Recording',
        description:
          'Professional dubbing and recording services for commercials, narrations, and multimedia content.',
        image:
          'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Radio Spot',
        description:
          'Create compelling radio spots that capture attention and drive action through strategic audio storytelling.',
        image:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Sound Design & Branding',
        description:
          'Develop custom sound design and audio branding that creates memorable sonic identities for your brand.',
        image:
          'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Audio Post-Production',
        description:
          'Professional audio post-production services including mixing, mastering, and sound enhancement.',
        image:
          'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&q=80',
      },
    ],
    1: [
      {
        title: 'Corporate & Brand Video',
        description:
          'Create compelling corporate and brand videos that communicate your company\'s values, mission, and story effectively.',
        image:
          'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Commercials & Promotional Content',
        description:
          'Produce high-impact commercials and promotional videos that drive brand awareness and customer engagement.',
        image:
          'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Explainer Videos & Product Demo',
        description:
          'Create clear, engaging explainer videos and product demonstrations that simplify complex concepts and showcase your offerings.',
        image:
          'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Video Post-Production',
        description:
          'Professional video editing, color grading, and post-production services that transform raw footage into polished, professional content.',
        image:
          'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&q=80',
      },
    ],
    2: [
      {
        title: 'AI-Driven Niche Research',
        description:
          'Leverage AI to identify high-converting niches and opportunities that align with your brand and target audience.',
        image:
          'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Automated Content Generation',
        description:
          'Use AI to automatically generate affiliate content, product descriptions, and marketing materials that convert.',
        image:
          'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Smart Campaign Optimization',
        description:
          'Continuously optimize affiliate campaigns using machine learning algorithms that adapt to market changes and performance data.',
        image:
          'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Performance Analytics',
        description:
          'Get deep insights into affiliate performance with AI-powered analytics that track ROI, conversions, and campaign effectiveness.',
        image:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80',
      },
    ],
    3: [
      {
        title: 'Augmented Reality (AR)',
        description:
          'Create AR experiences that overlay digital content onto the real world, enhancing user interactions with your products and brand.',
        image:
          'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Virtual Reality (VR)',
        description:
          'Develop immersive VR experiences that transport users to virtual worlds, perfect for training, product demos, and brand storytelling.',
        image:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'Interactive Installation',
        description:
          'Build interactive AR/VR installations for events, retail spaces, and exhibitions that create memorable brand experiences.',
        image:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
      },
      {
        title: 'WebAR/VR Solutions',
        description:
          'Create browser-based AR/VR experiences that are accessible without apps, making immersive technology available to everyone.',
        image:
          'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=400&q=80',
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
            backgroundColor: isInverted ? '#000000' : '#ffffff',
            color: isInverted ? '#ffffff' : '#000000',
          }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <main className="min-h-screen snap-start flex flex-col">
          <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 py-4">
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
                        isInverted ? 'text-white' : 'text-black'
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
                          isInverted ? 'text-gray-300' : 'text-gray-600'
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
                              isInverted ? 'text-gray-300' : 'text-gray-600'
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
                          isInverted ? 'text-gray-200' : 'text-gray-700'
                        }`}
                      >
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
              {buttons.map((button) => (
                <button
                  key={button.id}
                  onClick={() => handleButtonClick(button.id)}
                  className={`w-full h-16 md:h-20 ${
                    [
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

