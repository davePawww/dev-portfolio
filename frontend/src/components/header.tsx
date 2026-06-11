import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { navigationMenuTriggerStyle } from '@/components/ui/variants';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { useTheme } from '@/hooks/use-theme';
import { Separator } from '@/components/ui/separator';
import { motion, AnimatePresence } from 'motion/react';
import { useProfile } from '@/hooks/use-profile';

const fallbackSocialLinks = {
  github: 'https://github.com/davePawww',
  twitter: 'https://x.com/davePawww',
  linkedin: 'https://www.linkedin.com/in/davepaurillo/',
};

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/technologies', label: 'Technologies' },
] as const;

function Header() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data } = useProfile();

  const socialLinks = {
    github:
      data?.socialLinks.find((item) => item.platform === 'github')?.url ??
      fallbackSocialLinks.github,
    twitter:
      data?.socialLinks.find((item) => item.platform === 'twitter')?.url ??
      fallbackSocialLinks.twitter,
    linkedin:
      data?.socialLinks.find((item) => item.platform === 'linkedin')?.url ??
      fallbackSocialLinks.linkedin,
  };

  const resumeUrl = data?.resumeUrl ?? null;

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleDownloadResume = async () => {
    if (!resumeUrl) {
      return;
    }

    const response = await fetch(resumeUrl);
    if (!response.ok) {
      return;
    }

    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = blobUrl;
    anchor.download = 'Dave_Paurillo_Resume.pdf';
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(blobUrl);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: 'easeInOut' }}
      className="flex items-center justify-between"
    >
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          {navItems.map((item) => (
            <NavigationMenuItem key={item.to}>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to={item.to}>{item.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={() => setMobileMenuOpen(true)}
        aria-label="Open menu"
      >
        <Menu />
      </Button>

      <div className="flex h-5 items-center gap-1 md:gap-2">
        <Button
          size="sm"
          className="hidden md:inline-flex"
          onClick={() => void handleDownloadResume()}
          disabled={!resumeUrl}
        >
          <FaFileDownload className="size-3" /> Download Resume
        </Button>
        <Separator orientation="vertical" className="hidden md:block" />
        <Button variant="ghost" size="icon-lg" asChild className="hidden md:inline-flex">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </Button>
        <Separator orientation="vertical" className="hidden md:block" />
        <Button variant="ghost" size="icon-lg" asChild className="hidden md:inline-flex">
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter />
          </a>
        </Button>
        <Separator orientation="vertical" className="hidden md:block" />
        <Button variant="ghost" size="icon-lg" asChild className="hidden md:inline-flex">
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </Button>
        <Separator orientation="vertical" />
        <Button size="icon-lg" variant="ghost" onClick={handleToggleTheme}>
          {theme === 'light' ? <Moon /> : <Sun />}
        </Button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-background fixed inset-y-0 right-0 z-50 flex w-64 flex-col gap-6 p-6 shadow-lg"
            >
              <div className="flex justify-end">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X />
                </Button>
              </div>
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="hover:bg-muted flex w-full items-center rounded-lg px-3 py-2 text-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex items-center justify-center gap-2">
                <Button variant="ghost" size="icon" asChild>
                  <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                </Button>
                <Separator orientation="vertical" />
                <Button variant="ghost" size="icon" asChild>
                  <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <FaSquareXTwitter />
                  </a>
                </Button>
                <Separator orientation="vertical" />
                <Button variant="ghost" size="icon" asChild>
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
