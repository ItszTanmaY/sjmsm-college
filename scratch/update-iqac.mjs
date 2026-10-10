import fs from 'fs';
import path from 'path';

const commFile = path.join(process.cwd(), 'src', 'data', 'iqac-committees.json');
let commData = JSON.parse(fs.readFileSync(commFile, 'utf8'));

// We only want to keep other categories if they exist (like anti-ragging, grievance).
// We will replace iqac-committee, sc-st-cell, minority-cell, icc, obc-cell.
const categoriesToReplace = ['iqac-committee', 'sc-st-cell', 'minority-cell', 'icc', 'obc-cell'];
commData = commData.filter(m => !categoriesToReplace.includes(m.category));

const newCommittees = [
  // IQAC COMMITTEE
  { category: 'iqac-committee', name: 'Hon. Bapusaheb V.C. Chaudhari', role: 'Management Representative' },
  { category: 'iqac-committee', name: 'Prin. Dr. V.I. Girase', role: 'Ex-officio -chairman' },
  { category: 'iqac-committee', name: 'Dr. P.B. Ghante', role: 'Coordinator' },
  { category: 'iqac-committee', name: 'Dr. B.S. Patil', role: 'Teacher Representative' },
  { category: 'iqac-committee', name: 'Dr. R.D. Chaudhari', role: 'Teacher Representative' },
  { category: 'iqac-committee', name: 'Dr. V.B. Mali', role: 'Teacher Representative' },
  { category: 'iqac-committee', name: 'Prof. M.P. Suryawanshi', role: 'Teacher Representative' },
  { category: 'iqac-committee', name: 'Mr. B.C. Chaudhari', role: 'Non-Teaching Representative' },
  { category: 'iqac-committee', name: 'Smt. Manisha Kanatilal Chaudhari', role: 'Management - Member' },
  { category: 'iqac-committee', name: 'Abdul Karim Siddhiki', role: 'Social Worker Representative' },
  { category: 'iqac-committee', name: 'Vasave Prakash Kalusing', role: 'Student Representative' },
  { category: 'iqac-committee', name: 'Prin. Dr. Mahendra Raghuvanshi', role: 'External Expert -Representative' },
  { category: 'iqac-committee', name: 'Ku. Madhuri Ramakant Dhivre', role: 'Allumani Student' },

  // SC-ST
  { category: 'sc-st-cell', name: 'Prof. N.S. Tadvi', role: 'Co-ordinator' },
  { category: 'sc-st-cell', name: 'Prof. S.P. Baisane', role: 'Teacher Representative' },
  { category: 'sc-st-cell', name: 'Shri. B.C. Chaudhari', role: 'Non Teaching Representative' },
  { category: 'sc-st-cell', name: 'Shri. J.S. Chaudhari', role: 'Non Teaching Representative' },
  { category: 'sc-st-cell', name: 'Shri. Vijay Ramsing Padavi', role: 'Non Teaching Representative' },

  // Minority
  { category: 'minority-cell', name: 'Dr. V.I. Girase', role: 'Chairman' },
  { category: 'minority-cell', name: 'Prof. S.P. Baisane', role: 'Coordinator' },
  { category: 'minority-cell', name: 'Dr. G.P. Pathak', role: 'Teacher Representative' },
  { category: 'minority-cell', name: 'Shri. B.P. Jamadar', role: 'Non-Teaching Representative' },
  { category: 'minority-cell', name: 'Ku. Tejal Jain', role: 'Student Representative' },

  // ICC
  { category: 'icc', name: 'Dr. V.I. Girase', role: 'Chairman' },
  { category: 'icc', name: 'Dr. V.B. Mali', role: 'Co-Ordinator' },
  { category: 'icc', name: 'Dr. R.D. Chaudhari', role: 'Teacher Representative' },
  { category: 'icc', name: 'Prof. D.T. Surywanshi', role: 'Teacher Representative' },
  { category: 'icc', name: 'Shri. J.P. Chaudhari', role: 'Non Teaching Representative' },
  { category: 'icc', name: 'Miss Manisha K. Chaudhari', role: 'Women Representative' },
  { category: 'icc', name: 'Ku. Monika Vasave', role: 'Student Representative' },

  // OBC
  { category: 'obc-cell', name: 'Dr. G.P. Pathak', role: 'Co-Ordinator' },
  { category: 'obc-cell', name: 'Dr. R.D. Chaudhari', role: 'Teacher Representative' },
  { category: 'obc-cell', name: 'Shri. B.C. Chaudhari', role: 'Non Teaching Representative' },
  { category: 'obc-cell', name: 'Shri. J.P. Chaudhari', role: 'Non Teaching Representative' },
  { category: 'obc-cell', name: 'Ku. Kinjal Vikas Chaudhari', role: 'Student Representative' }
].map((item, index) => ({ id: `iqac_${index + 1}`, ...item }));

commData = [...commData, ...newCommittees];
fs.writeFileSync(commFile, JSON.stringify(commData, null, 2));

console.log('Successfully updated IQAC statutory committees!');
