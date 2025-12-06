import React, { useState } from "react";
import CartContext from "./CartContext";

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, count: p.count + 1 } : p
        );
      }
      return [...prev, { ...product, count: 1 }];
    });
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const updateCount = (id, count) => {
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, count } : p)));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, updateCount }}>
      {children}
    </CartContext.Provider>
  );
}
