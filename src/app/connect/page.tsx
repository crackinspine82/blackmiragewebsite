'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { PageTransition } from '@/components/PageTransition';

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
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-8 py-16 md:py-24">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              {/* Left Column - Title and Contact Form */}
              <div>
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

              {/* Right Column - Get In Touch, Phone, Email, Map */}
              <div className="flex flex-col space-y-8">
                <motion.h2
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-josefin tracking-normal"
                >
                  Get In Touch
                </motion.h2>
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="flex flex-col gap-6"
                >
                  <a
                    href="tel:+919967153207"
                    className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                  >
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors">
                      <Phone className="w-5 h-5" strokeWidth={1.5} />
                    </span>
                    <span className="text-lg">+91 9967 153 207</span>
                  </a>
                  <a
                    href="mailto:aniket@blackmirage.in"
                    className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                  >
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors">
                      <Mail className="w-5 h-5" strokeWidth={1.5} />
                    </span>
                    <span className="text-lg">aniket@blackmirage.in</span>
                  </a>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="w-full flex-1 min-h-[280px] md:min-h-[320px] rounded-lg overflow-hidden"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.837102185149!2d72.83891877580548!3d19.02689845351103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ced1b35ee90f%3A0x2899092807c558b7!2sSakharam%20Keer%20Marg%2C%20Kasaravadi%2C%20Dadar%2C%20Mumbai%2C%20Maharashtra%20400016!5e0!3m2!1sen!2sin!4v1771388835435!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '280px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full min-h-[280px]"
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

