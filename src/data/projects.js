import noteImg from '../image/noteImage.jpg'
import posImage from '../image/posImage.jpg'
import adanImage from '../image/adanImage.jpg'
import memoryImage from '../image/memoryImage.jpg'
import socialImage from '../image/socialImage.jpg'
import bloodImage from '../image/bloodImage.jpg'

export const projects = [
  {
    id: 'adan',
    title: 'Adan',
    category: 'fullstack',
    subtitle: 'Graduation Project (MERN)',
    description: 'A full MERN-stack graduation project where I owned the entire Front End, from architecture through UI using React.',
    stack: ['React', 'Node.js'],
    live: 'https://adan-animals.vercel.app', 
    repo: 'https://github.com/Elbedawy-dev/Adan-Animals.git', 
    featured: true,
    image: adanImage
  },
  {
    id: 'pos',
    title: 'POS System',
    category: 'fullstack',
    subtitle: 'Point of Sale Application (MERN Stack)',
    description: 'A full MERN-stack Point of Sale system handling products, orders, and authentication, refined through fixing 20+ production bugs.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://pos-system-commercial.vercel.app', 
    repo: 'https://github.com/Elbedawy-dev/POS_System.git', 
    featured: true,
    image: posImage
  },
  {
    id: 'notes',
    title: 'Notes App',
    category: 'fullstack',
    subtitle: 'Notes/Notepad Application (MERN Stack)',
    description: 'A full MERN-stack notes app with JWT authentication, pinned notes, Cloudinary uploads, and a dashboard tracking note statistics.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://notpad-flow.vercel.app',
    repo: 'https://github.com/Elbedawy-dev/NotPad.git',
    featured: true,
    image: noteImg
  },
  {
    id: 'flownet',
    title: 'FlowNet',
    category: 'fullstack',
    subtitle: 'Social Media Application (MERN Stack)',
    description: 'A React and Vite social media app using Clerk authentication, Framer Motion animations, and a responsive sidebar navigation.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: 'https://flownet-elbedawy.vercel.app',
    repo: 'https://github.com/Elbedawy-dev/FlowNet.git',
    image: socialImage
  },
  {
    id: 'nabdhayah',
    title: 'NabdHayah',
    category: 'fullstack',
    subtitle: 'Blood Donation Platform (MERN Stack)',
    description: 'A MERN-stack platform matching blood donors with recipients by nearest location, featuring geolocation search, notifications, and chat.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: '#',
    repo: '#',
    image: bloodImage
  },
  {
    id: 'memory',
    title: 'Memory Guess Game',
    category: 'frontend',
    subtitle: 'Browser Memory Game (Vanilla JS)',
    description: 'A browser-based memory matching game built with vanilla JavaScript, featuring flip animations, sound effects, and live score tracking.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    live: 'https://memorygame-image.vercel.app',
    repo: 'https://github.com/Elbedawy-dev/MemoryGame.git',
    image: memoryImage
  },
]