import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/project-2.webp',
    title: 'Next-starter',
    description:
      'A Next.js starter template, packed with features like TypeScript, Tailwind CSS, Next-auth, Eslint, Stripe, testing tools and more.',
    technologies: ['Next.js', 'Tailwind', 'Shadcn/ui', 'Next-auth', 'Prisma'],
    links: {
      preview: 'https://next-starter-skolaczk.vercel.app',
      github: 'https://github.com/Skolaczk/next-starter',
      githubApi: 'https://api.github.com/repos/Skolaczk/next-starter',
    },
  },
  {
    image: '/images/project-1.webp',
    title: 'SocialHub',
    description:
      'SocialHub is a next-generation social media app developed using Next.js and Nest.js.',
    technologies: ['Next.js', 'TypeScript', ' Nest.js', 'Tailwind', 'Prisma'],
    links: {
      preview: 'https://socialhub-ms.vercel.app/',
      github: 'https://github.com/Skolaczk/SocialHub',
      githubApi: 'https://api.github.com/repos/Skolaczk/SocialHub',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Freelance Web Developer',
    company: 'UKK LLC, Freelance, Remote (USA)',
    description:
      'As a Freelance Web Developer, I have been responsible for developing and maintaining web and mobile applications using various technology stacks. My role involves collaborating with clients to understand their requirements, designing scalable solutions, and implementing features that enhance user experience.',
    period: 'Sep 2025 – Present',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'PostgreSQL',
      'Git',
    ],
  },
  {
    title: 'Mobile Developer (Flutter)',
    company:
      'PT Langgeng Sejahtera Kreasi Komputasi, Remote (Bandung, Indonesia)',
    description:
      'During my role as a Mobile Developer, I develop and maintain Flutter-based mobile applications with a focus on performance, scalability, and API integration. I’ve built cross-platform apps, integrated backend APIs, and implemented scalable architectures.',
    period: 'Aug 2025 – Present',
    technologies: ['Flutter', 'Dart', 'RESTful APIs', 'Git', 'Figma'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Universitas Bandar Lampung, Fulltime (Bandar Lampung, Indonesia)',
    description:
      'As a Full Stack Developer, I designed and developed an academic management system using Node.js, Hono, Next.js, Quasar, and Vue.js. My work included building secure backend services, responsive UIs, and an automated online examination system.',
    period: 'Feb 2025 – Aug 2025',
    technologies: ['Node.js', 'Hono', 'Next.js', 'Quasar', 'Vue.js'],
  },
  {
    title: 'Full Stack Web Developer',
    company:
      'PT Inovasi Global Sejahtera, Fulltime (Bandar Lampung, Indonesia)',
    description:
      'During my time as a Full Stack Web Developer, I developed an education platform with Laravel, Vue.js, React.js, and PostgreSQL. I contributed to backend architecture, online payment integration, and performance optimization for thousands of users.',
    period: 'Mar 2022 – Feb 2025',
    technologies: ['Laravel', 'Vue.js', 'React.js', 'PostgreSQL'],
  },
  {
    title: 'Freelance Full Stack Web & Flutter Developer',
    company: 'Gandasari Group, Freelance (Jakarta, Indonesia)',
    description:
      'As a Freelance Full Stack Web & Flutter Developer, I created a vehicle repair and dump truck management app using Laravel, Flutter, PostgreSQL, and Firebase Cloud Messaging. I implemented role-based modules, mobile scanning verification, and real-time notifications to improve logistics operations.',
    period: 'Feb 2024 – Nov 2024',
    technologies: [
      'Flutter',
      'Dart',
      'Laravel',
      'PostgreSQL',
      'Firebase',
      'Figma',
      'Git',
    ],
  },
  {
    // Freelance Web & Mobile Developer (using several stacks) from Sep 2022 - Present
    title: 'Freelance Web & Mobile Developer',
    company: 'Self-Employed, Freelance (Remote)',
    description:
      'As a Freelance Web & Mobile Developer, I have worked on various projects using different technology stacks including Next.js, Adonis.js, Express.js, React.js, Vue.js, Flutter, and Laravel. My work involves building responsive web applications and mobile apps, integrating APIs, and ensuring optimal performance across platforms.',
    period: 'Sep 2022 – Present',
    technologies: [
      'Next.js',
      'Adonis.js',
      'Express.js',
      'React.js',
      'Vue.js',
      'Flutter',
      'Laravel',
      'TypeScript',
      'Dart',
      'Tailwind CSS',
      'PostgreSQL',
      'Git',
    ],
  },
] as const;

export const skillsData = [
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.vue className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.github className="size-12" /> },
  { icon: <Icons.laravel className="size-12" /> },
  { icon: <Icons.flutter className="size-12" /> },
  // { icon: <Icons.dart className="size-12" /> },
  { icon: <Icons.expressjs className="size-12" /> },
  { icon: <Icons.postgresql className="size-12" /> },
  // { icon: <Icons.mysql className="size-12" /> },
  { icon: <Icons.nodejs className="size-12" /> },
] as const;
