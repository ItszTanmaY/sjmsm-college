'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/layout/PageHeader';
import { Image as ImageIcon, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const FadeUp = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

const SectionHeader = ({ title, icon, subtitle }: { title: string, icon: React.ReactNode, subtitle: string }) => (
  <div className="text-center mb-16">
    <div className="w-16 h-16 bg-navy text-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-navy/20">
      {icon}
    </div>
    <h2 className="text-4xl sm:text-5xl font-display font-black text-navy mb-4 tracking-tight">
      {title}
    </h2>
    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
      {subtitle}
    </p>
  </div>
);

import galleryData from '@/data/gallery.json';
import newsData from '@/data/news.json';

const imageGallery = galleryData.map(g => g.src);

const mediaGallery = newsData.map(n => ({
  title: n.title,
  date: n.date,
  image: n.image,
}));

export default function GalleryPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-background pb-24">
      <PageHeader 
        title="Our Gallery" 
        subtitle="Memories, Media, and Milestones"
        image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="flex flex-col space-y-0 pb-0">
        
        {/* Image Gallery */}
        <section id="image" className="relative scroll-mt-32 w-full py-24 bg-white overflow-hidden">
          {/* Dotted Background & Massive Watermark */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,rgba(0,0,0,1)_2px,rgba(0,0,0,0)_2px)] bg-[size:24px_24px] pointer-events-none" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-[18vw] opacity-[0.02] text-navy tracking-tighter select-none pointer-events-none whitespace-nowrap z-0">
            MEMORIES
          </div>
          <div className="absolute bottom-10 -right-20 font-display font-black text-[12vw] opacity-[0.03] text-navy tracking-tighter select-none pointer-events-none whitespace-nowrap z-0 rotate-[-90deg] origin-bottom-right">
            GALLERY
          </div>

          {/* Doodles (Gold & Navy Tones) */}
          <svg className="absolute top-20 right-10 w-32 h-32 text-gold/20 pointer-events-none" viewBox="0 0 100 100" fill="none">
            <path d="M10,50 Q40,10 90,50 T10,90" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 8" />
            <circle cx="20" cy="20" r="4" fill="currentColor" />
            <circle cx="80" cy="80" r="4" fill="currentColor" />
          </svg>
          <svg className="absolute bottom-20 left-10 w-24 h-24 text-navy/10 pointer-events-none rotate-45" viewBox="0 0 100 100" fill="none">
            <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="3" strokeDasharray="10 5" />
            <line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="2" />
          </svg>
          <svg className="absolute top-[40%] left-10 w-40 h-40 text-gold/10 pointer-events-none -rotate-12" viewBox="0 0 100 100" fill="none">
            <polygon points="50,10 90,90 10,90" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
            <circle cx="50" cy="65" r="10" stroke="currentColor" strokeWidth="2" />
          </svg>
          <svg className="absolute bottom-[30%] right-10 w-48 h-48 text-navy/5 pointer-events-none" viewBox="0 0 100 100" fill="none">
            <path d="M10,20 Q50,90 90,20" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            <path d="M20,10 Q50,80 80,10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gold/10 rounded-full blur-[80px] pointer-events-none -z-0" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-navy/5 rounded-full blur-[100px] pointer-events-none -z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeUp>
            <SectionHeader 
              title="Image Gallery" 
              subtitle="Explore beautiful moments captured around our vibrant college campus during various academic and cultural events."
              icon={<ImageIcon className="w-8 h-8" />}
            />
            
            {/* Masonry-style Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {imageGallery.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 ${
                    idx === 0 || idx === 3 ? 'md:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-square'
                  }`}
                >
                  <Image 
                    src={img} 
                    alt={`Gallery Image ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium uppercase tracking-wider text-sm">
                      View Full Size
                    </span>
                  </div>
                </div>
              ))}
              
              {/* Text Block filling the empty column */}
              <div className="hidden lg:flex flex-col justify-center items-center text-center p-8 bg-navy/5 rounded-2xl border border-navy/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-[40px] transition-transform duration-700 group-hover:scale-150" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-navy/10 rounded-full blur-[40px] transition-transform duration-700 group-hover:scale-150" />
                <h3 className="text-3xl font-display font-black text-navy mb-4 tracking-tight relative z-10">
                  More Memories
                </h3>
                <p className="text-gray-500 font-medium relative z-10">
                  Every moment on campus is a story waiting to be told. Join us and make your own memories.
                </p>
                <div className="mt-8 w-12 h-1 bg-gold rounded-full relative z-10" />
              </div>
            </div>
          </FadeUp>
          </div>
        </section>

        {/* Media Gallery (Carousel with Dots Pattern) */}
        <section id="media" className="relative scroll-mt-32 bg-navy py-24 overflow-hidden">
          {/* Dotted Background Pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_2px,rgba(255,255,255,0)_2px)] bg-[size:32px_32px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-transparent to-navy pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeUp>
              <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div className="text-left max-w-2xl">
                  <div className="w-16 h-16 bg-white/10 text-gold rounded-full flex items-center justify-center mb-6 shadow-lg border border-white/20">
                    <FileText className="w-8 h-8" />
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-display font-black text-white mb-4 tracking-tight">
                    Media Coverage
                  </h2>
                  <p className="text-xl text-white/70">
                    Highlights from press releases, newspaper features, and official college announcements.
                  </p>
                </div>

                <div className="flex gap-4 mt-8 md:mt-0">
                  <button 
                    onClick={scrollLeft}
                    className="w-14 h-14 rounded-full bg-white/10 hover:bg-gold hover:text-navy text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 border border-white/20 hover:border-gold"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={scrollRight}
                    className="w-14 h-14 rounded-full bg-white/10 hover:bg-gold hover:text-navy text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 border border-white/20 hover:border-gold"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              {/* Carousel Container */}
              <div 
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 hide-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {mediaGallery.map((media, idx) => (
                  <div 
                    key={idx} 
                    className="group cursor-pointer snap-start shrink-0 w-[85vw] sm:w-[350px] bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:-translate-y-2 transition-transform duration-300"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image 
                        src={media.image}
                        alt={media.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-8">
                      <div className="text-gold font-bold text-xs mb-3 tracking-widest uppercase bg-gold/10 inline-block px-3 py-1 rounded-full">
                        {media.date}
                      </div>
                      <h3 className="text-xl font-bold text-navy leading-snug group-hover:text-gold transition-colors">
                        {media.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
          
          {/* Custom CSS to hide scrollbar for webkit */}
          <style dangerouslySetInnerHTML={{__html: `
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}} />
        </section>

      </div>
    </main>
  );
}
