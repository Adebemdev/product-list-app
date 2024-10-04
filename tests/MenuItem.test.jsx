import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import MenuItem from '../src/features/menu/MenuItem';
vi.mock(
  '../../assets/icons/icon-add-to-cart.svg',
  () => 'mock-add-to-cart-icon.svg',
);
const mockDispatch = vi.fn();
vi.mock('../../utensils/helper', () => ({
  formatCurrency: (value) => `$${value.toFixed(2)}`,
}));
describe('MenuItem component', () => {
  const mockCart = [];
  const mockCartWithItem = [
    {
      id: 1,
      quantity: 3,
    },
  ];
  const mockProduct = {
    image: {
      desktop: 'desktop-image.jpg',
      mobile: 'mobile-image.jpg',
      thumbnail: 'thumbnail.jpg',
    },
    category: 'Electronics',
    name: 'Laptop',
    price: 999.99,
  };

  render(
    <MenuItem dispatch={mockDispatch} cart={mockCart} product={mockProduct} />,
  );
  it('should render product details correctly', () => {
    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.category)).toBeInTheDocument();
    const imgElement = screen.getByAltText(mockProduct.name);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', mockProduct.image.mobile);
  });

  it('should render add to cart when a button is click', () => {
    render(
      <MenuItem
        dispatch={mockDispatch}
        cart={mockCart}
        product={mockProduct}
      />,
    );
    const buttonElement = screen.getByRole('button', {
      name: /Add to cart/i,
    });
    expect(buttonElement).toBeInTheDocument();
    const buttonText = screen.getByText(/Add to cart/i);
    expect(buttonText).toBeInTheDocument();

    const buttonIcon = screen.getByTestId('button-icon');
    expect(buttonIcon).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(mockDispatch).toHaveBeenCalled({
      type: 'ADD_ITEM',
      payload: mockProduct,
    });
  });
  it('render quantity and increment/decrement when the item is add to the cart', () => {
    render(
      <MenuItem
        dispatch={mockDispatch}
        cart={mockCartWithItem}
        product={mockProduct}
      />,
    );
  });
});
