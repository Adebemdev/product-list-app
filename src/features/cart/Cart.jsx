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
    <section className="bg-rose50 mt-8 rounded-lg mobile:w-full mobile:p-4 desktop:p-8 desktop:h-[500px] desktop:col-start-2 desktop:col-end-3">
      <h3 className="text-red text-xl font-bold desktop:text-xl">
        Your cart (0)
      </h3>

      {cartData.map((cartItem, index) => (
        <CartItem cartItem={cartItem} key={index} />
      ))}

      <div className="flex py-4 items-center justify-between">
        <p className="text-lg capitalize">order total</p>
        <p className="font-bold text-xl text-rose900">$46.50</p>
      </div>
      <div className="flex flex-col gap-2">
        <Button type="subTertiary">
          <img src={carbonNeutralIcon} alt="" className="" />
          <span className="text-sm tracking-tight">
            This is a{' '}
            <span className="text-rose900 font-bold">carbon-neutral</span>{' '}
            delivery
          </span>
        </Button>
        <Button type="tertiary">confrim order</Button>
      </div>
    </section>
  );
};

export default Cart;
