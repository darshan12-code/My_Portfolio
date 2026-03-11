// ============================================================
// siteData.js — Single source of truth for all portfolio data
// Darshan Agrawal | Full Stack Engineer
// Icons: react-icons/si — import { SiReact } from 'react-icons/si'
// ============================================================

export const personalInfo = {
  name: 'Darshan',
  lastName: 'Agrawal',
  roles: [
    'Full Stack Engineer',
    'React + Python Developer',
    'Remote-First Builder',
  ],
  bio: "Full Stack Engineer with 4+ years building performant, data-driven web apps. I specialize in React ecosystems and Python backends — from real-time KPI dashboards to automated data pipelines — with a sharp eye for clean code and intuitive design.",
  email: 'darshanagrawal007@gmail.com',
  location: 'India (Remote Worldwide)',
  resumeUrl: '/resume.pdf',
  socials: {
    github:   'https://github.com/darshan12-code/',
    linkedin: 'https://www.linkedin.com/in/darshan-agrawal-012/',
    twitter:  'https://twitter.com',
  },
};

export const navLinks = [
  { label: 'Home',         path: '/'            },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Blog',         path: '/blog'         },
  { label: 'Contact',      path: '/contact'      },
];

// ── Skills ──────────────────────────────────────────────────
// icon: string name of the Si* export from 'react-icons/si'
// Usage in component:
//   import * as SiIcons from 'react-icons/si';
//   const Icon = SiIcons[skill.icon];
//   <Icon />
export const skills = [
  { name: 'React.js',           icon: 'SiReact'             },
  { name: 'TypeScript',         icon: 'SiTypescript'        },
  { name: 'JavaScript',         icon: 'SiJavascript'        },
  { name: 'Python',             icon: 'SiPython'            },
  { name: 'Flask',              icon: 'SiFlask'             },
  { name: 'Node.js',            icon: 'SiNodedotjs'         },
  { name: 'Express.js',         icon: 'SiExpress'           },
  { name: 'Angular',            icon: 'SiAngular'           },
  { name: 'GraphQL',            icon: 'SiGraphql'           },
  { name: 'D3.js',              icon: 'SiD3Dotjs'           },
  { name: 'SCSS',               icon: 'SiSass'              },
  { name: 'PostgreSQL',         icon: 'SiPostgresql'        },
  { name: 'MySQL',              icon: 'SiMysql'             },
  { name: 'MongoDB',            icon: 'SiMongodb'           },
  { name: 'Azure Databricks',   icon: 'SiDatabricks'        },
  { name: 'Azure Data Factory', icon: 'SiMicrosoftazure'    },
  { name: 'Docker',             icon: 'SiDocker'            },
  { name: 'Git',                icon: 'SiGit'               },
  { name: 'Jira',               icon: 'SiJira'              },
  { name: 'Pandas',             icon: 'SiPandas'            },
];

// ── Experience ───────────────────────────────────────────────
export const experience = [
  {
    id: 1,
    role: 'Full Stack Engineer',
    company: 'Rhombuz',
    location: 'Remote — Seattle, USA',
    period: 'Feb 2023 – Present',
    description:
      'Led full-stack delivery of a real-time KPI dashboard visualizing 26 metrics with D3.js graphs. Automated telecom data workflows processing 16+ public records, cutting PDF processing time by 70%. Optimized API performance, reduced query latency, and mentored junior developers.',
    tech: ['React', 'Python', 'Flask', 'Azure Databricks', 'Azure Data Factory', 'D3.js', 'PostgreSQL', 'MySQL'],
  },
  {
    id: 2,
    role: 'Frontend Engineer',
    company: 'Rhombuz',
    location: 'Remote — Seattle, USA',
    period: 'Dec 2021 – Jan 2023',
    description:
      'Reduced dashboard load times by 45% through architecture optimization and code splitting. Redesigned UI components for cross-platform compatibility. Delivered 3+ key frontend projects and improved feature rollout speed by 30%.',
    tech: ['React', 'TypeScript', 'Angular', 'SCSS', 'D3.js', 'GraphQL'],
  },
  {
    id: 3,
    role: 'System Engineer Intern',
    company: 'Western Coalfields Ltd.',
    location: 'Chandrapur, India',
    period: 'Jun 2021 – Sep 2021',
    description:
      'Built a full-stack PHP tool to monitor equipment breakdown and system status for the GM Office, digitizing manual paper-based workflows.',
    tech: ['PHP', 'MySQL'],
  },
];

// ── Counters ─────────────────────────────────────────────────
// All values directly sourced from resume bullet points.
// "26 KPIs" = metrics built for the telecom dashboard project at Rhombuz.
// Full project context lives in Case Studies.
export const counters = [
  { value: 4,  suffix: '+', label: 'Years Experience'       },
  // { value: 26, suffix: '',  label: 'KPIs Shipped'           },
  { value: 45, suffix: '%', label: 'Load Time Reduced'      },
  { value: 70, suffix: '%', label: 'Faster PDF Processing'  },
];

// ── About Traits (flip cards) ────────────────────────────────
export const aboutTraits = [
  {
    emoji: '🎨',
    label: 'Creative',
    description: 'Clay, paint & digital art — design thinking runs deep.',
  },
  {
    emoji: '🧠',
    label: 'Strategic',
    description: 'Architecture first, syntax second. Systems that scale.',
  },
  {
    emoji: '🛠',
    label: 'Builder',
    description: 'Ship fast, iterate faster.',
  },
];

// ── Filter Categories (Case Studies page) ───────────────────
export const filterCategories = [
  { key: 'all',       label: 'All'        },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'frontend',  label: 'Frontend'   },
  { key: 'backend',   label: 'Backend'    },
];