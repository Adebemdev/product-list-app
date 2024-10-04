import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Menu from '../src/features/menu/Menu';

describe('Menu component', () => {
  const mockDispatch = vi.fn();

  const mockProducts = [
    {
      name: 'item 1',
      price: 10,
    },
    {
      name: 'item 2',
      price: 3,
    },
  ];
  const cart = [
    {
      name: 'item 1',
      price: 10,
      quantity: 1,
      image: 'image.png1',
    },
    {
      name: 'item 2',
      price: 3,
      quantity: 2,
      image: 'image.png2',
    },
  ];

  it('renders MenuItem component and props passes', async () => {
    render(
      <Menu products={mockProducts} dispatch={mockDispatch} cart={cart} />,
    );
    const menuItems = screen.getByTestId('menu-data').children;
    expect(menuItems.length).toBe(mockProducts.length);
  });
});
