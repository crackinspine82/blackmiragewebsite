'use client';

import { useEffect, useRef, useState } from 'react';
import CaseStudyOverlay from './CaseStudyOverlay';
import { AnimatePresence, motion } from 'framer-motion';

export interface VideoItem {
  id: string;
  src: string;
  clientName: string;
  serviceCategory: string;
  ask?: string;
  delivered?: string;
  value?: string;
}

const VideoSlider = ({ items = [] }: { items?: VideoItem[] }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedItem, setSelectedItem] = useState<VideoItem | null>(null);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    
    if (!items?.length || !sliderRef.current) return;
    
    let animationId: number;
    let lastTimestamp = 0;
    let currentX = 0;
    const speed = 1.2; // Reduced from 2 for better visibility
    const itemWidth = sliderRef.current.firstElementChild?.clientWidth || 300;
    const gap = 48;
    const singleLoopWidth = (itemWidth + gap) * items.length;
    
    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      if (!sliderRef.current) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      
      currentX += (speed * deltaTime) / 16;
      
      // Reset position when scrolled two full widths (for duplicated items)
      if (currentX >= singleLoopWidth * 2) {
        currentX = 0;
      }
      
      sliderRef.current.style.transform = `translateX(-${currentX}px)`;
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [items?.length]);

  const handleItemClick = (item: VideoItem, e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setClickPosition({
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height
    });
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseOverlay = () => {
    setSelectedItem(null);
    document.body.style.overflow = '';
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={isMounted ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full max-w-screen overflow-x-hidden"
    >
      <div 
        ref={containerRef}
        className="w-full h-full"
      >
        <div className="w-full h-full">
          <div className="w-max flex py-4">
            <div 
              ref={sliderRef}
              className="flex gap-12 px-12"
            >
              {[...items, ...items, ...items].map((item, index) => {
                console.log('Rendering video item:', item);
                return (
                  <div 
                    key={`${item.id}-${index}`}
                    className="flex flex-col gap-2 group"
                    style={{ 
                      width: 'clamp(180px, 18vw, 220px)',
                    }}
                    onClick={(e) => handleItemClick(item, e)}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105" 
                         style={{ 
                           aspectRatio: '3/2',
                           height: 'auto'
                         }}>
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover bg-black"
                        onError={(e) => console.error('Video loading error:', e.currentTarget.error)}
                        onCanPlay={(e) => console.log('Video can play:', item.src)}
                        onStalled={(e) => console.warn('Video stalled:', item.src)}
                      >
                        <source src={item.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="text-left px-2">
                      <h3 className="font-semibold text-gray-900 text-xl md:text-2xl">{item.clientName}</h3>
                      <p className="text-gray-600 text-base md:text-lg">{item.serviceCategory}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {selectedItem && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 1,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="fixed inset-0 pt-20 z-40 bg-white"
          >
            <CaseStudyOverlay
              item={selectedItem}
              onClose={handleCloseOverlay}
            />
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default VideoSlider;
