import { motion, type Variants } from 'motion/react';
import { useExperience } from '@/hooks/use-experience';
import { TimelineSection } from './components/timeline-section';

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
  const { data, isPending } = useExperience();

  if (isPending) {
    return (
      <section className="flex h-full flex-col overflow-y-auto">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-4 py-6 md:py-12">
          <div className="max-w-3xl space-y-4">
            <div className="bg-muted h-4 w-24 animate-pulse rounded" />
            <div className="bg-muted h-12 w-3/4 animate-pulse rounded-lg" />
            <div className="bg-muted h-6 w-1/2 animate-pulse rounded" />
          </div>
          <div className="bg-muted h-96 animate-pulse rounded-[2rem]" />
        </div>
      </section>
    );
  }

  const education = data?.education ?? [];
  const workExperience = data?.work ?? [];

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
