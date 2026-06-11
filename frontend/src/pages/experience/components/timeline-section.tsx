import { motion, type Variants } from 'motion/react';
import { TimelineItem, type TimelineEntry } from './timeline-item';

type TimelineSectionProps = {
  title: string;
  description: string;
  items: TimelineEntry[];
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeInOut' as const },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export function TimelineSection({ title, description, items }: TimelineSectionProps) {
  return (
    <motion.section
      variants={sectionVariants}
      className="border-border/60 bg-card/40 rounded-[2rem] border p-6 backdrop-blur-sm sm:p-8"
    >
      <div className="mb-8 space-y-2">
        <p className="text-muted-foreground text-xs font-medium tracking-[0.3em] uppercase">
          {title}
        </p>
        <p className="text-muted-foreground text-sm leading-6 sm:text-base">{description}</p>
      </div>

      <motion.ol
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="before:bg-border/80 relative space-y-6 before:absolute before:top-2 before:left-[0.35rem] before:h-[calc(100%-1rem)] before:w-px before:content-['']"
      >
        {items.map((item) => (
          <TimelineItem key={item.id} entry={item} />
        ))}
      </motion.ol>
    </motion.section>
  );
}
