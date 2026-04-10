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
  { label: 'Previous Work', href: '#previous-work' },
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
    items: ['Hugging Face', 'PyTorch', 'NLP / Transformers'],
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
    title: 'System Architecture',
    description: 'Designing scalable backend systems, modular APIs, and production-ready service flows.',
  },
  {
    id: 'node-optic',
    index: '02',
    title: 'Visual Direction',
    description: 'Crafting cohesive visual language through typography, color systems, and digital art composition.',
  },
  {
    id: 'node-kinetic',
    index: '03',
    title: 'Interactive Experience',
    description: 'Building smooth motion, purposeful interactions, and responsive interfaces with modern frontend tools.',
  },
  {
    id: 'node-core',
    index: '04',
    title: 'AI & Creative Workflow',
    description: 'Integrating AI pipelines into concept development, content generation, and iterative design workflows.',
  },
];

export const projects: Project[] = [
  {
    id: 'project-i',
    sequence: 'SEQUENCE // I',
    title: 'INSPIRA',
    description:
      'A creative exploration tool that transforms scattered inputs into structured insight. Users upload fragments—images, text, references—and Inspira leverages AI to detect patterns, surface connections, and guide ideas from chaos to clarity.',
    liveUrl: 'https://inspira.innospace.dev/',
    image: '/images/Inspira-jpg.jpg',
    imageAlt: 'Inspira Project',
    imageFit: 'cover',
    imagePosition: 'center 50%',
    gallery: [
      {
        src: '/images/inspira_archive.png',
        alt: 'Inspira archive page',
        caption: 'Archive panel preview',
      },
      {
        src: '/images/inspira_main.png',
        alt: 'Inspira main page',
        caption: 'Main interface and visual layer',
      },
    ],
    tags: ['REACT', 'TYPESCRIPT', 'RAG', 'FASTAPI'],
    overlayTags: ['Idea Graph', 'Memory OS', 'AI Agent'],
    badges: ['Product', 'Frontend', 'Backend', 'AI'],
    skillKeys: ['frontend', 'data', 'creative'],
  },
  {
    id: 'project-ii',
    sequence: 'SEQUENCE // II',
    title: 'AI<br/>INTERVIEW',
    description:
      'An AI-assisted interview platform designed to simulate realistic interview scenarios and support reflective learning. It provides dynamic questioning, real-time feedback, and post-interview analysis to help users refine both thinking and communication.',
    liveUrl: 'https://innospace.dev/',
    image: '/images/ai-interview.png',
    imageAlt: 'AI-Interview Project',
    imagePosition: 'left',
    gallery: [
      {
        src: '/images/ai-interview.png',
        alt: 'AI Interview dashboard',
        caption: 'Interview dashboard overview',
      },
      // {
      //   src: '/images/book.jpg',
      //   alt: 'AI Interview report view',
      //   caption: 'Results report panel',
      // },
    ],
    tags: ['REACT', 'TYPESCRIPT', 'PYTHON', 'LANGCHAIN'],
    overlayTags: ['Interview Sim', 'Realtime Feedback', 'Coach AI'],
    badges: ['Frontend', 'Backend', 'AI', 'UX'],
    skillKeys: ['frontend', 'data', 'creative'],
  },
  {
    id: 'project-iii',
    sequence: 'SEQUENCE // III',
    title: 'CR3O',
    description:
      "A generative design experiment that blends algorithmic thinking with visual expression. Cr3o explores how systems, rules, and randomness can co-create evolving forms, turning creation into an interactive and iterative process.",
    liveUrl: 'https://example.com/cr3o',
    image: '/images/creo.jpg',
    imageAlt: 'CR3O Project',
    imageFit: 'cover',
    imagePosition: 'right',
    imageScale: 1,
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
        alt: 'CR3O installation frame',
        caption: 'Hero visual frame',
      },
      {
        src: '/images/movie.jpg',
        alt: 'CR3O process snapshot',
        caption: 'Process snapshot (replace with your real screenshot)',
      },
    ],
    tags: ['P5.JS', 'WEBAUDIO', 'OPENGL', 'THREE.JS'],
    overlayTags: ['Generative', 'Realtime Visuals', 'Interactive'],
    badges: ['Creative Coding', 'Immersive', 'Experimental'],
    skillKeys: ['creative', 'immersive', 'frontend'],
  },

  {
    id: 'project-iv',
    sequence: 'SEQUENCE // IV',
    title: 'MEMESENSE',
    description:
      'MemeSense studies a key question: when does meme understanding actually require external knowledge? Instead of only recognizing what appears in an image, it models how meaning is constructed. The system learns to decide when outside knowledge is necessary and retrieves it only when useful, producing interpretations that are more accurate, informative, and faithful.',
    liveUrl: 'https://example.com/memesense',
    image: '/images/meme.png',
    imageAlt: 'MemeSense Project',
    imageFit: 'cover',
    imagePosition: 'center',
    imageScale: 1,
    gallery: [
      {
        src: '/images/memesense.jpg',
        alt: 'MemeSense system overview',
        caption: 'System overview (replace with your project figure)',
      },
      {
        src: '/images/meme.jpg',
        alt: 'MemeSense explanation sample',
        caption: 'Reasoning sample (replace with your real screenshot)',
      },
    ],
    tags: ['MULTIMODAL', 'VLM', 'RAG', 'EVALUATION'],
    overlayTags: ['Conditional Knowledge', 'Structured Explanation', 'Faithful Output'],
    badges: ['Research', 'NLP', 'Multimodal', 'AI'],
    skillKeys: ['data', 'ai', 'research'],
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
    gallery: [
      { src: '/images/game/2077.jpg', alt: 'Cyberpunk 2077', caption: 'Moodboard frame 01' },
      { src: '/images/game/the witcher.jpg', alt: 'The witcher', caption: 'Moodboard frame 02' },
      { src: '/images/game/assassin.jpg', alt: 'Assassin\'s creed', caption: 'Moodboard frame 03' },
      { src: '/images/game/fallout4.jpg', alt: 'Fallout 4', caption: 'Moodboard frame 03' },
      { src: '/images/game/tombraider.jpg', alt: 'Tomb Raider', caption: 'Moodboard frame 03' },
      { src: '/images/game/devil.jpg', alt: 'Devil May Cry 5', caption: 'Moodboard frame 03' },
      { src: '/images/game/stardew.jpg', alt: 'Stardew Valley', caption: '600+ hours OMG, probably won\'t open it again for the rest of my life LOL' },
    ],
  },
  {
    icon: '◈',
    title: 'Fictions I Get Attached To',
    description:
      'Fiction only. Words can weigh more than visuals.',
    image: '/images/book.jpg',
    imageAlt: 'Industrial Design',
    gallery: [
      { src: '/images/book/annihilation.jpg', alt: 'Annihilation', caption: 'Reading archive 01' },
      { src: '/images/book/sympathizer-book.jpg', alt: 'The Sympathizer', caption: 'Reading archive 02' },
      { src: '/images/book/lordoftherings.jpg', alt: 'Lord of the Rings', caption: 'Reading archive 03' },
      { src: '/images/book/the scar.jpg', alt: 'The Scar', caption: 'Reading archive 03' },
      { src: '/images/book/White_Noise.jpg', alt: 'White Noise', caption: 'Reading archive 04' },
    ],
  },
  {
    icon: '⚡',
    title: 'Movies I Like and Make',
    description:
      'Not only enjoying movies but also stepping into the set myself, I see films from another perspective since then.',
    image: '/images/movie.jpg',
    imageAlt: 'Glitch Art',
    gallery: [
      { src: '/images/movie/arrival.jpg', alt: 'Arrival', caption: 'Film frame 03' },
      { src: '/images/movie/bladerunner.jpg', alt: 'Blade Runner', caption: 'Film frame 02' },
      { src: '/images/movie/sicario.jpg', alt: 'Sicario', caption: 'Film frame 03' },
      { src: '/images/movie/2049.jpg', alt: 'Blade Runner 2049', caption: 'Film frame 03' },
      { src: '/images/movie/matrix.jpg', alt: 'The Matrix', caption: 'Film frame 04' },
      { src: '/images/movie/socialnetwork.jpg', alt: 'The Social Network', caption: 'Film frame 03' },
      { src: '/images/movie/ghost in the shell.jpg', alt: 'Ghost in the shell', caption: 'Film frame 03' },
      { src: '/images/movie/sympathizer-serires.jpg', alt: 'The Sympathizer', caption: 'Film frame 01' },
      { src: '/images/movie/lotr.jpg', alt: 'Lord of the Rings', caption: 'Film frame 03' },
      { src: '/images/movie/ninjia.jpg', alt: 'Ninja Scroll', caption: 'Film frame 04' },
    ],
  },
  {
    icon: '♪',
    title: 'Music I Keep on Repeat',
    description:
      'Do I keep up?',
    image: '/images/music.jpg',
    imageAlt: 'Club Culture',
    gallery: [
      { src: '/images/music.jpg', alt: 'Music still 1', caption: 'Listening archive 01' },
      { src: '/images/movie.jpg', alt: 'Music still 2', caption: 'Listening archive 02' },
      { src: '/images/book.jpg', alt: 'Music still 3', caption: 'Listening archive 03' },
    ],
  },
];

export const contactLinks: ContactLink[] = [
  { label: 'yan_liu@u.nus.edu', href: 'mailto:yan_liu@u.nus.edu' },
  { label: 'https://github.com/Young6-101', href: 'https://github.com/Young6-101' },
  { label: 'linkedin.com/in/yanliu', href: 'https://www.linkedin.com/in/yan-liu-9a2056347/' },
  { label: '@yanliu', href: 'https://twitter.com/yanliu' },
];
