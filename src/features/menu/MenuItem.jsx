import Button from '../../ui/Button';
import addToCartIcon from '../../assets/icons/icon-add-to-cart.svg';
import { useState } from 'react';

const MenuItem = ({ product }) => {
  const [isOpen, setIsOpen] = useState(true);

  const { image, category, name, price } = product;

  return (
    <div className="relative">
      <figure className="">
        <picture>
          <source
            media="(max-width:767px)"
            width="360"
            height="480"
            srcSet={image.desktop}
            type="image/jpeg"
          />
          <source
            media="(min-width:768px)"
            width="1920"
            height="1080"
            srcSet={image.mobile}
            type="image/jpeg"
          />
          <source media="" srcSet={image.thumbnail} type="image/jpeg" />
          <img src={image.mobile} alt="" className="rounded-md flex-1" />
        </picture>
      </figure>
      <div className="flex flex-col mt-8">
        <p className="text-rose400">{category}</p>
        <p className="text-rose900 font-bold">{name}</p>
        <p className="text-red font-medium">${price.toFixed(2)}</p>
      </div>

      {isOpen && (
        <Button onClick={() => setIsOpen((open) => !open)} type="primary">
          <img src={addToCartIcon} alt="" className="" />
          <span className="font-bold">Add to cart</span>
        </Button>
      )}
      {!isOpen && (
        <Button type="secondary">
          <div className="w-6 h-6 border-2 border-rose50 rounded-full hover:bg-rose50 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="2"
              fill="none"
              viewBox="0 0 10 2"
            >
              <path fill="hsl(20, 50%, 98%)" d="M0 .375h10v1.25H0V.375Z" />
            </svg>
          </div>
          <span className="text-rose50">0</span>
          <div className="w-6 h-6 border-2 rounded-full hover:bg-rose50  border-rose50 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              class="fill-current"
              fill="none"
              viewBox="0 0 10 10"
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
