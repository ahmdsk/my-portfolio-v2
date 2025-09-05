'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="font-paragraph -mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          I&apos;m Ahmad Shaleh Kurniawan, I&apos;m a Full-Stack & Mobile
          Developer with 3+ years of experience building scalable,
          high-performance applications across web and mobile platforms. My core
          stack includes React, Next.js, TypeScript, and Tailwind CSS, with
          additional expertise in Nest.js, Prisma, Node.js (Hono), Vue.js,
          Quasar, Laravel, Flutter, PostgreSQL, and Firebase. I&apos;ve
          developed academic management systems, education platforms, and
          logistics apps—focusing on responsive UI, API integration, and
          maintainable architecture. I&apos;m passionate about problem-solving
          and always open to opportunities where I can contribute, learn, and
          grow.
        </p>
        <p>
          I&apos;m open to opportunities where I can contribute, learn, and
          grow. Feel free to reach out if my skills and experience match your
          needs.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
