"use client";

import React from "react";
import { useCart } from "@/context/useCart";
import { CartItem } from "@/context/CartProvider";

interface ProductCardProps {
  product: Omit<CartItem, "count">;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { image, name, brand, price, accent, id } = product;
  const { cart, addToCart, updateCount, removeItem } = useCart();

  const itemInCart = cart.find((p) => p.id === id);
  const count = itemInCart ? itemInCart.count : 0;

  return (
    <div className="shrink-0 w-[244px] bg-[#1F2937] rounded-lg">
      <img
        src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${image}`}
        className="w-full rounded-lg"
        alt={name}
      />

      <p
        className="mt-[9px] ml-3 font-bold text-[18px] text-white"
        style={{ fontFamily: "Oswald" }}
      >
        {name}
      </p>

      <p
        className="ml-3 text-[14px]"
        style={{
          fontFamily: "Oswald",
          color: "#9CA3AF",
        }}
      >
        {brand}
      </p>

      <p
        className="mt-1.5 ml-3 font-bold text-[18px]"
        style={{
          fontFamily: "Oswald",
          color: accent,
        }}
      >
        ${price.toFixed(2)}
      </p>

      {/* ---- BUTTON / COUNTER SECTION ---- */}
      {count === 0 ? (
        <button
          className="w-[216px] h-[35px] ml-3 mb-3.5 mt-4 rounded-md"
          style={{ backgroundColor: accent }}
          onClick={() => addToCart(product)}
        >
          <p
            className="text-[14px] font-bold text-black"
            style={{
              fontFamily: "Oswald",
              textAlign: "center",
            }}
          >
            ADD TO CART
          </p>
        </button>
      ) : (
        <div
          className="flex items-center justify-between w-[216px] h-[35px] ml-3 mb-3.5 mt-4 rounded-md"
          style={{ backgroundColor: accent }}
        >
          <button
            onClick={() =>
              count === 1 ? removeItem(id) : updateCount(id, count - 1)
            }
            className="w-10 text-black font-bold text-[20px]"
            style={{ fontFamily: "Oswald" }}
          >
            -
          </button>

          <p
            className="text-[16px] font-bold text-black"
            style={{ fontFamily: "Oswald" }}
          >
            {count}
          </p>

          <button
            onClick={() => updateCount(id, count + 1)}
            className="w-10 text-black font-bold text-[20px]"
            style={{ fontFamily: "Oswald" }}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
