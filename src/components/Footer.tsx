'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
        return;
      }
      setStatus('success');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
      setErrorMessage('Failed to send. Please try again.');
    }
  };
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
        className="relative min-h-screen w-full flex items-center justify-center bg-black text-white z-10 pt-20 md:pt-24"
        style={{ overflow: 'hidden', backgroundColor: '#000000' }}
      >
        <motion.div 
          className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 relative z-10 flex flex-col items-center justify-center w-full"
          style={{ minHeight: '100vh', opacity, y }}
        >
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full max-w-7xl flex flex-col items-center gap-6 md:gap-8">
              {/* Large BLACK MIRAGE heading */}
              <h1 
                className="font-black font-josefin tracking-tight whitespace-nowrap select-none pointer-events-none"
                style={{
                  color: 'rgba(255, 255, 255, 0.2)',
                  fontSize: 'clamp(3rem, 8vw, 12rem)',
                  lineHeight: 1,
                  maxWidth: '95vw',
                  transform: 'scale(1)',
                  transformOrigin: 'center'
                }}
              >
                BLACK MIRAGE
              </h1>

              {/* Main content: heading and form */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 w-full items-center">
                {/* Left Column - Heading */}
                <motion.div 
                  className="w-full md:w-1/2 flex items-center justify-center md:justify-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black font-josefin tracking-normal text-white">
                    We'd love to hear you over a coffee.
                  </h2>
                </motion.div>

                {/* Right Column - Form */}
                <div className="w-full md:w-1/2 flex items-center">
                  <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 w-full">
                    <div>
                      <label htmlFor="footer-email" className="block text-lg sm:text-xl md:text-2xl font-light text-gray-300 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="footer-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 md:px-4 md:py-2.5 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors text-lg sm:text-xl md:text-2xl font-light"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="footer-message" className="block text-lg sm:text-xl md:text-2xl font-light text-gray-300 mb-1.5">
                        Message <span className="text-gray-500 text-base sm:text-lg md:text-xl">(Optional)</span>
                      </label>
                      <textarea
                        id="footer-message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-3 py-2 md:px-4 md:py-2.5 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors resize-none text-lg sm:text-xl md:text-2xl font-light"
                        placeholder="Tell us about your project or just say hello..."
                      />
                    </div>
                    {status === 'success' && (
                      <p className="text-green-400 text-sm">Message sent. We&apos;ll get back to you soon.</p>
                    )}
                    {status === 'error' && (
                      <p className="text-red-400 text-sm">{errorMessage}</p>
                    )}
                    <div className="pt-2">
                      <motion.button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full px-6 py-2.5 md:px-8 md:py-3 bg-white text-black font-light text-lg sm:text-xl md:text-2xl font-josefin disabled:opacity-50 disabled:cursor-not-allowed"
                        initial={{ backgroundColor: '#ffffff', color: '#000000' }}
                        whileHover={{ 
                          scale: 1.02,
                          backgroundColor: '#000000',
                          color: '#ffffff'
                        }}
                        whileTap={{ 
                          scale: 0.98
                        }}
                        transition={{ 
                          duration: 0.3, 
                          ease: 'easeInOut' 
                        }}
                      >
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                      </motion.button>
                    </div>
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
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
