import { useQuery } from '@tanstack/react-query';
import { fetchExperience } from '@/lib/experience';

export function useExperience() {
  return useQuery({
    queryKey: ['experience'],
    queryFn: fetchExperience,
    staleTime: 1000 * 60 * 5,
  });
}
