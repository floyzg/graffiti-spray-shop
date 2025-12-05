import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";

import Pink from "../../assets/pink.png"
import Blue from "../../assets/blue.png"
import Green from "../../assets/green.png"
import Orange from "../../assets/orange.png"
import Purple from "../../assets/purple.png"
import Yellow from "../../assets/yellow.png"
import Red from "../../assets/red.png"
import Silver from "../../assets/silver.png"

import Palette from "../../assets/Paint_Palette.svg"
import Truck from "../../assets/Truck.svg"
import People from "../../assets/People.svg"

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

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Первый экран: header + hero */}
      <div className="h-screen flex flex-col">
        <Header />
        <Hero className="flex-1" />
      </div>
      {/* Дальше уже идёт контент: фильтры, товары и т.п. */}
      <main className="flex-1">
        {/* сюда потом вставишь фильтры/список товаров */}
        {/* Filter */}
        <div 
          className="w-full h-full border-y-[2px] "
          style={{
            borderColor: "rgba(0, 212, 255, 1.0)",
            backgroundColor: "rgba(31, 41, 55, 1.0)"
          }}
        >
          <p 
          className="text-[16px] font-bold fontHeight-124% px-[15px] py-[11px]"
          style={{
            fontFamily: "Oswald",
            color: "#00D4FF",
            lineHeight: "124%",
            textAlign: "left"
          }}
          >
            FILTER BY:
          </p>
          {/* Menu elements */}
          <div className="w-full h-[44px] flex items-center gap-[9px]">
            {/* All colors */}
          <div
          className="relative left-[15px] mb-[11px] w-[110px] h-full rounded-[4px] border text-center"
          style={{
            borderColor: "#4B5563",
            backgroundColor: "#374151",
          }}
          >
            <p
            className="text-[16px] py-[10px]"
            style={{
              fontFamily: "Oswald"
            }}
            >
              All Colors
            </p>
          </div>

             {/* Price range */}
          <div
          className="relative left-[15px] mb-[11px] w-[123px] h-full rounded-[4px] border text-center"
          style={{
            borderColor: "#4B5563",
            backgroundColor: "#374151",
          }}
          >
            <p
            className="text-[16px] py-[10px]"
            style={{
              fontFamily: "Oswald"
            }}
            >
              Price Range
            </p>
          </div>
          {/* All Brands */}
          <div
          className="relative left-[15px] mb-[11px] w-[110px] h-full rounded-[4px] border text-center"
          style={{
            borderColor: "#4B5563",
            backgroundColor: "#374151",
          }}
          >
            <p
            className="text-[16px] py-[10px]"
            style={{
              fontFamily: "Oswald"
            }}
            >
              Price Range
            </p>
          </div>

          </div>
        </div>

        {/* Product List */}
        <div 
        className="overflow-hidden bg-[#111827]"
        >
          {/* Text Container */}
          <div className="text-center mt-[15px]">
            <p 
            className="text-[36px] font-bold fontHeight-140%"
            style={{
              fontFamily: "Bebas Neue",
              lineHeight: "140%",
              textAlign: "center"
            }}
            >
              <span className="" style={{color: "#FF006E"}}>SPRAY </span>
              <span className="" style={{color: "#0077FF"}}>COLLECTION</span>
            </p>
          </div>

            {/* Card Container */}
            <div className="flex flex-nowrap overflow-x-scroll mt-[13px] ml-[15px] gap-x-[26px]">
              {/* Pink */}
              <div class="flex-shrink-0 w-[244px] bg-[#1F2937] rounded-[8px]">
                <img src={Pink} alt="card1" className="w-full rounded-[8px]" />
                <p 
                className="mt-[9px] ml-[12px] font-bold text-[18px]" 
                style={{fontFamily: "Oswald", lineHeight: "128%" }}
                >
                  Neon Pink Blaster
                  </p>
                <p 
                className="ml-[12px] font-regular text-[14px]"
                style={{fontFamily: "Oswald", lineHeight: "120%", color: "#9CA3AF"}}
                >
                  Montana Premium
                  </p>
                <p 
                className="mt-[6px] ml-[12px] font-bold text-[18px]"
                style={{fontFamily: "Oswald", lineHeight: "128%", color: "#FF10F0"}}
                >$12.99
                </p>
                <button 
                className="w-[216px] h-[35px] ml-[12px] mb-[14px] mt-[16px] rounded-[6px] bg-[#FF10F0]">
                  <p 
                  className="text-[14px] font-bold"
                  style={{fontFamily: "Oswald", textAlign: "center"}}
                  >
                    ADD TO CART
                    </p>
                </button>
              </div>
              {/* Blue */}
              <div class="flex-shrink-0 w-[244px] bg-[#1F2937] rounded-[8px]">
                <img src={Blue} alt="card1" className="w-full rounded-[8px]" />
                <p 
                className="mt-[9px] ml-[12px] font-bold text-[18px]" 
                style={{fontFamily: "Oswald", lineHeight: "128%" }}
                >
                  Electric Blue
                  </p>
                <p 
                className="ml-[12px] font-regular text-[14px]"
                style={{fontFamily: "Oswald", lineHeight: "120%", color: "#9CA3AF"}}
                >
                  Ironlak pro
                  </p>
                <p 
                className="mt-[6px] ml-[12px] font-bold text-[18px]"
                style={{fontFamily: "Oswald", lineHeight: "128%", color: "#0077FF"}}
                >$12.99
                </p>
                <button className="w-[216px] h-[35px] ml-[12px] mb-[14px] mt-[16px] rounded-[6px] bg-[#0077FF]">
                  <p 
                  className="text-[14px] font-bold"
                  style={{fontFamily: "Oswald", textAlign: "center"}}
                  >
                    ADD TO CART
                    </p>
                </button>
              </div>
              {/* Green */}
              <div class="flex-shrink-0 w-[244px] bg-[#1F2937] rounded-[8px]">
                <img src={Green} alt="card1" className="w-full rounded-[8px]" />
                <p 
                className="mt-[9px] ml-[12px] font-bold text-[18px]" 
                style={{fontFamily: "Oswald", lineHeight: "128%" }}
                >
                  Lime Shock
                  </p>
                <p 
                className="ml-[12px] font-regular text-[14px]"
                style={{fontFamily: "Oswald", lineHeight: "120%", color: "#9CA3AF"}}
                >
                  Belton Molotow
                  </p>
                <p 
                className="mt-[6px] ml-[12px] font-bold text-[18px]"
                style={{fontFamily: "Oswald", lineHeight: "128%", color: "#32FF32"}}
                >$12.99
                </p>
                <button 
                className="w-[216px] h-[35px] ml-[12px] mb-[14px] mt-[16px] rounded-[6px] bg-[#32FF32]">
                  <p 
                  className="text-[14px] font-bold"
                  style={{fontFamily: "Oswald", textAlign: "center"}}
                  >
                    ADD TO CART
                    </p>
                </button>
              </div>
              {/* Orange */}
              <div class="flex-shrink-0 w-[244px] bg-[#1F2937] rounded-[8px]">
                <img src={Orange} alt="card1" className="w-full rounded-[8px]" />
                <p 
                className="mt-[9px] ml-[12px] font-bold text-[18px]" 
                style={{fontFamily: "Oswald", lineHeight: "128%" }}
                >
                  Fire Orange
                  </p>
                <p 
                className="ml-[12px] font-regular text-[14px]"
                style={{fontFamily: "Oswald", lineHeight: "120%", color: "#9CA3AF"}}
                >
                  Montana Gold
                  </p>
                <p 
                className="mt-[6px] ml-[12px] font-bold text-[18px]"
                style={{fontFamily: "Oswald", lineHeight: "128%", color: "#FF6B35"}}
                >$12.99
                </p>
                <button 
                className="w-[216px] h-[35px] ml-[12px] mb-[14px] mt-[16px] rounded-[6px] bg-[#FF6B35]">
                  <p 
                  className="text-[14px] font-bold"
                  style={{fontFamily: "Oswald", textAlign: "center"}}
                  >
                    ADD TO CART
                    </p>
                </button>
              </div>
              {/* Purple */}
              <div class="flex-shrink-0 w-[244px] bg-[#1F2937] rounded-[8px]">
                <img src={Purple} alt="card1" className="w-full rounded-[8px]" />
                <p 
                className="mt-[9px] ml-[12px] font-bold text-[18px]" 
                style={{fontFamily: "Oswald", lineHeight: "128%" }}
                >
                  Royal Purple
                  </p>
                <p 
                className="ml-[12px] font-regular text-[14px]"
                style={{fontFamily: "Oswald", lineHeight: "120%", color: "#9CA3AF"}}
                >
                  Ironlak Sugar
                  </p>
                <p 
                className="mt-[6px] ml-[12px] font-bold text-[18px]"
                style={{fontFamily: "Oswald", lineHeight: "128%", color: "#8B5CF6"}}
                >$12.99
                </p>
                <button 
                className="w-[216px] h-[35px] ml-[12px] mb-[14px] mt-[16px] rounded-[6px] bg-[#8B5CF6]">
                  <p 
                  className="text-[14px] font-bold"
                  style={{fontFamily: "Oswald", textAlign: "center"}}
                  >
                    ADD TO CART
                    </p>
                </button>
              </div>
              {/* Yellow */}
              <div class="flex-shrink-0 w-[244px] bg-[#1F2937] rounded-[8px]">
                <img src={Yellow} alt="card1" className="w-full rounded-[8px]" />
                <p 
                className="mt-[9px] ml-[12px] font-bold text-[18px]" 
                style={{fontFamily: "Oswald", lineHeight: "128%" }}
                >
                  Shock Yellow
                  </p>
                <p 
                className="ml-[12px] font-regular text-[14px]"
                style={{fontFamily: "Oswald", lineHeight: "120%", color: "#9CA3AF"}}
                >
                  Montana Black
                  </p>
                <p 
                className="mt-[6px] ml-[12px] font-bold text-[18px]"
                style={{fontFamily: "Oswald", lineHeight: "128%", color: "#FACC15"}}
                >$12.99
                </p>
                <button 
                className="w-[216px] h-[35px] ml-[12px] mb-[14px] mt-[16px] rounded-[6px] bg-[#FACC15]">
                  <p 
                  className="text-[14px] font-bold"
                  style={{fontFamily: "Oswald", textAlign: "center"}}
                  >
                    ADD TO CART
                    </p>
                </button>
              </div>
              {/* Red */}
              <div class="flex-shrink-0 w-[244px] bg-[#1F2937] rounded-[8px]">
                <img src={Red} alt="card1" className="w-full rounded-[8px]" />
                <p 
                className="mt-[9px] ml-[12px] font-bold text-[18px]" 
                style={{fontFamily: "Oswald", lineHeight: "128%" }}
                >
                  Blood Red
                  </p>
                <p 
                className="ml-[12px] font-regular text-[14px]"
                style={{fontFamily: "Oswald", lineHeight: "120%", color: "#9CA3AF"}}
                >
                  Beltom Premium
                  </p>
                <p 
                className="mt-[6px] ml-[12px] font-bold text-[18px]"
                style={{fontFamily: "Oswald", lineHeight: "128%", color: "#EF4444"}}
                >$12.99
                </p>
                <button 
                className="w-[216px] h-[35px] ml-[12px] mb-[14px] mt-[16px] rounded-[6px] bg-[#EF4444]">
                  <p 
                  className="text-[14px] font-bold"
                  style={{fontFamily: "Oswald", textAlign: "center"}}
                  >
                    ADD TO CART
                    </p>
                </button>
              </div>
              {/* Silver */}
              <div class="flex-shrink-0 w-[244px] bg-[#1F2937] rounded-[8px]">
                <img src={Silver} alt="card1" className="w-full rounded-[8px]" />
                <p 
                className="mt-[9px] ml-[12px] font-bold text-[18px]" 
                style={{fontFamily: "Oswald", lineHeight: "128%" }}
                >
                  Chrome Silver
                  </p>
                <p 
                className="ml-[12px] font-regular text-[14px]"
                style={{fontFamily: "Oswald", lineHeight: "120%", color: "#9CA3AF"}}
                >
                  Montana Cans
                  </p>
                <p 
                className="mt-[6px] ml-[12px] font-bold text-[18px]"
                style={{fontFamily: "Oswald", lineHeight: "128%", color: "#D1D5DB"}}
                >$12.99
                </p>
                <button 
                className="w-[216px] h-[35px] ml-[12px] mb-[14px] mt-[16px] rounded-[6px] bg-[#D1D5DB]">
                  <p 
                  className="text-[14px] font-bold"
                  style={{fontFamily: "Oswald", textAlign: "center"}}
                  >
                    ADD TO CART
                    </p>
                </button>
              </div>
            </div>
          
        </div>

        <div className="w-full h-[881px] bg-[#1F2937]">
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
            <div className="text-center ml-[20px] pt-[35px] max-w-[334px]">
            <p
              className="text-[24px] font-bold"
              style={{
                fontFamily: "Bebas Neue",
                lineHeight: "140%",
                textAlign: "center",
              }}
            >
              we are more than just a spray paint store - we’re the heartbeat of street art culture. From underground tunnels to gallery walls, our premium paints have colored the dreams of artists worldwide. Join the movement and paint your story
            </p>
            </div>

            <div className="flex flex-col items-center mt-[55px]">
              <div className="flex">
              <div className="text-center">
              <img src={Palette} className="w-[91px] h-[91px] ml-[50px]" alt="Palette"></img>
              <p 
              className="text-[24px] font-bold pl-[29px]"
              style={{
                fontFamily: "Bebas Neue",
                textAlign: "center",
                lineHeight: "167%"
              }}
              >
                Premium quality
              </p>
              <p 
              className="text-[16px] font-bold pl-[25px] mt-[4px] w-[175px]"
              style={{
                fontFamily: "Bebas Neue",
                textAlign: "center",
                lineHeight: "140%"
              }}
              >
                high-pigment formulas for vibrant, long-lasting colors
              </p>
              </div>

              <div className="text-center">
              <img src={Truck} className="w-[91px] h-[91px] ml-[50px]" alt="Palette"></img>
              <p 
              className="text-[24px] font-bold pl-[29px]"
              style={{
                fontFamily: "Bebas Neue",
                textAlign: "center",
                lineHeight: "167%"
              }}
              >
                fast shipping
              </p>
              <p 
              className="text-[16px] font-bold pl-[25px] mt-[4px] w-[175px]"
              style={{
                fontFamily: "Bebas Neue",
                textAlign: "center",
                lineHeight: "140%"
              }}
              >
                get your paints delivered quickly to fuel your creativity
              </p>
              </div>
              </div>
              
              <div className="items-center pt-[9px]">
              <img src={People} className="w-[61px] h-[61px] ml-[75px]" alt="Palette"></img>
              <p 
              className="text-[24px] font-bold pl-[29px]"
              style={{
                fontFamily: "Bebas Neue",
                textAlign: "center",
                lineHeight: "140%"
              }}
              >
                artist community
              </p>
              <p 
              className="text-[16px] font-bold w-[164px] pl-[45px]"
              style={{
                fontFamily: "Bebas Neue",
                textAlign: "center",
                lineHeight: "140%"
              }}
              >
               join thousands of artists in our creative community
              </p>
              </div>
            </div>
        </div>
      </main>
    </div>
  );
}

export default Home;

<div className="flex flex-col min-h-screen">
  {/* Header + Hero section */}
  <div className="h-screen flex flex-col">
    <Header />
    <Hero />
  </div>

  {/* Rest of content */}
  <div className="flex-1">{/* Your content here */}</div>
</div>;
