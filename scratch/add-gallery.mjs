import fs from 'fs';
import path from 'path';

const commFile = path.join(process.cwd(), 'src', 'data', 'gallery.json');
let commData = JSON.parse(fs.readFileSync(commFile, 'utf8'));

const newImages = [
  {
    id: "11",
    src: "/images/gallery/new1.jpeg",
    alt: "New Gallery Image 1",
    category: "Events",
    span: ""
  },
  {
    id: "12",
    src: "/images/gallery/new2.jpeg",
    alt: "New Gallery Image 2",
    category: "Events",
    span: ""
  },
  {
    id: "13",
    src: "/images/gallery/new3.jpeg",
    alt: "New Gallery Image 3",
    category: "Events",
    span: ""
  }
];

commData = [...commData, ...newImages];
fs.writeFileSync(commFile, JSON.stringify(commData, null, 2));

console.log('Successfully added new1, new2, and new3 to gallery!');
