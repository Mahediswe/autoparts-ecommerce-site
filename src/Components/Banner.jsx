import React from "react";
import img1 from '../assets/B1-1.jpg';
import img2 from '../assets/B1-2.jpg';
import img3 from '../assets/B1-3.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
  const Data = [
    {
      id: 0,
      title: "Lamps & Lights MEGA SALE",
      subtitle: "Sale up to 55% off",
      img: img1,
    },
    {
      id: 1,
      title: "CITY AUTO",
      subtitle: "BICYCLES FOR LUXURIOUS GENTLEMAN",
      img: img2,
    },
    {
      id: 2,
      title: "BODY PARTS FOR ANY VEHICLE",
      subtitle: "An absolute for you",
      img: img3,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {Data.map((item) => (
        <div
          key={item.id}
          className="relative group overflow-hidden rounded-xl shadow-lg"
        >
          {/* Image */}
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-64 object-cover"
          />

          {/* Permanent Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-start justify-center p-6 text-white z-10">
            <h2 className="text-xl md:text-2xl font-bold">{item.title}</h2>
            <p className="text-sm md:text-base mb-3">{item.subtitle}</p>
            <Link to="/shop">
              <button className="bg-white text-black px-4 py-2 rounded hover:bg-yellow-400 transition duration-300">
                Shop Now
              </button>
            </Link>
          </div>

          {/* Hover transparent overlay */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 z-0"></div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
