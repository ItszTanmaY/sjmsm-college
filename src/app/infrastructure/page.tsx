'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/layout/PageHeader';
import { BookOpen, Trophy, Coffee, Monitor, Building, ArrowRight, MapPin } from 'lucide-react';
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

const facilities = [
  {
    id: 'library',
    title: 'Central Library',
    watermark: 'LIBRARY',
    icon: <BookOpen className="w-8 h-8" />,
    description: 'Our central library is the heart of academic pursuit on campus. It houses an extensive collection of over 50,000 books, reference materials, journals, and digital resources. With spacious reading rooms and quiet zones, it provides the perfect environment for deep study and research.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop',
    stats: ['50,000+ Books', 'Digital Access', 'Quiet Zones'],
    bgTheme: 'white'
  },
  {
    id: 'sports',
    title: 'Sports Complex',
    watermark: 'SPORTS',
    icon: <Trophy className="w-8 h-8" />,
    description: 'Physical education is integral to our curriculum. We boast a massive outdoor sports ground for cricket, football, and athletics, alongside indoor facilities for table tennis, chess, and badminton. Our students regularly compete and win at the university and state levels.',
    image: '/images/gym-v2.jpeg',
    stats: ['Outdoor Ground', 'Indoor Stadium', 'Gymnasium'],
    bgTheme: 'navy-mesh'
  },
  {
    id: 'canteen',
    title: 'College Canteen',
    watermark: 'CANTEEN',
    icon: <Coffee className="w-8 h-8" />,
    description: 'The college canteen is the ultimate social hub for students. It serves hygienic, nutritious, and affordable meals, snacks, and beverages. It is the perfect place to unwind, discuss academics, and build lifelong friendships over a cup of tea.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop',
    stats: ['Hygienic Food', 'Affordable', 'Social Hub'],
    bgTheme: 'pastel-rose'
  },
  {
    id: 'computer-lab',
    title: 'Advanced Computer Lab',
    watermark: 'LABS',
    icon: <Monitor className="w-8 h-8" />,
    description: 'Equipped with the latest hardware and high-speed internet, our computer labs ensure students stay ahead in the digital age. From programming courses to digital research, the labs are fully air-conditioned and supervised by expert technicians.',
    image: '/images/Computerlab-v2.jpeg',
    stats: ['High-Speed WiFi', 'Latest Software', 'Air-Conditioned'],
    bgTheme: 'pastel-blue'
  },
  {
    id: 'administrative',
    title: 'Administrative Block',
    watermark: 'ADMIN',
    icon: <Building className="w-8 h-8" />,
    description: 'The highly efficient administrative block manages all student services, from admissions to examinations. The staff is dedicated to ensuring a seamless, hassle-free experience for students regarding scholarships, document verification, and academic support.',
    image: '/images/admin-v2.jpeg',
    stats: ['Student Support', 'Admissions', 'Scholarships'],
    bgTheme: 'navy-mesh'
  },
  {
    id: 'other-facilities',
    title: 'Other Facilities',
    watermark: 'FACILITY',
    icon: <ArrowRight className="w-8 h-8" />,
    description: 'Beyond academics, we provide safe drinking water (RO plants), high-speed campus Wi-Fi, 24/7 CCTV security, well-maintained washrooms, and a dedicated parking area to ensure a safe and comfortable environment for all students and staff.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
    stats: ['RO Water', 'CCTV Security', 'Parking'],
    bgTheme: 'pastel-mint'
  },
  {
    id: 'campus',
    title: 'College Campus',
    watermark: 'CAMPUS',
    icon: <MapPin className="w-8 h-8" />,
    description: 'Spread over acres of lush green land, our eco-friendly campus provides a serene atmosphere conducive to learning. We take pride in our botanical gardens, solar-powered lighting, and expansive open spaces that inspire creativity and tranquility.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop',
    stats: ['Eco-Friendly', 'Greenery', 'Solar Powered'],
    bgTheme: 'white' // Reverted to white per user request
  }
];

