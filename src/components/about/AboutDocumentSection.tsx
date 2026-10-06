'use client';

import React from 'react';
import { motion } from 'framer-motion';
import DocumentCard from '@/components/ui/DocumentCard';
import aboutData from '@/data/about-documents.json';
import { FileText } from 'lucide-react';

interface AboutDocumentSectionProps {
  title: string;
  category: string;
  description?: string;
}

export default function AboutDocumentSection({ title, category, description }: AboutDocumentSectionProps) {
  const documents = aboutData.filter(doc => doc.category === category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100"
    >
      <div className="w-16 h-16 bg-navy/5 text-navy rounded-full flex items-center justify-center mb-8">
        <FileText className="w-8 h-8" />
      </div>
      <h2 className="text-3xl sm:text-4xl font-display font-black text-navy mb-6 tracking-tight">
        {title}
      </h2>
      
      {description && (
        <p className="text-gray-600 text-lg mb-8">
          {description}
        </p>
      )}

      {documents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {documents.map((doc) => (
            <DocumentCard
              key={doc.id}
              title={doc.title}
              href={doc.fileUrl}
              date={doc.date}
              size={doc.size}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200">
          <p className="text-gray-500 font-medium">Documents for {title} will be uploaded soon.</p>
        </div>
      )}
    </motion.div>
  );
}
