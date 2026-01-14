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

          <div className="container mx-auto max-w-7xl mt-16">
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-black font-josefin text-black mb-4">{item.clientName}</h1>
              <p className="text-xl text-gray-600">{item.serviceCategory}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                {/* Client & Agency Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 border-b border-gray-200">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Client</h3>
                    <p className="text-lg text-gray-900">{item.client || item.clientName}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Agency</h3>
                    <p className="text-lg text-gray-900">{item.agency || 'Not Specified'}</p>
                  </div>
                </div>

                {/* Strategic Challenge */}
                {item.strategicChallenge && (
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold font-josefin text-black mb-4">
                      The Strategic Challenge
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">{item.strategicChallenge}</p>
                  </div>
                )}

                {/* Solution & Services */}
                {item.solutionServices && (
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold font-josefin text-black mb-4">
                      The Solution & Services Delivered
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Offerings</h3>
                        <p className="text-lg text-gray-700 leading-relaxed">{item.solutionServices}</p>
                      </div>
                      {item.execution && (
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Execution</h3>
                          <p className="text-lg text-gray-700 leading-relaxed">{item.execution}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Business Impact */}
                {item.businessImpact && (
                  <div className="pt-8 border-t border-gray-200">
                    <h2 className="text-2xl md:text-3xl font-bold font-josefin text-black mb-4">
                      Business Impact
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">{item.businessImpact}</p>
                  </div>
                )}

                {/* Legacy fields for backward compatibility */}
                {!item.strategicChallenge && item.ask && (
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold font-josefin text-black mb-4">Ask</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">{item.ask}</p>
                  </div>
                )}
                {!item.solutionServices && item.delivered && (
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold font-josefin text-black mb-4">Delivered</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">{item.delivered}</p>
                  </div>
                )}
                {!item.businessImpact && item.value && (
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold font-josefin text-black mb-4">Value</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">{item.value}</p>
                  </div>
                )}
              </div>

              {/* Video/Media Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  {item.src.endsWith('.mp4') ? (
                    <video 
                      src={item.src} 
                      controls 
                      className="w-full h-auto rounded-lg shadow-lg"
                      playsInline
                    />
                  ) : (
                    <img 
                      src={item.src} 
                      alt={item.clientName}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
