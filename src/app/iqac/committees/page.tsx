'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/layout/PageHeader';
import iqacData from '@/data/iqac.json';
import { Users, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const FadeUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function IQACCommitteesPage() {
  return (
    <main className="min-h-screen bg-background pb-24">
      <PageHeader 
        title="IQAC Committees" 
        subtitle="Dedicated members driving quality enhancement"
        image="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
      />

      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-12 relative z-20">
        <div className="max-w-4xl mx-auto">
          
          <FadeUp>
            <div className="mb-12 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-display font-black text-navy mb-2 tracking-tight flex items-center gap-4">
                  <Users className="w-8 h-8 text-gold" /> Committee Members
                </h2>
                <p className="text-gray-500 font-medium">Internal Quality Assurance Cell Stakeholders</p>
              </div>
              <Link href="/iqac" className="flex items-center text-sm font-bold text-navy hover:text-gold transition-colors uppercase tracking-widest shrink-0">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to IQAC
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-navy text-white uppercase tracking-widest text-xs">
                      <th className="px-6 py-4 font-bold">Sr. No.</th>
                      <th className="px-6 py-4 font-bold">Name of Member</th>
                      <th className="px-6 py-4 font-bold">Designation</th>
                      <th className="px-6 py-4 font-bold text-gold">Role in IQAC</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {iqacData.committees.map((member, idx) => (
                      <tr key={member.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-5 font-bold text-gray-400">{idx + 1}</td>
                        <td className="px-6 py-5 font-display font-bold text-navy whitespace-nowrap">{member.name}</td>
                        <td className="px-6 py-5 text-gray-600">{member.designation}</td>
                        <td className="px-6 py-5 font-bold text-navy bg-gray-50/50">{member.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeUp>

        </div>
      </section>
    </main>
  );
}
