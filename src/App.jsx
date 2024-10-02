import { useState } from 'react';
import Cart from './features/cart/Cart';
import Menu from './features/menu/Menu';
import { Header } from './ui/Header';
import { useEffect } from 'react';
import Order from './features/order/Order';

function App() {
  const [menu, setMenu] = useState([]);

  useEffect(function () {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMenu(data);
      });
  }, []);

  return (
    <main className="relative h-screen min-h-screen overflow-hidden bg-rose100 p-4 mobile:grid mobile:grid-rows-[1fr_1fr] mobile:overflow-scroll desktop:grid desktop:grid-cols-[1fr_auto] desktop:grid-rows-[50px_1fr] desktop:gap-x-8">
      <Header />
      <Menu menu={menu} />
      <Cart />
      <Order />
    </main>
  );
}

export default App;
