'use client';

import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CollapsibleItemProps {
  title: string;
  description: string;
  isLast?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
  imageSrc?: string;
}

export function CollapsibleItem({
  title,
  description,
  isLast = false,
  isOpen = false,
  onToggle = () => {},
  imageSrc,
}: CollapsibleItemProps) {
  return (
    <div className={`py-4 ${!isLast ? 'border-b border-gray-100' : ''}`}>
      <motion.button
        onClick={onToggle}
        className="w-full text-left focus:outline-none group"
        aria-expanded={isOpen}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          layout
          className={`flex w-full gap-4 ${isOpen ? 'flex-col' : 'items-start'}`}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="flex items-start gap-3 flex-1">
            <motion.span
              animate={{ 
                rotate: isOpen ? 45 : 0,
                color: isOpen ? '#ef4444' : '#9ca3af' // Red-500 when open, gray-400 when closed
              }}
              transition={{ 
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
                color: { duration: 0.2 }
              }}
              className="mt-1 flex-shrink-0"
            >
              <svg
                className="h-5 w-5 group-hover:text-red-500 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </motion.span>
            <motion.h3 
              className="text-lg sm:text-xl md:text-2xl font-light transition-colors"
              animate={{
                color: isOpen ? '#1f2937' : '#4b5563', // Gray-800 when open, gray-600 when closed
                fontWeight: isOpen ? 400 : 300
              }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h3>
          </div>

          {imageSrc && !isOpen && (
            <motion.div
              layout
              layoutId={`collapsible-image-${title}`}
              className="ml-auto w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm"
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <img
                src={imageSrc}
                alt={`${title} visual`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </motion.div>
      </motion.button>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ 
              opacity: 1, 
              height: 'auto',
              marginTop: '1rem',
              transition: {
                opacity: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                marginTop: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
              }
            }}
            exit={{ 
              opacity: 0, 
              height: 0,
              marginTop: 0,
              transition: {
                opacity: { duration: 0.2, ease: [0.4, 0, 1, 1] },
                height: { duration: 0.3, ease: [0.4, 0, 1, 1] },
                marginTop: { duration: 0.2, ease: [0.4, 0, 1, 1] }
              }
            }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-2 pl-8 sm:pl-9">
              <motion.div
                layout
                className="flex flex-col md:flex-row gap-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: 0.15,
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1]
                  }
                }}
                exit={{ 
                  opacity: 0,
                  y: -10,
                  transition: { 
                    duration: 0.2,
                    ease: [0.4, 0, 1, 1] 
                  }
                }}
              >
                <motion.p 
                  className="md:w-1/2 text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed font-light"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { 
                      delay: 0.2,
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1]
                    }
                  }}
                >
                  {description}
                </motion.p>
                {imageSrc && (
                  <motion.div
                    layout
                    layoutId={`collapsible-image-${title}`}
                    className="md:w-1/2 w-full rounded-xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm aspect-video"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: { 
                        delay: 0.25,
                        duration: 0.3,
                        ease: [0.4, 0, 0.2, 1]
                      }
                    }}
                  >
                    <img
                      src={imageSrc}
                      alt={`${title} visual expanded`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
