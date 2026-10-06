import CommitteeSection from '@/components/iqac/CommitteeSection';
import committeeData from '@/data/iqac-committees.json';
import docData from '@/data/statutory-documents.json';

export default function AntiRaggingPage() {
  const members = committeeData.filter(m => m.category === 'anti-ragging');
  const documents = (docData as any)['anti-ragging'] || [];
  
  return (
    <CommitteeSection 
      title="Anti-Ragging Committee" 
      description="The Anti-Ragging Committee ensures strict compliance with the UGC regulations on curbing the menace of ragging in higher educational institutions."
      members={members}
      documents={documents}
    />
  );
}
