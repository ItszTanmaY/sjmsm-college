'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import PageHeader from '@/components/layout/PageHeader';

gsap.registerPlugin(ScrollTrigger);
import coursesData from '@/data/courses.json';
import calendarData from '@/data/academic-calendar.json';
import committeesData from '@/data/committees.json';
import DocumentCard from '@/components/ui/DocumentCard';
import { BookOpen, GraduationCap, Clock, CheckCircle2, Download, CalendarDays, FileText, ArrowRight, CircleDot, Award, User, Shield, Briefcase } from 'lucide-react';

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

const MemberCard = ({ member, index }: { member: any, index: number }) => (
  <FadeUp delay={index * 0.1} className="h-full">
    <div className="h-full group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-gold transition-all duration-500 overflow-hidden transform hover:-translate-y-2 flex flex-col justify-between">
      {/* Background decoration */}
      <div className="absolute -right-8 -top-8 w-24 h-24 bg-navy/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors duration-500"></div>
      
      <div className="flex flex-col relative z-10">
        <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-500 shadow-md">
          <User className="w-5 h-5" />
        </div>
        <h3 className="text-xl font-display font-bold text-navy mb-2 group-hover:text-gold transition-colors">{member.name}</h3>
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
          <Shield className="w-3.5 h-3.5" /> {member.designation}
        </p>
      </div>
      
      <div className="relative z-10 inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 group-hover:bg-navy/5 group-hover:text-navy transition-colors self-start border border-gray-100 group-hover:border-navy/20">
        <Briefcase className="w-4 h-4" /> {member.department}
      </div>
      
      {/* Hover Reveal Element */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  </FadeUp>
);

export default function AcademicsPage() {
  // Group courses by category dynamically
  const categories = Array.from(new Set(coursesData.map(c => c.category)));

  // GSAP Refs for Video Section
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoInnerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Pin and scale video
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: videoSectionRef.current,
        start: "top top",
        end: "+=60%", // Reduced scroll distance so it doesn't stick long
        pin: true,
        scrub: 0.5, // Reduced scrub delay for faster response
      }
    });

    // Make the background color change smoothly from navy to black
    tl.to(videoSectionRef.current, {
      backgroundColor: "#000000",
      duration: 1,
    }, 0);

    // Fade out text while scaling video
    tl.to(".video-text", {
      opacity: 0,
      y: -50,
      duration: 0.5,
    }, 0);

    // Scale up the video wrapper to take up the full screen
    tl.to(videoWrapperRef.current, {
      width: "100%",
      height: "100vh",
      maxWidth: "none", // Overrides the max-w-5xl class safely
      borderRadius: "0px",
      border: "none",
      duration: 1,
      ease: "power2.inOut"
    }, 0);

    // If there's an overlay inside the video, we can fade it out so it becomes bright
    tl.to(videoInnerRef.current, {
      backgroundColor: "rgba(0,0,0,0)",
      duration: 1,
    }, 0);

  }, { scope: videoSectionRef });

  return (
    <main className="min-h-screen bg-background pb-24">
      <PageHeader 
        title="Academics" 
        subtitle="Programs that shape your future"
        image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
      />


      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-12 relative z-20 overflow-hidden bg-white">

        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,rgba(0,0,0,1)_2px,rgba(0,0,0,0)_2px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          
          {categories.map((categoryName, categoryIndex) => {
            const coursesInCategory = coursesData.filter(c => c.category === categoryName);
            const isCertificate = categoryName.toLowerCase().includes('certificate');

            return (
              <div key={categoryName} className="mb-32 last:mb-0 flex flex-col lg:flex-row gap-12 items-start">
                
                {/* Left Column: Heading and Image */}
                <div className="w-full lg:w-1/3 lg:sticky lg:top-32 pt-4">
                  <FadeUp>
                    <div className="mb-8">
                      <h2 className="text-3xl sm:text-4xl font-display font-black text-navy mb-4 tracking-tight uppercase flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        {isCertificate ? <BookOpen className="w-10 h-10 text-teal-600 shrink-0" /> : <GraduationCap className="w-10 h-10 text-teal-600 shrink-0" />} 
                        {categoryName}
                      </h2>
                      <div className="w-24 h-1.5 bg-teal-600 rounded-full"></div>
                    </div>
                    {/* Image beside empty space */}
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 hidden lg:block group">
                      <Image 
                        src={isCertificate ? "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop" : "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"}
                        alt={categoryName}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    </div>
                  </FadeUp>
                </div>

                {/* Right Column: Courses Grid */}
                <div className="w-full lg:w-2/3">
                  {isCertificate ? (
                    // Small Grid for Certificates
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {coursesInCategory.map((course, i) => (
                        <FadeUp key={course.id} delay={i * 0.1}>
                          <div className="bg-navy rounded-[2rem] p-8 text-white h-full hover:bg-navy-light transition-colors group border border-white/5 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl group-hover:bg-teal-500/20 transition-colors duration-500" />
                            <h3 className="text-xl font-display font-black mb-3 text-teal-400 group-hover:text-white transition-colors relative z-10">{course.title}</h3>
                            <p className="text-white/70 text-sm leading-relaxed mb-6 flex-grow relative z-10">{course.description}</p>
                            <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest pt-4 border-t border-white/10 relative z-10">
                              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-teal-400" /> {course.duration}</span>
                            </div>
                          </div>
                        </FadeUp>
                      ))}
                    </div>
                  ) : (
                    // Large Cards for Degree Programs
                    <div className="grid grid-cols-1 gap-8">
                      {coursesInCategory.map((course, i) => (
                        <FadeUp key={course.id} delay={i * 0.1}>
                          <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 sm:p-10 h-full flex flex-col group hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-teal-500/50 transition-all duration-500 relative overflow-hidden">
                            {/* Decorative Card Background Element */}
                            <div className="absolute -right-16 -top-16 w-48 h-48 bg-gradient-to-br from-teal-500/5 to-blue-500/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                            <div className="absolute right-8 top-8 w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white group-hover:rotate-12 transition-all duration-500 text-teal-600 shadow-sm">
                              <BookOpen className="w-5 h-5" />
                            </div>

                            <h3 className="text-3xl sm:text-4xl font-display font-black text-navy mb-4 group-hover:text-teal-600 transition-colors relative z-10 pr-16 leading-tight">{course.title}</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow relative z-10 font-medium">{course.description}</p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 bg-gray-50/80 rounded-2xl border border-gray-100 mb-8 relative z-10 group-hover:bg-white group-hover:shadow-sm transition-all duration-300">
                              <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-2 flex items-center gap-2"><Clock className="w-4 h-4" /> Duration</p>
                                <p className="font-black text-navy text-lg">{course.duration}</p>
                              </div>
                              <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Eligibility</p>
                                <p className="font-black text-navy text-lg">{course.eligibility}</p>
                              </div>
                            </div>

                            {course.specializations && course.specializations.length > 0 && (
                              <div className="relative z-10 mb-6">
                                <p className="text-xs font-bold uppercase tracking-widest text-navy/60 mb-4 border-b border-gray-100 pb-2">Specializations Available</p>
                                <div className="flex flex-wrap gap-2">
                                  {course.specializations.map((spec) => (
                                    <span key={spec} className="bg-white border border-gray-200 text-gray-700 shadow-sm px-4 py-2 text-sm font-bold rounded-xl group-hover:border-teal-500/30 transition-colors">
                                      {spec}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* PDF Downloads */}
                            {((course as any).syllabusPdf || (course as any).additionalPdfs) && (
                              <div className="relative z-10 flex flex-wrap gap-3 mt-auto pt-4 border-t border-gray-100">
                                {(course as any).syllabusPdf && (
                                  <a 
                                    href={(course as any).syllabusPdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-teal-50 hover:bg-teal-600 text-teal-700 hover:text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors"
                                  >
                                    <Download className="w-4 h-4" /> Download Syllabus
                                  </a>
                                )}
                                {(course as any).additionalPdfs?.map((pdf: any, pIdx: number) => (
                                  <a 
                                    key={pIdx}
                                    href={pdf.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-gray-50 hover:bg-navy text-navy hover:text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors border border-gray-200 hover:border-navy"
                                  >
                                    <FileText className="w-4 h-4" /> {pdf.title}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        </FadeUp>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* Prospectus Section - Deep Navy & Gold */}
      <section id="prospectus" className="py-24 relative overflow-hidden bg-navy text-white mt-12">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/3" />
          <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,rgba(255,255,255,1)_1px,rgba(0,0,0,0)_1px)] bg-[size:24px_24px] pointer-events-none" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <FadeUp>
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 mx-auto border border-white/20 shadow-xl">
              <FileText className="w-10 h-10 text-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-6 tracking-tight">College Prospectus</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 font-medium">
              Discover our academic programs, campus facilities, and admission guidelines in detail. Download the official prospectus to explore the opportunities that await you.
            </p>
            <a 
              href="/Docs/mahiti-patrak.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:bg-white hover:scale-105 transition-all shadow-[0_0_40px_rgba(212,175,55,0.3)]"
            >
              <Download className="w-5 h-5" /> Download Prospectus
            </a>
          </FadeUp>
        </div>
      </section>

      {/* Timetable Section - Glassmorphism & Pastel Mesh */}
      <section id="timetable" className="py-24 relative overflow-hidden bg-gray-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-teal-200/40 rounded-full blur-[100px] mix-blend-multiply animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-blue-200/40 rounded-full blur-[100px] mix-blend-multiply animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,rgba(0,0,0,1)_2px,rgba(0,0,0,0)_2px)] bg-[size:32px_32px] pointer-events-none" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center md:text-left">
            <FadeUp>
              <h2 className="text-sm font-bold text-teal-600 tracking-[0.3em] uppercase mb-4">Academic Schedule</h2>
              <h3 className="text-4xl md:text-5xl font-display font-black text-navy mb-6 tracking-tight leading-tight">
                Current Semester Time Table
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl mx-auto md:mx-0 font-medium">
                Stay organized and on track. Access the latest class schedules and academic timetables for all departments.
              </p>
              <a 
                href="/documents/timetable.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:bg-teal-600 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <CalendarDays className="w-5 h-5" /> View Time Table
              </a>
            </FadeUp>
          </div>
          <div className="flex-1 w-full max-w-md relative">
            <FadeUp delay={0.2}>
              <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-blue-50 p-8 flex flex-col items-center justify-center text-center">
                   <CalendarDays className="w-24 h-24 text-teal-200 mb-6" />
                   <h4 className="text-2xl font-bold text-navy mb-2">Academic Year</h4>
                   <p className="text-teal-600 font-bold uppercase tracking-widest">2026 - 2027</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold rounded-full flex items-center justify-center shadow-xl animate-bounce">
                <Download className="w-8 h-8 text-navy" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Academic Calendar Section */}
      <section id="calendar" className="py-20 relative overflow-hidden bg-gray-50">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,rgba(0,0,0,1)_2px,rgba(0,0,0,0)_2px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeUp>
            <div className="text-center mb-12">
              <h2 className="text-sm font-bold text-teal-600 tracking-[0.3em] uppercase mb-4">Yearly Plan</h2>
              <h3 className="text-4xl md:text-5xl font-display font-black text-navy tracking-tight">Academic Calendar</h3>
            </div>
          </FadeUp>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
            <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-gray-200 via-gray-200 to-transparent -translate-x-1/2" />
            
            {calendarData.map((term, i) => (
              <FadeUp key={term.id} delay={i * 0.1}>
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl hover:border-teal-500 transition-all duration-500 h-full flex flex-col relative">
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-[100px] -z-10 group-hover:bg-teal-100 transition-colors duration-500" />
                  
                  {/* Term Header */}
                  <div className="p-6 md:p-8 flex flex-col gap-4 border-b border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-teal-600 transition-all duration-500">
                        <CalendarDays className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-display font-bold text-navy">{term.term}</h2>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-lg text-navy text-xs font-bold uppercase tracking-widest self-start border border-gray-200">
                      <span>{term.startDate}</span>
                      <ArrowRight className="w-3 h-3 text-teal-600" />
                      <span>{term.endDate}</span>
                    </div>
                  </div>

                  {/* Term Events */}
                  <div className="p-6 md:p-8 flex-grow bg-gradient-to-b from-white to-gray-50/30">
                    {term.events && term.events.length > 0 ? (
                      <ul className="space-y-4">
                        {term.events.map((evt, idx) => (
                          <li key={idx} className="flex gap-4 items-start group/item">
                            <div className="flex flex-col items-center mt-1">
                              <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center border border-teal-100 group-hover/item:border-teal-500 transition-colors">
                                <CircleDot className="w-3 h-3 text-teal-600" />
                              </div>
                              {idx !== term.events.length - 1 && (
                                <div className="w-px h-full bg-gray-100 mt-2 min-h-[20px]" />
                              )}
                            </div>
                            <div className="flex-1 pb-4">
                              <span className="block font-bold text-navy uppercase tracking-wider text-xs mb-1">{evt.date}</span>
                              <span className="text-gray-600 font-medium text-sm leading-relaxed">{evt.title}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="h-full flex items-center justify-center text-gray-400 italic font-medium text-sm">
                        No major events scheduled.
                      </div>
                    )}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Approved Fee Structure Section */}
      <section id="fees" className="py-24 sm:py-32 relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold rounded-full blur-[200px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy-light rounded-full blur-[150px] translate-y-1/2 -translate-x-1/3" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 md:pr-12">
            <FadeUp>
              <h2 className="text-sm font-bold text-gold tracking-[0.3em] uppercase mb-4">Financial Information</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 tracking-tight leading-tight">
                Approved Fee Structure
              </h3>
              <p className="text-xl text-white/80 leading-relaxed mb-8 font-medium">
                We believe in providing high-quality education at accessible rates. Review our officially approved fee structures for the current academic year.
              </p>
              <div className="flex items-center gap-4 text-white/60 text-sm font-bold uppercase tracking-widest">
                <CheckCircle2 className="w-5 h-5 text-gold" /> Transparent Pricing
                <CheckCircle2 className="w-5 h-5 text-gold ml-4" /> Government Approved
              </div>
            </FadeUp>
          </div>
          
          <div className="flex-1 w-full max-w-lg">
            <FadeUp delay={0.2}>
              <div className="bg-white/10 backdrop-blur-2xl rounded-[2rem] p-8 sm:p-12 shadow-2xl border border-white/20 relative group">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform duration-500">
                  <FileText className="w-8 h-8 text-navy" />
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-8 pr-12">Current Academic Year</h4>
                
                <div className="grid grid-cols-1 gap-6">
                  <a href="/Docs/fees-ay-2026-27.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-navy/40 hover:bg-navy p-6 rounded-2xl border border-white/10 hover:border-gold transition-all group/doc">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover/doc:text-gold transition-colors">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-bold text-white group-hover/doc:text-gold transition-colors">Fee Structure 2026-27</p>
                        <p className="text-sm text-white/60 mt-1">PDF • Govt Approved</p>
                      </div>
                    </div>
                    <Download className="w-5 h-5 text-white/40 group-hover/doc:text-gold transition-colors" />
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Campus Video Tour Section */}
      <section ref={videoSectionRef} className="py-24 sm:py-32 relative overflow-hidden bg-navy text-white min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
            alt="Campus Video Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-navy/90 mix-blend-multiply" />
        </div>
        
        <div className="w-full mx-auto relative z-10 text-center flex flex-col items-center justify-center">
          <div className="video-text mb-12 px-4">
            <h2 className="text-sm font-bold text-gold tracking-[0.3em] uppercase mb-4">Experience Campus Life</h2>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-display font-black tracking-tight">Virtual Tour</h3>
          </div>
          
          <div ref={videoWrapperRef} className="relative w-[90vw] max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/20 group cursor-pointer origin-center flex items-center justify-center">
            <Image 
              src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop"
              alt="Video Thumbnail"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div ref={videoInnerRef} className="absolute inset-0 bg-navy/40 transition-colors duration-500" />
            
            {/* Play Button */}
            <div className="absolute z-10 w-20 h-20 sm:w-28 sm:h-28 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 group-hover:bg-gold transition-all duration-500 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
              <div className="w-0 h-0 border-t-[12px] sm:border-t-[16px] border-t-transparent border-l-[20px] sm:border-l-[28px] border-l-white border-b-[12px] sm:border-b-[16px] border-b-transparent ml-2" />
            </div>
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Colorful Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-200/30 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-32">
          
          {/* Admission Committee */}
          <div id="admission">
            <FadeUp>
              <div className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 pb-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-display font-black text-navy mb-4 tracking-tight uppercase">Admission Committee</h2>
                  <div className="w-24 h-1 bg-gold mx-auto md:mx-0"></div>
                </div>
                <p className="text-gray-500 font-medium uppercase tracking-widest text-sm">Managing Intake & Guidance</p>
              </div>
            </FadeUp>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {committeesData.admission.map((member, idx) => (
                <MemberCard key={member.id} member={member} index={idx} />
              ))}
            </div>
          </div>

          {/* Examination Committee */}
          <div id="examination">
            <FadeUp>
              <div className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 pb-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-display font-black text-navy mb-4 tracking-tight uppercase">Examination Committee</h2>
                  <div className="w-24 h-1 bg-gold mx-auto md:mx-0"></div>
                </div>
                <p className="text-gray-500 font-medium uppercase tracking-widest text-sm">Ensuring Academic Integrity</p>
              </div>
            </FadeUp>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {committeesData.examination.map((member, idx) => (
                <MemberCard key={member.id} member={member} index={idx} />
              ))}
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
