'use client';

import { X } from 'lucide-react';
import { VideoItem } from './VideoSlider';
import { motion, AnimatePresence } from 'framer-motion';
import { useCallback } from 'react';

export default function CaseStudyOverlay({
  item,
  onClose,
  origin
}: {
  item: VideoItem;
  onClose: () => void;
  origin?: { x: number; y: number; width: number; height: number };
}) {
  const handleClose = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setTimeout(() => onClose(), 200);
  }, [onClose]);

  return (
    <AnimatePresence>
      {true && (
        <motion.div
          className="fixed top-20 left-0 right-0 bottom-0 bg-white z-40 pb-8 px-8 overflow-y-auto"
          initial={{ opacity: 0, y: '100vh' }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }
          }}
          exit={{ 
            opacity: 0, 
            y: '100vh',
            transition: { 
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }
          }}
          style={{
            willChange: 'transform',
            WebkitOverflowScrolling: 'touch',
            overscrollBehavior: 'contain'
          }}
        >
          <div className="fixed top-4 right-4 md:top-8 md:right-8 z-[100]">
            <button 
              onClick={handleClose}
              className="w-12 h-12 flex items-center justify-center bg-white shadow-lg rounded-full"
              style={{
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent',
                userSelect: 'none'
              }}
            >
              <X className="w-6 h-6 pointer-events-none" />
            </button>
          </div>

          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold mb-8">{item.clientName}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Client</h3>
                  <p>{item.clientName}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Agency</h3>
                  <p>Black Mirage</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ask</h3>
                  <p>{item.ask || 'To be defined'}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Delivered</h3>
                  <p>{item.delivered || 'To be defined'}</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold mb-2">Value</h3>
                  <p>{item.value || 'To be defined'}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {item.src.endsWith('.mp4') ? (
                  <video 
                    src={item.src} 
                    controls 
                    className="w-full h-auto rounded-lg"
                  />
                ) : (
                  <img 
                    src={item.src} 
                    alt={item.clientName}
                    className="w-full h-auto rounded-lg"
                  />
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
