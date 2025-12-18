"use client";

import React, { useEffect, useRef } from "react";

interface DropdownModalProps {
  items: string[];
  onSelect: (item: string) => void;
  onClose: () => void;
  origin?: { x: number; y: number; width: number; height: number };
}

export default function DropdownModal({
  items,
  onSelect,
  onClose,
  origin,
}: DropdownModalProps) {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!box || !origin) return;

    box.style.transform = `
        translate(-50%, -50%) 
        scale(0.75)
    `;
    box.style.opacity = "0";

    requestAnimationFrame(() => {
      box.style.transition = "all 0.18s ease-out";
      box.style.transform = `translate(-50%, -50%) scale(1)`;
      box.style.opacity = "1";
    });
  }, [origin]);

  return (
    <div className="fixed inset-0 bg-black/60 z-50" onClick={onClose}>
      <div
        ref={boxRef}
        className="absolute bg-[#1F2937] border border-gray-600 shadow-xl rounded-lg w-[80%] max-w-[300px] overflow-hidden left-1/2 top-1/2"
        onClick={(e) => e.stopPropagation()}
        style={{ transform: "translate(-50%, -50%)" }}
      >
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => {
              onSelect(item);
              onClose();
            }}
            className="w-full py-3 text-white text-center text-[18px] hover:bg-[#374151]"
            style={{ fontFamily: "Oswald" }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
