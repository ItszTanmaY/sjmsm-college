import CommitteeSection from '@/components/iqac/CommitteeSection';
import committeeData from '@/data/iqac-committees.json';
import docData from '@/data/statutory-documents.json';

export default function GrievancePage() {
  const members = committeeData.filter(m => m.category === 'grievance');
  const documents = (docData as any)['grievance'] || [];
  
  return (
    <CommitteeSection 
      title="College Grievance Redressal Cell (CGRC)" 
      description="The CGRC provides a mechanism for students to raise grievances related to academic and non-academic matters, ensuring quick and effective resolution."
      members={members}
      documents={documents}
    />
  );
}
