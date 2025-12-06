import React from "react";

function ArticleCard({ imageSrc, badge, title, text, date }) {
  return (
    <div className="block">
      <div className="relative flex flex-col my-6 bg-[#1b2438] shadow-sm border rounded-lg w-full">
        {/* IMAGE */}
        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="p-4">
          {badge && (
            <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 text-xs text-white shadow-sm w-fit">
              {badge}
            </div>
          )}

          <h6 className="mb-2 text-white text-xl font-semibold">{title}</h6>

          <p className="text-white leading-normal font-light">{text}</p>
        </div>

        <div className="flex items-center justify-between p-4 pt-0">
          <span className="text-sm text-slate-400">{date}</span>
          <a
            href="#"
            className="text-pink-600 font-semibold text-sm hover:underline"
          >
            Подробнее →
          </a>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
