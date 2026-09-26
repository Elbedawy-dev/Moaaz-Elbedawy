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
    description: 'A full MERN Stack graduation project where I owned the entire Front End, from architecture through UI using React.',
    stack: ['React', 'Node.js'],
    live: 'https://adan-animals.vercel.app', 
    repo: 'https://github.com/Elbedawy-dev/Adan-Animals.git', 
    featured: true,
    image: adanImage
  },
  {
    title: 'POS System',
    category: 'fullstack',
    description: 'A full MERN Stack Point of Sale system handling products, orders, and authentication, refined through fixing 20+ production bugs.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://pos-system-commercial.vercel.app', 
    repo: 'https://github.com/Elbedawy-dev/POS_System.git', 
    featured: true,
    image: posImage
  },
  {
    title: 'Notes App',
    category: 'fullstack',
    description: 'A full MERN Stack notes app with JWT authentication, pinned notes, Cloudinary uploads, and a dashboard tracking note statistics.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://notpad-flow.vercel.app',
    repo: 'https://github.com/Elbedawy-dev/NotPad.git',
    featured: true,
    image: noteImg
  },
  {
    title: 'FlowNet',
    category: 'fullstack',
    description: 'A React and Vite social media app using Clerk authentication, Framer Motion animations, and a responsive sidebar navigation.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://flownet-elbedawy.vercel.app',
    repo: 'https://github.com/Elbedawy-dev/FlowNet.git',
    image: socialImage
  },
  {
    title: 'Memory Guess Game',
    category: 'frontend',
    description: 'A browser-based memory matching game built with vanilla JavaScript, featuring flip animations, sound effects, and live score tracking.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    live: 'https://memorygame-image.vercel.app',
    repo: 'https://github.com/Elbedawy-dev/MemoryGame.git',
    image: memoryImage
  },
  {
    title: 'NabdHayah',
    category: 'fullstack',
    description: 'A MERN Stack platform matching blood donors with recipients by nearest location, featuring geolocation search, notifications.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: '#',
    repo: '#',
    image: bloodImage
  },
]