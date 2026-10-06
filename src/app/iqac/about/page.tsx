'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function AboutIQACPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100">
        <div className="w-16 h-16 bg-gold/20 text-gold rounded-full flex items-center justify-center mb-8">
          <Award className="w-8 h-8" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-black text-navy mb-6 tracking-tight">
          About IQAC
        </h2>
        <div className="prose prose-lg text-gray-600 max-w-none">
          <p>
            The Internal Quality Assurance Cell (IQAC) is established to develop a system for conscious, consistent and catalytic improvement in the overall performance of the institution. 
          </p>
          <p>
            During the post-accreditation period, it will channelize all efforts and measures of the institution towards promoting its holistic academic excellence. The work of the IQAC is the first step towards internalization and institutionalization of quality enhancement initiatives.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
