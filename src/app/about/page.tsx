'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Target, Eye, MessageSquareQuote, 
  Scale, ShieldCheck, Users, BookOpen, Award, 
  Leaf, ChevronRight, GraduationCap, History, ArrowRight,
  Download, FileText
} from 'lucide-react';
import Image from 'next/image';
import committeeData from '@/data/about-committees.json';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';

const FadeUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);



const timeline = [
  { year: '1994', title: 'The Foundation', description: 'Established by visionary leaders to bring quality higher education to the region.' },
  { year: '2005', title: 'NAAC Accreditation', description: 'Achieved our first NAAC accreditation, cementing our commitment to quality.' },
  { year: '2012', title: 'Infrastructure Expansion', description: 'Inaugurated the new science block and advanced computer laboratories.' },
  { year: 'Present', title: 'Digital Transformation', description: 'Embracing modern pedagogies, smart classrooms, and global educational standards.' },
];

const auditReports = [
  { year: '2024-2025', url: '/Docs/audit-report-2024-25.pdf' },
  { year: '2023-2024', url: '/Docs/audit-report-2023-24.pdf' },
  { year: '2022-2023', url: '/Docs/audit-report-2022-23.pdf' },
  { year: '2017-2018', url: '/Docs/audit-report-2017-18.pdf' },
  { year: '2016-2017', url: '/Docs/audit-report-2016-17.pdf' },
  { year: '2015-2016', url: '/Docs/audit-report-2015-16.pdf' },
  { year: '2014-2015', url: '/Docs/audit-report-2014-15.pdf' },
  { year: '2013-2014', url: '/Docs/audit-report-2013-14.pdf' },
  { year: '2012-2013', url: '/Docs/audit-report-2012-13.pdf' },
  { year: '2001-2012', url: '/Docs/audit-report-2001-2012.pdf' },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('governing-body');

  const tabs = [
    { id: 'governing-body', label: 'Governing Body' },
    { id: 'cdc', label: 'CDC' },
    { id: 'teaching-staff', label: 'Teaching Staff' },
    { id: 'non-teaching-staff', label: 'Non-Teaching' },
  ];

  const currentCommittee = committeeData.filter(m => m.category === activeTab);

  useEffect(() => {
    let lastHash = '';
    const checkHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && hash !== lastHash) {
        lastHash = hash;
        if (['governing-body', 'cdc', 'teaching-staff', 'non-teaching-staff'].includes(hash)) {
          setActiveTab(hash);
          setTimeout(() => {
            document.getElementById('leadership')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
          // If it's a normal hash (like vision-mission), scroll to it!
          setTimeout(() => {
            document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };
    
    // Check immediately and then poll every 100ms
    checkHash();
    const interval = setInterval(checkHash, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-background pb-0">
      
      <PageHeader 
        title="About Us" 
        subtitle="SJMSM's Arts & Commerce Sr.& Jr. College, Khapar"
        image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
      />

      {/* 3. About, Vision & Mission Bento Grid */}
      <section id="vision-mission" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,rgba(0,0,0,1)_2px,rgba(0,0,0,0)_2px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-gold tracking-[0.3em] uppercase mb-4">Who We Are</h2>
            <h3 className="text-4xl md:text-6xl font-display font-black text-navy tracking-tight">Our Foundation & Philosophy</h3>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            
            {/* Main About Block (Span 8) */}
            <FadeUp className="lg:col-span-8">
              <div className="h-full bg-navy text-white rounded-3xl p-10 md:p-14 relative overflow-hidden group shadow-xl">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
                <Building2 className="w-16 h-16 text-gold mb-8 relative z-10" />
                <h4 className="text-3xl md:text-4xl font-display font-black mb-6 relative z-10">A Beacon of Knowledge</h4>
                <div className="space-y-6 text-lg text-white/80 relative z-10 font-medium leading-relaxed">
                  <p>
                    SJMSM's Arts & Commerce Sr.& Jr. College has been a beacon of knowledge and excellence, dedicated to providing quality education to students from diverse backgrounds.
                  </p>
                  <p>
                    We believe in nurturing holistic development, encouraging our students to excel not just academically but also in extracurricular activities, leadership, and community service. Our state-of-the-art facilities ensure that every student receives the best possible guidance.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Vision Block (Span 4) */}
            <FadeUp delay={0.1} className="lg:col-span-4">
              <div className="h-full bg-pastel-blue rounded-3xl p-10 border border-indigo-100 hover:border-indigo-300 hover:shadow-xl transition-all group relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all" />
                <Eye className="w-12 h-12 text-indigo-600 mb-8 group-hover:scale-110 transition-transform relative z-10" />
                <h4 className="text-2xl font-black text-indigo-950 font-display mb-4 relative z-10">Our Vision</h4>
                <p className="text-indigo-900/80 font-medium leading-relaxed relative z-10 italic">
                  "To be a premier institution of academic excellence that nurtures holistic development, empowering students to become responsible global citizens and lifelong learners."
                </p>
              </div>
            </FadeUp>

            {/* Mission Block (Span 7) */}
            <FadeUp delay={0.2} className="lg:col-span-7">
              <div className="h-full bg-pastel-mint rounded-3xl p-10 border border-teal-100 hover:border-teal-300 hover:shadow-xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl group-hover:bg-teal-500/20 transition-all" />
                <Target className="w-12 h-12 text-teal-600 mb-8 group-hover:scale-110 transition-transform relative z-10" />
                <h4 className="text-2xl font-black text-teal-950 font-display mb-6 relative z-10">Our Mission</h4>
                <ul className="space-y-4 text-teal-900/80 font-medium relative z-10">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-4 mt-1 font-bold">•</span>
                    To provide accessible, high-quality education to students from all sections of society.
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-4 mt-1 font-bold">•</span>
                    To foster an environment of intellectual curiosity, innovation, and critical thinking.
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-4 mt-1 font-bold">•</span>
                    To promote ethical values, social responsibility, and cultural awareness.
                  </li>
                </ul>
              </div>
            </FadeUp>

            {/* Core Values (Span 5 Grid) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-6">
              <FadeUp delay={0.3}>
                <div className="bg-gray-50 rounded-3xl p-6 h-full border border-gray-100 flex flex-col justify-center items-center text-center group hover:border-gold hover:shadow-lg transition-all">
                  <Award className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
                  <h5 className="font-bold text-navy mb-1">Excellence</h5>
                </div>
              </FadeUp>
              <FadeUp delay={0.4}>
                <div className="bg-gray-50 rounded-3xl p-6 h-full border border-gray-100 flex flex-col justify-center items-center text-center group hover:border-gold hover:shadow-lg transition-all">
                  <ShieldCheck className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
                  <h5 className="font-bold text-navy mb-1">Integrity</h5>
                </div>
              </FadeUp>
              <FadeUp delay={0.5}>
                <div className="bg-gray-50 rounded-3xl p-6 h-full border border-gray-100 flex flex-col justify-center items-center text-center group hover:border-gold hover:shadow-lg transition-all">
                  <Users className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
                  <h5 className="font-bold text-navy mb-1">Inclusivity</h5>
                </div>
              </FadeUp>
              <FadeUp delay={0.6}>
                <div className="bg-gray-50 rounded-3xl p-6 h-full border border-gray-100 flex flex-col justify-center items-center text-center group hover:border-gold hover:shadow-lg transition-all">
                  <Scale className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
                  <h5 className="font-bold text-navy mb-1">Equality</h5>
                </div>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>

      {/* 4. History Timeline */}
      <section id="history" className="py-24 sm:py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,rgba(0,0,0,1)_2px,rgba(0,0,0,0)_2px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-gold tracking-[0.3em] uppercase mb-4">Our Legacy</h2>
            <h3 className="text-4xl md:text-6xl font-display font-black text-navy tracking-tight">Milestones of Success</h3>
          </div>

          <div className="relative border-l-4 border-navy/10 ml-6 md:ml-1/2 md:border-none">
            {/* Desktop Center Line */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-navy/10 -translate-x-1/2" />
            
            <div className="space-y-12 md:space-y-24">
              {timeline.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <FadeUp key={idx} delay={idx * 0.1} className="relative flex items-center w-full">
                    {/* Node */}
                    <div className="absolute left-[-26px] md:left-1/2 w-12 h-12 rounded-full bg-white border-4 border-gold shadow-lg shadow-gold/20 md:-translate-x-1/2 flex items-center justify-center z-10">
                      <div className="w-3 h-3 bg-navy rounded-full animate-pulse" />
                    </div>
                    
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-16 md:text-right md:ml-0' : 'md:pl-16 md:ml-auto'}`}>
                      <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                        <div className="absolute -right-8 -top-8 w-24 h-24 bg-gold/5 rounded-full blur-xl group-hover:bg-gold/20 transition-colors" />
                        <span className="text-gold font-black text-2xl mb-2 block font-display">{item.year}</span>
                        <h4 className="text-2xl font-bold text-navy mb-4">{item.title}</h4>
                        <p className="text-gray-500 font-medium">{item.description}</p>
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Editorial Principal Message */}
      <section id="principal-messages" className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <FadeUp className="w-full lg:w-5/12 relative">
              {/* Decorative Frame */}
              <div className="absolute inset-0 bg-navy translate-x-4 translate-y-4 rounded-3xl -z-10" />
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src="/images/principal.jpeg" 
                  alt="Principal"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy to-transparent p-8 pt-32">
                  <h4 className="text-3xl font-display font-black text-white">Dr. Vijaysing Indrasing Girase</h4>
                  <p className="text-gold font-bold tracking-widest text-sm mt-2 uppercase">Principal, M.Com, M.Phil, Ph.D.</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2} className="w-full lg:w-7/12">
              <MessageSquareQuote className="w-24 h-24 text-gray-100 mb-8" />
              <h3 className="text-4xl md:text-5xl font-display font-black text-navy mb-10 tracking-tight leading-tight">
                "Education is the most powerful weapon which you can use to change the world."
              </h3>
              <div className="prose prose-lg text-gray-600 max-w-none space-y-6 font-medium">
                <p>
                  S.J.M.S. Mandal's Arts, Commerce and Science Senior and Junior College has been imparting high-quality education in Khapar since 1996. 
                </p>
                <p>
                  Khapar is a hilly and tribal area located in Akkalkuwa Taluka in the Nandurbar district. In this age of Information and Technology, providing high-quality education through innovative and interactive learning processes to our students marks the beginning of a new era for the tribal region of Khapar.
                </p>
              </div>
              <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="text-6xl text-navy/20 font-serif italic">
                  Signature
                </div>
                <Link href="#" className="inline-flex items-center justify-center gap-2 bg-gold text-navy px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase hover:bg-navy hover:text-white transition-colors shadow-lg shadow-gold/20 shrink-0">
                  View Profile <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* 6. Interactive Leadership & Staff (Rich Grid) */}
      <section id="leadership" className="py-24 sm:py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,rgba(255,255,255,1)_2px,rgba(0,0,0,0)_2px)] bg-[size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-gold tracking-[0.3em] uppercase mb-4">Our People</h2>
            <h3 className="text-4xl md:text-6xl font-display font-black tracking-tight">Leadership & Staff</h3>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Interactive Tabs */}
            <div className="w-full lg:w-1/4 shrink-0">
              <div className="sticky top-32 flex flex-col gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-left px-6 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-between group ${
                      activeTab === tab.id 
                        ? 'bg-gold text-navy shadow-lg shadow-gold/20' 
                        : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {tab.label}
                    <ChevronRight className={`w-5 h-5 transition-transform ${activeTab === tab.id ? 'translate-x-1' : 'group-hover:translate-x-1 opacity-0 group-hover:opacity-100'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content (Rich Profile Grid) */}
            <div className="w-full lg:w-3/4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10">
                    <h4 className="text-2xl font-display font-black text-white mb-8 pb-4 border-b border-white/10 flex justify-between items-center">
                      <span>{tabs.find(t => t.id === activeTab)?.label} Members</span>
                      <span className="text-sm font-medium bg-white/10 px-4 py-1 rounded-full">{currentCommittee.length} Members</span>
                    </h4>
                    
                    {currentCommittee.length > 0 ? (
                      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {currentCommittee.map((member, idx) => (
                          <div key={idx} className="bg-navy/50 rounded-2xl overflow-hidden border border-white/10 hover:border-gold/50 transition-colors group flex flex-col h-full shadow-lg">
                            {(member as any).image && (
                              <div className="relative w-full aspect-square overflow-hidden bg-black/20">
                                <Image 
                                  src={(member as any).image} 
                                  alt={member.name} 
                                  fill 
                                  className="object-cover group-hover:scale-110 transition-transform duration-500" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-80" />
                                <div className="absolute bottom-4 left-4 right-4">
                                  <h5 className="font-bold text-lg text-white group-hover:text-gold transition-colors truncate">{member.name}</h5>
                                </div>
                              </div>
                            )}
                            <div className="p-5 flex-1 flex flex-col">
                              {!(member as any).image && (
                                <h5 className="font-bold text-lg text-white group-hover:text-gold transition-colors mb-2">{member.name}</h5>
                              )}
                              <p className="text-gold font-bold text-sm mb-3">{member.designation}</p>
                              
                              <div className="mt-auto space-y-2 pt-4 border-t border-white/10">
                                {(member as any).subject && (
                                  <div className="flex justify-between items-center text-sm">
                                    <span className="text-white/40">Subject</span>
                                    <span className="text-white/90 font-medium text-right">{(member as any).subject}</span>
                                  </div>
                                )}
                                {member.qualifications && (
                                  <div className="flex justify-between items-center text-sm">
                                    <span className="text-white/40">Qualification</span>
                                    <span className="text-white/90 font-medium text-right">{member.qualifications}</span>
                                  </div>
                                )}
                                {member.experience && (
                                  <div className="flex justify-between items-center text-sm">
                                    <span className="text-white/40">Experience</span>
                                    <span className="text-white/90 font-medium text-right">{member.experience}</span>
                                  </div>
                                )}

                                {activeTab === 'teaching-staff' && (member as any).pdfUrl && (
                                  <div className="pt-4 mt-2 border-t border-white/10">
                                    <a 
                                      href={(member as any).pdfUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-block w-full text-center py-2 px-4 rounded-lg bg-gold/10 text-gold hover:bg-gold hover:text-navy font-bold text-sm transition-colors"
                                    >
                                      View Profile
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                        ))}
                      </div>
                    ) : (
                      <div className="text-white/50 text-center py-12 italic">
                        No records found for this category.
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Trophy Case & PDF Document Vault */}
      <section id="affiliations" className="py-24 sm:py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left: Affiliations & RTI PDFs */}
            <FadeUp>
              <div id="audit-reports" className="mb-10">
                <h2 className="text-sm font-bold text-gold tracking-[0.3em] uppercase mb-4">Certifications</h2>
                <h3 className="text-4xl md:text-5xl font-display font-black text-navy tracking-tight">Affiliations & RTI</h3>
              </div>
              
              <div className="space-y-6">
                <div id="rti" className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                      <Award className="w-6 h-6 text-navy group-hover:text-gold transition-colors" />
                    </div>
                    <p className="font-bold text-navy/80 text-lg leading-snug pt-2">
                      University Grants Commission (UGC) & KBCNMU Affiliation Certificate
                    </p>
                  </div>
                  <a href="/Docs/affiliation-certificate-letter.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase hover:bg-gold hover:text-navy transition-colors w-full sm:w-auto justify-center">
                    <Download className="w-4 h-4" /> Download Certificate
                  </a>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                      <Scale className="w-6 h-6 text-navy group-hover:text-gold transition-colors" />
                    </div>
                    <p className="font-bold text-navy/80 text-lg leading-snug pt-2">
                      Right to Information (RTI) Disclosures & Appellate Authority
                    </p>
                  </div>
                  <a href="/Docs/rti-2005.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase hover:bg-gold hover:text-navy transition-colors w-full sm:w-auto justify-center">
                    <Download className="w-4 h-4" /> Download RTI PDF
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Right: Audit Reports PDF Vault */}
            <FadeUp delay={0.2}>
              <div className="mb-10">
                <h2 className="text-sm font-bold text-gold tracking-[0.3em] uppercase mb-4">Transparency</h2>
                <h3 className="text-4xl md:text-5xl font-display font-black text-navy tracking-tight">Audit Reports</h3>
              </div>

              <div className="bg-navy rounded-3xl p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="relative z-10 flex flex-col gap-3">
                  {auditReports.map((report, idx) => (
                    <a 
                      key={idx} 
                      href={report.url}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-gold hover:text-navy text-white transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <FileText className="w-5 h-5 text-gold group-hover:text-navy" />
                        <span className="font-bold text-lg">{report.year} Audit Report</span>
                      </div>
                      <Download className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </FadeUp>
            
          </div>

        </div>
      </section>

    </main>
  );
}
