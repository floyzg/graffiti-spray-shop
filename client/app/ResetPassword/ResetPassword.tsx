"use client";

import React, { ReactElement } from "react";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import FloatingInput from "@/app/components/FloatingInput/FloatingInput";

export default function ResetPassword(): ReactElement {
  return (
    <div className="bg-[#0b1126] min-h-screen flex flex-col">
      <Header />

      {/* CONTENT */}
      <div className="flex-1 w-full max-w-md mx-auto px-4 py-8 text-white mt-17 text-center">
        {/* TITLE */}
        <h1 className="text-2xl font-semibold mb-2">Password recovery:</h1>

        {/* DESCRIPTION */}
        <p className="text-[16px] text-white mb-8 leading-relaxed">
          If you forgot your password, input your Login and E-mail in input
          fields
        </p>

        {/* INPUTS */}
        <FloatingInput type="text" label="Login" />
        <FloatingInput type="email" label="E-mail" />

        {/* BUTTON */}
        <button className="mt-6 w-full bg-[#FF006E] text-white py-3 rounded-full font-semibold">
          Send
        </button>
      </div>

      <Footer />
    </div>
  );
}
