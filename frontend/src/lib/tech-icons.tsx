import type { ReactNode } from 'react';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiShadcnui,
  SiStorybook,
  SiVitest,
  SiGraphql,
  SiReactquery,
  SiGsap,
  SiFramer,
  SiTypescript,
  SiEslint,
  SiGooglecloud,
  SiGooglecloudstorage,
  SiGithubcopilot,
  SiClaude,
} from 'react-icons/si';
import { Package } from 'lucide-react';

const iconMap: Record<string, (props: { className?: string }) => ReactNode> = {
  html5: (props) => <SiHtml5 {...props} />,
  css3: (props) => <SiCss {...props} />,
  javascript: (props) => <SiJavascript {...props} />,
  react: (props) => <SiReact {...props} />,
  tailwindcss: (props) => <SiTailwindcss {...props} />,
  shadcnui: (props) => <SiShadcnui {...props} />,
  storybook: (props) => <SiStorybook {...props} />,
  vitest: (props) => <SiVitest {...props} />,
  graphql: (props) => <SiGraphql {...props} />,
  reactquery: (props) => <SiReactquery {...props} />,
  gsap: (props) => <SiGsap {...props} />,
  framer: (props) => <SiFramer {...props} />,
  typescript: (props) => <SiTypescript {...props} />,
  eslint: (props) => <SiEslint {...props} />,
  googlecloud: (props) => <SiGooglecloud {...props} />,
  googlecloudstorage: (props) => <SiGooglecloudstorage {...props} />,
  githubcopilot: (props) => <SiGithubcopilot {...props} />,
  claude: (props) => <SiClaude {...props} />,
};

type TechIconProps = {
  name: string | undefined;
  className?: string;
};

export function TechIcon({ name, className }: TechIconProps) {
  const renderIcon = name ? iconMap[name] : undefined;
  return renderIcon ? renderIcon({ className }) : <Package className={className} />;
}
