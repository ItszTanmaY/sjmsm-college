'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import newsData from '@/data/news.json';

gsap.registerPlugin(ScrollTrigger);
import governingBodyData from '@/data/governing-body-teaser.json';

// --- Helper Components for Animation ---
const formatDate = (dateString: string) => {
  const parts = dateString.split('-');
  if (parts.length !== 3) return dateString;
  const year = parts[0];
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return `${months[month - 1]} ${day}, ${year}`;
};

const formatDateShort = (dateString: string) => {
  const parts = dateString.split('-');
  if (parts.length !== 3) return dateString;
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[month - 1]} ${day}`;
};

const FadeUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const HERO_SLIDES = [
  {
    image: "/images/slide2-v2.png",
    title1: "Empower",
    title2: "Tomorrow"
  },
  {
    image: "/images/slide3-v2.jpeg",
    title1: "Shape Your",
    title2: "Future"
  },
  {
    image: "/images/slide1-v2.jpeg",
    title1: "Discover",
    title2: "Excellence"
  }
];

const ABOUT_SLIDES = [
  "/images/slide1-v2.jpeg", // Classroom/Teacher
  "/images/slide3-v2.jpeg",
  "/images/slide2-v2.png"
];

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Embla setup
  const [heroRef, heroApi] = useEmblaCarousel({ loop: true, duration: 40 }, [Autoplay({ delay: 6000, stopOnInteraction: false })]);
  const [aboutRef] = useEmblaCarousel({ loop: true, duration: 40 }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!heroApi) return;
    heroApi.on('select', () => {
      setCurrentSlide(heroApi.selectedScrollSnap());
    });
  }, [heroApi]);

  useGSAP(() => {
    // Smooth global background color transition using scrub
    gsap.to(".story-transition-wrapper", {
      backgroundColor: "#0B132B", // Navy
      color: "white",
      scrollTrigger: {
        trigger: ".story-trigger-point",
        start: "top 60%", // Transition starts when section is 40% visible
        end: "top 40%",   // Transition finishes quickly when section is 60% visible
        scrub: 0,     
          // 1-second smoothing so it feels natural but fast
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen bg-background selection:bg-gold selection:text-navy">
      
      {/* 1. CINEMATIC HERO SLIDER */}
      <section className="relative h-screen w-full overflow-hidden bg-navy">
        <div className="absolute inset-0 w-full h-full overflow-hidden" ref={heroRef}>
          <div className="flex h-full touch-pan-y">
            {HERO_SLIDES.map((slide, index) => (
              <div key={index} className="relative flex-[0_0_100%] h-full">
                <Image
                  src={slide.image}
                  alt={slide.title1}
                  fill
                  className="object-cover object-center opacity-60"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-navy/40 mix-blend-multiply"></div>
                
                <div className={`absolute inset-0 flex flex-col justify-center px-6 sm:px-12 pt-20 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="overflow-hidden mb-4 md:mb-6">
                    <span className="inline-block text-gold font-medium tracking-[0.2em] uppercase text-xs sm:text-sm md:text-base">
                      Est. 1998 • Khapar, Maharashtra
                    </span>
                  </div>
                  
                  <h1 className="font-display font-black text-white text-[15vw] sm:text-[12vw] leading-[0.85] tracking-tighter uppercase">
                    <span className="block transform translate-y-0 transition-transform duration-1000 ease-out">{slide.title1}</span>
                    <span className="block text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white]">{slide.title2}</span>
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-6 sm:left-12 right-6 sm:right-12 z-20 flex justify-between items-end">
          <div className="flex flex-col gap-4">
            <p className="text-white text-xs sm:text-sm max-w-[200px] font-light uppercase tracking-widest leading-relaxed hidden sm:block opacity-80">
              Scroll to explore <br/> our campus legacy
            </p>
            <div className="flex space-x-2">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => heroApi?.scrollTo(idx)}
                  className={`h-1 transition-all duration-500 ${currentSlide === idx ? 'w-12 bg-gold' : 'w-4 bg-white/40 hover:bg-white/70'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="flex space-x-2 sm:space-x-4">
            <button onClick={() => heroApi?.scrollPrev()} className="p-3 sm:p-4 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white hover:bg-white hover:text-navy transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => heroApi?.scrollNext()} className="p-3 sm:p-4 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white hover:bg-white hover:text-navy transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* GSAP Animated Wrapper for smooth global color transition */}
      <div className="story-transition-wrapper bg-background transition-colors duration-1000">

      {/* 2. MODERN ABOUT (Asymmetrical) */}
      <section className="py-20 sm:py-24 lg:py-32 relative z-20 px-4 sm:px-6 lg:px-12 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-4 items-center relative z-10">
          
          <div className="lg:col-span-5 lg:col-start-1 order-2 lg:order-1 pr-0 lg:pr-8">
            <FadeUp>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tighter mb-6 sm:mb-8 text-inherit">
                A Legacy of <br className="hidden sm:block" /> <span className="text-gold italic font-light">Excellence.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-lg sm:text-xl text-gray-500 font-light leading-relaxed mb-8 sm:mb-10">
                SJMSM's College stands as a beacon of knowledge. Our mission is to provide accessible, quality higher education to rural and tribal students, transforming raw potential into global competence.
              </p>
            </FadeUp>
            <FadeUp delay={0.2} className="discover-story-trigger">
              <Link href="/about" className="group inline-flex items-center gap-4 font-bold text-base sm:text-lg uppercase tracking-wider text-inherit">
                <span className="relative overflow-hidden pb-1">
                  Discover Story
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-current transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                </span>
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-current opacity-50 flex items-center justify-center group-hover:opacity-100 transition-all duration-500 shrink-0">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-current" />
                </span>
              </Link>
            </FadeUp>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 relative order-1 lg:order-2">
            <FadeUp delay={0.3}>
              <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] w-full max-w-2xl mx-auto lg:ml-auto group pl-0 pr-4 sm:pr-8 pt-0 pb-4 sm:pb-8">
                {/* Decorative Offset Block */}
                <div className="absolute top-4 -right-2 sm:top-8 sm:-right-0 w-full h-full bg-navy/5 rounded-sm transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700 ease-[0.16,1,0.3,1]"></div>
                <div className="absolute bottom-2 left-4 sm:bottom-4 sm:left-8 w-full h-full border border-gold/30 rounded-sm transform group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-700 ease-[0.16,1,0.3,1]"></div>

                {/* Main Image Container */}
                <div className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl z-10 bg-gray-100">
                  <div className="w-full h-full overflow-hidden" ref={aboutRef}>
                    <div className="flex h-full touch-pan-y">
                      {ABOUT_SLIDES.map((src, i) => (
                        <div key={i} className="relative flex-[0_0_100%] h-full">
                          <Image 
                            src={src} 
                            alt="Campus" 
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-[0.16,1,0.3,1]"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Floating minimal stat */}
                <motion.div style={{ y: y2 }} className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 bg-white p-4 sm:p-8 shadow-2xl z-10 hidden xs:block">
                  <p className="text-4xl sm:text-6xl font-display font-black text-navy mb-1 sm:mb-2">25+</p>
                  <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-400 font-bold">Years of Trust</p>
                </motion.div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 2.5 ACHIEVEMENTS / OUR STORY (Cinematic Transition) */}
      <section className="story-trigger-point relative py-24 sm:py-32 lg:py-40 overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0">
          <Image 
            src="/images/slide2-v2.png" 
            alt="Campus Legacy"
            fill
            className="object-cover opacity-15 mix-blend-luminosity"
          />
          {/* Subtle gradient to ensure bottom blends perfectly with the next section */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <FadeUp className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
            <div className="inline-block backdrop-blur-md font-bold tracking-widest uppercase text-[10px] sm:text-xs px-5 py-2 rounded-full mb-6 border border-white/20 opacity-80 shadow-sm text-white">
              Our Story
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black tracking-tighter leading-tight text-white">
              A Legacy of <br className="hidden sm:block" />
              <span className="text-transparent [-webkit-text-stroke:1px_white] sm:[-webkit-text-stroke:2px_white]">Impact</span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 sm:gap-8 text-center">
            {[
              { number: "30k+", label: "Passout Students" },
              { number: "42+", label: "Expert Staffs" },
              { number: "100+", label: "Awards Won" },
              { number: "25+", label: "Years of Trust" }
            ].map((stat, idx) => (
              <FadeUp key={idx} delay={idx * 0.1}>
                <div className="group cursor-default">
                  <p className="text-5xl sm:text-6xl md:text-7xl font-display font-black mb-4 group-hover:scale-110 transition-transform duration-700 ease-[0.16,1,0.3,1] drop-shadow-md group-hover:drop-shadow-xl text-gold">
                    {stat.number}
                  </p>
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] leading-relaxed opacity-80 text-white">
                    {stat.label.split(' ').map((word, i) => <React.Fragment key={i}>{word}<br className="hidden sm:block"/></React.Fragment>)}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

        </div>
      </section>

      </div> {/* End of GSAP Animated Wrapper */}

      {/* 3. BENTO GRID STATS & GOVERNING BODY */}
      <section className="py-20 sm:py-24 bg-navy text-white px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 sm:mb-16 border-b border-white/20 pb-6 sm:pb-8 gap-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tighter">Leadership</h2>
              <Link href="/governing-body" className="text-gold hover:text-white transition-colors uppercase tracking-widest text-xs sm:text-sm font-bold flex items-center gap-2 group shrink-0">
                View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {governingBodyData.map((member, i) => (
              <FadeUp key={member.id} delay={i * 0.1}>
                <div className="group relative overflow-hidden bg-navy-light rounded-sm aspect-[4/5]">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 sm:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full">
                    <p className="text-gold text-xs sm:text-sm font-bold tracking-widest uppercase mb-1 sm:mb-2">{member.role}</p>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight truncate">{member.name}</h3>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LATEST EVENTS (Editorial Hybrid Layout) */}
      <section className="py-24 sm:py-32 bg-background px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 sm:mb-20 gap-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-navy tracking-tighter uppercase">
                The Notice <span className="text-transparent [-webkit-text-stroke:1px_#0B132B] sm:[-webkit-text-stroke:2px_#0B132B]">Board</span>
              </h2>
              <Link href="/news" className="inline-flex border-b-2 border-navy pb-1 text-sm font-bold text-navy uppercase tracking-widest hover:text-gold hover:border-gold transition-colors">
                Explore All Notices
              </Link>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Featured Large Post */}
            <div className="lg:col-span-7">
              {newsData.slice(0, 1).map((news) => (
                <FadeUp key={news.id} delay={0}>
                  <Link href={`/news/${news.slug}`} className="group block h-full flex flex-col">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-6 bg-gray-100 shrink-0">
                      <Image 
                        src={news.image} 
                        alt={news.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                      />
                      <div className="absolute top-4 left-4 bg-navy text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 uppercase tracking-widest">
                        {news.category}
                      </div>
                    </div>
                    <div className="flex justify-between items-start flex-grow">
                      <div className="max-w-xl w-full pr-4">
                        <p className="text-gray-400 text-xs sm:text-sm font-bold tracking-widest mb-3">
                          {formatDate(news.date)}
                        </p>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-navy group-hover:text-gold transition-colors leading-tight mb-4 line-clamp-2">
                          {news.title}
                        </h3>
                        <p className="text-gray-600 font-light leading-relaxed text-sm sm:text-lg line-clamp-3">
                          {news.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>

            {/* Smaller Vertical List Posts */}
            <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
              {newsData.slice(1, 5).map((news, i) => (
                <FadeUp key={news.id} delay={0.1 + (i * 0.1)}>
                  <Link href={`/news/${news.slug}`} className="group flex items-center gap-6">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 shrink-0 overflow-hidden rounded-sm bg-gray-100">
                      <Image 
                        src={news.image} 
                        alt={news.title} 
                        fill 
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-gold text-[10px] sm:text-xs font-bold uppercase tracking-widest">{news.category}</span>
                        <span className="text-gray-400 text-[10px] sm:text-xs font-medium">
                          {formatDateShort(news.date)}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-display font-bold text-navy group-hover:text-gold transition-colors leading-tight line-clamp-2">
                        {news.title}
                      </h3>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 5. MASSIVE CTA */}
      <section className="relative py-32 sm:py-48 bg-gold overflow-hidden">
        {/* Kinetic Typography Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] text-center opacity-10 pointer-events-none whitespace-nowrap overflow-hidden">
          <motion.h1 
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="text-[30vw] md:text-[20vw] font-display font-black text-navy tracking-tighter"
          >
            APPLY NOW APPLY NOW APPLY NOW
          </motion.h1>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <FadeUp>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-navy leading-none tracking-tighter mb-6 sm:mb-8">
              Ready to shape <br className="hidden sm:block"/> your future?
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-lg sm:text-xl text-navy/80 font-medium max-w-xl mx-auto mb-10 sm:mb-12">
              Admissions are now open. Join a vibrant community of learners and thinkers at SJMSM.
            </p>
          </FadeUp>
          <FadeUp delay={0.2} className="flex justify-center">
            <Link href="/admissions" className="group relative flex items-center justify-center w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-navy text-white hover:scale-110 transition-transform duration-500 ease-[0.16,1,0.3,1]">
              <span className="font-bold uppercase tracking-widest text-sm sm:text-lg">Apply Now</span>
              <motion.div 
                className="absolute inset-0 rounded-full border border-navy/20"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />
            </Link>
          </FadeUp>
        </div>
      </section>

    </div>
  );
}