// Helper to render school-specific SVG doodles based on section ID
const renderDoodles = (id: string, isDark: boolean) => {
  const color = isDark ? 'text-white/10' : 'text-navy/5';
  
  switch (id) {
    case 'library':
      return (
        <>
          {/* Abstract Book/Pages */}
          <svg className={`absolute top-20 right-10 w-32 h-32 ${color} pointer-events-none animate-pulse`} viewBox="0 0 100 100" fill="none">
            <path d="M20,20 L80,20 L80,80 L20,80 Z" stroke="currentColor" strokeWidth="4" />
            <path d="M50,20 L50,80" stroke="currentColor" strokeWidth="4" />
            <path d="M20,80 Q50,90 80,80" stroke="currentColor" strokeWidth="4" />
          </svg>
          {/* Glasses */}
          <svg className={`absolute bottom-20 left-10 w-24 h-24 ${color} pointer-events-none -rotate-12 animate-[bounce_4s_infinite]`} viewBox="0 0 100 100" fill="none">
            <circle cx="30" cy="50" r="15" stroke="currentColor" strokeWidth="4" />
            <circle cx="70" cy="50" r="15" stroke="currentColor" strokeWidth="4" />
            <path d="M45,50 Q50,40 55,50" stroke="currentColor" strokeWidth="4" />
            <line x1="15" y1="50" x2="0" y2="40" stroke="currentColor" strokeWidth="4" />
            <line x1="85" y1="50" x2="100" y2="40" stroke="currentColor" strokeWidth="4" />
          </svg>
        </>
      );
    case 'sports':
      return (
        <>
          {/* Basketball / Volleyball */}
          <svg className={`absolute top-32 left-10 w-24 h-24 ${color} pointer-events-none animate-[spin_10s_linear_infinite]`} viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="4" />
            <path d="M50,10 L50,90" stroke="currentColor" strokeWidth="4" />
            <path d="M10,50 L90,50" stroke="currentColor" strokeWidth="4" />
            <path d="M20,20 Q50,50 20,80" stroke="currentColor" strokeWidth="4" />
            <path d="M80,20 Q50,50 80,80" stroke="currentColor" strokeWidth="4" />
          </svg>
          {/* Motion lines */}
          <svg className={`absolute bottom-32 right-10 w-32 h-32 ${color} pointer-events-none rotate-45 animate-pulse`} viewBox="0 0 100 100" fill="none">
            <line x1="10" y1="20" x2="90" y2="20" stroke="currentColor" strokeWidth="6" strokeDasharray="10 10" strokeLinecap="round" />
            <line x1="30" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="6" strokeDasharray="15 10" strokeLinecap="round" />
            <line x1="10" y1="80" x2="70" y2="80" stroke="currentColor" strokeWidth="6" strokeDasharray="5 10" strokeLinecap="round" />
          </svg>
        </>
      );
    case 'canteen':
      return (
        <>
          {/* Coffee cup */}
          <svg className={`absolute top-1/4 right-20 w-24 h-24 ${color} pointer-events-none animate-bounce`} viewBox="0 0 100 100" fill="none">
            <path d="M20,30 L80,30 L70,80 L30,80 Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
            <path d="M80,40 Q95,40 95,55 Q95,70 75,70" stroke="currentColor" strokeWidth="4" />
            <path d="M40,20 Q45,10 50,20 T60,20" stroke="currentColor" strokeWidth="3" className="animate-pulse" />
          </svg>
          {/* Fork and Knife */}
          <svg className={`absolute bottom-1/4 left-10 w-32 h-32 ${color} pointer-events-none rotate-12`} viewBox="0 0 100 100" fill="none">
            <path d="M30,10 L30,50 M20,10 L20,30 Q30,40 40,30 L40,10" stroke="currentColor" strokeWidth="3" />
            <path d="M70,10 L70,90 M70,10 Q85,10 85,50 L70,50" stroke="currentColor" strokeWidth="3" />
            <line x1="30" y1="50" x2="30" y2="90" stroke="currentColor" strokeWidth="4" />
          </svg>
        </>
      );
    case 'computer-lab':
      return (
        <>
          {/* Code brackets */}
          <svg className={`absolute top-32 right-12 w-32 h-32 ${color} pointer-events-none animate-pulse`} viewBox="0 0 100 100" fill="none">
            <path d="M30,20 L10,50 L30,80" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M70,20 L90,50 L70,80" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M60,10 L40,90" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
          {/* Mouse pointer */}
          <svg className={`absolute bottom-20 left-20 w-24 h-24 ${color} pointer-events-none -rotate-12 animate-bounce`} viewBox="0 0 100 100" fill="none">
            <path d="M20,10 L80,40 L50,50 L40,80 Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
            <line x1="50" y1="50" x2="80" y2="80" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </>
      );
    case 'administrative':
      return (
        <>
          {/* Building/Columns */}
          <svg className={`absolute top-1/4 left-10 w-32 h-32 ${color} pointer-events-none opacity-50`} viewBox="0 0 100 100" fill="none">
            <polygon points="10,40 50,10 90,40" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
            <rect x="20" y="40" width="10" height="50" stroke="currentColor" strokeWidth="4" />
            <rect x="45" y="40" width="10" height="50" stroke="currentColor" strokeWidth="4" />
            <rect x="70" y="40" width="10" height="50" stroke="currentColor" strokeWidth="4" />
            <line x1="10" y1="90" x2="90" y2="90" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
          {/* Checkmarks / Paper */}
          <svg className={`absolute bottom-1/4 right-20 w-24 h-24 ${color} pointer-events-none rotate-12 animate-pulse`} viewBox="0 0 100 100" fill="none">
            <rect x="20" y="10" width="60" height="80" stroke="currentColor" strokeWidth="4" />
            <path d="M30,40 L45,55 L70,25" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="30" y1="70" x2="70" y2="70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </>
      );
    case 'other-facilities':
    case 'campus':
    default:
      return (
        <>
          {/* Leaf / Environment */}
          <svg className={`absolute top-20 right-20 w-24 h-24 ${color} pointer-events-none animate-[spin_20s_linear_infinite]`} viewBox="0 0 100 100" fill="none">
            <path d="M50,90 Q10,50 50,10 Q90,50 50,90" stroke="currentColor" strokeWidth="4" />
            <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="2" />
            <line x1="50" y1="50" x2="30" y2="30" stroke="currentColor" strokeWidth="2" />
            <line x1="50" y1="70" x2="70" y2="50" stroke="currentColor" strokeWidth="2" />
          </svg>
          {/* Sun / Stars */}
          <svg className={`absolute bottom-20 left-10 w-32 h-32 ${color} pointer-events-none animate-[spin_15s_linear_infinite_reverse]`} viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="4" />
            <line x1="50" y1="10" x2="50" y2="25" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            <line x1="50" y1="75" x2="50" y2="90" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            <line x1="10" y1="50" x2="25" y2="50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            <line x1="75" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            <line x1="22" y1="22" x2="32" y2="32" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            <line x1="78" y1="78" x2="68" y2="68" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            <line x1="22" y1="78" x2="32" y2="68" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            <line x1="78" y1="22" x2="68" y2="32" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </>
      );
  }
};

