import Bg from "../../assets/bg.svg";
import Purple from "../../assets/purple.png";
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ArticleCard from "../../components/ArticleCard/ArticleCard";

function News() {
  return (
    <div className="bg-[#0b1126] min-h-screen">
      <Header />

      <div className="max-w-[900px] mx-auto px-4 pt-[90px] pb-8">
        <h1 className="text-center text-2xl font-semibold text-white mb-6">
          NEWS
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ArticleCard
            imageSrc={Purple}
            badge="POPULAR"
            title="Графити тест WeekMan Arton 100ml"
            text="Сравниваем стойкость, яркость и насыщенность цветов. Результаты реально удивили!"
            date="30.11.2025"
          />

          <ArticleCard
            imageSrc={Purple}
            badge="SALE"
            title="Скидки на маркеры и краску!"
            text="Большие скидки на популярные цветовые серии. Акция до конца недели."
            date="28.11.2025"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default News;
