"use client";

import React, { useState } from "react";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import { useCart } from "@/context/useCart";

export default function Cart() {
  const { cart, updateCount, removeItem } = useCart();
  const API = process.env.NEXT_PUBLIC_API_URL;

  const total = cart
    .reduce((sum, item) => sum + item.price * item.count, 0)
    .toFixed(2);

  const [editingId, setEditingId] = useState<string | number | null>(null);
  const [temp, setTemp] = useState("");

  return (
    <div className="bg-[#0b1126] min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 w-full max-w-md mx-auto px-4 py-6 text-white">
        <h2 className="text-center text-2xl font-semibold mb-4">Корзина</h2>
        <div className="border-b border-pink-500 mb-6"></div>

        {cart.length === 0 && (
          <p className="text-center text-gray-400">Cart is empty 🛒</p>
        )}

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 bg-[#0d142e] rounded-md p-3 items-center mb-6 relative"
          >
            <img
              src={`${API}/assets/${item.image}`}
              alt={item.name}
              className="w-28 h-28 object-contain rounded-md"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-400 text-sm">{item.brand}</p>
              <p className="text-pink-400 font-bold mt-1">${item.price}</p>

              <div className="flex items-center gap-3 mt-2 border border-pink-500 w-fit px-2 py-1 rounded-md">
                <button
                  onClick={() =>
                    updateCount(item.id, Math.max(item.count - 1, 1))
                  }
                >
                  -
                </button>

                {editingId === item.id ? (
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    autoFocus
                    className="w-14 text-center bg-transparent outline-none"
                    value={temp}
                    onChange={(e) => {
                      let val = e.target.value.replace(/\D/g, "");
                      if (val.length > 4) val = val.slice(0, 4);
                      setTemp(val);
                    }}
                    onBlur={() => {
                      let final = parseInt(temp);
                      if (!final) final = item.count;
                      if (final < 1) final = 1;
                      if (final > 9999) final = 9999;
                      updateCount(item.id, final);
                      setEditingId(null);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        let final = parseInt(temp);
                        if (!final) final = item.count;
                        if (final < 1) final = 1;
                        if (final > 9999) final = 9999;
                        updateCount(item.id, final);
                        setEditingId(null);
                      }
                    }}
                  />
                ) : (
                  <span
                    className="cursor-pointer select-none"
                    onClick={() => {
                      setEditingId(item.id);
                      setTemp(item.count.toString());
                    }}
                  >
                    {item.count}
                  </span>
                )}

                <button
                  onClick={() =>
                    updateCount(item.id, Math.min(item.count + 1, 9999))
                  }
                >
                  +
                </button>
              </div>
            </div>

            <button
              className="absolute top-1 right-2 text-gray-400 text-xl"
              onClick={() => removeItem(item.id)}
            >
              ✕
            </button>
          </div>
        ))}

        {cart.length !== 0 && (
          <>
            <label className="text-gray-300 text-sm mb-1 block">
              Write your card number:
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-pink-500 outline-none py-2 mb-6"
              placeholder="0000 0000 0000 0000"
            />

            <button className="w-full bg-pink-500 text-white py-3 rounded-full font-semibold mb-6">
              Apply
            </button>

            <div className="flex justify-between mb-2">
              <p>Discount</p>
              <span>0 $</span>
            </div>

            <div className="flex justify-between mb-6">
              <p>Amount to be paid</p>
              <span>{total} $</span>
            </div>

            <button className="mt-2 w-full bg-pink-500 text-white py-3 rounded-full font-semibold">
              Order
            </button>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
