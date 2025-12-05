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
