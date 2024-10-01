import { useState } from 'react';
import Cart from './features/cart/Cart';
import Menu from './features/menu/Menu';
import { Header } from './ui/Header';
import { useEffect } from 'react';

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
    <main className="bg-rose100 min-h-screen h-screen overflow-hidden p-4 mobile:overflow-scroll mobile:grid mobile:grid-rows-[1fr_1fr] desktop:grid desktop:grid-cols-[1fr_auto] desktop:gap-x-8  desktop:grid-rows-[50px_1fr]">
      <Header />
      <Menu menu={menu} />
      <Cart />
    </main>
  );
}

export default App;
