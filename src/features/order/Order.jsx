import Button from '../../ui/Button';
import orderIcon from '../../assets/icons/icon-order-confirmed.svg';
import OrderItem from './OrderItem';
import { formatCurrency } from '../../utensils/helper';

const Order = ({ cart = [], isOpen, handleOrder }) => {
  const totalPrice = cart.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0,
  );

  return (
    isOpen && (
      <>
        <div
          role="dialog"
          className="fixed inset-0 z-40 bg-rose900 opacity-50"
        ></div>
        <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center">
          <div className="mt-20 min-h-80 w-full max-w-full rounded-lg bg-rose50 p-8 shadow-lg laptop:col-start-2 laptop:col-end-3 laptop:mt-0 laptop:h-auto laptop:w-full laptop:max-w-md">
            <div>
              <img src={orderIcon} alt="" className="mb-2 laptop:mb-2" />
              <p
                data-testid="order-confirmed"
                className="mb-2 text-3xl font-bold capitalize tracking-normal laptop:text-3xl"
              >
                order{' '}
                <span className="block laptop:inline-block">confrimed</span>
              </p>
              <p className="mb-4 text-base text-rose400">
                We hope you enjoy your food!
              </p>
            </div>
            <div className="mb-8 mt-4 rounded-lg bg-rose100 px-8 py-2">
              {cart.map((orderItem, index) => (
                <OrderItem orderItem={orderItem} key={index} />
              ))}
              <div className="flex items-center justify-between py-3">
                <p className="text-base font-medium capitalize text-rose300">
                  order total
                </p>
                <p
                  data-testid="totalPrice"
                  className="text-xl font-bold text-rose900"
                >
                  {formatCurrency(totalPrice.toFixed(2))}
                </p>
              </div>
            </div>
            <Button type="tertiary" onClick={handleOrder}>
              start new order
            </Button>
          </div>
        </div>
      </>
    )
  );
};

export default Order;
