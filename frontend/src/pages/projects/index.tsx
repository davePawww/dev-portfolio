import { useState } from 'react';
import { motion, type Variants } from 'motion/react';
import { useProjects } from '@/hooks/use-projects';
import { PROJECTS_PER_PAGE } from '@/lib/projects';
import { ProjectGrid } from './components/project-grid';
import { ViewToggle } from './components/view-toggle';
import { Pagination } from './components/pagination';

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

export default function ProjectsPage() {
  const { data: projects, isPending, error } = useProjects();
  const [view, setView] = useState<'featured' | 'all'>('featured');
  const [currentPage, setCurrentPage] = useState(1);

  if (isPending) {
    return (
      <section className="flex h-full flex-col overflow-y-auto">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 py-6 md:px-0 md:py-12">
          <div className="max-w-3xl space-y-4">
            <div className="bg-muted h-4 w-24 animate-pulse rounded" />
            <div className="bg-muted h-12 w-3/4 animate-pulse rounded-lg" />
            <div className="bg-muted h-6 w-1/2 animate-pulse rounded" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-muted h-48 animate-pulse rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex h-full flex-col overflow-y-auto">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 py-6 md:px-0 md:py-12">
          <div className="max-w-3xl space-y-3 text-center">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Projects unavailable
            </h1>
            <p className="text-muted-foreground">
              Could not load projects. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const featuredProjects = projects?.filter((p) => p.featured) ?? [];
  const allProjects = view === 'featured' ? featuredProjects : (projects ?? []);
  const totalPages = Math.ceil(allProjects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = allProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE,
  );
  const displayProjects = view === 'featured' ? featuredProjects : paginatedProjects;

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
            variants={introVariants}
            className="text-muted-foreground text-xs font-medium tracking-[0.32em] uppercase"
          >
            Projects
          </motion.p>
          <motion.h1
            variants={introVariants}
            className="scroll-m-20 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl"
          >
            Selected work and side projects.
          </motion.h1>
          <motion.p
            variants={introVariants}
            className="text-muted-foreground max-w-2xl text-sm leading-7 sm:text-base"
          >
            A curated look at the tools, technologies, and workflows behind each project.
          </motion.p>
        </div>

        <motion.div variants={introVariants}>
          <ViewToggle
            active={view}
            onChange={(v) => {
              setView(v);
              setCurrentPage(1);
            }}
          />
        </motion.div>

        <ProjectGrid projects={displayProjects} />

        {view === 'all' && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </motion.div>
    </section>
  );
}
