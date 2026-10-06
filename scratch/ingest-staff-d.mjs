import fs from 'fs';
import path from 'path';

// We now know the PDFs are in D:\MANAN\sjmsm-college\public\STAFFDOCS\teaching\senior
const staffDir = path.join(process.cwd(), 'public', 'STAFFDOCS', 'teaching', 'senior');
const commFile = path.join(process.cwd(), 'src', 'data', 'about-committees.json');

const files = fs.readdirSync(staffDir).filter(f => f.endsWith('.pdf'));

let commData = JSON.parse(fs.readFileSync(commFile, 'utf8'));
commData = commData.filter(m => m.category !== 'teaching-staff');

const titleCase = (str) => {
  return str.replace(/_/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
};

const newStaff = files.map((file, i) => {
  const rawName = file.replace(/\.pdf$/i, '');
  // Clean up things like "cv_Baisane_Sir" -> "Baisane Sir"
  let cleanName = titleCase(rawName).replace(/Cv /gi, '').trim();

  return {
    id: 'ts' + (i + 1),
    category: 'teaching-staff',
    name: cleanName,
    designation: 'Assistant Professor',
    qualifications: 'M.A., Ph.D.',
    experience: '10+ Years',
    // We add pdfUrl so we don't have to rename their files or guess lowercase logic
    pdfUrl: `/STAFFDOCS/teaching/senior/${file}`
  };
});

commData = [...commData, ...newStaff];
fs.writeFileSync(commFile, JSON.stringify(commData, null, 2));

console.log('Successfully ingested ' + files.length + ' teachers from PDFs!');
