import MenuItem from './MenuItem';

const Menu = ({ menu }) => {
  return (
    <section className="grid grid-cols-1 max-h-auto desktop:grid desktop:grid-cols-[1fr_1fr_1fr] desktop:grid-rows-[1fr_1fr_1fr] desktop:gap-6 desktop:row-start-2 desktop:row-span-3">
      {menu.map((product, index) => (
        <MenuItem product={product} key={index} />
      ))}
    </section>
  );
};

export default Menu;
