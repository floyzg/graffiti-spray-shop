import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import articles from "../../data/articles";

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = articles.find((a) => a.id === id);

  return (
    <div className="bg-[#0b1126] min-h-screen flex flex-col">
      <Header />

      <div className="max-w-md mx-auto w-full px-3 py-6 text-white">
        {/* BACK BUTTON */}
        <button
          className="mb-4 text-pink-400 font-semibold"
          onClick={() => navigate(-1)}
        >
          ← Назад
        </button>

        {/* IMAGE */}
        <img
          src={article.image}
          alt={article.title}
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
};

export default Article;
