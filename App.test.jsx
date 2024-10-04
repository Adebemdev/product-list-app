import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import App from './src/App';

describe('App component', () => {
  it('renders Menu, Header, Cart, and Order component', () => {
    render(<App />);

    expect(screen.getByTestId('head-data')).toBeInTheDocument();
    expect(screen.getByTestId('menu-data')).toBeInTheDocument();
    expect(screen.getByTestId('cart-data')).toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
