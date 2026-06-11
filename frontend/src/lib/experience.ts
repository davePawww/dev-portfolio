import { sanityClient } from '@/lib/sanity';

export type TimelineEntry = {
  _id: string;
  period: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  highlights?: string[];
};

export type ExperienceData = {
  education: TimelineEntry[];
  work: TimelineEntry[];
};

export const experienceQuery = /* groq */ `
  {
    "education": *[_type == "experience" && category == "education"] | order(sortOrder asc) {
      _id,
      period,
      title,
      organization,
      location,
      description,
      highlights
    },
    "work": *[_type == "experience" && category == "work"] | order(sortOrder asc) {
      _id,
      period,
      title,
      organization,
      location,
      description,
      highlights
    }
  }
`;

export async function fetchExperience() {
  return sanityClient.fetch<ExperienceData>(experienceQuery);
}
