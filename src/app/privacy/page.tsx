import React from 'react';
import PageHeader from '@/components/layout/PageHeader';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background pb-24">
      <PageHeader 
        title="Privacy Policy" 
        subtitle="How we handle your data"
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
      />
      <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto">
        <div className="prose prose-lg text-gray-600">
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us when you fill out forms on our website.</p>
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to communicate with you, process admissions, and improve our services.</p>
        </div>
      </section>
    </main>
  );
}
