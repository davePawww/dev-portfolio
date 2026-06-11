import { motion } from 'motion/react';
import heroImg from '@/assets/dave-flex.jpeg';
import { useProfile } from '@/hooks/use-profile';
import { RichText } from '@/components/portable-text';
import { urlFor } from '@/lib/sanity';

export default function HomePage() {
  const { data: profile, error, isPending } = useProfile();

  if (isPending) {
    return (
      <section className="flex h-full flex-col md:flex-row">
        <div className="flex h-2/3 w-full shrink-0 items-center justify-center overflow-hidden md:mr-4 md:h-full md:w-1/2">
          <div className="bg-muted h-full w-full animate-pulse rounded-[30%_70%_70%_30%/30%_30%_70%_70%] md:h-5/6 md:w-full" />
        </div>
        <div className="w-full space-y-4 py-6 md:w-1/2 md:overflow-y-auto md:py-12 lg:overflow-y-hidden">
          <div className="bg-muted mx-auto h-10 w-3/4 animate-pulse rounded" />
          <div className="bg-muted mx-auto h-8 w-1/2 animate-pulse rounded" />
          <div className="space-y-3 pt-4">
            <div className="bg-muted h-4 animate-pulse rounded" />
            <div className="bg-muted h-4 animate-pulse rounded" />
            <div className="bg-muted h-4 w-11/12 animate-pulse rounded" />
            <div className="bg-muted h-4 w-10/12 animate-pulse rounded" />
          </div>
        </div>
      </section>
    );
  }

  if (error || !profile) {
    return (
      <section className="flex h-full items-center justify-center px-6 py-12">
        <div className="max-w-lg space-y-3 text-center">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Profile unavailable</h1>
          <p className="text-muted-foreground">
            Add or publish a `profile` document in Sanity to populate this page.
          </p>
        </div>
      </section>
    );
  }

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
