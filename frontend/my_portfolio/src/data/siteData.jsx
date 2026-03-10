// ============================
// ALL DUMMY DATA IN ONE FILE
// ============================

export const personalInfo = {
  name: 'Darshan',
  lastName: 'Agrawal',
  roles: [
    'Full Stack Engineer',
    'React + Python Developer',
    'Remote-First Builder',
  ],
  bio: "I'm a full-stack engineer with 4+ years of experience building performant, scalable web applications. I thrive at the intersection of clean code and intuitive design, specializing in React ecosystems and Python backends.",
  email: 'darshanagrawal007@gmail.com',
  location: 'Seattle, WA (Remote)',
  resumeUrl: '/resume.pdf',
  socials: {
    github: 'https://github.com/darshan12-code/',
    linkedin: 'https://www.linkedin.com/in/darshan-agrawal-012/',
    twitter: 'https://twitter.com',
  },
};

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export const skills = [
  { name: 'React', icon: 'SiReact' },
  { name: 'Python', icon: 'SiPython' },
  { name: 'TypeScript', icon: 'SiTypescript' },
  { name: 'Node.js', icon: 'SiNodedotjs' },
  { name: 'PostgreSQL', icon: 'SiPostgresql' },
  { name: 'Docker', icon: 'SiDocker' },
  { name: 'AWS', icon: 'SiAmazonaws' },
  { name: 'Azure', icon: 'SiMicrosoftazure' },
  { name: 'GraphQL', icon: 'SiGraphql' },
  { name: 'Redis', icon: 'SiRedis' },
  { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
  { name: 'MongoDB', icon: 'SiMongodb' },
  { name: 'Flask', icon: 'SiFlask' },
  { name: 'D3.js', icon: 'SiD3Dotjs' },
  { name: 'Git', icon: 'SiGit' },
];

export const experience = [
  {
    id: 1,
    role: 'Full Stack Engineer',
    company: 'Rhombuz',
    location: 'Seattle, Remote',
    period: 'Feb 2023 – Present',
    description: 'Led development of real-time KPI dashboards, reducing manual reporting by 75%. Built scalable React + Flask microservices on Azure.',
    tech: ['React', 'Python', 'Azure', 'D3.js'],
  },
  {
    id: 2,
    role: 'Frontend Engineer',
    company: 'Rhombuz',
    location: 'Seattle, Remote',
    period: 'Dec 2021 – Jan 2023',
    description: 'Built interactive data visualization components and optimized page load times by 45% through code splitting and lazy loading.',
    tech: ['React', 'TypeScript', 'Redux', 'Chart.js'],
  },
  {
    id: 3,
    role: 'Software Intern',
    company: 'Western Coalfields Ltd',
    location: 'India',
    period: 'Jun 2020 – Aug 2020',
    description: 'Developed an internal inventory management tool, digitizing manual paper-based workflows for 200+ employees.',
    tech: ['Python', 'Django', 'PostgreSQL'],
  },
];

export const counters = [
  { value: 4, suffix: '+', label: 'Years Experience' },
  { value: 26, suffix: '', label: 'KPIs Built' },
  { value: 45, suffix: '%', label: 'Load Time Reduced' },
  { value: 75, suffix: '%', label: 'Manual Work Automated' },
];

export const projects = [
  {
    id: 'kpi-dashboard',
    title: 'KPI Analytics Dashboard',
    description: 'Real-time executive dashboard tracking 26 business KPIs with interactive D3.js visualizations and Azure-hosted Flask backend.',
    tags: ['React', 'D3.js', 'Flask', 'Azure'],
    category: 'fullstack',
    image: '/placeholder-project.png',
    link: '/case-studies/kpi-dashboard',
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'Full-stack marketplace with real-time inventory, Stripe payments, and admin analytics dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    category: 'fullstack',
    image: '/placeholder-project.png',
    link: '/case-studies/ecommerce-platform',
  },
  {
    id: 'ml-pipeline',
    title: 'ML Data Pipeline',
    description: 'Automated data ingestion and model training pipeline processing 2M+ records daily with real-time monitoring.',
    tags: ['Python', 'AWS', 'Docker', 'Redis'],
    category: 'backend',
    image: '/placeholder-project.png',
    link: '/case-studies/ml-pipeline',
  },
  {
    id: 'design-system',
    title: 'Component Design System',
    description: 'Reusable UI component library with 40+ components, Storybook docs, and automated visual regression testing.',
    tags: ['React', 'Storybook', 'CSS-in-JS'],
    category: 'frontend',
    image: '/placeholder-project.png',
    link: '/case-studies/design-system',
  },
  {
    id: 'chat-app',
    title: 'Real-Time Chat App',
    description: 'WebSocket-powered messaging app with typing indicators, read receipts, and file sharing.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    category: 'fullstack',
    image: '/placeholder-project.png',
    link: '/case-studies/chat-app',
  },
  {
    id: 'portfolio-v2',
    title: 'Portfolio Website v2',
    description: 'This portfolio — dark luxury theme with animated floating shapes, page transitions, and glassmorphism effects.',
    tags: ['React', 'Styled Components', 'Framer Motion'],
    category: 'frontend',
    image: '/placeholder-project.png',
    link: '/case-studies/portfolio-v2',
  },
];

export const aboutTraits = [
  { emoji: '🎨', label: 'Creative', description: 'Design-driven development' },
  { emoji: '🧠', label: 'Strategic', description: 'Scalable architecture thinking' },
  { emoji: '🛠', label: 'Builder', description: 'Ship fast, iterate faster' },
];

export const filterCategories = [
  { key: 'all', label: 'All' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
];
