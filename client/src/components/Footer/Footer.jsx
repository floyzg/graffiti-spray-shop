import React from "react";

function Footer() {
  return (
    <footer className="bg-[#111827] w-full">
      <div
        className="w-full bg-black border-t-2"
        style={{ borderColor: "#FF00A8" }}
      >
        <div className="max-w-[430px] mx-auto px-4">
          <div className="pt-2.5 text-center">
            <p
              className="text-[24px] font-bold"
              style={{
                fontFamily: "Permanent Marker",
                color: "#FF10F0",
              }}
            >
              SPRAY ZONE
            </p>

            <p
              className="mt-2 text-[16px] leading-[1.6]"
              style={{
                fontFamily: "Oswald",
                color: "#9CA3AF",
              }}
            >
              Premium spray paint for street artists and creative rebels
              worldwide.
            </p>
          </div>

          {/* SHOP */}
          <div className="mt-6 text-center">
            <p
              className="text-[20px] font-bold"
              style={{ fontFamily: "Bebas Neue", color: "#00D4FF" }}
            >
              SHOP
            </p>

            <div
              className="mt-3 space-y-1 text-[16px]"
              style={{ fontFamily: "Oswald", color: "#E5E7EB" }}
            >
              <p>
                <a href="/products" style={{ color: "#9CA3AF" }}>
                  All Products
                </a>
              </p>
              <p>
                <a href="/new-arrivals" style={{ color: "#9CA3AF" }}>
                  New Arrivals
                </a>
              </p>
              <p>
                <a href="/best-sellers" style={{ color: "#9CA3AF" }}>
                  Best Sellers
                </a>
              </p>
              <p>
                <a href="/sale" style={{ color: "#9CA3AF" }}>
                  Sale Items
                </a>
              </p>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="mt-7 text-center">
            <p
              className="text-[20px] font-bold"
              style={{ fontFamily: "Bebas Neue", color: "#00D4FF" }}
            >
              NEWSLETTER
            </p>
            <p
              className="mt-2 text-[14px] leading-[1.6]"
              style={{ fontFamily: "Oswald", color: "#9CA3AF" }}
            >
              Get the latest drops and street art news
            </p>

            <div className="mt-4 flex min-h-10 overflow-hidden">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 bg-[#111827] px-4 text-[14px] text-white border-2 border-[#4B5563] rounded-l-sm focus:outline-none"
                style={{ fontFamily: "Oswald" }}
              />
              <button
                className="min-w-[70px] flex items-center justify-center text-[20px] font-bold"
                style={{
                  backgroundColor: "#FF10F0",
                  fontFamily: "Oswald",
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-[#4B5563] border-width-3 pt-4 pb-4 text-center">
          <p
            className="text-[12px] leading-[1.6]"
            style={{
              fontFamily: "Oswald",
              color: "#9CA3AF",
            }}
          >
            © 2025 Spray Zone. All rights reserved. <br /> Paint the world your
            way.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
