import { motion, type Variants } from 'motion/react';
import { TimelineSection } from './components/timeline-section';
import type { TimelineEntry } from './components/timeline-item';

const education: TimelineEntry[] = [
  {
    id: 'education-university',
    period: '2015 - 2019',
    title: 'B.S. in Computer Science',
    organization: 'University of California, San Diego',
    location: 'La Jolla, CA',
    description:
      'Built a strong foundation in software engineering, algorithms, and human-centered design while working across both individual and team-based product projects.',
    highlights: [
      'Focused on full-stack application development and interface design.',
      'Collaborated on capstone work centered on scalable web systems.',
    ],
  },
  {
    id: 'education-continuing',
    period: '2019 - Present',
    title: 'Continuing Education',
    organization: 'Independent Study and Applied Learning',
    location: 'Remote',
    description:
      'Continued sharpening frontend architecture, design systems, performance, and content platform workflows through hands-on product work and self-directed study.',
    highlights: [
      'Deepened expertise in React ecosystems, TypeScript, and modern frontend tooling.',
      'Regularly explored CMS-driven product patterns and UX refinement.',
    ],
  },
];

const workExperience: TimelineEntry[] = [
  {
    id: 'work-senior-frontend',
    period: '2023 - Present',
    title: 'Senior Frontend Engineer',
    organization: 'Acme Digital Studio',
    location: 'San Diego, CA',
    description:
      'Led frontend implementation across marketing sites and product surfaces, balancing interaction polish with maintainable system design.',
    highlights: [
      'Delivered performant React interfaces with a strong focus on accessibility and responsive behavior.',
      'Partnered with design to turn high-fidelity concepts into reusable UI patterns.',
      'Improved development velocity by tightening component conventions and project structure.',
    ],
  },
  {
    id: 'work-product-engineer',
    period: '2021 - 2023',
    title: 'Product Engineer',
    organization: 'Northstar Labs',
    location: 'Remote',
    description:
      'Worked across the product lifecycle, from feature definition to delivery, with an emphasis on thoughtful user experience and reliable implementation.',
    highlights: [
      'Built internal and customer-facing tools using React, TypeScript, and API-driven workflows.',
      'Contributed to a cleaner handoff between design, engineering, and content teams.',
    ],
  },
  {
    id: 'work-frontend-developer',
    period: '2019 - 2021',
    title: 'Frontend Developer',
    organization: 'Studio Meridian',
    location: 'Los Angeles, CA',
    description:
      'Created polished marketing experiences and interactive web pages for clients across technology, media, and lifestyle brands.',
    highlights: [
      'Implemented visually detailed interfaces while preserving performance and consistency.',
      'Supported iterative launches with fast feedback cycles and production-minded QA.',
    ],
  },
];

const pageVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const introVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeInOut' as const },
  },
};

export default function ExperiencePage() {
  return (
    <section className="flex h-full flex-col overflow-y-auto">
      <motion.div
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 py-6 md:py-12"
      >
        <div className="max-w-3xl space-y-4">
          <motion.p
            variants={introVariants}
            className="text-muted-foreground text-xs font-medium tracking-[0.32em] uppercase"
          >
            Experience
          </motion.p>
          <motion.h1
            variants={introVariants}
            className="scroll-m-20 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl"
          >
            A concise timeline of education and professional growth.
          </motion.h1>
          <motion.p
            variants={introVariants}
            className="text-muted-foreground max-w-2xl text-sm leading-7 sm:text-base"
          >
            A focused look at the academic foundation and product work that shaped how I design,
            build, and ship digital experiences.
          </motion.p>
        </div>

        <motion.div variants={pageVariants} className="grid gap-6 xl:grid-cols-2">
          <TimelineSection
            title="Education"
            description="Formal study, continuing learning, and the technical fundamentals behind the work."
            items={education}
          />
          <TimelineSection
            title="Work Experience"
            description="Roles focused on building thoughtful interfaces, scalable systems, and polished user experiences."
            items={workExperience}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
