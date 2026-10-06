import React from 'react';
import PageHeader from '@/components/layout/PageHeader';
import SidebarNav from '@/components/layout/SidebarNav';
import menuData from '@/data/menu.json';

export default function IQACLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Find the IQAC section from menu.json
  const iqacMenu = menuData.find(item => item.title === 'IQAC');
  const iqacLinks = iqacMenu ? iqacMenu.links : [];

  return (
    <main className="min-h-screen bg-background pb-24">
      <PageHeader 
        title="IQAC Portal" 
        subtitle="Internal Quality Assurance Cell"
        image="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-12 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <div className="lg:w-1/4 shrink-0">
            <SidebarNav 
              title="IQAC Portal" 
              links={iqacLinks} 
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
