'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

interface Member {
  name: string;
  designation: string;
  role: string;
}

interface Document {
  id: string;
  title: string;
  fileUrl: string;
  date: string;
}

interface CommitteeSectionProps {
  title: string;
  description?: string;
  members: Member[];
  documents?: Document[];
}

import DocumentCard from '@/components/ui/DocumentCard';

export default function CommitteeSection({ title, description, members, documents = [] }: CommitteeSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100"
    >
      <div className="w-16 h-16 bg-navy/5 text-navy rounded-full flex items-center justify-center mb-8">
        <Users className="w-8 h-8" />
      </div>
      <h2 className="text-3xl sm:text-4xl font-display font-black text-navy mb-6 tracking-tight">
        {title}
      </h2>
      
      {description && (
        <div className="prose prose-lg text-gray-600 max-w-none mb-12">
          <p>{description}</p>
        </div>
      )}

      {members.length > 0 ? (
        <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="py-4 px-6 text-sm font-bold text-navy uppercase tracking-wider">Sr. No.</th>
                <th className="py-4 px-6 text-sm font-bold text-navy uppercase tracking-wider">Name of Member</th>
                <th className="py-4 px-6 text-sm font-bold text-navy uppercase tracking-wider">Designation</th>
                <th className="py-4 px-6 text-sm font-bold text-navy uppercase tracking-wider">Role in Committee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {members.map((member, index) => (
                <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-6 text-sm text-gray-500 font-medium">{index + 1}</td>
                  <td className="py-4 px-6 text-sm text-navy font-bold">{member.name}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{member.designation}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      member.role.toLowerCase().includes('chairman') || member.role.toLowerCase().includes('coordinator') 
                      ? 'bg-gold/10 text-gold' 
                      : 'bg-navy/5 text-navy'
                    }`}>
                      {member.role}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200 mb-12">
          <p className="text-gray-500 font-medium">Committee members will be updated soon.</p>
        </div>
      )}

      {/* Documents Section */}
      {documents.length > 0 && (
        <div className="mt-16 border-t border-gray-100 pt-12">
          <h3 className="text-2xl font-display font-bold text-navy mb-8 flex items-center gap-3">
            Official Documents & Minutes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documents.map((doc) => (
              <DocumentCard
                key={doc.id}
                title={doc.title}
                href={doc.fileUrl}
                date={doc.date}
                size="PDF"
              />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
