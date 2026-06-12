import { sanityClient } from '@/lib/sanity';

export type FlattenedTech = {
  name: string;
  description?: string;
  url?: string;
  icon?: string;
  category: string;
};

export const technologiesQuery = /* groq */ `
  *[_type == "technology"] | order(sortOrder asc) {
    name,
    description,
    url,
    icon,
    "category": category->title
  }
`;

export async function fetchTechnologies() {
  return sanityClient.fetch<FlattenedTech[]>(technologiesQuery);
}
