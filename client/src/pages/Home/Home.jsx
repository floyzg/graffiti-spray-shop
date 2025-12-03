import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Первый экран: header + hero */}
      <div className="h-screen flex flex-col">
        <Header />
        <Hero className="flex-1" />
      </div>

      <div
        className="w-full h-0.5"
        style={{ background: "rgb(0, 212, 255)" }}
      />
      {/* Дальше уже идёт контент: фильтры, товары и т.п. */}
      <main className="flex-1">
        {/* сюда потом вставишь фильтры/список товаров */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et veniam cum
        perferendis! Sit in laudantium dolor ea nam dolores recusandae odit
        autem minima. Excepturi tempora possimus eos, cumque quaerat assumenda?
        Ipsam, molestiae consequuntur maiores corrupti suscipit explicabo in,
        minima, dolorum facere dolore modi. Perferendis eos, sed ea praesentium
        deleniti quod odio laudantium officiis sint, repellendus earum
        voluptatibus? Veniam, quam dicta. Magnam distinctio necessitatibus
        dicta, recusandae ipsa voluptates laborum culpa quibusdam incidunt
        facilis corrupti optio enim velit quod assumenda soluta dolorem. Enim ad
        doloremque sit ab ipsum, reprehenderit culpa doloribus vero! Debitis
        sunt hic iste, pariatur odit sint architecto incidunt. Recusandae
        blanditiis ex dolor ipsum non voluptates doloremque earum eius
        accusantium nesciunt cupiditate, fuga repellat, dolores laboriosam
        officiis laudantium magnam. Suscipit? Exercitationem soluta amet eveniet
        magnam numquam blanditiis hic totam, saepe sed delectus, excepturi
        debitis doloremque iste vitae, expedita recusandae minima eum modi
        sapiente tenetur necessitatibus esse atque distinctio vel. Dolorem?
        Amet, praesentium aliquam? Cum, repellendus voluptatum quas quos ipsa ab
        nesciunt suscipit natus quam explicabo modi laudantium enim distinctio,
        officia autem fugit unde in, blanditiis id ipsum minima pariatur
        quaerat!
      </main>
    </div>
  );
}

export default Home;

<div className="flex flex-col min-h-screen">
  {/* Header + Hero section */}
  <div className="h-screen flex flex-col">
    <Header />
    <Hero />
  </div>

  {/* Rest of content */}
  <div className="flex-1">{/* Your content here */}</div>
</div>;
