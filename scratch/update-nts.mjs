import fs from 'fs';
import path from 'path';

const commFile = path.join(process.cwd(), 'src', 'data', 'about-committees.json');
let commData = JSON.parse(fs.readFileSync(commFile, 'utf8'));

// Remove old non-teaching staff
commData = commData.filter(m => m.category !== 'non-teaching-staff');

const newNonTeachingStaff = [
  { id: 'nts1', category: 'non-teaching-staff', name: 'Shri. B.C. Mahale', designation: 'O.S', qualifications: '12th Pass', experience: '13 Years' },
  { id: 'nts2', category: 'non-teaching-staff', name: 'Shri. V.N. Chaudhari', designation: 'Head Clerk', qualifications: '12th Pass', experience: '13 Years' },
  { id: 'nts3', category: 'non-teaching-staff', name: 'Shri. J.P. Chaudhari', designation: 'Sr. Clerk', qualifications: '12th Pass', experience: '13 Years' },
  { id: 'nts4', category: 'non-teaching-staff', name: 'Shri. P.N. Patil', designation: 'Sr. Clerk', qualifications: '12th Pass', experience: '11 Years' },
  { id: 'nts5', category: 'non-teaching-staff', name: 'Shri. P.B. Jamadar', designation: 'Jr. Clerk', qualifications: '12th Pass', experience: '16 Years' },
  { id: 'nts6', category: 'non-teaching-staff', name: 'Shri. P.M. Chaudhari', designation: 'Lab. Assit.', qualifications: '12th Pass', experience: '16 Years' },
  { id: 'nts7', category: 'non-teaching-staff', name: 'Shri. D.P. Zine', designation: 'Lib. Attent.', qualifications: 'B.A.', experience: '14 Years' },
  { id: 'nts8', category: 'non-teaching-staff', name: 'Shri. V.S. Parmar', designation: 'Lab. Attent.', qualifications: '12th Pass', experience: '16 Years' },
  { id: 'nts9', category: 'non-teaching-staff', name: 'Shri. B.E. Chaudhari', designation: 'Lab. Attent.', qualifications: 'B.Com', experience: '10 Years' },
  { id: 'nts10', category: 'non-teaching-staff', name: 'Sau. U.J. Chaudhari', designation: 'Lab. Attent.', qualifications: '7th', experience: '7 Years' },
  { id: 'nts11', category: 'non-teaching-staff', name: 'Shri. B.R. Vasave', designation: 'Peon', qualifications: '10th', experience: '17 Years' },
  { id: 'nts12', category: 'non-teaching-staff', name: 'Shri. V.R. Padavi', designation: 'Peon', qualifications: '12th Pass', experience: '16 Years' },
  { id: 'nts13', category: 'non-teaching-staff', name: 'Shri. B.R. Pawar', designation: 'Peon', qualifications: '12th Pass', experience: '16 Years' },
  { id: 'nts14', category: 'non-teaching-staff', name: 'Shri. J.S. Chaudhari', designation: 'Peon', qualifications: '12th Pass', experience: '16 Years' }
];

commData = [...commData, ...newNonTeachingStaff];
fs.writeFileSync(commFile, JSON.stringify(commData, null, 2));

console.log('Successfully updated non-teaching staff!');
