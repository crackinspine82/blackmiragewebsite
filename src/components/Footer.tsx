'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="relative">
      {/* Background overlay that fades to black */}
      <motion.div 
        className="fixed inset-0 bg-black pointer-events-none z-10"
        style={{ opacity: bgOpacity }}
      />
      
      {/* Header fade out effect */}
      <motion.div 
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
        style={{ opacity: headerOpacity }}
      >
        <div className="h-24 bg-transparent" />
      </motion.div>
      
      {/* Footer content */}
      <footer 
        ref={containerRef}
        className="relative min-h-screen w-full flex items-center justify-center bg-black text-white z-10 pt-24"
      >
        <motion.div 
          className="container mx-auto px-4 py-16 text-center"
          style={{ opacity, y }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12">
            Ready to transform your digital presence? Get in touch with us today.
          </p>
          <button 
            className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors"
            onClick={() => {/* Add contact action */}}
          >
            Contact Us
          </button>
          
          <div className="mt-24 pt-8 border-t border-gray-800">
            <p className="text-gray-400">© {new Date().getFullYear()} Black Mirage. All rights reserved.</p>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
