import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import App from './App';

describe('App tests', () => {
  it('should render', () => {
    render(<App />);
    expect(screen.getByText(/hola/i)).toBeDefined();
  });
});
