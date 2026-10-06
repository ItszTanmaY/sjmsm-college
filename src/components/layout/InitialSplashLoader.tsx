'use client';

import React, { useState, useEffect } from 'react';
import LoaderUI from '@/components/ui/LoaderUI';
import { AnimatePresence, motion } from 'framer-motion';

export default function InitialSplashLoader() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // We only want to run this once on the client
    const hasLoaded = sessionStorage.getItem('hasLoadedBefore');
    
    if (hasLoaded) {
      setShowSplash(false);
    } else {
      // First time visit in this session: enforce 750ms minimum timer
      // Lock body scroll while loading
      document.body.style.overflow = 'hidden';
      
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem('hasLoadedBefore', 'true');
        document.body.style.overflow = 'unset';
      }, 1000);
      
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'unset';
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
        >
          <LoaderUI fullScreen={true} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
