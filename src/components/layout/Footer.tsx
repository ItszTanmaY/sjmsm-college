import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative lg:fixed bottom-0 left-0 w-full h-auto lg:h-[60vh] z-0 bg-navy text-white overflow-hidden">
      <div className="pt-24 pb-8 h-full flex flex-col justify-between relative">
        {/* Background large text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-5 pointer-events-none select-none overflow-hidden">
          <h1 className="text-[15vw] font-display font-black whitespace-nowrap leading-none tracking-tighter">SJMSM COLLEGE</h1>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-grow flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            <div className="space-y-6">
              <h3 className="text-3xl font-display font-bold text-gold">SJMSM</h3>
              <p className="text-gray-400 font-light leading-relaxed max-w-sm">
                Shaping the future through holistic education. An institution of excellence for the rural and tribal communities.
              </p>
              <div className="flex space-x-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors hover:-translate-y-1 transform duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors hover:-translate-y-1 transform duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors hover:-translate-y-1 transform duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-display font-medium text-white mb-6 tracking-wide">Explore</h4>
              <ul className="space-y-4">
                <li><Link href="/about" className="text-gray-400 hover:text-gold hover:ml-2 transition-all duration-300 font-light">About Us</Link></li>
                <li><Link href="/academics" className="text-gray-400 hover:text-gold hover:ml-2 transition-all duration-300 font-light">Academics</Link></li>
                <li><Link href="/admissions" className="text-gray-400 hover:text-gold hover:ml-2 transition-all duration-300 font-light">Admissions</Link></li>
                <li><Link href="/gallery" className="text-gray-400 hover:text-gold hover:ml-2 transition-all duration-300 font-light">Gallery</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-display font-medium text-white mb-6 tracking-wide">Information</h4>
              <ul className="space-y-4">
                <li><Link href="/naac" className="text-gray-400 hover:text-gold hover:ml-2 transition-all duration-300 font-light">NAAC</Link></li>
                <li><Link href="/iqac" className="text-gray-400 hover:text-gold hover:ml-2 transition-all duration-300 font-light">IQAC</Link></li>
                <li><Link href="/news" className="text-gray-400 hover:text-gold hover:ml-2 transition-all duration-300 font-light">Notice Board</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-gold hover:ml-2 transition-all duration-300 font-light">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-display font-medium text-white mb-6 tracking-wide">Contact</h4>
              <ul className="space-y-4 font-light text-gray-400">
                <li className="flex flex-col">
                  <span className="text-gold mb-1 text-sm uppercase tracking-wider">Address</span>
                  SJMSM's College, Khapar, <br/>Tal. Akkalkuwa, Nandurbar, <br/>Maharashtra 425419
                </li>
                <li className="flex flex-col pt-2">
                  <span className="text-gold mb-1 text-sm uppercase tracking-wider">Email</span>
                  <a href="mailto:info@sjmsmkhaparcollege.org" className="hover:text-white transition-colors">info@sjmsmkhaparcollege.org</a>
                </li>
              </ul>
            </div>

          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-white/10 pt-8 relative z-10 shrink-0">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-light">
            <p className="text-navy/50 font-medium text-center md:text-left mb-4 md:mb-0">
              &copy; 2026 SJMSM's Arts & Commerce Sr. & Jr. College. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
