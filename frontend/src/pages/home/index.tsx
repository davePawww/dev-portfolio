import heroImg from '@/assets/dave-flex.jpeg';
import { motion } from 'motion/react';

export default function HomePage() {
  return (
    <section className="flex h-full flex-col md:flex-row">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="flex h-2/3 w-full shrink-0 items-center justify-center overflow-hidden md:mr-4 md:h-full md:w-1/2"
      >
        <motion.img
          src={heroImg}
          alt="Dave Paurillo"
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
          Jaean Leo David L. Paurillo
        </motion.h1>
        <motion.h2
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
          }}
          className="scroll-m-20 text-center text-2xl font-semibold text-balance sm:text-3xl md:text-4xl"
        >
          Frontend Developer
        </motion.h2>
        <motion.p
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
          }}
          className="text-sm leading-7 not-first:mt-6"
        >
          I started my career at <i>OneAston</i>, where I built frontend applications for core
          banking solution systems. That role gave me a strong foundation in frontend
          engineering—translating product designs into responsive interfaces, integrating REST APIs,
          and building reusable UI components like forms, tables, and modals. It was also where I
          developed a strong appreciation for maintainable code and component reusability.
        </motion.p>
        <motion.p
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
          }}
          className="text-sm leading-7 not-first:mt-6"
        >
          After that, I joined <i>Accenture</i>, working on projects for{' '}
          <i>Google in the Android Enterprise space</i>. That was a major step up in scale and
          complexity. Over the next five years, I worked on internal dashboards and operational
          tools used for ticket tracking, scheduling, and device enrollment workflows. My
          responsibilities expanded beyond feature development into frontend architecture and
          performance optimization. I improved application responsiveness by reducing unnecessary
          re-renders, optimizing component structure, and improving how API data was handled. I also
          built interactive reporting dashboards and workflow-driven interfaces that significantly
          improved internal efficiency.
        </motion.p>
        <motion.p
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
          }}
          className="text-sm leading-7 not-first:mt-6"
        >
          Most recently, I worked with <i>MAAGAP</i> in the insurance domain, where I helped build a
          data migration platform for moving records from a legacy system. I developed reusable
          TypeScript data-fetching utilities to support filtering, pagination, and relational data
          handling across the application. I also worked on dynamic PDF generation using Puppeteer,
          rendering React components into production-ready insurance documents and invoices. That
          experience gave me more exposure to backend-adjacent engineering and deployment workflows.
        </motion.p>
        <motion.p
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
          }}
          className="text-sm leading-7 not-first:mt-6"
        >
          At this stage, I&rsquo;m looking for a role where I can contribute as a senior frontend
          engineer—taking ownership of complex frontend systems, mentoring where needed, and
          continuing to expand into more full-stack responsibilities over time.
        </motion.p>
      </motion.div>
    </section>
  );
}
