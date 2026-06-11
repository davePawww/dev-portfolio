import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityConfig = {
  projectId: 'bvuuhol9',
  dataset: 'production',
  apiVersion: '2026-06-11',
  useCdn: true,
};

export const sanityClient = createClient(sanityConfig);

const imageBuilder = imageUrlBuilder(sanityConfig);

export function urlFor(source: Parameters<typeof imageBuilder.image>[0]) {
  return imageBuilder.image(source);
}
