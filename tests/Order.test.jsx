import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Order from '../src/features/order/Order';
vi.mock('../../utensils/helper', () => ({
  formatCurrency: (value) => `$${value.toFixed(2)}`,
}));
describe('Order component', () => {
  const mockCart = [
    { id: 1, name: 'Pizza', price: 10, quantity: 2 },
    { id: 2, name: 'Burger', price: 15, quantity: 1 },
  ];

  const mockHandleOrder = vi.fn();
  it('renders MenuItem component and props passes', async () => {
    render(
      <Order products={mockCart} handleOrder={mockHandleOrder} isOpen={true} />,
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByTestId('order-confirmed')).toBeInTheDocument();
  });

  test('calculates and displays the total price using formatCurrency', () => {
    render(
      <Order cart={mockCart} isOpen={true} handleOrder={mockHandleOrder} />,
    );

    expect(screen.getByTestId('totalPrice')).toBeInTheDocument();
  });

  test('clicking "start new order" button triggers handleOrder function', () => {
    render(
      <Order cart={mockCart} isOpen={true} handleOrder={mockHandleOrder} />,
    );

    const button = screen.getByRole('button', { name: /start new order/i });
    fireEvent.click(button);

    expect(mockHandleOrder).toHaveBeenCalled();
  });

  test('does not render the dialog when isOpen is false', () => {
    render(
      <Order cart={mockCart} isOpen={false} handleOrder={mockHandleOrder} />,
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
