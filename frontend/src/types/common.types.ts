import type { QueryClient } from '@tanstack/react-query';
import type { Profile } from '@/lib/profile';

export type RouterContext = {
  queryClient: QueryClient;
};

export type ProfileFallback = Profile;

export type Theme = 'dark' | 'light' | 'system';

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
