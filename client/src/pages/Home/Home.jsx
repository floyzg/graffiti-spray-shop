import React, { useState, useMemo, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import ProductCard from "../../components/ProductCard/ProductCard";
import DropdownModal from "../../components/DropdownModal/DropdownModal";

import Pink from "../../assets/pink.png";
import Blue from "../../assets/blue.png";
import Green from "../../assets/green.png";
import Orange from "../../assets/orange.png";
import Purple from "../../assets/purple.png";
import Yellow from "../../assets/yellow.png";
import Red from "../../assets/red.png";
import Silver from "../../assets/silver.png";

import Palette from "../../assets/Paint_Palette.svg";
import Truck from "../../assets/Truck.svg";
import People from "../../assets/People.svg";

const products = [
  {
    id: 1,
    name: "Neon Pink Blaster",
    brand: "Montana Premium",
    color: "Pink",
    price: 12.99,
    image: Pink,
    accent: "#FF10F0",
  },
  {
    id: 2,
    name: "Electric Blue",
    brand: "Ironlak pro",
    color: "Blue",
    price: 14.99,
    image: Blue,
    accent: "#0077FF",
  },
  {
    id: 3,
    name: "Lime Shock",
    brand: "Belton Molotow",
    color: "Green",
    price: 11.99,
    image: Green,
    accent: "#32FF32",
  },
  {
    id: 4,
    name: "Fire Orange",
    brand: "Montana Gold",
    color: "Orange",
    price: 13.99,
    image: Orange,
    accent: "#FF6B35",
  },
  {
    id: 5,
    name: "Royal Purple",
    brand: "Ironlak Sugar",
    color: "Purple",
    price: 12.49,
    image: Purple,
    accent: "#8B5CF6",
  },
  {
    id: 6,
    name: "Shock Yellow",
    brand: "Montana Black",
    color: "Yellow",
    price: 10.99,
    image: Yellow,
    accent: "#FACC15",
  },
  {
    id: 7,
    name: "Blood Red",
    brand: "Beltom Premium",
    color: "Red",
    price: 9.99,
    image: Red,
    accent: "#EF4444",
  },
  {
    id: 8,
    name: "Chrome Silver",
    brand: "Montana Cans",
    color: "Silver",
    price: 15.99,
    image: Silver,
    accent: "#D1D5DB",
  },
  {
    id: 9,
    name: "Chrome Silver",
    brand: "Montana Cans",
    color: "Silver",
    price: 15.99,
    image: Silver,
    accent: "#D1D5DB",
  },
];

const colorOptions = [
  "All Colors",
  "Pink",
  "Blue",
  "Green",
  "Orange",
  "Purple",
  "Yellow",
  "Red",
  "Silver",
];

const priceOptions = [
  { label: "Price Range", value: "all" },
  { label: "Under $11", value: "under11" },
  { label: "$11 - $13", value: "11-13" },
  { label: "Over $13", value: "over13" },
];

const brandOptions = [
  "All Brands",
  "Montana Premium",
  "Ironlak pro",
  "Belton Molotow",
  "Montana Gold",
  "Ironlak Sugar",
  "Montana Black",
  "Beltom Premium",
  "Montana Cans",
];

const colorCards = [
  {
    id: 1,
    label: "NEON PINK",
    gradient: "linear-gradient(135deg, #FF00A8, #FF7AE0)",
  },
  {
    id: 2,
    label: "ELECTRIC",
    gradient: "linear-gradient(135deg, #00A2FF, #4F46E5)",
  },
  {
    id: 3,
    label: "LIME",
    gradient: "linear-gradient(135deg, #39FF14, #16A34A)",
  },
  {
    id: 4,
    label: "FIRE",
    gradient: "linear-gradient(135deg, #FF6B35, #F97316)",
  },
  {
    id: 5,
    label: "ROYAL",
    gradient: "linear-gradient(135deg, #6366F1, #8B5CF6)",
  },
  {
    id: 6,
    label: "SHOCK",
    gradient: "linear-gradient(135deg, #FACC15, #F97316)",
  },
];

function Home() {
  const [selectedColor, setSelectedColor] = useState("All Colors");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("All Brands");

  const [openDropdown, setOpenDropdown] = useState(null);
  const [dropdownOrigin, setDropdownOrigin] = useState(null);

  const handleDropdownOpen = (type, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setDropdownOrigin({
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height,
    });
    setOpenDropdown(type);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (selectedColor !== "All Colors" && p.color !== selectedColor)
        return false;
      if (selectedBrand !== "All Brands" && p.brand !== selectedBrand)
        return false;
      if (selectedPrice === "under11" && !(p.price < 11)) return false;
      if (selectedPrice === "11-13" && !(p.price >= 11 && p.price <= 13))
        return false;
      if (selectedPrice === "over13" && !(p.price > 13)) return false;
      return true;
    });
  }, [selectedColor, selectedPrice, selectedBrand]);

  // block scroll if filter is open
  useEffect(() => {
    if (openDropdown) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [openDropdown]);

  return (
    <div className="flex flex-col min-h-screen bg-[#111827]">
      <div className="h-screen flex flex-col">
        <Header />
        <Hero className="flex-1" />
      </div>

      <main className="flex-1 bg-[#1F2937]">
        <div
          className="w-full border-y-2"
          style={{
            borderColor: "rgba(0, 212, 255, 1.0)",
            backgroundColor: "rgba(31, 41, 55, 1.0)",
          }}
        >
          <p
            className="text-[16px] leading-[1.60] font-bold px-[15px] py-[11px] text-[#00D4FF] text-center"
            style={{ fontFamily: "Oswald" }}
          >
            FILTER BY
          </p>

          <div className="w-full min-h-10 flex justify-center items-center gap-2 pb-[11px]">
            {/* COLOR */}
            <button
              onClick={(e) => handleDropdownOpen("color", e)}
              className="gap-2 rounded-sm border flex items-center justify-center text-white text-[16px] px-3 py-2.5"
              style={{
                borderColor: "#4B5563",
                backgroundColor: "#374151",
                fontFamily: "Oswald",
              }}
            >
              {selectedColor}
            </button>

            {/* PRICE */}
            <button
              onClick={(e) => handleDropdownOpen("price", e)}
              className="gap-2 rounded-sm border flex items-center justify-center text-white text-[16px] px-3 py-2.5"
              style={{
                borderColor: "#4B5563",
                backgroundColor: "#374151",
                fontFamily: "Oswald",
              }}
            >
              {priceOptions.find((opt) => opt.value === selectedPrice)?.label}
            </button>

            {/* BRAND */}
            <button
              onClick={(e) => handleDropdownOpen("brand", e)}
              className="gap-2 rounded-sm border flex items-center justify-center text-white text-[16px] px-3 py-2.5"
              style={{
                borderColor: "#4B5563",
                backgroundColor: "#374151",
                fontFamily: "Oswald",
              }}
            >
              {selectedBrand}
            </button>
          </div>
        </div>

        {/* DROPDOWN MODAL */}
        {openDropdown === "color" && (
          <DropdownModal
            items={colorOptions}
            origin={dropdownOrigin}
            onSelect={(c) => setSelectedColor(c)}
            onClose={() => setOpenDropdown(null)}
          />
        )}
        {openDropdown === "price" && (
          <DropdownModal
            items={priceOptions.map((p) => p.label)}
            origin={dropdownOrigin}
            onSelect={(label) => {
              const opt = priceOptions.find((p) => p.label === label);
              setSelectedPrice(opt.value);
            }}
            onClose={() => setOpenDropdown(null)}
          />
        )}
        {openDropdown === "brand" && (
          <DropdownModal
            items={brandOptions}
            origin={dropdownOrigin}
            onSelect={(b) => setSelectedBrand(b)}
            onClose={() => setOpenDropdown(null)}
          />
        )}

        {/* PRODUCTS */}
        <div id="products" className="overflow-hidden bg-[#111827] pb-6">
          <div className="text-center mt-[15px]">
            <p
              className="text-[36px] font-bold"
              style={{ fontFamily: "Bebas Neue" }}
            >
              <span style={{ color: "#FF006E" }}>SPRAY </span>
              <span style={{ color: "#0077FF" }}>COLLECTION</span>
            </p>
          </div>

          <div className="flex flex-nowrap overflow-x-scroll mt-[13px] ml-[15px] gap-x-[26px] pr-4">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
            {filteredProducts.length === 0 && (
              <div className="text-white mt-4">
                No products for selected filters
              </div>
            )}
          </div>
        </div>

        {/* ABOUT US */}
        <div id="aboutus" className="w-full bg-[#1F2937]">
          <div className="text-center pt-[37px] text-opacity-20">
            <p
              className="text-[55px] font-bold"
              style={{
                fontFamily: "Bebas Neue",
                lineHeight: "140%",
                textAlign: "center",
              }}
            >
              <span style={{ color: "#FF006E" }}>STREET </span>
              <span style={{ color: "#0077FF" }}>ART </span>
              <span style={{ color: "#39FF14" }}>CULTURE</span>
            </p>
          </div>
          <div className="text-center pt-[35px] max-w-[334px] mx-auto px-4">
            <p
              className="text-[24px] font-bold text-white/70 text-center leading-[1.40]"
              style={{
                fontFamily: "Bebas Neue",
              }}
            >
              we are more than just a spray paint store - we’re the heartbeat of
              street art culture. From underground tunnels to gallery walls, our
              premium paints have colored the dreams of artists worldwide. Join
              the movement and paint your story
            </p>
          </div>

          <div className="flex flex-col items-center mt-[55px]">
            <div className="flex">
              <div className="text-center">
                <img
                  src={Palette}
                  className="w-[91px] h-[91px] ml-[50px]"
                  alt="Palette"
                ></img>
                <p
                  className="text-[24px] font-bold pl-[29px] leading-[1.67] text-center text-white/70"
                  style={{
                    fontFamily: "Bebas Neue",
                  }}
                >
                  Premium quality
                </p>
                <p
                  className="text-[16px] font-bold pl-[25px] mt-1 w-[175px] leading-[1.40] text-center text-white/50"
                  style={{
                    fontFamily: "Bebas Neue",
                  }}
                >
                  high-pigment formulas for vibrant, long-lasting colors
                </p>
              </div>

              <div className="text-center">
                <img
                  src={Truck}
                  className="w-[91px] h-[91px] ml-[50px]"
                  alt="Palette"
                ></img>
                <p
                  className="text-[24px] font-bold pl-[29px] leading-[1.67] text-center text-white/70"
                  style={{
                    fontFamily: "Bebas Neue",
                  }}
                >
                  fast shipping
                </p>
                <p
                  className="text-[16px] font-bold pl-[25px] mt-1 w-[175px] leading-[1.40] text-center text-white/50"
                  style={{
                    fontFamily: "Bebas Neue",
                  }}
                >
                  get your paints delivered quickly to fuel your creativity
                </p>
              </div>
            </div>

            <div className="items-center pt-[9px]">
              <img
                src={People}
                className="w-[61px] h-[61px] ml-[75px]"
                alt="Palette"
              ></img>
              <p
                className="text-[24px] font-bold pl-[29px] text-center leading-[1.67] text-white/70"
                style={{
                  fontFamily: "Bebas Neue",
                }}
              >
                artist community
              </p>
              <p
                className="text-[16px] font-bold w-[164px] pl-[45px] leading-[1.40] text-white/50 text-center"
                style={{
                  fontFamily: "Bebas Neue",
                }}
              >
                join thousands of artists in our creative community
              </p>
            </div>
          </div>
        </div>

        {/* COLOR GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-4 py-4 max-w-[800px] mx-auto">
          {colorCards.map((c) => (
            <div
              key={c.name}
              className="h-[130px] rounded-xl flex items-center justify-center font-bold text-white text-lg"
              style={{ background: c.gradient }}
            >
              {c.label}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
