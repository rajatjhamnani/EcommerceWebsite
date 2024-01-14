import React, { createContext, useReducer, useState } from "react";
import { cartReducer } from "./CartReducer";
export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cart, dispatch] = useReducer(cartReducer, {
    shoppingCart: [],
    totalPrice: 0,
    qty: 0,
  });
  return (
    <CartContext.Provider value={{ ...cart, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
