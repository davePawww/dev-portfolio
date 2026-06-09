import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  // This is just a boilerplate test
  it('displays test on the screen', () => {
    render(<App />);
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });
});
