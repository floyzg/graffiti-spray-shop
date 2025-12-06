import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useCart } from "../../context/useCart";

function Cart() {
  const { cart, updateCount, removeItem } = useCart();

  const total = cart
    .reduce((sum, item) => sum + item.price * item.count, 0)
    .toFixed(2);
  console.log("cartProviderTest:", useCart);
  return (
    <div className="bg-[#0b1126] min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 w-full max-w-md mx-auto px-4 py-6 text-white">
        {/* TITLE */}
        <h2 className="text-center text-2xl font-semibold mb-4">Корзина</h2>
        <div className="border-b border-pink-500 mb-6"></div>

        {/* IF EMPTY */}
        {cart.length === 0 && (
          <p className="text-center text-gray-400">Cart is empty 🛒</p>
        )}

        {/* LIST OF ITEMS */}
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 bg-[#0d142e] rounded-md p-3 items-center mb-6 relative"
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.name}
              className="w-28 h-28 object-contain rounded-md"
            />

            {/* TEXT INFO */}
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-400 text-sm">{item.brand}</p>
              <p className="text-pink-400 font-bold mt-1">${item.price}</p>

              {/* COUNTER */}
              <div className="flex items-center gap-3 mt-2 border border-pink-500 w-fit px-2 py-1 rounded-md">
                <button
                  onClick={() =>
                    updateCount(item.id, Math.max(item.count - 1, 1))
                  }
                >
                  -
                </button>
                <span>{item.count}</span>
                <button onClick={() => updateCount(item.id, item.count + 1)}>
                  +
                </button>
              </div>
            </div>

            {/* REMOVE */}
            <button
              className="absolute top-1 right-2 text-gray-400 text-xl"
              onClick={() => removeItem(item.id)}
            >
              ✕
            </button>
          </div>
        ))}

        {/* IF CART NOT EMPTY */}
        {cart.length !== 0 && (
          <>
            {/* CARD INPUT */}
            <label className="text-gray-300 text-sm mb-1 block">
              Write your card number:
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-pink-500 outline-none py-2 mb-6"
              placeholder="0000 0000 0000 0000"
            />

            {/* APPLY BUTTON */}
            <button className="w-full bg-pink-500 text-white py-3 rounded-full font-semibold mb-6">
              Apply
            </button>

            {/* SUMMARY */}
            <div className="flex justify-between mb-2">
              <p>Discount</p>
              <span>0 $</span>
            </div>

            <div className="flex justify-between mb-6">
              <p>Amount to be paid</p>
              <span>{total} $</span>
            </div>

            {/* ORDER BUTTON */}
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

export default Cart;
