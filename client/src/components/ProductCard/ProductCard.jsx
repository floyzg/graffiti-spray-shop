import React from "react";
import { useCart } from "../../context/useCart";

const ProductCard = ({ product }) => {
  const { image, name, brand, price, accent } = product;
  const { addToCart } = useCart();

  return (
    <div className="shrink-0 w-[244px] bg-[#1F2937] rounded-lg">
      <img src={image} className="w-full rounded-lg" alt={name} />

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
    </div>
  );
};

export default ProductCard;
