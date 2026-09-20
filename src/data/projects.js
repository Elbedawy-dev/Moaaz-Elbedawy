import noteImg from '../image/noteImage.jpg'
import posImage from '../image/posImage.jpg'
import adanImage from '../image/adanImage.jpg'
import memoryImage from '../image/memoryImage.jpg'
import socialImage from '../image/socialImage.jpg'
import bloodImage from '../image/bloodImage.jpg'

export const projects = [
  {
    title: 'Adan',
    category: 'fullstack',
    description: 'Graduation project - a full MERN-stack application. Moaaz owned the entire Front End.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://adan-animals.vercel.app', 
    repo: 'https://github.com/Elbedawy-dev/Adan-Animals.git', 
    featured: true,
    image: adanImage
  },
  {
    title: 'POS System',
    category: 'fullstack',
    description: 'A Point of Sale application built with the MERN stack.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://pos-system-commercial.vercel.app', 
    repo: 'https://github.com/Elbedawy-dev/POS_System.git', 
    featured: true,
    image: posImage
  },
  {
    title: 'Notes App',
    category: 'fullstack',
    description: 'A notes/notepad application built with the MERN stack.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://notpad-flow.vercel.app',
    repo: 'https://github.com/Elbedawy-dev/NotPad.git',
    featured: true,
    image: noteImg
  },
  {
    title: 'FlowNet',
    category: 'fullstack',
    description: 'A front-end website design for a coffee brand.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    live: 'https://flownet-elbedawy.vercel.app',
    repo: 'https://github.com/Elbedawy-dev/FlowNet.git',
    image: socialImage
  },
  {
    title: 'Memory Guess Game',
    category: 'frontend',
    description: 'A browser-based memory/guessing game built with vanilla JavaScript.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    live: 'https://memorygame-image.vercel.app',
    repo: 'https://github.com/Elbedawy-dev/MemoryGame.git',
    image: memoryImage
  },
  {
    title: 'NabdHayah',
    category: 'fullstack',
    description: 'A front-end product design/landing page for a food brand.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    live: '#', 
    repo: '#', 
    image: bloodImage
  },
]
