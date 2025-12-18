"use client";

import React, { useState, ReactElement } from "react";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

interface FloatingInputProps {
  label: string;
  type: string;
}

function FloatingInput({ label, type }: FloatingInputProps): ReactElement {
  const [focused, setFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  return (
    <div className="relative mb-6">
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-transparent border-b border-pink-500 outline-none text-white py-2"
      />

      <label
        className={`
          absolute left-0 transition-all duration-300 
          ${
            focused || value
              ? "-top-4 text-xs text-pink-400"
              : "top-2 text-gray-400"
          }
        `}
      >
        {label}
      </label>
    </div>
  );
}

export default function Auth(): ReactElement {
  return (
    <div className="bg-[#0b1126] min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 w-full max-w-md mx-auto px-4 py-5 text-white">
        <h2 className="text-2xl font-semibold mb-6 uppercase text-center">
          sign in
        </h2>

        {/* FLOATING INPUTS */}
        <FloatingInput type="email" label="Login" />
        <FloatingInput type="password" label="Password" />

        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            className="
            w-5 h-5 mr-2 
            appearance-none 
            border-2 border-[#FF006E]
            bg-transparent 
            rounded-sm 
            cursor-pointer
            checked:bg-[#FF006E] 
            checked:border-[#FF006E]
          "
          />
          <span>Remember me</span>
        </div>

        <div className="mt-3 space-y-1 flex flex-col">
          <a href="/reset-password" className="text-[#FF006E] text-sm">
            Forgot your password?
          </a>
          <a href="/sign-up" className="text-[#FF006E] text-sm">
            Register
          </a>
        </div>

        {/* BUTTON */}
        <button className="mt-6 w-full bg-[#FF006E] text-white py-3 rounded-full font-semibold">
          Sign in
        </button>
      </div>

      <Footer />
    </div>
  );
}
