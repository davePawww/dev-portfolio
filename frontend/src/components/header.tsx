import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { navigationMenuTriggerStyle } from '@/components/ui/variants';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { useTheme } from '@/hooks/use-theme';
import { Separator } from '@/components/ui/separator';

function Header() {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <header className="flex items-center justify-between p-3">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link to="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link to="/experience">Experience</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link to="/projects">Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex h-5 items-center gap-2">
        <Button size="icon-lg" variant="ghost" onClick={handleToggleTheme}>
          {theme === 'light' ? <Moon /> : <Sun />}
        </Button>
        <Separator orientation="vertical" />
        <Button variant="ghost" size="icon-lg" asChild>
          <a href="https://github.com/davePawww" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </Button>
        <Separator orientation="vertical" />
        <Button variant="ghost" size="icon-lg" asChild>
          <a href="https://x.com/davePawww" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter />
          </a>
        </Button>
        <Separator orientation="vertical" />
        <Button variant="ghost" size="icon-lg" asChild>
          <a
            href="https://www.linkedin.com/in/davepaurillo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </Button>
      </div>
    </header>
  );
}

export default Header;