export default function InfrastructurePage() {
  return (
    <main className="min-h-screen bg-background pb-0">
      <PageHeader 
        title="Infrastructure" 
        subtitle="World-Class Facilities for Holistic Development"
        image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
      />

      <div className="flex flex-col">
        {facilities.map((facility, index) => {
          const isEven = index % 2 === 0;
          
          let bgThemeClass = 'bg-white text-gray-800 relative overflow-hidden';
          let isDark = false;
          
          if (facility.bgTheme === 'navy-mesh') {
            bgThemeClass = 'bg-navy text-white relative overflow-hidden';
            isDark = true;
          } else if (facility.bgTheme === 'pastel-rose') {
            bgThemeClass = 'bg-gradient-to-br from-rose-50 via-white to-orange-50 text-gray-800 relative overflow-hidden';
          } else if (facility.bgTheme === 'pastel-blue') {
            bgThemeClass = 'bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-800 relative overflow-hidden';
          } else if (facility.bgTheme === 'pastel-mint') {
            bgThemeClass = 'bg-gradient-to-br from-teal-50 via-white to-emerald-50 text-gray-800 relative overflow-hidden';
          }

          return (
            <section key={facility.id} id={facility.id} className={`scroll-mt-0 py-24 sm:py-32 relative ${bgThemeClass}`}>
              
              {/* Massive Watermark OVER everything (z-30) but pointer-events-none and mix-blend-overlay to make it visible over images without blocking */}
              <div className={`absolute top-0 right-0 p-8 font-display font-black text-[12vw] leading-none opacity-20 tracking-tighter select-none pointer-events-none whitespace-nowrap z-30 mix-blend-overlay ${isDark ? 'text-white' : 'text-navy'}`}>
                {facility.watermark}
              </div>

              {/* Subtle Patterns & Glowing Orbs */}
              {isDark ? (
                <>
                  <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
                  <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
                </>
              ) : (
                <>
                  {facility.bgTheme === 'white' && (
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-gray-50/50 to-white pointer-events-none" />
                  )}
                  {/* Grid for all light/white sections */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,rgba(0,0,0,1)_2px,rgba(0,0,0,0)_2px)] bg-[size:24px_24px] pointer-events-none" />
                  
                  {/* Floating abstract glowing blobs for light pastel themes */}
                  {facility.bgTheme !== 'white' && (
                    <>
                      <div className="absolute top-10 left-10 w-64 h-64 bg-white/40 rounded-full blur-[60px] pointer-events-none animate-pulse" style={{ animationDuration: '5s' }} />
                      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/40 rounded-full blur-[80px] pointer-events-none animate-pulse" style={{ animationDuration: '7s' }} />
                    </>
                  )}
                </>
              )}

              {/* Render Section-Specific Doodles */}
              {renderDoodles(facility.id, isDark)}

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-16">
                <FadeUp>
                  <div className={`flex flex-col gap-12 lg:gap-20 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative group z-10">
                      <div className={`absolute inset-0 translate-x-4 translate-y-4 rounded-3xl -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 ${
                        isDark ? 'bg-gold/20' : 'bg-navy/10'
                      }`} />
                      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                        <Image 
                          src={facility.image} 
                          alt={facility.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 space-y-8 relative z-20">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner ${
                        isDark ? 'bg-white/10 text-gold backdrop-blur-md border border-white/10' : 
                        'bg-white/80 text-navy backdrop-blur-md border border-white/50 shadow-xl'
                      }`}>
                        {facility.icon}
                      </div>
                      
                      <h2 className={`text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight ${
                        isDark ? 'text-white' : 'text-navy'
                      }`}>
                        {facility.title}
                      </h2>
                      
                      <div className={`p-8 rounded-3xl backdrop-blur-xl border ${
                        isDark ? 'bg-white/5 border-white/10' : 
                        'bg-white/60 border-white/80 shadow-2xl shadow-navy/5'
                      }`}>
                        <p className={`text-lg leading-relaxed mb-8 ${
                          isDark ? 'text-white/80' : 
                          'text-navy/80 font-medium'
                        }`}>
                          {facility.description}
                        </p>

                        <div className={`flex flex-wrap gap-4 pt-8 border-t ${
                          isDark ? 'border-white/10' : 
                          'border-navy/10'
                        }`}>
                          {facility.stats.map((stat, i) => (
                            <div key={i} className={`px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest ${
                              isDark 
                                ? 'bg-white/10 text-white border border-white/20' :
                              'bg-white/80 text-navy border border-white shadow-sm'
                            }`}>
                              {stat}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </FadeUp>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
