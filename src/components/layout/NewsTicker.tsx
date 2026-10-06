'use client';

import React from 'react';
import Link from 'next/link';

const NOTICES = [
  { text: "Admissions for Academic Year 2026-27 are now open! Apply online via MKCL.", link: "/admissions" },
  { text: "NAAC Peer Team Visit is scheduled for next month. All departments are requested to finalize documentation.", link: "/iqac" },
  { text: "Exam Forms for Sem-II are available on the university portal.", link: "/academics" },
  { text: "The annual college gathering will be held in the second week of March.", link: "/academic-calendar" },
];

export default function NewsTicker() {
  return (
    <div className="w-full bg-[#1C2541] text-white text-[11px] sm:text-xs relative z-50 border-b border-white/5">
      <div className="w-full px-6 sm:px-12 flex items-stretch h-10 sm:h-11 relative">
        
        {/* Left Side Static Badge */}
        <div className="bg-transparent text-white/60 flex items-center gap-2 z-20 shrink-0 uppercase tracking-widest text-[10px] sm:text-xs relative pr-4 border-r border-white/10 my-2">
          <span className="hidden sm:inline font-bold">Latest Updates</span>
          <span className="sm:hidden font-bold">Updates</span>
        </div>
        
        {/* Scrolling Area with Edge Fades */}
        <div className="flex-1 overflow-hidden relative flex items-center group ml-4">
          {/* Left Fade Mask */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#1C2541] to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap min-w-max w-fit items-center">
            {/* Duplicate to ensure seamless looping */}
            {[...NOTICES, ...NOTICES, ...NOTICES].map((notice, idx) => (
              <span key={idx} className="mx-8 sm:mx-12 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0"></span>
                <Link 
                  href={notice.link} 
                  className="text-[11px] sm:text-[13px] uppercase tracking-widest font-medium hover:text-gold transition-colors duration-300 py-2 inline-block drop-shadow-sm"
                >
                  {notice.text}
                </Link>
              </span>
            ))}
          </div>

          {/* Right Fade Mask */}
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#1C2541] to-transparent z-10 pointer-events-none"></div>
        </div>

      </div>
    </div>
  );
}
