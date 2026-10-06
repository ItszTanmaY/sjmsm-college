import CommitteeSection from '@/components/iqac/CommitteeSection';
import committeeData from '@/data/iqac-committees.json';
import docData from '@/data/statutory-documents.json';

export default function SCSTCellPage() {
  const members = committeeData.filter(m => m.category === 'sc-st-cell');
  const documents = (docData as any)['sc-st-cell'] || [];
  
  return (
    <CommitteeSection 
      title="Committee for SC/ST" 
      description="The SC/ST Cell ensures the effective implementation of reservation policies and provides a safe and supportive environment for students and staff belonging to Scheduled Castes and Scheduled Tribes."
      members={members}
      documents={documents}
    />
  );
}
