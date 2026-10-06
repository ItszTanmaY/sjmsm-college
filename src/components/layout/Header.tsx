'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import menuData from '@/data/menu.json';
import NewsTicker from '@/components/layout/NewsTicker';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<string | null>(null);
  const [activeMobileCategory, setActiveMobileCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled || activeDesktopDropdown
            ? 'bg-white/95 backdrop-blur-md border-gray-200 shadow-sm' 
            : 'bg-transparent border-transparent'
        }`}
        onMouseLeave={() => setActiveDesktopDropdown(null)}
      >
        <div className={`w-full overflow-hidden transition-all duration-500 origin-top ${isScrolled ? 'h-0 opacity-0' : 'h-10 sm:h-12 opacity-100'}`}>
          <NewsTicker />
        </div>

        <div className={`w-full px-6 sm:px-12 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'}`}>
          
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center gap-3 group" onClick={() => setActiveDesktopDropdown(null)}>
            <div className="relative w-12 h-12 overflow-hidden flex-shrink-0 bg-white rounded-full p-1 shadow-md">
              <img src="/images/logo.jpeg" alt="SJMSM Logo" className="object-contain w-full h-full rounded-full" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
            <div className={`flex flex-col transition-colors duration-500 ${
              isScrolled || isMenuOpen || activeDesktopDropdown ? 'text-navy' : 'text-white'
            }`}>
              <span className="font-display font-bold text-lg leading-none tracking-tight">SJMSM's</span>
              <span className="text-[10px] uppercase tracking-widest font-semibold opacity-80">College</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link 
              href="/"
              className={`text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                isScrolled || activeDesktopDropdown ? 'text-navy hover:text-gold' : 'text-white/90 hover:text-white'
              }`}
            >
              Home
            </Link>
            
            {menuData.map((category) => (
              <div 
                key={category.title}
                className="relative py-4 cursor-pointer"
                onMouseEnter={() => setActiveDesktopDropdown(category.title)}
              >
                <Link 
                  href={category.href || '#'}
                  className={`flex items-center text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                  (isScrolled || activeDesktopDropdown) ? 'text-navy hover:text-gold' : 'text-white/90 hover:text-white'
                } ${activeDesktopDropdown === category.title ? 'text-gold' : ''}`}>
                  {category.title}
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${activeDesktopDropdown === category.title ? 'rotate-180 text-gold' : ''}`} />
                </Link>
                
                {/* Standard Popup Dropdown (Sleek Glassmorphism) */}
                <AnimatePresence>
                  {activeDesktopDropdown === category.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-0 w-64 bg-white/95 backdrop-blur-lg border border-gray-100 shadow-2xl rounded-xl z-50 origin-top-left"
                    >
                      <div className="py-2 flex flex-col">
                        {category.links.map((link: any) => (
                          <div key={link.name} className="relative group/sub">
                            {link.sublinks ? (
                              <>
                                <div className="flex items-center justify-between px-4 py-2.5 mx-2 rounded-lg text-sm text-gray-700 hover:bg-navy/5 hover:text-navy transition-colors font-medium border-l-2 border-transparent hover:border-gold cursor-default">
                                  <span className="group-hover/sub:translate-x-1 transition-transform duration-300">{link.name}</span>
                                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover/sub:text-navy" />
                                </div>
                                <div className="absolute top-0 left-full ml-1 w-56 bg-white/95 backdrop-blur-lg border border-gray-100 shadow-2xl rounded-xl z-50 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 origin-left">
                                  <div className="py-2 flex flex-col">
                                    {link.sublinks.map((sublink: any) => (
                                      <Link
                                        key={sublink.name}
                                        href={sublink.href}
                                        onClick={() => setActiveDesktopDropdown(null)}
                                        className="group flex items-center px-4 py-2.5 mx-2 rounded-lg text-sm text-gray-700 hover:bg-navy/5 hover:text-navy transition-colors font-medium border-l-2 border-transparent hover:border-gold"
                                      >
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{sublink.name}</span>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </>
                            ) : (
                              <Link 
                                href={link.href}
                                onClick={() => setActiveDesktopDropdown(null)}
                                className="group flex items-center px-4 py-2.5 mx-2 rounded-lg text-sm text-gray-700 hover:bg-navy/5 hover:text-navy transition-colors font-medium border-l-2 border-transparent hover:border-gold"
                              >
                                <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link 
              href="/admissions" 
              className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 ml-2 ${
                isScrolled || activeDesktopDropdown
                  ? 'bg-navy text-white hover:bg-gold hover:text-navy shadow-md' 
                  : 'bg-white text-navy hover:bg-gold hover:text-navy shadow-lg'
              }`}
            >
              Apply
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="relative z-50 lg:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${
              isScrolled || isMenuOpen || activeDesktopDropdown ? 'bg-navy' : 'bg-white'
            } ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${
              isScrolled || isMenuOpen || activeDesktopDropdown ? 'bg-navy' : 'bg-white'
            } ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-6 h-0.5 transition-all duration-300 ${
              isScrolled || isMenuOpen || activeDesktopDropdown ? 'bg-navy' : 'bg-white'
            } ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-24 px-6 overflow-y-auto"
          >
            <div className="max-w-2xl w-full mx-auto pb-24">
              <nav className="flex flex-col gap-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <Link 
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-4 text-3xl font-display font-black text-navy uppercase tracking-tighter border-b border-gray-100"
                  >
                    Home
                  </Link>
                </motion.div>

                {menuData.map((category, i) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (i * 0.05), duration: 0.4 }}
                    className="border-b border-gray-100"
                  >
                    <div className="w-full flex items-center justify-between py-4">
                      <Link 
                        href={category.href || '#'}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-3xl font-display font-black text-navy uppercase tracking-tighter"
                      >
                        {category.title}
                      </Link>
                      <button 
                        onClick={() => setActiveMobileCategory(activeMobileCategory === category.title ? null : category.title)}
                        className="p-2 -mr-2"
                      >
                        <ChevronDown className={`w-6 h-6 text-gold transition-transform duration-300 ${activeMobileCategory === category.title ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                    
                    <AnimatePresence>
                      {activeMobileCategory === category.title && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-3 pb-6 pl-4 mt-2">
                            {category.links.map((link: any) => (
                              <div key={link.name}>
                                {link.sublinks ? (
                                  <div className="flex flex-col">
                                    <div className="text-gray-500 font-bold uppercase tracking-wider text-sm py-2 mt-2 mb-1 border-b border-gray-100 flex items-center justify-between">
                                      {link.name}
                                      <ChevronDown className="w-4 h-4" />
                                    </div>
                                    <div className="flex flex-col gap-2 pl-4 border-l border-gray-200 ml-1.5 mt-1 pb-2">
                                      {link.sublinks.map((sublink: any) => (
                                        <Link 
                                          key={sublink.name} 
                                          href={sublink.href}
                                          onClick={() => setIsMenuOpen(false)}
                                          className="text-gray-500 font-medium hover:text-navy transition-colors text-base flex items-center py-1.5"
                                        >
                                          <div className="w-1.5 h-1.5 rounded-full bg-gold mr-3"></div>
                                          {sublink.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ) : (
                                  <Link 
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-gray-500 font-medium hover:text-navy transition-colors text-lg flex items-center py-2"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold mr-4"></div>
                                    {link.name}
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </nav>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-12 grid grid-cols-2 gap-4 bg-gray-50 p-6 rounded-2xl"
              >
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">Contact</h4>
                  <p className="text-sm font-medium text-navy break-all">info@sjmsm.org</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">Admissions</h4>
                  <Link href="/admissions" onClick={() => setIsMenuOpen(false)} className="text-gold font-bold text-sm uppercase flex items-center">
                    Apply Now <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
