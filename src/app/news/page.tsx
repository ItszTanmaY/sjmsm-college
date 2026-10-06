import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import newsData from '@/data/news.json';
import Image from 'next/image';
import { Calendar, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-background pb-24">
      <PageHeader 
        title="Notice Board & News" 
        subtitle="Latest updates, events, and announcements from our campus"
        image="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop"
      />
      <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        {newsData.length === 0 ? (
          <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 text-center">
            <h2 className="text-2xl font-display font-bold text-navy mb-4">No New Notices</h2>
            <p className="text-gray-500">There are currently no new announcements. Please check back later.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news) => (
              <div key={news.id} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative h-64 w-full overflow-hidden bg-gray-50 border-b border-gray-200 p-2">
                  <Image 
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                    <p className="text-navy font-bold text-sm tracking-wider uppercase">{news.category}</p>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-2 text-gold" />
                    <span>{new Date(news.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-gold transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-8 line-clamp-3 flex-grow">
                    {news.excerpt}
                  </p>
                  <button className="flex items-center text-gold font-medium mt-auto group-hover:gap-4 transition-all w-fit">
                    Read Full Story <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
