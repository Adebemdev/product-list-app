import CartItem from './CartItem';
import Button from '../../ui/Button';
import carbonNeutralIcon from '../../assets/icons/icon-carbon-neutral.svg';
const cartData = [
  {
    name: 'classic tiraminu',
    price: 6.5,
    quantity: 1,
    totalPrice: 7.5,
  },
  {
    name: 'waffle with berries',
    price: 7.5,
    quantity: 2,
    totalPrice: 9.5,
  },
  {
    name: 'vanilla panna cotta',
    price: 5.5,
    quantity: 3,
    totalPrice: 8.5,
  },
];

const Cart = () => {
  return (
    <section className="mt-8 rounded-lg bg-rose50 mobile:w-full mobile:p-4 desktop:col-start-2 desktop:col-end-3 desktop:min-h-[420px] desktop:p-4">
      <h3 className="text-xl font-bold text-red desktop:text-xl">
        Your cart (0)
      </h3>

      {cartData.map((cartItem, index) => (
        <CartItem cartItem={cartItem} key={index} />
      ))}

      <div className="flex items-center justify-between py-3">
        <p className="text-base font-medium capitalize text-rose300">
          order total
        </p>
        <p className="text-xl font-bold text-rose900">$46.50</p>
      </div>
      <div className="flex flex-col gap-3">
        <Button type="subTertiary">
          <img src={carbonNeutralIcon} alt="" className="" />
          <span className="text-sm tracking-tight">
            This is a{' '}
            <span className="font-bold text-rose900">carbon-neutral</span>{' '}
            delivery
          </span>
        </Button>
        <Button type="tertiary">confrim order</Button>
      </div>
    </section>
  );
};

export default Cart;
