import { motion, type Variants } from 'motion/react';
import { useTechnologies } from '@/hooks/use-technologies';
import { TechPill } from './components/tech-pill';

const pageVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

export default function TechnologiesPage() {
  const { data: technologies, isPending } = useTechnologies();

  if (isPending) {
    return (
      <section className="flex h-full flex-col overflow-y-auto">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-4 px-4 py-6 md:px-0 md:py-12">
          <div className="max-w-3xl space-y-4">
            <div className="bg-muted h-4 w-24 animate-pulse rounded" />
            <div className="bg-muted h-12 w-3/4 animate-pulse rounded-lg" />
            <div className="bg-muted h-6 w-1/2 animate-pulse rounded" />
          </div>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-muted h-28 animate-pulse rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex h-full flex-col overflow-y-auto">
      <motion.div
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 py-6 md:px-0 md:py-12"
      >
        <div className="max-w-3xl space-y-4">
          <motion.p
            variants={cardVariants}
            className="text-muted-foreground text-xs font-medium tracking-[0.32em] uppercase"
          >
            Technologies
          </motion.p>
          <motion.h1
            variants={cardVariants}
            className="scroll-m-20 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl"
          >
            Tech stack overview.
          </motion.h1>
          <motion.p
            variants={cardVariants}
            className="text-muted-foreground max-w-2xl text-sm leading-7 sm:text-base"
          >
            A categorized look at the languages, libraries, tools, and platforms I use across
            projects and daily workflow.
          </motion.p>
        </div>

        <motion.div
          variants={pageVariants}
          className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
        >
          {technologies?.map((tech) => (
            <motion.div key={`${tech.category}-${tech.name}`} variants={cardVariants}>
              <TechPill tech={tech} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
