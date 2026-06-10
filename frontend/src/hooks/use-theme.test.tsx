import { ThemeProvider } from '@/components/theme-provider';
import { useTheme } from '@/hooks/use-theme';
import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeAll, describe, expect, it } from 'vitest';

function createWrapper(defaultTheme?: 'dark' | 'light' | 'system', storageKey?: string) {
  return function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <ThemeProvider defaultTheme={defaultTheme} storageKey={storageKey}>
        {children}
      </ThemeProvider>
    );
  };
}

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: query === '(prefers-color-scheme: dark)',
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  });
});

describe('useTheme', () => {
  afterEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('light', 'dark');
  });

  it('returns default state when used outside ThemeProvider', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('system');
    expect(typeof result.current.setTheme).toBe('function');
  });

  it('provides the default theme when no localStorage value exists', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: createWrapper('dark'),
    });

    expect(result.current.theme).toBe('dark');
  });

  it('reads initial theme from localStorage', () => {
    localStorage.setItem('ui-theme', 'light');

    const { result } = renderHook(() => useTheme(), {
      wrapper: createWrapper(),
    });

    expect(result.current.theme).toBe('light');
  });

  it('falls back to default theme when localStorage key is missing', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: createWrapper('light'),
    });

    expect(result.current.theme).toBe('light');
  });

  it('setTheme updates the theme value', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: createWrapper('dark'),
    });

    act(() => {
      result.current.setTheme('light');
    });

    expect(result.current.theme).toBe('light');
  });

  it('setTheme writes to localStorage', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: createWrapper('dark'),
    });

    act(() => {
      result.current.setTheme('light');
    });

    expect(localStorage.getItem('ui-theme')).toBe('light');
  });

  it('setTheme toggles CSS class on document.documentElement', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: createWrapper('dark'),
    });

    act(() => {
      result.current.setTheme('light');
    });

    expect(document.documentElement.classList.contains('light')).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('setTheme updates CSS class from light to dark', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: createWrapper('light'),
    });

    act(() => {
      result.current.setTheme('dark');
    });

    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(document.documentElement.classList.contains('light')).toBe(false);
  });

  it('uses custom storageKey', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: createWrapper('dark', 'custom-key'),
    });

    act(() => {
      result.current.setTheme('light');
    });

    expect(localStorage.getItem('custom-key')).toBe('light');
    expect(localStorage.getItem('ui-theme')).toBeNull();
  });

  it('reads from custom storageKey on mount', () => {
    localStorage.setItem('custom-key', 'light');

    const { result } = renderHook(() => useTheme(), {
      wrapper: createWrapper(undefined, 'custom-key'),
    });

    expect(result.current.theme).toBe('light');
  });
});
