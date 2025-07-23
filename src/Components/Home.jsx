import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Menu from "./Menu";
import Banner from "./Banner";
import Banner2 from "./Banner2";
//import ProductDetail from './Shop/ProductDetail'
import Footer from "./Footer";
import About from "./About";
import BlogSection from "./BlogSection ";
import PopularProducts from "./PopularProducts";
//import Banner3 from './Banner3'
import BannerProductCard from "./BannerProductCard";
import TripleBanner from "./TripleBanner";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
      <Banner />
      <PopularProducts />
      <Banner2 />
      <BannerProductCard />
      <BlogSection />
      <TripleBanner />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
