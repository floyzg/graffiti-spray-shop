"use client";

import React, { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import articles, { type Article } from "@/app/data/articles";

export default function News(): ReactElement {
  return (
    <div className="bg-[#0b1126] min-h-screen flex flex-col">
      <Header />

      <div className="max-w-md mx-auto w-full px-3 py-6">
        <h1 className="text-center text-2xl text-white font-semibold">News</h1>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {articles.map((a: Article) => (
            <Link
              key={a.id}
              href={`/news?id=${a.id}`}
              className="bg-[#111827] rounded-md overflow-hidden shadow-md border border-[#4B5563]"
            >
              <Image
                src={a.image}
                alt={a.title}
                width={400}
                height={128}
                className="w-full h-32 object-cover"
              />

              <div className="p-3">
                <span className="text-xs font-bold text-[#FF10F0]">
                  {a.badge}
                </span>

                <p className="mt-1 text-white font-bold text-lg leading-tight">
                  {a.title}
                </p>

                <p className="mt-1 text-gray-400 text-sm">{a.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
