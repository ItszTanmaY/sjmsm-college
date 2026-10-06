import React from 'react';
import { FileText, Download } from 'lucide-react';
import Link from 'next/link';

interface DocumentCardProps {
  title: string;
  href: string;
  date?: string;
  size?: string;
}

export default function DocumentCard({ title, href, date, size }: DocumentCardProps) {
  return (
    <Link 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex items-center p-4 sm:p-5 bg-white border border-gray-100 rounded-xl hover:border-gold hover:shadow-lg transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-lg bg-navy/5 text-navy flex items-center justify-center shrink-0 group-hover:bg-navy group-hover:text-white transition-colors duration-300">
        <FileText className="w-6 h-6" />
      </div>
      <div className="ml-4 flex-1">
        <h4 className="text-navy font-bold group-hover:text-gold transition-colors line-clamp-2">
          {title}
        </h4>
        {(date || size) && (
          <div className="flex items-center gap-3 mt-1 text-xs text-gray-500 font-medium">
            {date && <span>{date}</span>}
            {date && size && <span className="w-1 h-1 rounded-full bg-gray-300" />}
            {size && <span>{size}</span>}
          </div>
        )}
      </div>
      <div className="ml-4 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-gold/10 group-hover:text-gold transition-colors shrink-0">
        <Download className="w-5 h-5" />
      </div>
    </Link>
  );
}
