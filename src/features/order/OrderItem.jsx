import { useEffect, useState } from 'react';
import { formatCurrency, truncateString } from '../../utensils/helper';

const OrderItem = ({ orderItem }) => {
  const { image, name, quantity, price } = orderItem;
  const [isMobile, setIsMobile] = useState(false);

  const condition = (str) => {
    return str.length >= 16 && str.length <= 25;
  };

  const checkMobileScreen = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkMobileScreen();

    window.addEventListener('resize', checkMobileScreen);
    return () => {
      window.removeEventListener('resize', checkMobileScreen);
    };
  }, []);

  return (
    <div>
      <div className="divide grid-row-[1fr_auto] grid grid-cols-[auto_1fr_auto] gap-x-4 border-b-2 border-rose100 py-3">
        <div className="row-span-3 row-start-1">
          {image?.thumbnail ? (
            <img src={image.thumbnail} alt="" className="" width={60} />
          ) : (
            <p>Thumbnail image is not available</p>
          )}
        </div>

        <div className="flex flex-col gap-2 laptop:gap-2.5">
          <p className="text-base font-bold capitalize">
            {isMobile && condition(name) ? truncateString(name, 5) : name}
          </p>
          <div className="flex items-center gap-8">
            <p className="text-sm font-bold text-red">{quantity}x</p>
            <p
              data-testid="price-data"
              className="text-sm font-medium text-rose300"
            >
              @ {formatCurrency(price)}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <p
            data-testid="totalPrice-data"
            className="place-self-center text-sm font-medium text-rose500"
          >
            {formatCurrency((quantity * price).toFixed(2))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
