import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Cart from '../src/features/cart/Cart';
const mockOpenModal = vi.fn();
vi.mock('../../utensils/helper', () => ({
  formatCurrency: (value) => `$${value.toFixed(2)}`,
}));
const mockDispatch = vi.fn();
describe('Cart component', () => {
  beforeEach(() => {
    vi.clearAllMocks(); // Reset mocks between tests
  });

  const mockCart = [
    {
      name: 'item 1',
      price: 10.0,
      quantity: 2,
      id: 1,
    },
    {
      name: 'item 2',
      price: 3.0,
      quantity: 1,
      id: 2,
    },
  ];

  it('renders MenuItem component and props passes', async () => {
    render(
      <Cart
        dispatch={mockDispatch}
        cart={mockCart}
        openModal={mockOpenModal}
      />,
    );

    expect(screen.getByText('Your cart (2)')).toBeInTheDocument();

    expect(screen.getByText('item 1')).toBeInTheDocument();
    expect(screen.getByText('item 2')).toBeInTheDocument();
  });

  test('renders items and calculates total correctly', () => {
    render(
      <Cart
        cart={mockCart}
        dispatch={mockDispatch}
        openModal={mockOpenModal}
      />,
    );

    // Check if item names are rendered
    mockCart.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(`${item.quantity}x`)).toBeInTheDocument();
    });
  });
});
