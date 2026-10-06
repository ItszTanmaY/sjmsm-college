import CommitteeSection from '@/components/iqac/CommitteeSection';
import committeeData from '@/data/iqac-committees.json';
import docData from '@/data/statutory-documents.json';

export default function MinorityCellPage() {
  const members = committeeData.filter(m => m.category === 'minority-cell');
  const documents = (docData as any)['minority-cell'] || [];
  
  return (
    <CommitteeSection 
      title="Minority Cell" 
      description="The Minority Cell empowers minority students by providing guidance, support, and awareness about various scholarships and schemes offered by the State and Central Government."
      members={members}
      documents={documents}
    />
  );
}
