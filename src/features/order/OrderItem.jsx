const OrderItem = ({ orderItem }) => {
  const { image, name, quantity, price, totalPrice } = orderItem;

  return (
    <div>
      <div className="divide grid-row-[1fr_auto] grid grid-cols-[auto_1fr_auto] gap-x-4 border-b-2 border-rose100 py-3">
        <div className="row-span-3 row-start-1">
          <img src={image} alt="" className="" width={60} />
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-base font-bold capitalize">{name}</p>
          <div className="flex items-center gap-8">
            <p className="text-sm font-bold text-red">{quantity}x</p>
            <p className="text-sm font-medium text-rose300">@ ${price}</p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <p className="place-self-center text-sm font-medium text-rose500">
            ${totalPrice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
