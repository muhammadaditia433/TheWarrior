/* eslint-disable react-refresh/only-export-components */

import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  const addToCart = (menu) => {

    const exist = cart.find(
      (item) => item.id === menu.id
    );

    if (exist) {

      setCart(

        cart.map((item) =>

          item.id === menu.id

            ? {
                ...item,
                qty: item.qty + 1,
              }

            : item

        )

      );

    } else {

      setCart([

        ...cart,

        {

          ...menu,

          qty: 1,

        },

      ]);

    }

  };

  const increaseQty = (id) => {

    setCart(

      cart.map((item) =>

        item.id === id

          ? {

              ...item,

              qty: item.qty + 1,

            }

          : item

      )

    );

  };

  const decreaseQty = (id) => {

    setCart(

      cart.map((item) =>

        item.id === id

          ? {

              ...item,

              qty: item.qty > 1 ? item.qty - 1 : 1,

            }

          : item

      )

    );

  };

  const removeCart = (id) => {

    setCart(

      cart.filter(

        (item) => item.id !== id

      )

    );

  };

  const clearCart = () => {

    setCart([]);

  };

  return (

    <CartContext.Provider

      value={{

        cart,

        addToCart,

        increaseQty,

        decreaseQty,

        removeCart,

        clearCart,

      }}

    >

      {children}

    </CartContext.Provider>

  );

}

export default CartProvider;