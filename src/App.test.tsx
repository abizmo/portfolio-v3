import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import App from './App';

describe('App tests', () => {
  it('should render', () => {
    render(<App />);
    expect(screen.getByText(/abián izquierdo/i)).toBeDefined();
    expect(screen.getByText(/about me/i)).toBeDefined();
    expect(screen.getByRole('heading', { name: /works/i })).toBeDefined();
    expect(screen.getByRole('heading', { name: /contact/i })).toBeDefined();
    expect(screen.getByText(/node.js/i)).toBeDefined();
    expect(screen.getByAltText(/change theme/i)).toBeDefined();
    expect(screen.getByAltText(/linkedin/i)).toBeDefined();
    expect(screen.getByAltText(/github/i)).toBeDefined();
    expect(screen.getByAltText(/email/i)).toBeDefined();
  });
});
