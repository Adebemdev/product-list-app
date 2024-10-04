import MenuItem from './MenuItem';

const Menu = ({ products, dispatch, cart }) => {
  return (
    <section
      data-testid="menu-data"
      className="max-h-auto laptop:row-span-3 laptop:row-start-2 laptop:grid laptop:grid-cols-[1fr_1fr_1fr] laptop:grid-rows-[1fr_1fr_1fr] laptop:gap-6 grid grid-cols-1"
    >
      {products.map((product, index) => (
        <MenuItem
          product={product}
          key={index}
          dispatch={dispatch}
          cart={cart}
        />
      ))}
    </section>
  );
};

export default Menu;
