import { motion } from 'motion/react';
import { FaMobile } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { Separator } from './ui/separator';
import { useProfile } from '@/hooks/use-profile';

function Footer() {
  const { data } = useProfile();
  const copyrightYear = data?.copyrightYear ?? 2026;
  const copyrightName = data?.copyrightName ?? 'Dave Paurillo';
  const email = data?.email ?? 'paurillo.dave@gmail.com';
  const phone = data?.phone ?? '+63 917 169 0450';

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: 'easeInOut' }}
      className="flex flex-col items-center gap-2 py-4 sm:flex-row sm:justify-between"
    >
      <p className="text-muted-foreground text-xs">
        &copy; &nbsp; {copyrightYear} {copyrightName}
      </p>
      <div className="text-muted-foreground flex flex-col items-center gap-2 text-xs sm:flex-row">
        <div className="flex items-center gap-2">
          <SiGmail />
          <p>{email}</p>
        </div>
        <Separator orientation="vertical" className="hidden sm:block" />
        <div className="flex items-center gap-2">
          <FaMobile />
          <p>{phone}</p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
