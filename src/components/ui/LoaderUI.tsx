import React from 'react';
import { BookOpen } from 'lucide-react';

export default function LoaderUI({ fullScreen = false }: { fullScreen?: boolean }) {
  return (
    <div className={`w-full flex flex-col items-center justify-center bg-background ${fullScreen ? 'fixed inset-0 z-[9999]' : 'min-h-[70vh]'}`}>
      
      <div className="relative flex flex-col items-center justify-center">
        
        {/* Outer spinning rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-gray-100 border-t-navy border-b-gold animate-[spin_1.5s_linear_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-4 border-gray-100 border-l-gold border-r-navy animate-[spin_1s_linear_infinite_reverse]"></div>
        
        {/* Inner pulsing icon (School Theme) */}
        <div className="relative z-10 w-16 h-16 bg-navy rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)] animate-pulse">
          <BookOpen className="w-8 h-8 text-gold" />
        </div>

        {/* Text */}
        <div className="absolute top-full mt-12 flex flex-col items-center animate-pulse w-64 -ml-32 left-1/2">
          <span className="font-display font-black text-xl text-navy tracking-widest uppercase">SJMSM's</span>
          <span className="text-xs font-bold text-gold tracking-[0.2em] uppercase mt-2">Loading...</span>
        </div>

      </div>

    </div>
  );
}
