import React, { useState, useEffect } from "react";
import CartContext from "./CartContext";

export function CartProvider({ children }) {
  // localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
