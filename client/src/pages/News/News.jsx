import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import articles from "../../data/articles";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className="bg-[#0b1126] min-h-screen flex flex-col">
      <Header />

      <div className="max-w-md mx-auto w-full px-3 py-6">
        <h1 className="text-center text-2xl text-white font-semibold">News</h1>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {articles.map((a) => (
            <Link
              key={a.id}
              to={`/news/${a.id}`}
              className="bg-[#111827] rounded-md overflow-hidden shadow-md border border-[#4B5563]"
            >
              <img
                src={a.image}
                alt={a.title}
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
};

export default News;
