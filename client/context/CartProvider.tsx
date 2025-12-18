"use client";

import { createContext, ReactNode, useState, useEffect } from "react";

export interface CartItem {
  id: string | number;
  name: string;
  brand: string;
  price: number;
  image: string;
  accent?: string;
  count: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Omit<CartItem, "count">) => void;
  removeItem: (id: string | number) => void;
  updateCount: (id: string | number, count: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];
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

  const addToCart = (product: Omit<CartItem, "count">) => {
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

  const removeItem = (id: string | number) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const updateCount = (id: string | number, count: number) => {
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, count } : p)));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, updateCount }}>
      {children}
    </CartContext.Provider>
  );
}
