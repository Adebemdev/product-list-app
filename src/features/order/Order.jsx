import Button from '../../ui/Button';
import orderIcon from '../../assets/icons/icon-order-confirmed.svg';
import OrderItem from './OrderItem';
import classicImg from '../../../public/assets/images/image-tiramisu-thumbnail.jpg';
import waffleImg from '../../../public/assets/images/image-waffle-thumbnail.jpg';
import pannaImg from '../../../public/assets/images/image-panna-cotta-thumbnail.jpg';
const orderData = [
  {
    name: 'classic tiraminu',
    image: classicImg,
    price: 6.5,
    quantity: 1,
    totalPrice: 7.5,
  },
  {
    name: 'waffle with berries',
    image: waffleImg,
    price: 7.5,
    quantity: 2,
    totalPrice: 9.5,
  },
  {
    name: 'vanilla panna cotta',
    image: pannaImg,
    price: 5.5,
    quantity: 3,
    totalPrice: 8.5,
  },
];

const Order = () => {
  return (
    <div>
      <div className="fixed inset-0 z-40 bg-rose900 opacity-50"></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="max-h-min rounded-lg bg-rose50 p-8 shadow-lg mobile:min-h-full desktop:col-start-2 desktop:col-end-3 desktop:h-auto desktop:w-full desktop:max-w-md">
          <div>
            <img src={orderIcon} alt="" className="desktop:mb-4" />
            <p className="mb-2 text-5xl font-bold capitalize desktop:text-3xl">
              order confirmed
            </p>
            <p className="mb-4 text-base text-rose400">
              We hope you enjoy your food!
            </p>
          </div>
          <div className="mb-8 mt-4 rounded-lg bg-rose100 px-8 py-2">
            {orderData.map((orderItem, index) => (
              <OrderItem orderItem={orderItem} key={index} />
            ))}
            <div className="flex items-center justify-between py-3">
              <p className="text-base font-medium capitalize text-rose300">
                order total
              </p>
              <p className="text-xl font-bold text-rose900">$46.50</p>
            </div>
          </div>
          <Button type="tertiary">start new order</Button>
        </div>
      </div>
    </div>
  );
};

export default Order;
