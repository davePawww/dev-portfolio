import { useQuery } from '@tanstack/react-query';
import { fetchTechnologies } from '@/lib/technologies';

export function useTechnologies() {
  return useQuery({
    queryKey: ['technologies'],
    queryFn: fetchTechnologies,
    staleTime: 1000 * 60 * 5,
  });
}
