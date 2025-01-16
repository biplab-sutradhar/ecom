import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.id === id);
      if (index !== -1) {
        // Only remove one item by its index
        const updatedCart = [...prevCart];
        updatedCart.splice(index, 1);
        return updatedCart;
      }
      return prevCart;
    });
  };
  

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
