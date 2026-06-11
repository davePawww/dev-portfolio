import { motion, type Variants } from 'motion/react';
import { ProjectCard } from './project-card';
import type { Project } from '@/lib/projects';

type ProjectGridProps = {
  projects: Project[];
};

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="flex items-center justify-center py-16">
        <p className="text-muted-foreground text-sm">No projects to show yet.</p>
      </div>
    );
  }

  return (
    <motion.div
      key={projects.map((p) => p._id).join('-')}
      variants={gridVariants}
      initial="hidden"
      animate="visible"
      className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
    >
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </motion.div>
  );
}
