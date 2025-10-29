'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Close mobile menu when clicking on a link
  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // Only start hiding after 50px of scrolling
        if (currentScrollY > 50) {
          if (currentScrollY > lastScrollY) {
            // Scrolling down
            setIsVisible(false);
          } else {
            // Scrolling up
            setIsVisible(true);
          }
        } else {
          // At the top of the page
          setIsVisible(true);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar, { passive: true });
      return () => window.removeEventListener('scroll', controlNavbar);
    }
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      <motion.nav 
        className="w-full fixed top-0 left-0 z-50"
        initial={{ opacity: 1 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center font-montserrat">
              <div className="w-[180px]">
                <Image 
                  src="/logo.png" 
                  alt="Black Mirage Logo" 
                  width={180}
                  height={32}
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-8 font-roboto">
            <Link 
              href="/research" 
              className="text-black hover:text-gray-700 transition-colors duration-200 text-base font-medium"
              onClick={closeMenu}
            >
              Research
            </Link>
            <Link 
              href="/strategy" 
              className="text-black hover:text-gray-700 transition-colors duration-200 text-base font-medium"
              onClick={closeMenu}
            >
              Strategy
            </Link>
            <Link 
              href="/design" 
              className="text-black hover:text-gray-700 transition-colors duration-200 text-base font-medium"
              onClick={closeMenu}
            >
              Design
            </Link>
            <Link 
              href="/digital" 
              className="text-black hover:text-gray-700 transition-colors duration-200 text-base font-medium"
              onClick={closeMenu}
            >
              Digital
            </Link>
            <Link 
              href="/audio-visual" 
              className="text-black hover:text-gray-700 transition-colors duration-200 text-base font-medium"
              onClick={closeMenu}
            >
              Audio-Visual
            </Link>
            <Link 
              href="/crew" 
              className="text-black hover:text-gray-700 transition-colors duration-200 text-base font-medium"
              onClick={closeMenu}
            >
              Crew
            </Link>
            <Link 
              href="/connect" 
              className="text-black hover:text-gray-700 transition-colors duration-200 text-base font-medium"
              onClick={closeMenu}
            >
              Connect
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-full"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          className="sm:hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: 'auto',
            opacity: 1
          }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm shadow-lg">
            <Link href="/research" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50">
              Research
            </Link>
            <Link href="/strategy" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50">
              Strategy
            </Link>
            <Link href="/design" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50">
              Design
            </Link>
            <Link href="/digital" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50">
              Digital
            </Link>
            <Link href="/audio-visual" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50">
              Audio-Visual
            </Link>
            <Link href="/crew" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50">
              Crew
            </Link>
            <Link href="/connect" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50">
              Connect
            </Link>
          </div>
        </motion.div>
      )}
      </motion.nav>
    </AnimatePresence>
  );
}
