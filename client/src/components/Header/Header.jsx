import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CartIcon from "../../assets/cart.svg";
import UserIcon from "../../assets/user.svg";
import CloseIcon from "../../assets/close.svg";

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Плавный переход + скролл
  const goToSection = (sectionId) => {
    setOpen(false);

    // Если мы на / — просто прокручиваем
    if (location.pathname === "/") {
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }

    // Если не / — переходим на Home и потом скроллим
    else {
      navigate("/");
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

          {/* LOGO */}
          <Link
            className="text-[30px] font-bold"
            to="/"
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
          <button onClick={() => setOpen(false)}>
            <img src={CloseIcon} alt="close" className="w-7 h-7" />
          </button>

          <Link
            className="text-[30px] font-bold"
            style={{
              fontFamily: "Bebas Neue",
              color: "#FF006E",
            }}
            to="/"
            onClick={() => setOpen(false)}
          >
            SPRAY ZONE
          </Link>

          <div className="flex items-center gap-7">
            <img src={CartIcon} alt="cart" className="w-5 h-5" />
            <img src={UserIcon} alt="user" className="w-5 h-5" />
          </div>
        </div>

        <div
          className="w-full h-0.5"
          style={{ background: "rgba(255, 0, 110, 0.3)" }}
        />

        {/* MENU LINKS */}
        <div className="mt-6 px-4 flex flex-col gap-2.5 text-[28px] font-semibold leading-[1.29]">
          {/* SCROLL TO PRODUCTS */}
          <p
            className="uppercase cursor-pointer"
            onClick={() => goToSection("products")}
          >
            ALL PRODUCTS
          </p>

          <Link className="uppercase" to="/news" onClick={() => setOpen(false)}>
            NEWS
          </Link>

          <Link className="uppercase" to="/auth" onClick={() => setOpen(false)}>
            LOG IN
          </Link>

          {/* SCROLL TO ABOUT */}
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

export default Header;
