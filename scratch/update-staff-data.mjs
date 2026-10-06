import fs from 'fs';
import path from 'path';

const commFile = path.join(process.cwd(), 'src', 'data', 'about-committees.json');
let commData = JSON.parse(fs.readFileSync(commFile, 'utf8'));

// Remove all teaching staff
commData = commData.filter(m => m.category !== 'teaching-staff');

const staffData = [
  {
    id: 'ts1',
    category: 'teaching-staff',
    name: 'Dr. Vijaysing Indrasing Girase',
    designation: 'Principal',
    qualifications: 'M.Com, M.Phil, Ph.D.',
    experience: 'Since 2021',
    subject: 'Business & Management',
    pdfUrl: '/STAFFDOCS/teaching/senior/cv_V.I. Girase_principal.pdf'
  },
  {
    id: 'ts2',
    category: 'teaching-staff',
    name: 'Dr. B.S. Patil',
    designation: 'Assistant Professor',
    qualifications: 'M.A., B.Ed., M.Phil., Ph.D.',
    experience: 'Since 1997',
    subject: 'Geography',
    pdfUrl: '/STAFFDOCS/teaching/senior/cv_Dr_BS_Patil.pdf'
  },
  {
    id: 'ts3',
    category: 'teaching-staff',
    name: 'Dr. R.D. Chaudhari',
    designation: 'Assistant Professor',
    qualifications: 'M.A., B.Ed., Ph.D.',
    experience: 'Since 1997',
    subject: 'History',
    pdfUrl: '/STAFFDOCS/teaching/senior/cv_RD_Chaudhari.pdf'
  },
  {
    id: 'ts4',
    category: 'teaching-staff',
    name: 'Prof. V.B. Mali',
    designation: 'Assistant Professor',
    qualifications: 'M.A., B.Ed., SET',
    experience: 'Since 1999',
    subject: 'Defence Study',
    pdfUrl: '/STAFFDOCS/teaching/senior/cv_Dr_VB_Mali.pdf'
  },
  {
    id: 'ts5',
    category: 'teaching-staff',
    name: 'Prof. M.P. Suryawanshi',
    designation: 'Assistant Professor',
    qualifications: 'M.A., B.Ed., M.Phil.',
    experience: 'Since 1999',
    subject: 'English',
    pdfUrl: '/STAFFDOCS/teaching/senior/Prof. M.P. Suryavanshi.pdf'
  },
  {
    id: 'ts6',
    category: 'teaching-staff',
    name: 'Prof. G.P. Pathak',
    designation: 'Assistant Professor',
    qualifications: 'M.A., Ph.D.',
    experience: 'Since 2001',
    subject: 'Marathi',
    pdfUrl: '/STAFFDOCS/teaching/senior/cv_Pathak_Sir.pdf'
  },
  {
    id: 'ts7',
    category: 'teaching-staff',
    name: 'Prof. D.T. Suryawanshi',
    designation: 'Physical Director',
    qualifications: 'B.A., M.P.Ed.',
    experience: 'Since 2001',
    subject: 'Physical Education',
    pdfUrl: '/STAFFDOCS/teaching/senior/cv_DT_Suryawanshi.pdf'
  },
  {
    id: 'ts8',
    category: 'teaching-staff',
    name: 'Prof. S.P. Baisane',
    designation: 'Assistant Professor',
    qualifications: 'M.A., B.Ed.',
    experience: 'Since 2001',
    subject: 'Economics',
    pdfUrl: '/STAFFDOCS/teaching/senior/cv_Baisane_Sir.pdf'
  },
  {
    id: 'ts9',
    category: 'teaching-staff',
    name: 'Prof. N.S. Tadavi',
    designation: 'Lecturer',
    qualifications: 'M.A.',
    experience: 'Since 2001',
    subject: 'Hindi',
    pdfUrl: '/STAFFDOCS/teaching/senior/cv_Tadavi_Sir.pdf'
  },
  {
    id: 'ts10',
    category: 'teaching-staff',
    name: 'Prof. P.B. Ghante',
    designation: 'Librarian',
    qualifications: 'MA, M.Lib. & I.Sc., NET, SET, M.Phil, DCM, GDC&A',
    experience: 'Since 2015',
    subject: 'Library Science',
    pdfUrl: '/STAFFDOCS/teaching/senior/cv_PB_Ghante.pdf'
  }
];

commData = [...commData, ...staffData];
fs.writeFileSync(commFile, JSON.stringify(commData, null, 2));

console.log('Successfully updated teaching staff with correct designations and subjects!');
