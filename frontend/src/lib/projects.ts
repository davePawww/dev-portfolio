import { sanityClient } from '@/lib/sanity';

export type Project = {
  _id: string;
  title: string;
  description: string | null;
  tags: string[];
  featured: boolean;
  githubUrl: string | null;
  liveUrl: string | null;
};

export const projectsQuery = /* groq */ `
  *[_type == "project"] | order(sortOrder asc) {
    _id,
    title,
    description,
    "tags": coalesce(tags, []),
    featured,
    githubUrl,
    liveUrl
  }
`;

export const PROJECTS_PER_PAGE = 6;

export async function fetchProjects() {
  return sanityClient.fetch<Project[]>(projectsQuery);
}
