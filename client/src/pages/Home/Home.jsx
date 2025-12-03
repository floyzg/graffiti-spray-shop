import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";

function Home() {
  return (
    <div>
      <div className="screen-top">
        <Header />
        <Hero />
      </div>
      <main className="content">{/* Additional content can go here */}</main>
    </div>
  );
}

export default Home;
