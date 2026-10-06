import React from 'react';
import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-[80vh] bg-background flex flex-col items-center justify-center px-4 py-24">
      <div className="max-w-3xl w-full text-center relative">
        
        {/* Background Giant 404 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
          <h1 className="text-[150px] sm:text-[250px] md:text-[300px] font-display font-black text-navy/5 leading-none select-none">
            404
          </h1>
        </div>
        
        {/* Foreground Content Card */}
        <div className="relative z-10 bg-white/80 backdrop-blur-md p-8 sm:p-12 md:p-16 rounded-3xl shadow-2xl border border-gray-100 max-w-xl mx-auto mt-12 sm:mt-24">
          <div className="w-20 h-20 bg-navy/5 rounded-full flex items-center justify-center text-gold mx-auto mb-8 shadow-sm">
            <Search className="w-10 h-10" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-display font-black text-navy mb-4">Page Not Found</h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
          
          <p className="text-gray-500 font-medium mb-10 text-lg leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <Link 
            href="/" 
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-navy text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gold hover:text-navy transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto hover:-translate-y-1"
          >
            <Home className="w-4 h-4" /> 
            <span>Return to Home</span>
          </Link>
        </div>

      </div>
    </main>
  );
}
