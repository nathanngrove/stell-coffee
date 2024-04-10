"use client";

import React, { useState, useContext } from "react";
import { CartItem } from "../types/types";

type CartContextObject = {
  cart: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (item: CartItem) => void;
};

const CartContext = React.createContext<CartContextObject>({
  cart: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
});

export function useCart() {
  return useContext(CartContext);
}

type CartProviderProps = {
  children: React.ReactNode;
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addItemToCart(item: CartItem) {
    setCart((oldCart) => [...oldCart, item]);
  }

  function removeItemFromCart(item: CartItem) {}

  const cartObject = {
    cart,
    addItemToCart,
    removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartObject}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
