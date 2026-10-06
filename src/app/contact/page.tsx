'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/layout/PageHeader';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const FadeUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pb-24">
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with SJMSM"
        image="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-12 relative z-20">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Contact Info */}
            <div className="lg:col-span-5">
              <FadeUp>
                <h2 className="text-4xl md:text-5xl font-display font-black text-navy tracking-tight mb-6">
                  Let's start a <br /> <span className="text-gold italic font-light">conversation.</span>
                </h2>
                <p className="text-gray-500 font-medium leading-relaxed mb-12">
                  Have questions about admissions, our academic programs, or our facilities? Reach out to us, and our administration team will get back to you promptly.
                </p>
              </FadeUp>

              <div className="space-y-6">
                <FadeUp delay={0.1}>
                  <div className="flex items-start p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-gold hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-navy/5 text-navy rounded-full flex items-center justify-center shrink-0 mr-6">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Campus Location</h3>
                      <p className="font-bold text-navy leading-relaxed">
                        SJMSM's Arts and Commerce Sr. & Jr. College,<br />
                        Khapar, Tal. Akkalkuwa,<br />
                        Dist. Nandurbar, Maharashtra - 425419
                      </p>
                    </div>
                  </div>
                </FadeUp>

                <FadeUp delay={0.2}>
                  <div className="flex items-start p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-gold hover:shadow-md transition-all">
                    <div className="w-12 h-12 bg-navy/5 text-navy rounded-full flex items-center justify-center shrink-0 mr-6">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Office Contact</h3>
                      <p className="font-bold text-navy text-lg mb-1">+91 12345 67890</p>
                      <p className="font-bold text-navy text-lg">+91 09876 54321</p>
                    </div>
                  </div>
                </FadeUp>

                <FadeUp delay={0.3}>
                  <div className="flex items-start p-6 bg-navy text-white rounded-2xl shadow-xl">
                    <div className="w-12 h-12 bg-white/10 text-gold rounded-full flex items-center justify-center shrink-0 mr-6">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-1">Email Addresses</h3>
                      <p className="font-bold text-white mb-2">principal@sjmsmcollege.edu.in</p>
                      <p className="font-bold text-white">admin@sjmsmcollege.edu.in</p>
                    </div>
                  </div>
                </FadeUp>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <FadeUp delay={0.2}>
                <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-display font-bold text-navy mb-8">Send us a Message</h3>
                  
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                        <input 
                          type="text"
                          required
                          minLength={3}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                        <input 
                          type="email"
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Subject</label>
                      <input 
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                        placeholder="Admission Inquiry"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Your Message</label>
                      <textarea 
                        rows={5}
                        required
                        minLength={10}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none"
                        placeholder="How can we help you today?"
                      ></textarea>
                    </div>

                    <button type="submit" className="group w-full flex items-center justify-center gap-3 bg-navy text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-gold hover:text-navy transition-all">
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </FadeUp>
            </div>

          </div>

          {/* Map Embed */}
          <FadeUp delay={0.4}>
            <a 
              href="https://maps.google.com/?q=SJMSM+College+Khapar+Nandurbar"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-20 block rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-[400px] w-full bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-700 group cursor-pointer"
            >
              {/* Invisible overlay to prevent scroll hijacking */}
              <div className="absolute inset-0 z-10 bg-transparent flex items-center justify-center">
                <div className="bg-navy/90 text-white px-6 py-3 rounded-full font-bold tracking-widest text-sm uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                  Open in Google Maps
                </div>
              </div>
              
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118942.33878233777!2d73.86877864195155!3d21.611130635105374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bded3cb7f9b87df%3A0xeb64e9a4f6d4d62b!2sKhapar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716900000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 pointer-events-none"
              ></iframe>
            </a>
          </FadeUp>

        </div>
      </section>
    </main>
  );
}
