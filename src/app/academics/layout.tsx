import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Academics',
  description: 'Explore the diverse UG and PG programs offered at SJMSM College across Arts and Commerce streams.',
};

export default function AcademicsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
