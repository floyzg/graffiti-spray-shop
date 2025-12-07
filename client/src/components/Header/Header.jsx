import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import CartIcon from "../../assets/cart.svg";
import UserIcon from "../../assets/user.svg";
import CloseIcon from "../../assets/close.svg";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-black z-50">
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

          {/* LOGO TEXT */}
          <a
            className="text-[30px] font-bold fontHeight-120%"
            href="/"
            style={{
              fontFamily: "Bebas Neue",
              color: "#FF006E",
              lineHeight: "120%",
              textAlign: "center",
            }}
          >
            SPRAY ZONE
          </a>

          {/* ICONS (cart + profile) */}
          <div className="flex items-center gap-7">
            <Link to="/cart">
              <img
                src={CartIcon}
                alt="cart"
                className="w-5 h-5 cursor-pointer"
              />
            </Link>
            <Link to="/auth">
              <img
                src={UserIcon}
                alt="user"
                className="w-5 h-5 cursor-pointer"
              />
            </Link>
          </div>
        </div>

        {/* PINK LINE */}
        <div
          className="w-full h-0.5"
          style={{ background: "rgba(255, 0, 110, 0.3)" }}
        />
      </header>

      {/* OVERLAY MENU */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black text-white z-50 transform transition-transform duration-300 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-4 py-4 flex items-center justify-between">
          {/* CLOSE (X) */}
          <button onClick={() => setOpen(false)}>
            <img src={CloseIcon} alt="close" className="w-7 h-7" />
          </button>

          <h1
            className="text-[30px] font-bold fontHeight-120%"
            style={{
              fontFamily: "Bebas Neue",
              color: "#FF006E",
              lineHeight: "120%",
            }}
          >
            SPRAY ZONE
          </h1>

          {/* ICONS (cart + profile) */}
          <div className="flex items-center gap-7">
            <img src={CartIcon} alt="cart" className="w-5 h-5" />
            <img src={UserIcon} alt="user" className="w-5 h-5" />
          </div>
        </div>

        {/* PINK LINE */}
        <div
          className="w-full h-0.5"
          style={{ background: "rgba(255, 0, 110, 0.3)" }}
        />

        {/* MENU LINKS */}
        <div className="mt-6 px-4 flex flex-col gap-2.5 text-[28px] font-semibold leading-[1.29]">
          <Link
            className="uppercase"
            to="#products"
            onClick={() => setOpen(false)}
          >
            ALL PRODUCTS
          </Link>
          <Link className="uppercase" to="/news" onClick={() => setOpen(false)}>
            NEWS
          </Link>
          <Link className="uppercase" to="/auth" onClick={() => setOpen(false)}>
            LOG IN
          </Link>
          <Link
            className="uppercase"
            to="#aboutus"
            onClick={() => setOpen(false)}
          >
            ABOUT US
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
