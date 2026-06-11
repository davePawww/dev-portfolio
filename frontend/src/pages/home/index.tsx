import { motion } from 'motion/react';
import heroImg from '@/assets/dave-flex.jpeg';
import { useProfile } from '@/hooks/use-profile';
import { RichText } from '@/components/portable-text';
import { urlFor } from '@/lib/sanity';
import type { ProfileFallback } from '@/types/common.types';

const fallbackProfile: ProfileFallback = {
  name: 'Jaean Leo David L. Paurillo',
  role: 'Frontend Developer',
  heroImage: null,
  bio: [
    {
      _key: 'bio-1',
      _type: 'block',
      children: [
        { _key: 'bio-1-1', _type: 'span', marks: [], text: 'I started my career at ' },
        { _key: 'bio-1-2', _type: 'span', marks: ['em'], text: 'OneAston' },
        {
          _key: 'bio-1-3',
          _type: 'span',
          marks: [],
          text: ', where I built frontend applications for core banking solution systems. That role gave me a strong foundation in frontend engineering-translating product designs into responsive interfaces, integrating REST APIs, and building reusable UI components like forms, tables, and modals. It was also where I developed a strong appreciation for maintainable code and component reusability.',
        },
      ],
      markDefs: [],
      style: 'normal',
    },
    {
      _key: 'bio-2',
      _type: 'block',
      children: [
        { _key: 'bio-2-1', _type: 'span', marks: [], text: 'After that, I joined ' },
        { _key: 'bio-2-2', _type: 'span', marks: ['em'], text: 'Accenture' },
        { _key: 'bio-2-3', _type: 'span', marks: [], text: ', working on projects for ' },
        {
          _key: 'bio-2-4',
          _type: 'span',
          marks: ['em'],
          text: 'Google in the Android Enterprise space',
        },
        {
          _key: 'bio-2-5',
          _type: 'span',
          marks: [],
          text: '. That was a major step up in scale and complexity. Over the next five years, I worked on internal dashboards and operational tools used for ticket tracking, scheduling, and device enrollment workflows. My responsibilities expanded beyond feature development into frontend architecture and performance optimization. I improved application responsiveness by reducing unnecessary re-renders, optimizing component structure, and improving how API data was handled. I also built interactive reporting dashboards and workflow-driven interfaces that significantly improved internal efficiency.',
        },
      ],
      markDefs: [],
      style: 'normal',
    },
    {
      _key: 'bio-3',
      _type: 'block',
      children: [
        { _key: 'bio-3-1', _type: 'span', marks: [], text: 'Most recently, I worked with ' },
        { _key: 'bio-3-2', _type: 'span', marks: ['em'], text: 'MAAGAP' },
        {
          _key: 'bio-3-3',
          _type: 'span',
          marks: [],
          text: ' in the insurance domain, where I helped build a data migration platform for moving records from a legacy system. I developed reusable TypeScript data-fetching utilities to support filtering, pagination, and relational data handling across the application. I also worked on dynamic PDF generation using Puppeteer, rendering React components into production-ready insurance documents and invoices. That experience gave me more exposure to backend-adjacent engineering and deployment workflows.',
        },
      ],
      markDefs: [],
      style: 'normal',
    },
    {
      _key: 'bio-4',
      _type: 'block',
      children: [
        {
          _key: 'bio-4-1',
          _type: 'span',
          marks: [],
          text: "At this stage, I'm looking for a role where I can contribute as a senior frontend engineer-taking ownership of complex frontend systems, mentoring where needed, and continuing to expand into more full-stack responsibilities over time.",
        },
      ],
      markDefs: [],
      style: 'normal',
    },
  ],
  resumeUrl: null,
  socialLinks: [
    { _key: 'github', platform: 'github', url: 'https://github.com/davePawww' },
    { _key: 'twitter', platform: 'twitter', url: 'https://x.com/davePawww' },
    { _key: 'linkedin', platform: 'linkedin', url: 'https://www.linkedin.com/in/davepaurillo/' },
  ],
  email: 'paurillo.dave@gmail.com',
  phone: '+63 917 169 0450',
  copyrightName: 'Dave Paurillo',
  copyrightYear: 2026,
};

export default function HomePage() {
  const { data } = useProfile();
  const profile = data ?? fallbackProfile;
  const heroImageUrl = profile.heroImage
    ? urlFor(profile.heroImage).width(900).height(1200).fit('crop').url()
    : heroImg;

  return (
    <section className="flex h-full flex-col md:flex-row">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="flex h-2/3 w-full shrink-0 items-center justify-center overflow-hidden md:mr-4 md:h-full md:w-1/2"
      >
        <motion.img
          src={heroImageUrl}
          alt={profile.heroImage?.alt ?? 'Dave Paurillo'}
          className="h-full w-full object-cover md:h-5/6 md:w-auto"
          style={{
            clipPath: 'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 15% 50%, 0% 0%)',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', repeatType: 'reverse' }}
        />
      </motion.div>
      <motion.div
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        initial="hidden"
        animate="visible"
        className="w-full space-y-1.5 py-6 md:w-1/2 md:overflow-y-auto md:py-12 lg:overflow-y-hidden"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
          }}
          className="scroll-m-20 text-center text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl"
        >
          {profile.name}
        </motion.h1>
        <motion.h2
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
          }}
          className="scroll-m-20 text-center text-2xl font-semibold text-balance sm:text-3xl md:text-4xl"
        >
          {profile.role}
        </motion.h2>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
          }}
        >
          <RichText value={profile.bio} />
        </motion.div>
      </motion.div>
    </section>
  );
}
