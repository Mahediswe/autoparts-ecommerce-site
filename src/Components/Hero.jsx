import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import img1 from '../assets/slider1.jpg';
import img2 from '../assets/slider2.jpg';
import img3 from '../assets/slider3.jpg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  const data = [
    {
      id: 0,
      title: "New Arrival 2024",
      subtitle: "Discover the Latest Collection",
      des: "Upgrade your ride with top-quality auto parts. Stylish, durable and reliable – just for you.",
      img: img1
    },
    {
      id: 1,
      title: "Hot Deals This Week",
      subtitle: "Save Big on Essentials",
      des: "Unbeatable prices on must-have items. Limited time offer – don't miss out!",
      img: img2
    },
    {
      id: 2,
      title: "Exclusive Auto Gears",
      subtitle: "Premium Quality Guaranteed",
      des: "From performance to style, find everything your vehicle needs in one place.",
      img: img3
    }
  ];

  // Custom Left Arrow
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/60 p-2 rounded-full hover:bg-black/80 transition"
    >
      <FaChevronLeft size={20} />
    </button>
  );

  // Custom Right Arrow
  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 text-white bg-black/60 p-2 rounded-full hover:bg-black/80 transition"
    >
      <FaChevronRight size={20} />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  return (
    <div className="mt-[70px] relative">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id}>
            <div
              className="h-[60vh] w-full bg-cover bg-center flex items-center justify-center text-center px-4"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div>
                <h2 className="text-white text-2xl md:text-4xl font-bold mb-2">{item.title}</h2>
                <h3 className="text-yellow-400 text-xl md:text-2xl font-semibold mb-2">{item.subtitle}</h3>
                <p className="text-gray-200 mb-4 text-sm md:text-base">{item.des}</p>
                <Link to="/shop">
                  <button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded transition duration-300">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
