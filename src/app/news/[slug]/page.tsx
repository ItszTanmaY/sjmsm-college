import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, ArrowRight } from 'lucide-react';
import newsData from '@/data/news.json';

export default function NewsArticle({ params }: { params: { slug: string } }) {
  const article = newsData.find((item) => item.slug === params.slug);

  if (!article) {
    return (
      <div className="pt-32 pb-24 min-h-[70vh] flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">Article Not Found</h1>
          <Link href="/news" className="text-gold font-bold flex items-center justify-center">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Notice Board
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const parts = dateString.split('-');
    if (parts.length !== 3) return dateString;
    const year = parts[0];
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${months[month - 1]} ${day}, ${year}`;
  };

  return (
    <div className="pt-32 pb-24 min-h-[70vh] bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/news" className="inline-flex items-center text-sm font-bold tracking-widest uppercase text-gray-400 hover:text-gold mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Notice Board
        </Link>
        
        <div className="mb-12">
          <div className="inline-block bg-navy text-white text-xs font-bold px-3 py-1 uppercase tracking-widest mb-4">
            {article.category}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-navy mb-6 tracking-tight leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center text-gray-500 font-medium">
            <Calendar className="w-5 h-5 mr-2 text-gold" />
            {formatDate(article.date)}
          </div>
        </div>

        {article.image && (
          <div className="relative w-full aspect-[16/9] mb-12 rounded-lg overflow-hidden shadow-xl">
            {/* Using img tag here to avoid Next.js Image domain config issues for arbitrary external images */}
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none text-gray-600 prose-headings:text-navy prose-a:text-gold">
          <p className="text-xl md:text-2xl font-light text-navy mb-8 leading-relaxed">
            {article.excerpt}
          </p>
          <p>
            Detailed content for this news item will be added here. Currently, this is using placeholder data from the news.json file.
          </p>
        </div>
      </div>
    </div>
  );
}
