import { render, screen } from '@testing-library/react';
import OrderItem from '../src/features/order/OrderItem';
// import { formatCurrency, truncateString } from '../src/utensils/helper';
import { describe, vi } from 'vitest';

vi.mock('../../utensils/helper', () => ({
  formatCurrency: (value) => `$${value.toFixed(2)}`,
  truncateString: (str, length) => str.slice(0, length) + '...',
}));

describe('OrderItem component', () => {
  const mockOrderItem = {
    image: { thumbnail: 'image-url' },
    name: 'Test Product Name',
    quantity: 2,
    price: 25.0,
  };

  const mockOrderItemWithoutImage = {
    ...mockOrderItem,
    image: null,
  };

  beforeEach(() => {
    // Mock window.innerWidth for mobile detection
    Object.defineProperty(window, 'innerWidth', { writable: true, value: 375 });
    window.dispatchEvent(new Event('resize'));
  });

  it('should render the thumbnail image when available', () => {
    render(<OrderItem orderItem={mockOrderItem} />);

    const img = screen.getByAltText('');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'image-url');
  });
  it('should show fallback text when image is not available', () => {
    render(<OrderItem orderItem={mockOrderItemWithoutImage} />);

    const fallbackText = screen.getByText(/Thumbnail image is not available/i);
    expect(fallbackText).toBeInTheDocument();
  });
  it('should render the name without truncation on desktop', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      value: 1024,
    });
    window.dispatchEvent(new Event('resize'));

    render(<OrderItem orderItem={mockOrderItem} />);
    expect(screen.getByText(/Test Product Name/)).toBeInTheDocument();
  });

  it('should truncate the name on mobile if the condition is met', () => {
    render(
      <OrderItem orderItem={{ ...mockOrderItem, name: 'Long Product Name' }} />,
    );

    expect(screen.getByText(/Long .../)).toBeInTheDocument();
  });
  it('should display formatted price and total price', () => {
    render(<OrderItem orderItem={mockOrderItem} />);

    const price = screen.getByTestId('price-data');
    const totalPrice = screen.getByTestId('totalPrice-data');
    expect(price).toBeInTheDocument();
    expect(totalPrice).toBeInTheDocument();
  });
});
