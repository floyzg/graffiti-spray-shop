import React from "react";

function Footer() {
  return (
    <footer className="bg-[#111827]">
      <div
        className="
          max-w-[430px] mx-auto 
          bg-black 
          border-t-2
        "
        style={{ borderColor: "#FF00A8" }}
      >
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
            className="mt-2 text-[16px] px-6 leading-[1.6]"
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
              <a
                href="/products"
                style={{ color: "#9CA3AF", textDecoration: "none" }}
              >
                All Products
              </a>
            </p>
            <p>
              <a
                href="/new-arrivals"
                style={{ color: "#9CA3AF", textDecoration: "none" }}
              >
                New Arrivals
              </a>
            </p>
            <p>
              <a
                href="/best-sellers"
                style={{ color: "#9CA3AF", textDecoration: "none" }}
              >
                Best Sellers
              </a>
            </p>
            <p>
              <a
                href="/sale"
                style={{ color: "#9CA3AF", textDecoration: "none" }}
              >
                Sale Items
              </a>
            </p>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="mt-7 text-center px-4">
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

          {/* input + button */}
          <div className="mt-4 flex min-h-10 overflow-hidden">
            <input
              type="email"
              placeholder="Enter email"
              className="flex-1 bg-[#111827] px-4 text-[14px] text-white border-2 border-[#4B5563] rounded-l-sm border-radius-l-[4px] focus:outline-none"
              style={{ fontFamily: "Oswald" }}
            />
            <button
              className="min-w-[70px] flex items-center justify-center text-[20px] font-bold"
              style={{
                backgroundColor: "#FF10F0",
                fontFamily: "Oswald",
              }}
            >
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.7063 6.70859C14.0969 6.31797 14.0969 5.68359 13.7063 5.29297L8.70625 0.292969C8.31563 -0.0976562 7.68125 -0.0976562 7.29063 0.292969C6.9 0.683594 6.9 1.31797 7.29063 1.70859L10.5875 5.00234H1C0.446875 5.00234 0 5.44922 0 6.00234C0 6.55547 0.446875 7.00234 1 7.00234H10.5844L7.29375 10.2961C6.90312 10.6867 6.90312 11.3211 7.29375 11.7117C7.68437 12.1023 8.31875 12.1023 8.70938 11.7117L13.7094 6.71172L13.7063 6.70859Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* линия + копирайт */}
        <div className="mt-6 border-t border-[#4B5563] pt-4 pb-4 text-center px-4">
          <p
            className="text-[12px] leading-[1.6]"
            style={{ fontFamily: "Oswald", color: "#9CA3AF" }}
          >
            © 2025 Spray Zone. All rights reserved.
            <br />
            Paint the world your way.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
