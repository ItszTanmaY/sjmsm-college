import CommitteeSection from '@/components/iqac/CommitteeSection';
import committeeData from '@/data/iqac-committees.json';

export default function ICCPage() {
  const members = committeeData.filter(m => m.category === 'icc');
  
  return (
    <CommitteeSection 
      title="Internal Complaint Committee (ICC)" 
      description="The Internal Complaint Committee is constituted to prevent sexual harassment of women at the workplace and to ensure a safe environment for female staff and students."
      members={members}
    />
  );
}
