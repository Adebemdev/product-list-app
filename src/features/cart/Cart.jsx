// import CartItem from './CartItem';
import Button from '../../ui/Button';
import carbonNeutralIcon from '../../assets/icons/icon-carbon-neutral.svg';
import removeItemIcon from '../../assets/icons/icon-remove-item.svg';
import CartEmpty from './CartEmpty';
import { formatCurrency } from '../../utensils/helper';

const Cart = ({ cart, dispatch, openModal }) => {
  const totalPrice = cart.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0,
  );

  return (
    <div
      data-testid="cart-data"
      className="mt-8 rounded-lg bg-rose50 mobile:w-full mobile:p-4 desktop:col-start-2 desktop:col-end-3 desktop:h-full desktop:min-h-[30rem] desktop:p-4"
    >
      <h3 className="text-xl font-bold text-red desktop:text-xl">
        Your cart ({cart.length})
      </h3>
      {cart.length > 0 && (
        <div className="">
          {cart.map((cartItem, index) => (
            // <CartItem cartItem={cartItem} key={index} dispatch={dispatch} />
            <div
              key={index}
              className="divide flex items-center border-b-2 border-rose100 py-3"
            >
              <div className="flex-1">
                <p className="text-base font-bold capitalize">
                  {cartItem.name}
                </p>
                <div className="flex items-center gap-8">
                  <p className="text-sm font-bold text-red">
                    {cartItem.quantity}x
                  </p>
                  <p className="text-sm font-medium text-rose300">
                    @ {formatCurrency(cartItem.price)}
                  </p>
                  <p className="text-sm font-medium text-rose500">
                    {formatCurrency(
                      (cartItem.quantity * cartItem.price).toFixed(2),
                    )}
                  </p>
                </div>
              </div>
              <div className="rounded-full border-2 border-rose400 p-1">
                <img
                  src={removeItemIcon}
                  alt="removeIcon"
                  data-testid="remove-icon"
                  onClick={() =>
                    dispatch({ type: 'REMOVE_ITEM', payload: cartItem })
                  }
                />
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between py-3">
            <p className="text-base font-medium capitalize text-rose300">
              order total
            </p>
            <p className="text-xl font-bold text-rose900">
              {formatCurrency(totalPrice.toFixed(2))}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Button
              type="subTertiary"
              label="carbon-neutral"
              aria-label="carbon-neutral"
            >
              <img src={carbonNeutralIcon} alt="" />
              <span className="text-sm tracking-tight">
                This is a{' '}
                <span className="font-bold text-rose900">carbon-neutral</span>{' '}
                delivery
              </span>
            </Button>
            <Button
              type="tertiary"
              onClick={openModal}
              label="confirm order"
              aria-label="confirm order"
            >
              confirm order
            </Button>
          </div>
        </div>
      )}
      {cart.length === 0 && <CartEmpty />}
    </div>
  );
};

export default Cart;
