import type {
  ContactLink,
  EducationItem,
  InspirationItem,
  NavItem,
  Project,
  SkillCategory,
  SkillNode,
} from '../types';

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Inspiration', href: '#inspiration' },
  { label: 'Contact', href: '#contact' },
];

export const metadata = [
  'SYSTEM_OK // NO_TEMPORAL_DRIFT',
  'LAT: 51.5074 N // LONG: 0.1278 W',
  'V.2.0.4 // STABLE_BUILD',
];

export const educationItems: EducationItem[] = [
  {
    year: '2025 — 2027',
    school: 'National University of Singapore',
    degree: 'Master of Computing',
    description:
      'Specializing in Artificial Intelligence. Research focus on generative models and human-AI interaction. Teaching assistant for courses on machine learning and data science.',
  },
  {
    year: '2017 — 2020',
    school: 'University of Illinois at Urbana-Champaign',
    degree: 'Master of Landscape Architecture',
    description:
      "Explored the intersection of urban design and digital fabrication. Thesis project on algorithmic urbanism, using generative design to optimize public spaces for social interaction.",
  },
  {
    year: '2013 — 2017 ',
    school: 'Huazhong Agricultural University',
    degree: 'Bachelor of Landscape Architecture',
    description:
      'Focused on sustainable design and ecological planning. Led a student project that won the national green design competition.',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    icon: '⚡',
    title: 'Development',
    items: ['Python', 'JavaScript / TypeScript', 'React / Next.js', 'Node.js', 'SQL / PostgreSQL', 'Git / GitHub'],
  },
  {
    icon: '◈',
    title: 'Machine Learning & AI',
    items: ['TensorFlow', 'PyTorch', 'NLP / Transformers'],
  },
  {
    icon: '◎',
    title: 'Design & Creative',
    items: ['Photoshop', 'Illustrator', 'Figma', 'After Effects', 'Blender 3D', 'Cinema 4D'],
  },
  {
    icon: '✦',
    title: 'Data & Cloud',
    items: ['AWS', 'Azure', 'Docker', 'Pandas / NumPy', 'Apache Spark'],
  },
];

export const skillNodes: SkillNode[] = [
  {
    id: 'node-engine',
    index: '01',
    title: 'Temporal Engines',
    description: 'Building robust backends with Node.js, Rust, and high-frequency data pipelines.',
  },
  {
    id: 'node-optic',
    index: '02',
    title: 'Optic Synthesis',
    description: 'Shader development, WebGL/Three.js, and generative visual architectures.',
  },
  {
    id: 'node-kinetic',
    index: '03',
    title: 'Kinetic UI',
    description: 'Micro-interactions, high-fidelity GSAP choreography, and physics-based UX.',
  },
  {
    id: 'node-core',
    index: '04',
    title: 'Core Alchemy',
    description: 'Creative direction, product strategy, and architectural mapping.',
  },
];

export const projects: Project[] = [
  {
    id: 'project-i',
    sequence: 'SEQUENCE // I',
    title: 'INSPIRA',
    description:
      'A rag',
    image: '/images/Inspira-jpg.jpg',
    imageAlt: 'Inspira Project',
    imageFit: 'cover',
    imagePosition: 'center 50%',
    tags: ['TypeScript', 'Python', 'GLSL'],
    overlayTags: ['RAG', 'MEMORYOS', 'Rust'],
    badges: ['Frontend', 'Data Viz'],
    skillKeys: ['creative', 'data'],
  },
  {
    id: 'project-ii',
    sequence: 'SEQUENCE // II',
    title: 'AI<br/>INTERVIEW',
    description:
      'Temporal data visualization for high-frequency trading platforms. Designed a bespoke UI system focused on cognitive load reduction and millisecond precision.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Chrono Project',
    tags: ['REACT', 'D3.JS', 'FRAMER'],
    overlayTags: ['React', 'D3.js', 'Framer'],
    badges: ['Frontend', 'Data Viz'],
    skillKeys: ['frontend', 'data'],
  },
  {
    id: 'project-iii',
    sequence: 'SEQUENCE // III',
    title: 'CR3O',
    description:
      "An immersive audio-visual installation exploring the concept of the digital afterlife. Uses procedural generation to create unique 'memory' shards for each visitor.",
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Void Project',
    tags: ['P5.JS', 'WEBAUDIO', 'OPENGL'],
    overlayTags: ['p5.js', 'WebAudio', 'OpenGL'],
    badges: ['Creative Coding', 'Immersive'],
    skillKeys: ['creative', 'immersive'],
  },
];

export const inspirationItems: InspirationItem[] = [
  {
    icon: '↗',
    title: 'Games I Played for 100+ Hours',
    description:
      'In those games, I put my whole heart and effort — dedicated into second homes.',
    image: '/images/game.jpg',
    imageAlt: 'Brutalist Design',
  },
  {
    icon: '◈',
    title: 'Fictions I Get Attached To',
    description:
      'Fiction only. Words can weigh more than visuals.',
    image: '/images/book.jpg',
    imageAlt: 'Industrial Design',
  },
  {
    icon: '⚡',
    title: 'Movies I Like and Make',
    description:
      'Not only enjoying movies but also stepping into the set myself, I see films from another perspective since then.',
    image: '/images/movie.jpg',
    imageAlt: 'Glitch Art',
  },
  {
    icon: '♪',
    title: 'Music I Keep on Repeat',
    description:
      'Do I keep up?',
    image: '/images/music.jpg',
    imageAlt: 'Club Culture',
  },
];

export const contactLinks: ContactLink[] = [
  { label: 'yan_liu@u.nus.edu', href: 'mailto:yan_liu@u.nus.edu' },
  { label: 'https://github.com/Young6-101', href: 'https://github.com/Young6-101' },
  { label: 'linkedin.com/in/yanliu', href: 'https://www.linkedin.com/in/yan-liu-9a2056347/' },
  { label: '@yanliu', href: 'https://twitter.com/yanliu' },
];
