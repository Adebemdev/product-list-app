import Button from '../../ui/Button';
import addToCartIcon from '../../assets/icons/icon-add-to-cart.svg';
import { formatCurrency } from '../../utensils/helper';

const MenuItem = ({ product, dispatch, cart }) => {
  const { image, category, name, price } = product;

  if (!image || !image.desktop) {
    return <p>Image not available</p>;
  }

  const handleAddToCart = (item) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: item,
    });

    isItemInCart(item.id);
  };

  const handleIncrement = (item) => {
    dispatch({ type: 'INCREMENT_ITEM', payload: item });
  };
  const handledecrement = (item) => {
    dispatch({ type: 'DECREMENT_ITEM', payload: item });
  };

  const updateQuantity = (productId) => {
    const item = cart.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  const isItemInCart = (itemId) => {
    return cart.some((item) => item.id === itemId);
  };

  let quantity = updateQuantity(product.id);

  return (
    <div className="relative">
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet={`${image.mobile} 360w`}
          sizes="(max-width: 767px) 100vw, 360px"
          width="360"
          height="480"
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${image.desktop} 1920w`}
          sizes="(min-width: 768px) 100vw, 1920px"
          width="1920"
          height="1080"
        />
        <source media="" srcSet={image.thumbnail} type="image/jpeg" />
        <img
          src={image.thumbnail}
          alt={name}
          className={`w-full rounded-md ${isItemInCart(product.id) ? 'border-4 border-red' : ''}`}
        />
      </picture>

      <div className="mt-8 flex flex-col">
        <p className="text-rose400">{category}</p>
        <p className="font-bold text-rose900">{name}</p>
        <p className="font-medium text-red">
          {formatCurrency(price.toFixed(2))}
        </p>
      </div>
      {quantity === 0 ? (
        <Button
          aria-label="button-name"
          onClick={() => handleAddToCart(product)}
          type="primary"
        >
          <img
            src={addToCartIcon}
            alt="icon-button"
            data-testid="button-icon"
          />
          <span className="font-bold">Add to cart</span>
        </Button>
      ) : (
        <Button type="secondary">
          <div
            className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-rose50 hover:bg-rose50"
            onClick={() => handledecrement(product)}
            data-testid="decrement-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="2"
              fill="none"
              viewBox="0 0 10 2"
              data-testid="decrement-button"
            >
              <path fill="hsl(20, 50%, 98%)" d="M0 .375h10v1.25H0V.375Z" />
            </svg>
          </div>
          <span className="text-rose50">{quantity}</span>
          <div
            className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-rose50 hover:bg-rose50"
            onClick={() => handleIncrement(product)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
              viewBox="0 0 10 10"
              data-testid="icon-2"
            >
              <path
                fill="hsl(20, 50%, 98%)"
                d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
              />
            </svg>
          </div>
        </Button>
      )}
    </div>
  );
};

export default MenuItem;
