'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { usePathname } from 'next/navigation';

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
  const { isInverted, setIsInverted } = useTheme();
  const pathname = usePathname();
  
  // Always use black text on homepage and about-us page, white text on connect page, regardless of theme state
  const isHomepage = pathname === '/';
  const isConnectPage = pathname === '/connect';
  const isAboutUsPage = pathname === '/about-us';
  const shouldUseBlackText = isHomepage || isAboutUsPage ? true : (isConnectPage ? false : !isInverted);
  
  // Reset theme immediately when navigating to homepage, about-us page, or connect page
  useEffect(() => {
    if (isHomepage || isAboutUsPage) {
      setIsInverted(false);
    } else if (isConnectPage) {
      setIsInverted(true);
    }
  }, [isHomepage, isAboutUsPage, isConnectPage, setIsInverted]);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Close mobile menu when clicking on a link
  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const controlNavbar = () => {
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
    };

    window.addEventListener('scroll', controlNavbar, { passive: true });
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <motion.div
      className="w-full fixed top-0 left-0 z-50"
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <nav className="w-full">
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
            {[
              { href: '/research', label: 'Research' },
              { href: '/strategy', label: 'Strategy' },
              { href: '/design', label: 'Design' },
              { href: '/digital', label: 'Digital' },
              { href: '/audio-visual', label: 'Audio-Visual' },
              { href: '/about-us', label: 'About Us' },
              { href: '/connect', label: 'Connect' },
            ].map((navItem) => {
              const isActive = pathname === navItem.href;
              return (
                <motion.div
                  key={navItem.href}
                  animate={{
                    color: isActive 
                      ? '#dc2626' 
                      : (shouldUseBlackText ? '#000000' : '#ffffff'),
                  }}
                  whileHover={{
                    color: '#dc2626',
                  }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                  <Link 
                    href={navItem.href} 
                    className="text-base font-medium"
                    onClick={closeMenu}
                    style={{ color: 'inherit' }}
                  >
                    {navItem.label}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <motion.button 
              onClick={toggleMenu}
              className="p-2 rounded-full"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              animate={{
                color: shouldUseBlackText ? '#000000' : '#ffffff',
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              {isOpen ? <XIcon /> : <MenuIcon />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="sm:hidden overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.3, ease: [0.4, 0, 0.2, 1], delay: 0.1 }
              }
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: [0.4, 0, 1, 1] },
                opacity: { duration: 0.2, ease: [0.4, 0, 1, 1] }
              }
            }}
          >
          <motion.div 
            className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-sm shadow-lg"
            animate={{
              backgroundColor: isHomepage || isAboutUsPage ? 'rgba(255, 255, 255, 0.95)' : (isConnectPage ? 'rgba(0, 0, 0, 0.95)' : (isInverted ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)')),
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {[
              { href: '/research', label: 'Research' },
              { href: '/strategy', label: 'Strategy' },
              { href: '/design', label: 'Design' },
              { href: '/digital', label: 'Digital' },
              { href: '/audio-visual', label: 'Audio-Visual' },
              { href: '/about-us', label: 'About Us' },
              { href: '/connect', label: 'Connect' },
            ].map((navItem) => {
              const isActive = pathname === navItem.href;
              return (
                <motion.div
                  key={navItem.href}
                  animate={{
                    color: isActive 
                      ? '#dc2626' 
                      : (isHomepage || isAboutUsPage ? '#374151' : (isConnectPage ? '#ffffff' : (isInverted ? '#ffffff' : '#374151'))),
                  }}
                  whileHover={{
                    color: '#dc2626',
                  }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                  <Link 
                    href={navItem.href} 
                    className="block px-3 py-2 rounded-md text-base font-medium" 
                    style={{ color: 'inherit' }}
                    onClick={closeMenu}
                  >
                    {navItem.label}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
      </nav>
    </motion.div>
  );
}
