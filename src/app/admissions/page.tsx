'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PageHeader from '@/components/layout/PageHeader';
import { Download, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';

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

const FEE_STRUCTURE = [
  { course: "F.Y. B.A.", tuitionFee: "₹800", admissionFee: "₹20", libraryFee: "₹100", gymkhanaFee: "₹150", total: "₹1,070" },
  { course: "S.Y. B.A.", tuitionFee: "₹800", admissionFee: "₹20", libraryFee: "₹100", gymkhanaFee: "₹150", total: "₹1,070" },
  { course: "T.Y. B.A.", tuitionFee: "₹800", admissionFee: "₹20", libraryFee: "₹100", gymkhanaFee: "₹150", total: "₹1,070" },
  { course: "F.Y. B.Com.", tuitionFee: "₹800", admissionFee: "₹20", libraryFee: "₹100", gymkhanaFee: "₹150", total: "₹1,070" },
  { course: "S.Y. B.Com.", tuitionFee: "₹800", admissionFee: "₹20", libraryFee: "₹100", gymkhanaFee: "₹150", total: "₹1,070" },
  { course: "T.Y. B.Com.", tuitionFee: "₹800", admissionFee: "₹20", libraryFee: "₹100", gymkhanaFee: "₹150", total: "₹1,070" },
];

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHeader 
        title="Admissions" 
        subtitle="Start Your Journey with SJMSM"
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
      />

      {/* 3-Step Process */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-black text-navy mb-4 tracking-tight uppercase">
                How to Apply
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto font-medium">
                Follow these three simple steps to secure your admission for the upcoming academic year.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeUp delay={0.1}>
              <div className="bg-background p-10 rounded-xl h-full flex flex-col border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-navy text-white rounded-full flex items-center justify-center font-display font-black text-2xl mb-6">1</div>
                <h3 className="text-2xl font-display font-bold text-navy mb-4">Download Prospectus</h3>
                <p className="text-gray-600 mb-8 flex-grow">Read our detailed prospectus to understand the courses offered, eligibility criteria, and college rules.</p>
                <a href="#" className="inline-flex items-center text-gold font-bold uppercase tracking-widest text-sm hover:text-navy transition-colors">
                  Download PDF <Download className="w-4 h-4 ml-2" />
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="bg-background p-10 rounded-xl h-full flex flex-col border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-navy text-white rounded-full flex items-center justify-center font-display font-black text-2xl mb-6">2</div>
                <h3 className="text-2xl font-display font-bold text-navy mb-4">Check Fees</h3>
                <p className="text-gray-600 mb-8 flex-grow">Review the approved fee structure for your chosen course. EBC/Scholarship concessions are available for eligible candidates.</p>
                <a href="#fees" className="inline-flex items-center text-gold font-bold uppercase tracking-widest text-sm hover:text-navy transition-colors">
                  View Below <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="bg-gold p-10 rounded-xl h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-white text-navy rounded-full flex items-center justify-center font-display font-black text-2xl mb-6">3</div>
                <h3 className="text-2xl font-display font-bold text-navy mb-4">Apply Online</h3>
                <p className="text-navy/80 font-medium mb-8 flex-grow">Fill out the MKCL admission form completely and accurately with all required documents.</p>
                <a href="#" className="inline-flex items-center bg-navy text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform w-fit">
                  Portal Link <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Fee Structure Table */}
      <section id="fees" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-4xl font-display font-black text-navy mb-2 tracking-tight uppercase">
                  Approved Fee Structure
                </h2>
                <p className="text-gray-500 font-medium">For the Academic Year 2026-2027 (Non-Grant Basis)</p>
              </div>
              <button className="flex items-center px-5 py-2.5 bg-white border border-gray-200 rounded-md text-sm font-bold text-navy shadow-sm hover:border-gold transition-colors">
                <FileText className="w-4 h-4 mr-2" /> Print PDF
              </button>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-navy text-white uppercase tracking-widest text-xs">
                      <th className="px-6 py-4 font-bold">Course / Class</th>
                      <th className="px-6 py-4 font-bold">Tuition Fee</th>
                      <th className="px-6 py-4 font-bold">Admission Fee</th>
                      <th className="px-6 py-4 font-bold">Library Fee</th>
                      <th className="px-6 py-4 font-bold">Gymkhana Fee</th>
                      <th className="px-6 py-4 font-bold text-gold">Total Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {FEE_STRUCTURE.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-display font-bold text-navy whitespace-nowrap">{row.course}</td>
                        <td className="px-6 py-4 text-gray-600">{row.tuitionFee}</td>
                        <td className="px-6 py-4 text-gray-600">{row.admissionFee}</td>
                        <td className="px-6 py-4 text-gray-600">{row.libraryFee}</td>
                        <td className="px-6 py-4 text-gray-600">{row.gymkhanaFee}</td>
                        <td className="px-6 py-4 font-bold text-navy bg-gray-50/50">{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 p-6 border-t border-gray-100">
                <h4 className="text-sm font-bold text-navy uppercase tracking-widest mb-3 flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-gold mr-2" /> Important Notes
                </h4>
                <ul className="text-sm text-gray-500 space-y-2 list-disc list-inside pl-1">
                  <li>Fees are subject to change as per university guidelines.</li>
                  <li>University Exam Fees will be charged separately at the time of examination form submission.</li>
                  <li>Eligible reserve category students can avail of the GOI scholarship/freeship.</li>
                </ul>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

    </main>
  );
}
