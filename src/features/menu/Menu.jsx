import MenuItem from './MenuItem';

const Menu = ({ products, dispatch, cart }) => {
  return (
    <section
      data-testid="menu-data"
      className="max-h-auto grid grid-cols-1 desktop:row-span-3 desktop:row-start-2 desktop:grid desktop:grid-cols-[1fr_1fr_1fr] desktop:grid-rows-[1fr_1fr_1fr] desktop:gap-6"
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
