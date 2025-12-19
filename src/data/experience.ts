import { Experience } from 'types';
import eohhs from './images/eohhs.png';
import neaq from './images/neaq.jpg';
import oct from './images/IMG_9879.png';
import turtle from './images/IMG_9784.JPG';
import cv from './images/cv.png';

export const EXPERIENCE: Experience[] = [
{
role: 'AI Software Engineer',
org: 'Commonwealth of Massachusetts',
time: 'Aug 2025 – Oct 2025',
points: [
'Built TypeScript features for a large-scale chatbot to improve user interaction.',
'Contributed Python services and integrated with AWS for deployments.',
'Authored technical docs for workflows, APIs, and deployment.',
'Led integration testing: test plans, scripts, validation.',
],
stack: ['TypeScript', 'Python', 'AWS', 'CI/CD'],
images: [
  { src: eohhs, alt: "blank1" }
],
},
{
role: 'Information & Technology Intern',
org: 'New England Aquarium',
time: 'May 2025 – Aug 2025',
points: [
'Performed Wi‑Fi heat mapping to optimize coverage.',
'Handled remote software installs/updates with security focus.',
],
stack: ['Networking', 'Scripting', 'Endpoint Mgmt'],
images: [
  { src: neaq, alt: "blank1" },
  { src: oct, alt: "blank2" },
  { src: turtle, alt: "blank3" }
],
},
{
role: 'AI Research Assistant',
org: 'BU AI & Assistive Technologies Lab',
time: 'Feb 2025 – May 2025',
points: [
'Optimized AI navigation instructions for visually impaired users.',
'Collaborated to increase model efficiency and accuracy.',
],
stack: ['Python', 'ML', 'Evaluation'],
images: [
  { src: cv, alt: "blank1" }
],
},
{
role: 'IT Support Specialist',
org: 'Boston University IT Help Center',
time: 'Feb 2024 – Present',
points: [
'In‑person Mac/Windows support; >1000 customers/semester aided.',
'Increased resolved ticket rate by ~10% since joining.',
'Process improvements via team communication and SOP updates.',
],
stack: ['Troubleshooting', 'Customer Support', 'SOPs'],
},
{
role: 'Software Engineer Intern',
org: 'Korembi International',
time: 'Jun 2024 – Aug 2024',
points: [
'Designed and debugged React frontend & backend features.',
'Improved UI/UX in a 3‑person team; contributed to LLM training.',
],
stack: ['React', 'Node.js', 'LLM'],
},
];