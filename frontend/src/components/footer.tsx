import { motion } from 'motion/react';
import { FaMobile } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { Separator } from './ui/separator';
import { useProfile } from '@/hooks/use-profile';

function Footer() {
  const { data } = useProfile();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: 'easeInOut' }}
      className="flex flex-col items-center gap-2 py-4 sm:flex-row sm:justify-between"
    >
      <p className="text-muted-foreground text-xs">
        {data?.copyrightYear && data?.copyrightName
          ? `© ${data.copyrightYear} ${data.copyrightName}`
          : null}
      </p>
      <div className="text-muted-foreground flex flex-col items-center gap-2 text-xs sm:flex-row">
        {data?.email && (
          <div className="flex items-center gap-2">
            <SiGmail />
            <p>{data.email}</p>
          </div>
        )}
        {data?.email && data?.phone && (
          <Separator orientation="vertical" className="hidden sm:block" />
        )}
        {data?.phone && (
          <div className="flex items-center gap-2">
            <FaMobile />
            <p>{data.phone}</p>
          </div>
        )}
      </div>
    </motion.footer>
  );
}

export default Footer;
