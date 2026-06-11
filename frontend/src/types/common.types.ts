import type { QueryClient } from '@tanstack/react-query';

export type RouterContext = {
  queryClient: QueryClient;
};

export type Theme = 'dark' | 'light' | 'system';

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
