import { motion } from 'motion/react';
import { FaMobile } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { Separator } from './ui/separator';

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: 'easeInOut' }}
      className="flex items-center justify-between"
    >
      <p className="text-muted-foreground text-xs">© &nbsp; 2026 Dave Paurillo</p>
      <div className="text-muted-foreground flex h-5 items-center gap-2 text-xs">
        {/* add on click for email*/}
        <div className="flex items-center gap-2">
          <SiGmail />
          <p>paurillo.dave@gmail.com</p>
        </div>
        <Separator orientation="vertical" />
        <div className="flex items-center gap-2">
          <FaMobile />
          <p>+63 917 169 0450</p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
