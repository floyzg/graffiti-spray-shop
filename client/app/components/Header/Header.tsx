"use client";

import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import Link from "next/link";
import CartIcon from "@/assets/cart.svg";
import UserIcon from "@/assets/user.svg";
import CloseIcon from "@/assets/close.svg";
import { useCart } from "@/context/useCart";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = usePathname();
  const router = useRouter();
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.count, 0);

  const headerRef = useRef<any>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight || 0);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const goToSection = (sectionId: string) => {
    setOpen(false);

    if (location === "/") {
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      router.push("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 120);
    }
  };

  return (
    <>
      {/* HEADER */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 w-full bg-black z-50"
      >
        <div className="flex items-center justify-between px-[15px] py-4">
          {/* BURGER */}
          <button
            onClick={() => setOpen(true)}
            className="flex flex-col justify-center gap-[5px] w-6"
          >
            <span className="h-0.5 w-full bg-white rounded-2xl"></span>
            <span className="h-0.5 w-full bg-white rounded-2xl"></span>
            <span className="h-0.5 w-full bg-white rounded-2xl"></span>
          </button>

          {/* LOGO */}
          <Link
            className="text-[30px] font-bold"
            href="/"
            style={{
              fontFamily: "Bebas Neue",
              color: "#FF006E",
              lineHeight: "120%",
              textAlign: "center",
            }}
          >
            SPRAY ZONE
          </Link>

          {/* ICONS */}
          <div className="flex items-center gap-7">
            <Link href="/cart" className="relative">
              <img
                src={CartIcon.src}
                alt="cart"
                className="w-5 h-5 cursor-pointer"
              />
              {mounted && cartCount > 0 && (
                <div
                  className="absolute -top-2 -right-2 bg-[#FF006E] text-white text-[11px] font-bold w-[17px] h-[17px] rounded-full flex items-center justify-center"
                  style={{ fontFamily: "Oswald" }}
                >
                  {cartCount}
                </div>
              )}
            </Link>
            <Link href="/auth">
              <img
                src={UserIcon.src}
                alt="user"
                className="w-5 h-5 cursor-pointer"
              />
            </Link>
          </div>
        </div>

        <div
          className="w-full h-0.5"
          style={{ background: "rgba(255, 0, 110, 0.3)" }}
        />
      </header>

      {/* PADDING UNDER FIXED HEADER */}
      <div style={{ height: headerHeight }} />

      {/* OVERLAY MENU */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black text-white z-50 transform transition-transform duration-300 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-4 py-4 flex items-center justify-between">
          <button onClick={() => setOpen(false)}>
            <img src={CloseIcon.src} alt="close" className="w-7 h-7" />
          </button>

          <Link
            className="text-[30px] font-bold"
            style={{
              fontFamily: "Bebas Neue",
              color: "#FF006E",
            }}
            href="/"
            onClick={() => setOpen(false)}
          >
            SPRAY ZONE
          </Link>

          <div className="flex items-center gap-7">
            <Link href="/cart" className="relative">
              <img
                src={CartIcon.src}
                alt="cart"
                className="w-5 h-5 cursor-pointer"
              />
              {mounted && cartCount > 0 && (
                <div
                  className="absolute -top-2 -right-2 bg-[#FF006E] text-white text-[11px] font-bold w-[17px] h-[17px] rounded-full flex items-center justify-center"
                  style={{ fontFamily: "Oswald" }}
                >
                  {cartCount}
                </div>
              )}
            </Link>
            <Link href="/auth">
              <img
                src={UserIcon.src}
                alt="user"
                className="w-5 h-5 cursor-pointer"
              />
            </Link>
          </div>
        </div>

        <div
          className="w-full h-0.5"
          style={{ background: "rgba(255, 0, 110, 0.3)" }}
        />

        {/* MENU LINKS */}
        <div className="mt-6 px-4 flex flex-col gap-2.5 text-[28px] font-semibold leading-[1.29]">
          <p
            className="uppercase cursor-pointer"
            onClick={() => goToSection("products")}
          >
            ALL PRODUCTS
          </p>

          <Link
            className="uppercase"
            href="/news"
            onClick={() => setOpen(false)}
          >
            NEWS
          </Link>

          <Link
            className="uppercase"
            href="/auth"
            onClick={() => setOpen(false)}
          >
            LOG IN
          </Link>

          <p
            className="uppercase cursor-pointer"
            onClick={() => goToSection("aboutus")}
          >
            ABOUT US
          </p>
        </div>
      </div>
    </>
  );
}
