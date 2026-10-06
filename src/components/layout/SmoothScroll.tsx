'use client';

import { ReactLenis, useLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (lenisRef.current?.lenis) {
      const lenis = lenisRef.current.lenis;
      
      const triggerResize = () => {
        lenis.resize();
      };

      // Call resize at multiple intervals to account for lazy loaded images and framer-motion layout shifts
      const timers = [
        setTimeout(triggerResize, 100),
        setTimeout(triggerResize, 500),
        setTimeout(triggerResize, 1000),
        setTimeout(triggerResize, 2000),
      ];

      // Handle hash scrolling for anchors (like /about#vision-mission) on initial load
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            lenis.scrollTo(element, { offset: -120, duration: 1.5 });
          }
        }, 300);
      } else {
        // If no hash, make sure we are at top on route change
        lenis.scrollTo(0, { immediate: true });
      }

      return () => {
        timers.forEach(clearTimeout);
      };
    }
  }, [pathname]);

  // Global click handler for anchor links to intercept them and scroll smoothly
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      
      // If it's a hash link on the current page (e.g. /about#vision to /about#vision)
      if (href && href.includes('#')) {
        const hash = href.substring(href.indexOf('#'));
        
        // Only intercept if we are already on the page where the hash belongs,
        // or if it's just a raw hash
        const path = href.split('#')[0];
        if (path === '' || path === pathname) {
          const element = document.querySelector(hash);
          if (element && lenisRef.current?.lenis) {
            e.preventDefault();
            // Update URL without scrolling natively
            window.history.pushState(null, '', href);
            lenisRef.current.lenis.scrollTo(element, { offset: -120, duration: 1.5 });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [pathname]);

  return (
    <ReactLenis ref={lenisRef} root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
