const fs = require('fs');
const path = require('path');

const menu = [
  {
    title: 'About',
    links: [
      { name: 'About College', href: '/about' },
      { name: 'Governing Body', href: '/governing-body' },
      { name: 'Staff', href: '/staff' },
      { name: 'Affiliations & Reports', href: '/affiliations' },
    ]
  },
  {
    title: 'Academics',
    links: [
      { name: 'Courses Offered', href: '/academics' },
      { name: 'Admissions', href: '/admissions' },
      { name: 'Academic Calendar', href: '/academic-calendar' },
    ]
  },
  {
    title: 'NAAC',
    links: [
      { name: 'NAAC Information', href: '/naac' },
      { name: 'Documents & Certificates', href: '/naac/documents' },
    ]
  },
  {
    title: 'IQAC',
    links: [
      { name: 'IQAC Information', href: '/iqac' },
      { name: 'Statutory Committees', href: '/iqac/committees' },
    ]
  },
  {
    title: 'Campus',
    links: [
      { name: 'Facilities', href: '/facilities' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'News & Events', href: '/news' },
    ]
  },
  {
    title: 'Contact',
    links: [
      { name: 'Contact Us', href: '/contact' },
    ]
  }
];

const basePath = path.join(__dirname, 'src', 'app');

function createPageContent(title) {
  return `import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: '${title} | SJMSM College',
};

export default function Page() {
  return (
    <div className="pt-32 pb-24 min-h-[70vh] bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-sm font-bold tracking-widest uppercase text-gray-400 hover:text-gold mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-6xl font-display font-black text-navy mb-8 tracking-tighter">
          ${title}
        </h1>
        <div className="prose prose-lg max-w-none text-gray-600">
          <p>Content for ${title} will be updated soon. This is a placeholder for the premium redesign.</p>
        </div>
      </div>
    </div>
  );
}
`;
}

menu.forEach(category => {
  category.links.forEach(link => {
    if (link.href === '/') return;
    
    const dirPath = path.join(basePath, link.href);
    const filePath = path.join(dirPath, 'page.tsx');
    
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, createPageContent(link.name));
      console.log(`Created ${filePath}`);
    } else {
      console.log(`Skipped ${filePath} (exists)`);
    }
  });
});

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'menu.json'), JSON.stringify(menu, null, 2));
console.log('Done!');
