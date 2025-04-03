import React from "react";
import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";
import Gallery from "../components/Home/Gallery";
import Banner from "../components/Home/Banner";
import imgHomeBanner from "../images/BannerHome.png";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Banner texte="Chez vous, partout et ailleurs" image={imgHomeBanner} />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
