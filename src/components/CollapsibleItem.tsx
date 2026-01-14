'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface CollapsibleItemProps {
  title: string;
  description: string;
  isLast?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
  imageSrc?: string;
  theme?: 'light' | 'dark';
}

export function CollapsibleItem({ 
  title, 
  description, 
  isLast = false, 
  isOpen = false, 
  onToggle = () => {},
  imageSrc,
  theme = 'light',
}: CollapsibleItemProps) {
  const isDark = theme === 'dark';

  return (
    <div
      className={`py-4 ${
        !isLast ? (isDark ? 'border-b border-gray-800' : 'border-b border-gray-200') : ''
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left flex items-start focus:outline-none group"
        aria-expanded={isOpen}
      >
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="mr-3 mt-1 flex-shrink-0"
        >
          <svg
            className={`h-5 w-5 ${
              isDark
                ? 'text-red-400 group-hover:text-red-300'
                : 'text-red-500 group-hover:text-red-600'
            } transition-colors`}
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
        <h3
          className={`text-lg sm:text-xl md:text-2xl ${
            isDark
              ? 'text-gray-300 group-hover:text-white'
              : 'text-gray-600 group-hover:text-gray-800'
          } font-light transition-colors flex-1`}
        >
          {title}
        </h3>
        {imageSrc && (
          <motion.div
            key="thumbnail"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="ml-4 flex-shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border ${
                isDark ? 'border-gray-800' : 'border-gray-200'
              }`}
            >
              <Image
                src={imageSrc}
                alt={title}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-2">
              <p
                className={`${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                } text-lg sm:text-xl md:text-2xl leading-relaxed mb-4 font-light`}
              >
                {description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
