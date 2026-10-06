import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import SidebarNav from '@/components/layout/SidebarNav';
import menuData from '@/data/menu.json';

export default function NAACLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Find the NAAC section from menu.json
  const naacMenu = menuData.find(item => item.title === 'NAAC');
  const naacLinks = naacMenu ? naacMenu.links : [];

  return (
    <main className="min-h-screen bg-background pb-24">
      <PageHeader 
        title="NAAC Portal" 
        subtitle="National Assessment and Accreditation Council"
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-12 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <div className="lg:w-1/4 shrink-0">
            <SidebarNav 
              title="NAAC Portal" 
              links={naacLinks} 
              bottomLink={{ name: "Other Documents", href: "/naac/documents" }}
            />
          </div>

          {/* Main Content Area */}
          <div className="lg:w-3/4 min-h-[500px]">
            {children}
          </div>
          
        </div>
      </section>
    </main>
  );
}
