/*eslint-disable default-case */
import { useEffect, useReducer, useState } from 'react';
import Cart from './features/cart/Cart';
import Menu from './features/menu/Menu';
import { Header } from './ui/Header';

import Order from './features/order/Order';

const initialState = {
  cart: [],
  orderedPlaced: false,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      // check for item existence
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item,
          ),
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              ...action.payload,
              quantity: 1,
            },
          ],
        };
      }
    case 'REMOVE_ITEM':
      const activeItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      if (activeItem && activeItem.quantity > 1) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                }
              : item,
          ),
        };
      } else {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      }

    case 'INCREMENT_ITEM':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        ),
      };

    case 'DECREMENT_ITEM':
      const itemToDecrement = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      if (itemToDecrement.quantity > 1) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          ),
        };
      } else {
        return state;
      }
    case 'RESET_CART':
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

function App() {
  const [{ cart }, dispatch] = useReducer(cartReducer, initialState);
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(function () {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => {
        const productsWithId = data.map((product, index) => ({
          ...product,
          id: index + 1,
        }));
        setProducts(productsWithId);
      })
      .catch((error) => {
        console.error('Erro fetching items data', error);
      });
  }, []);

  const handleOrder = () => {
    dispatch({
      type: 'RESET_CART',
    });
    setIsModalOpen(false);
  };

  return (
    <div className="relative h-screen min-h-screen overflow-hidden bg-rose100 p-4 mobile:grid mobile:grid-rows-[1fr_1fr] mobile:overflow-scroll desktop:grid desktop:grid-cols-[1fr_400px] desktop:grid-rows-[50px_1fr] desktop:gap-x-8 desktop:p-8">
      <Header />
      <Menu products={products} dispatch={dispatch} cart={cart} />
      <Cart
        cart={cart}
        dispatch={dispatch}
        openModal={() => setIsModalOpen(true)}
      />
      <Order cart={cart} isOpen={isModalOpen} handleOrder={handleOrder} />
    </div>
  );
}

export default App;
