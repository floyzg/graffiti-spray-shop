import Bg from "../../assets/bg.svg";
import Purple from "../../assets/purple.png";
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ArticleCard from "../../components/ArticleCard/ArticleCard";

function News() {
  return (
    <div>
      <Header />

      <div className="news max-w-md mx-auto px-2.5 py-10 space-y-6 bg-[#0b1126] min-h-screen">
        <h1 className="text-center text-2xl font-semibold text-white mt-15">
          News
        </h1>

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

      <Footer />
    </div>
  );
}

export default News;
