import { createFileRoute } from '@tanstack/react-router';
import TechnologiesPage from '@/pages/technologies';

export const Route = createFileRoute('/technologies')({
  component: TechnologiesPage,
});
