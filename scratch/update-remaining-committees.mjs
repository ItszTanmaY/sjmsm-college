import fs from 'fs';
import path from 'path';

const commFile = path.join(process.cwd(), 'src', 'data', 'iqac-committees.json');
let commData = JSON.parse(fs.readFileSync(commFile, 'utf8'));

// Remove the old anti-ragging and grievance committees
const categoriesToReplace = ['anti-ragging', 'grievance'];
commData = commData.filter(m => !categoriesToReplace.includes(m.category));

const newCommittees = [
  // Anti-Ragging Committee
  { category: 'anti-ragging', name: 'Prof. D.T. Suryawanshi', role: 'Co-coordinator' },
  { category: 'anti-ragging', name: 'Shri. B.C. Chaudhari', role: 'Non-Teaching Representative' },
  { category: 'anti-ragging', name: 'Miss. Anita Padvi', role: 'Teacher Representative' },
  { category: 'anti-ragging', name: 'Ku. Kinjal Vikas Chaudhari', role: 'Student Representative' },

  // Grievance Redressal Committee
  { category: 'grievance', name: 'Dr. R.D. Chaudhari', role: 'Coordinator' },
  { category: 'grievance', name: 'Dr. B.S. Patil', role: 'Teacher representative' },
  { category: 'grievance', name: 'Prof. D.T. Surywanshi', role: 'Teacher representative' },
  { category: 'grievance', name: 'Prof. N.S. Tadvi', role: 'Teacher representative' },
  { category: 'grievance', name: 'Shri. B.C. Chaudhari', role: 'Non teaching representative' }
].map((item, index) => ({ id: `new_stat_${index + 1}`, ...item }));

commData = [...commData, ...newCommittees];
fs.writeFileSync(commFile, JSON.stringify(commData, null, 2));

console.log('Successfully added Anti-Ragging and Grievance committees!');
