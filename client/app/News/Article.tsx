"use client";

import React, { useMemo, ReactElement } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import articles, { type Article } from "@/app/data/articles";

export default function ArticlePage(): ReactElement {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const article = useMemo<Article | undefined>(() => {
    return articles.find((a) => a.id === id);
  }, [id]);

  if (!article) {
    return (
      <div className="bg-[#0b1126] min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center text-white">
          <p>Article not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#0b1126] min-h-screen flex flex-col">
      <Header />

      <div className="max-w-md mx-auto w-full px-3 py-6 text-white">
        {/* BACK BUTTON */}
        <button
          className="mb-4 text-pink-400 font-semibold"
          onClick={() => router.back()}
        >
          ← Назад
        </button>

        {/* IMAGE */}
        <Image
          src={article.image}
          alt={article.title}
          width={400}
          height={176}
          className="w-full h-44 object-cover rounded-md"
        />

        {/* DATE */}
        <p className="mt-3 text-xs text-gray-400">{article.date}</p>

        {/* TITLE */}
        <h1 className="mt-1 text-2xl font-semibold leading-tight">
          {article.title}
        </h1>

        {/* CONTENT WRAPPER */}
        <div
          className="
            mt-5 bg-[#111d33] 
            shadow-xl shadow-black/20 
            border border-[#26334a]
            rounded-md p-4
          "
        >
          <div
            className="text-white/85 leading-[1.55] whitespace-pre-wrap"
            style={{ fontFamily: "Oswald" }}
          >
            {article.content}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
