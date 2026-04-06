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
    year: '2020 — 2022',
    school: 'Parsons School of Design',
    degree: 'MFA Design & Technology',
    description:
      'Focused on computational design, physical computing, and emerging media. Thesis explored real-time data visualization in public spaces.',
  },
  {
    year: '2016 — 2020',
    school: 'MIT',
    degree: 'BS Computer Science',
    description:
      "Specialized in human-computer interaction and graphics. Research assistant at the Media Lab's Future Opera group.",
  },
  {
    year: '2019',
    school: 'School of Machines, Making & Make-Believe',
    degree: 'Summer Residency',
    description:
      'Intensive program on creative coding and machine learning for artists. Developed procedural animation systems.',
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
    items: ['TensorFlow', 'PyTorch', 'scikit-learn', 'NLP / Transformers', 'Computer Vision', 'MLOps'],
  },
  {
    icon: '◎',
    title: 'Design & Creative',
    items: ['Photoshop', 'Illustrator', 'Figma', 'After Effects', 'Blender 3D', 'Cinema 4D'],
  },
  {
    icon: '✦',
    title: 'Data & Cloud',
    items: ['AWS / GCP', 'Docker', 'Pandas / NumPy', 'Tableau', 'Apache Spark', 'Kubernetes'],
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
    title: 'NEBULA<br/>PROTOCOL',
    description:
      'A decentralized visualization engine that maps interstellar data packets in real-time. Built with WebGL, Three.js, and custom GLSL shaders for star-field density.',
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Nebula Project',
    tags: ['THREE.JS', 'RUST', 'GLSL'],
    overlayTags: ['WebGL', 'GLSL', 'Rust'],
    badges: ['Creative Coding', 'Data Viz'],
    skillKeys: ['creative', 'data'],
  },
  {
    id: 'project-ii',
    sequence: 'SEQUENCE // II',
    title: 'CHRONO<br/>SYNAPSE',
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
    title: 'VOID<br/>RESONANCE',
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
