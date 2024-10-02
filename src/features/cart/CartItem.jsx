import removeItemIcon from '../../assets/icons/icon-remove-item.svg';

const CartItem = ({ cartItem }) => {
  return (
    <div>
      <div className="divide flex items-center border-b-2 border-rose100 py-3">
        <div className="flex-1">
          <p className="text-base font-bold capitalize">{cartItem.name}</p>
          <div className="flex items-center gap-8">
            <p className="text-sm font-bold text-red">{cartItem.quantity}x</p>
            <p className="text-sm font-medium text-rose300">
              @ ${cartItem.price}
            </p>
            <p className="text-sm font-medium text-rose500">
              ${cartItem.totalPrice}
            </p>
          </div>
        </div>

        <div className="rounded-full border-2 border-rose400 p-1">
          <img src={removeItemIcon} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
