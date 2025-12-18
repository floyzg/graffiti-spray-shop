"use client";

import React, { useState } from "react";

interface FloatingInputProps {
  label: string;
  type?: string;
}

export default function FloatingInput({ label, type = "text" }: FloatingInputProps) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

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
