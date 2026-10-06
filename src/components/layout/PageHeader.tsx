'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden bg-navy flex items-center justify-center">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-50 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
      </motion.div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-white tracking-tighter uppercase mb-4 sm:mb-6">
            {title}
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-gold font-bold uppercase tracking-[0.2em] text-xs sm:text-sm md:text-base">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
