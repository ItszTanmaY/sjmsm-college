import CommitteeSection from '@/components/iqac/CommitteeSection';
import committeeData from '@/data/iqac-committees.json';

export default function IQACCommitteePage() {
  const members = committeeData.filter(m => m.category === 'iqac-committee');
  
  return (
    <CommitteeSection 
      title="IQAC Committee" 
      description="The Internal Quality Assurance Cell Committee members."
      members={members}
    />
  );
}
