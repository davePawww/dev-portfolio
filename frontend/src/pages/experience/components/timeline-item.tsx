import { motion, type Variants } from 'motion/react';

export type TimelineEntry = {
  _id: string;
  period: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  highlights?: string[];
};

type TimelineItemProps = {
  entry: TimelineEntry;
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeInOut' as const },
  },
};

export function TimelineItem({ entry }: TimelineItemProps) {
  return (
    <motion.li variants={itemVariants} className="relative pl-8 sm:pl-10">
      <span className="bg-primary ring-background absolute top-2 left-0 z-10 h-3 w-3 rounded-full ring-4" />

      <article className="border-border/60 bg-background/80 hover:border-border rounded-3xl border p-5 shadow-sm transition-colors duration-300 sm:p-6">
        <div className="space-y-1.5">
          <p className="text-muted-foreground text-xs font-medium tracking-[0.28em] uppercase">
            {entry.period}
          </p>
          <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{entry.title}</h3>
          <p className="text-muted-foreground text-sm leading-6">
            {entry.organization}
            <span className="mx-2">{'\u2022'}</span>
            {entry.location}
          </p>
        </div>

        <p className="text-muted-foreground mt-4 text-sm leading-6 sm:text-base">
          {entry.description}
        </p>

        {entry.highlights?.length ? (
          <ul className="mt-4 space-y-2">
            {entry.highlights.map((highlight) => (
              <li key={highlight} className="text-muted-foreground flex gap-3 text-sm leading-6">
                <span className="bg-foreground/70 mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </article>
    </motion.li>
  );
}
