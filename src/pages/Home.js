import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import Banner from "../components/Banner";
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
