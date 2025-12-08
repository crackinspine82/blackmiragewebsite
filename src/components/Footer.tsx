'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

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

  const [isMobile, setIsMobile] = useState(true); // Default to mobile to ensure visibility

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    if (typeof window !== 'undefined') {
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setEmailError('');
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    try {
      // TODO: Replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setEmail('');
      setMessage('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      {/* Background overlay that fades to black - Disabled on mobile */}
      {!isMobile && (
        <motion.div 
          className="fixed inset-0 bg-black pointer-events-none z-10"
          style={{ opacity: bgOpacity }}
        />
      )}
      
      {/* Header fade out effect - Disabled on mobile */}
      {!isMobile && (
        <motion.div 
          className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
          style={{ opacity: headerOpacity }}
        >
          <div className="h-24 bg-transparent" />
        </motion.div>
      )}
      
      {/* Footer content */}
      <footer 
        ref={containerRef}
        className="relative min-h-screen w-full flex items-center justify-center bg-black text-white z-10 pt-20 md:pt-24"
        style={{ overflow: 'hidden', backgroundColor: '#000000' }}
      >
        {/* Content Group - Vertically Centered */}
        <div 
          className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 relative z-10 flex flex-col items-center justify-center w-full"
          style={{ 
            minHeight: '100vh',
            opacity: isMobile ? 1 : undefined,
            transform: isMobile ? 'translateY(0)' : undefined,
          }}
        >
          <motion.div
            className="w-full flex flex-col items-center justify-center"
            style={{ 
              opacity: isMobile ? 1 : opacity, 
              y: isMobile ? 0 : y,
            }}
          >
          <div className="w-full max-w-7xl flex flex-col items-center gap-6 md:gap-8">
            {/* Large BLACK MIRAGE text - On top */}
            <motion.h1 
              className="font-black font-josefin tracking-tight whitespace-nowrap select-none pointer-events-none"
              style={{
                color: 'rgba(255, 255, 255, 0.2)',
                fontSize: 'clamp(3rem, 8vw, 12rem)',
                lineHeight: '1',
                maxWidth: '95vw',
                transform: 'scale(1)',
                transformOrigin: 'center',
              }}
              animate={{ 
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: [0.4, 0, 0.6, 1]
              }}
            >
              BLACK MIRAGE
            </motion.h1>

            {/* Title and Form Row - 50/50 Split */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 w-full items-center">
              {/* Form Title - Left Half */}
              <motion.div
                className="w-full md:w-1/2 flex items-center justify-center md:justify-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black font-josefin tracking-normal text-white">
                  We'd love to hear you over a coffee.
                </h2>
              </motion.div>

              {/* Contact Form - Right Half */}
              <div className="w-full md:w-1/2 flex items-center">
                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 w-full">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-300 mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError('');
                  }}
                  className="w-full px-3 py-2 md:px-4 md:py-2.5 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors text-sm md:text-base"
                  placeholder="your.email@example.com"
                  required
                />
                {emailError && (
                  <p className="mt-1.5 text-xs text-red-400">{emailError}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-300 mb-1.5">
                  Message <span className="text-gray-500 text-xs">(Optional)</span>
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 md:px-4 md:py-2.5 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors resize-none text-sm md:text-base"
                  placeholder="Tell us about your project or just say hello..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-2.5 md:px-8 md:py-3 bg-white text-black rounded-full font-semibold text-sm md:text-base hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-josefin"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>

              {/* Success Message */}
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-900/30 border border-green-700 rounded-lg text-green-300"
                >
                  Thank you! We'll get back to you soon.
                </motion.div>
              )}
                </form>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-gray-800 text-center">
              <p className="text-gray-400 text-xs md:text-sm">
                © {new Date().getFullYear()} Black Mirage. All rights reserved.
              </p>
            </div>
          </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
