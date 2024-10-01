import removeItemIcon from '../../assets/icons/icon-remove-item.svg';

const CartItem = ({ cartItem }) => {
  return (
    <div>
      <div className="flex items-center py-4 divide border-b-2 border-rose100">
        <div className="flex-1">
          <p className="text-lg font-bold capitalize">{cartItem.name}</p>
          <div className="flex items-center gap-8">
            <p className="text-red text-sm font-bold">{cartItem.quantity}</p>
            <p className="font-medium text-rose300 text-sm">
              @ ${cartItem.price}
            </p>
            <p className=" text-rose500 font-medium text-sm">
              ${cartItem.totalPrice}
            </p>
          </div>
        </div>

        <div className="border-2 border-rose400 p-1 rounded-full">
          <img src={removeItemIcon} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
