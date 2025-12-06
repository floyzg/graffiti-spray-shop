import React, { useState, useMemo } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";

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
            className="text-[16px] leading-[1.60] font-bold px-[15px] py-[11px]"
            style={{
              fontFamily: "Oswald",
              color: "#00D4FF",
            }}
          >
            FILTER BY:
          </p>

          <div className="w-full min-h-11 flex items-center gap-2 pb-[11px]">
            {/* COLORS */}
            <div className="relative left-[15px] h-full">
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === "color" ? null : "color")
                }
                className="gap-2 w-full h-full rounded-sm border flex items-center justify-center text-white text-[16px] pl-3 pr-2 pb-2.5 pt-2.5"
                style={{
                  borderColor: "#4B5563",
                  backgroundColor: "#374151",
                  fontFamily: "Oswald",
                }}
              >
                {selectedColor}{" "}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.32201 10.0939C7.52257 9.90093 7.79154 9.79549 8.06981 9.80074C8.34807 9.80599 8.61287 9.9215 8.80601 10.1219L14 15.6351L19.194 10.1219C19.2884 10.0178 19.4028 9.93374 19.5303 9.87466C19.6578 9.81558 19.7958 9.78269 19.9363 9.77794C20.0767 9.7732 20.2167 9.79669 20.3479 9.84703C20.4791 9.89737 20.5988 9.97353 20.7001 10.071C20.8013 10.1685 20.8819 10.2853 20.9372 10.4145C20.9924 10.5437 21.0212 10.6827 21.0217 10.8232C21.0223 10.9637 20.9946 11.1029 20.9404 11.2326C20.8862 11.3622 20.8065 11.4796 20.706 11.5779L14.756 17.8779C14.6581 17.9795 14.5406 18.0603 14.4107 18.1156C14.2808 18.1708 14.1412 18.1992 14 18.1992C13.8589 18.1992 13.7192 18.1708 13.5893 18.1156C13.4594 18.0603 13.342 17.9795 13.244 17.8779L7.29401 11.5779C7.10105 11.3773 6.99561 11.1084 7.00086 10.8301C7.00611 10.5518 7.12162 10.287 7.32201 10.0939Z"
                    fill="white"
                  />
                </svg>
              </button>

              {openDropdown === "color" && (
                <div className="absolute z-10 mt-1 w-full rounded-sm border border-gray-600 bg-[#1F2937] shadow-lg">
                  {colorOptions.map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setSelectedColor(c);
                        setOpenDropdown(null);
                      }}
                      className="w-full px-3 py-2.5 text-[16px] text-white hover:bg-[#374151]"
                      style={{ fontFamily: "Oswald" }}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* PRICE */}
            <div className="relative left-[15px] h-full">
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === "price" ? null : "price")
                }
                className="gap-2 w-full h-full rounded-sm border flex items-center justify-center text-white text-[16px] pl-3 pr-2 pb-2.5 pt-2.5"
                style={{
                  borderColor: "#4B5563",
                  backgroundColor: "#374151",
                  fontFamily: "Oswald",
                }}
              >
                {priceOptions.find((opt) => opt.value === selectedPrice)?.label}{" "}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.32201 10.0939C7.52257 9.90093 7.79154 9.79549 8.06981 9.80074C8.34807 9.80599 8.61287 9.9215 8.80601 10.1219L14 15.6351L19.194 10.1219C19.2884 10.0178 19.4028 9.93374 19.5303 9.87466C19.6578 9.81558 19.7958 9.78269 19.9363 9.77794C20.0767 9.7732 20.2167 9.79669 20.3479 9.84703C20.4791 9.89737 20.5988 9.97353 20.7001 10.071C20.8013 10.1685 20.8819 10.2853 20.9372 10.4145C20.9924 10.5437 21.0212 10.6827 21.0217 10.8232C21.0223 10.9637 20.9946 11.1029 20.9404 11.2326C20.8862 11.3622 20.8065 11.4796 20.706 11.5779L14.756 17.8779C14.6581 17.9795 14.5406 18.0603 14.4107 18.1156C14.2808 18.1708 14.1412 18.1992 14 18.1992C13.8589 18.1992 13.7192 18.1708 13.5893 18.1156C13.4594 18.0603 13.342 17.9795 13.244 17.8779L7.29401 11.5779C7.10105 11.3773 6.99561 11.1084 7.00086 10.8301C7.00611 10.5518 7.12162 10.287 7.32201 10.0939Z"
                    fill="white"
                  />
                </svg>
              </button>

              {openDropdown === "price" && (
                <div className="absolute z-10 mt-1 w-full rounded-sm border border-gray-600 bg-[#1F2937] shadow-lg">
                  {priceOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        setSelectedPrice(opt.value);
                        setOpenDropdown(null);
                      }}
                      className="w-full px-3 py-2.5 text-[16px] text-white hover:bg-[#374151]"
                      style={{ fontFamily: "Oswald" }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* BRANDS */}
            <div className="relative left-[15px] h-full">
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === "brand" ? null : "brand")
                }
                className="gap-2 w-full h-full rounded-sm border flex items-center justify-center text-white text-[16px] pl-3 pr-2 pb-2.5 pt-2.5"
                style={{
                  borderColor: "#4B5563",
                  backgroundColor: "#374151",
                  fontFamily: "Oswald",
                }}
              >
                {selectedBrand}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.32201 10.0939C7.52257 9.90093 7.79154 9.79549 8.06981 9.80074C8.34807 9.80599 8.61287 9.9215 8.80601 10.1219L14 15.6351L19.194 10.1219C19.2884 10.0178 19.4028 9.93374 19.5303 9.87466C19.6578 9.81558 19.7958 9.78269 19.9363 9.77794C20.0767 9.7732 20.2167 9.79669 20.3479 9.84703C20.4791 9.89737 20.5988 9.97353 20.7001 10.071C20.8013 10.1685 20.8819 10.2853 20.9372 10.4145C20.9924 10.5437 21.0212 10.6827 21.0217 10.8232C21.0223 10.9637 20.9946 11.1029 20.9404 11.2326C20.8862 11.3622 20.8065 11.4796 20.706 11.5779L14.756 17.8779C14.6581 17.9795 14.5406 18.0603 14.4107 18.1156C14.2808 18.1708 14.1412 18.1992 14 18.1992C13.8589 18.1992 13.7192 18.1708 13.5893 18.1156C13.4594 18.0603 13.342 17.9795 13.244 17.8779L7.29401 11.5779C7.10105 11.3773 6.99561 11.1084 7.00086 10.8301C7.00611 10.5518 7.12162 10.287 7.32201 10.0939Z"
                    fill="white"
                  />
                </svg>
              </button>

              {openDropdown === "brand" && (
                <div className="absolute z-10 mt-1 w-[180px] rounded-sm border border-gray-600 bg-[#1F2937] shadow-lg">
                  {brandOptions.map((b) => (
                    <button
                      key={b}
                      onClick={() => {
                        setSelectedBrand(b);
                        setOpenDropdown(null);
                      }}
                      className="w-full px-3 py-2.5 text-[16px] text-white hover:bg-[#374151]"
                      style={{ fontFamily: "Oswald" }}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="overflow-hidden bg-[#111827] pb-6">
          <div className="text-center mt-[15px]">
            <p
              className="text-[36px] font-bold"
              style={{
                fontFamily: "Bebas Neue",
                lineHeight: "140%",
                textAlign: "center",
              }}
            >
              <span style={{ color: "#FF006E" }}>SPRAY </span>
              <span style={{ color: "#0077FF" }}>COLLECTION</span>
            </p>
          </div>

          <div className="flex flex-nowrap overflow-x-scroll mt-[13px] ml-[15px] gap-x-[26px] pr-4">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="shrink-0 w-[244px] bg-[#1F2937] rounded-lg"
              >
                <img src={p.image} className="w-full rounded-lg" />
                <p
                  className="mt-[9px] ml-3 font-bold text-[18px] text-white"
                  style={{ fontFamily: "Oswald" }}
                >
                  {p.name}
                </p>
                <p
                  className="ml-3-[14px]"
                  style={{
                    fontFamily: "Oswald",
                    color: "#9CA3AF",
                  }}
                >
                  {p.brand}
                </p>
                <p
                  className="mt-1.5 ml-3 font-bold text-[18px]"
                  style={{
                    fontFamily: "Oswald",
                    color: p.accent,
                  }}
                >
                  ${p.price.toFixed(2)}
                </p>
                <button
                  className="w-[216px] h-[35px] ml-3 mb-3.5 mt-4 rounded-md"
                  style={{ backgroundColor: p.accent }}
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
            ))}

            {filteredProducts.length === 0 && (
              <div className="text-white mt-4">
                No products for selected filters
              </div>
            )}
          </div>
        </div>

        <div className="w-full bg-[#1F2937]">
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
          <div className="text-center ml-5 pt-[35px] max-w-[334px]">
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

        {/* COLOR SQUARES SECTION */}
        <div className="mt-10 mb-[19px] flex flex-wrap justify-center gap-[18px] px-4">
          {colorCards.map((card) => (
            <div
              key={card.id}
              className="w-[150px] h-[150px] rounded-xl shadow-lg flex items-center justify-center"
              style={{
                background: card.gradient,
              }}
            >
              <p
                className="text-[20px] font-bold text-white text-center"
                style={{
                  fontFamily: "Bebas Neue",
                  letterSpacing: "0.08em",
                }}
              >
                {card.label}
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
