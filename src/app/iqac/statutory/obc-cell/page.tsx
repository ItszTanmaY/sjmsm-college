import CommitteeSection from '@/components/iqac/CommitteeSection';
import committeeData from '@/data/iqac-committees.json';
import docData from '@/data/statutory-documents.json';

export default function OBCCellPage() {
  const members = committeeData.filter(m => m.category === 'obc-cell');
  const documents = (docData as any)['obc-cell'] || [];
  
  return (
    <CommitteeSection 
      title="OBC Cell" 
      description="The OBC Cell provides guidance and counseling to OBC students, assisting them in accessing various government scholarships and educational schemes."
      members={members}
      documents={documents}
    />
  );
}
