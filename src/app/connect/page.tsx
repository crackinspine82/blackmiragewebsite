'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '@/components/PageTransition';
import Navbar from '@/components/Navbar';

export default function ConnectPage() {
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

  return (
    <PageTransition>
      <main className="min-h-screen bg-black text-white flex flex-col pt-20">
        <Navbar />
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 py-16 md:py-24">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
              {/* Left Column - Contact Form */}
              <div className="md:col-span-1">
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                  className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-josefin tracking-normal mb-8"
                >
                  We'd love to hear you over a coffee.
                </motion.h2>
                
                <motion.form
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={6}
                      placeholder="Tell us about your project or just say hello..."
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors resize-none"
                    />
                  </div>
                  
                  {status === 'success' && (
                    <p className="text-green-400 text-sm">Message sent. We&apos;ll get back to you soon.</p>
                  )}
                  {status === 'error' && (
                    <p className="text-red-400 text-sm">{errorMessage}</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </motion.form>
              </div>

              {/* Middle Column - Contact Information */}
              <div className="md:col-span-1">
                <motion.h2
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-josefin tracking-normal mb-8"
                >
                  Get In Touch
                </motion.h2>
                
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="space-y-8"
                >
                  <div>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Sakharam Keer Marg<br />
                      Kasaravadi, Matunga West<br />
                      Mumbai - 400016<br />
                      Maharashtra, India
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Phone</h3>
                    <a 
                      href="tel:+919967153207" 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      +91 9967 153 207
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Email</h3>
                    <a 
                      href="mailto:aniket@blackmirage.org" 
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      aniket@blackmirage.org
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Map */}
              <div className="md:col-span-1">
                <motion.h2
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-josefin tracking-normal mb-8"
                >
                  Find Us
                </motion.h2>
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  className="w-full h-96 rounded-lg overflow-hidden"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1234567890123!2d72.85678901234567!3d19.02345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAxJzI0LjQiTiA3MsKwNTEnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}

