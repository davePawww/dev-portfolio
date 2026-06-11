import { sanityClient } from '@/lib/sanity';
import type { PortableTextBlock } from '@portabletext/types';

export type SocialPlatform = 'github' | 'linkedin' | 'twitter';

export type SocialLink = {
  _key: string;
  platform: SocialPlatform;
  url: string;
};

export type Profile = {
  name: string;
  role: string;
  heroImage: {
    alt: string;
    asset: {
      url: string;
    };
    crop?: {
      bottom: number;
      left: number;
      right: number;
      top: number;
    };
    hotspot?: {
      height: number;
      width: number;
      x: number;
      y: number;
    };
  } | null;
  bio: PortableTextBlock[];
  resumeUrl: string | null;
  socialLinks: SocialLink[];
  email: string;
  phone: string;
  copyrightName: string;
  copyrightYear: number;
};

export const profileQuery = /* groq */ `
  *[_type == "profile"] | order(_updatedAt desc)[0] {
    name,
    role,
    heroImage {
      alt,
      crop,
      hotspot,
      asset->{url}
    },
    bio,
    "resumeUrl": resume.asset->url,
    socialLinks[]{
      _key,
      platform,
      url
    },
    email,
    phone,
    copyrightName,
    copyrightYear
  }
`;

export async function fetchProfile() {
  return sanityClient.fetch<Profile | null>(profileQuery);
}
