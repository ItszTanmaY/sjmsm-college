import React from 'react';
import PageHeader from '@/components/layout/PageHeader';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background pb-24">
      <PageHeader 
        title="Terms of Service" 
        subtitle="Website usage guidelines"
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
      />
      <section className="py-20 px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto">
        <div className="prose prose-lg text-gray-600">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials on SJMSM College's website for personal, non-commercial transitory viewing only.</p>
        </div>
      </section>
    </main>
  );
}
