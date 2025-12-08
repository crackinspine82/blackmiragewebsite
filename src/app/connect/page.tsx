'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '@/components/PageTransition';

export default function ConnectPage() {
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

    setIsSubmitting(true);
    setEmailError('');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setSubmitSuccess(true);
      setEmail('');
      setMessage('');
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Google Maps embed URL for Sakharam Keer Marg, Kasaravadi, Matunga West, Mumbai
  const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1234567890!2d72.8500000!3d19.0300000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce8b0c0b0b0b%3A0x0!2sSakharam%20Keer%20Marg%2C%20Kasaravadi%2C%20Matunga%20West%2C%20Mumbai%2C%20Maharashtra%20400016!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin';

  return (
    <PageTransition>
      <main className="min-h-screen bg-black text-white pt-20 md:pt-24">
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
            {/* Left Half: Form Title and Form */}
            <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
              {/* Form Title */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black font-josefin tracking-normal text-white">
                  We'd love to hear you over a coffee.
                </h2>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 w-full">
                  {/* Email Field */}
                  <div>
                    <label htmlFor="connect-email" className="block text-xs md:text-sm font-medium text-gray-300 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="connect-email"
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
                    <label htmlFor="connect-message" className="block text-xs md:text-sm font-medium text-gray-300 mb-1.5">
                      Message <span className="text-gray-500 text-xs">(Optional)</span>
                    </label>
                    <textarea
                      id="connect-message"
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
              </motion.div>
            </div>

            {/* Right Half: Contact Info and Map - Horizontal Split */}
            <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-6 md:gap-8">
              {/* First Section: Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full md:w-1/2 space-y-4"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-josefin text-white mb-4">
                  Get In Touch
                </h3>
                
                <div className="space-y-4">
                  {/* Office Address */}
                  <div>
                    <h4 className="text-sm md:text-base font-medium text-gray-400 mb-2">Office Address</h4>
                    <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed">
                      Sakharam Keer Marg<br />
                      Kasaravadi, Matunga West<br />
                      Mumbai - 400016<br />
                      Maharashtra, India
                    </p>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <h4 className="text-sm md:text-base font-medium text-gray-400 mb-2">Phone</h4>
                    <a 
                      href="tel:+919967153207" 
                      className="text-base md:text-lg text-gray-300 font-light hover:text-white transition-colors"
                    >
                      +91 9967 153 207
                    </a>
                  </div>

                  {/* Email Address */}
                  <div>
                    <h4 className="text-sm md:text-base font-medium text-gray-400 mb-2">Email</h4>
                    <a 
                      href="mailto:aniket@blackmirage.org" 
                      className="text-base md:text-lg text-gray-300 font-light hover:text-white transition-colors"
                    >
                      aniket@blackmirage.org
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Second Section: Google Map */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-full md:w-1/2"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-josefin text-white mb-4">
                  Find Us
                </h3>
                <div className="w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden border border-gray-700">
                  <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Copyright Footer */}
          <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-xs md:text-sm">
              © {new Date().getFullYear()} Black Mirage. All rights reserved.
            </p>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}

