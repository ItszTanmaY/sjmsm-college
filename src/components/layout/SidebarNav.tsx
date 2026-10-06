'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Award, ChevronDown } from 'lucide-react';

interface SidebarNavProps {
  title: string;
  links: { name: string; href?: string; sublinks?: { name: string; href: string }[] }[];
  bottomLink?: { name: string; href: string };
}

export default function SidebarNav({ title, links, bottomLink }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <div className="sticky top-32 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">{title}</h3>
      <nav className="flex flex-col space-y-2">
        {links.map((link) => {
          // If it has sublinks but no main href, it's a category header
          if (link.sublinks && link.sublinks.length > 0) {
            const isSublinkActive = link.sublinks.some(sub => pathname === sub.href);
            return (
              <div key={link.name} className="flex flex-col space-y-1">
                <div className="flex items-center justify-between px-4 py-3 rounded-lg text-sm font-bold text-gray-500 uppercase tracking-wider mt-4 border-b border-gray-100">
                  {link.name}
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="flex flex-col space-y-1 pl-2">
                  {link.sublinks.map((sub) => {
                    const isStrictlyActive = pathname === sub.href;
                    return (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                          isStrictlyActive
                            ? 'bg-navy/10 text-navy font-bold shadow-sm border border-navy/10'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-navy'
                        }`}
                      >
                        {sub.name}
                        {isStrictlyActive && <ChevronRight className="w-4 h-4 text-navy" />}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          }

          if (!link.href) return null;
          
          const isStrictlyActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${
                isStrictlyActive
                  ? 'bg-navy text-white shadow-md'
                  : 'text-navy hover:bg-navy/5'
              }`}
            >
              {link.name}
              {isStrictlyActive && <ChevronRight className="w-4 h-4" />}
            </Link>
          );
        })}
      </nav>

      {bottomLink && (
        <div className="mt-8 pt-8 border-t border-gray-100">
          <Link href={bottomLink.href} className="group flex items-center justify-between px-4 py-3 rounded-lg text-sm font-bold text-gold bg-gold/10 hover:bg-gold hover:text-navy transition-all duration-300">
            {bottomLink.name}
            <Award className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </Link>
        </div>
      )}
    </div>
  );
}
