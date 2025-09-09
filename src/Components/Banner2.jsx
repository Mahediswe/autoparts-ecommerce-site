


import React from "react";
import img1 from '../assets/B1-1.jpg';
import img2 from '../assets/B1-3.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaClock, FaFire } from 'react-icons/fa';

const Banner2 = () => {
  const Data = [
    {
      id: 0,
      title: "Sale up to 45% off",
      subtitle: "Car Lighting Kit (Tail Lights Included)",
      price: "$1299.00",
      originalPrice: "$2398.00",
      img: img1,
      timeLeft: "06:24:32",
    },
    {
      id: 1,
      title: "Sale up to 45% off",
      subtitle: "All Weather Terrain Braker",
      price: "$1299.00",
      originalPrice: "$2398.00",
      img: img2,
      timeLeft: "08:45:12",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-4">
            <FaFire className="w-4 h-4" />
            <span className="text-sm font-semibold">HOT DEALS</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            Deals of the Day
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get 45% Off Your Order Of $500 And More. Limited time offer - don't miss out!
          </p>
        </div>

        {/* Banner Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {Data.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-72 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Discount Badge */}
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  45% OFF
                </div>
                
                {/* Countdown Timer */}
                <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-2 rounded-lg flex items-center gap-2">
                  <FaClock className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-mono">{item.timeLeft}</span>
                </div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6 text-white z-10">
                <div className="space-y-3 mb-4">
                  <h2 className="text-sm font-semibold text-yellow-400 uppercase tracking-wide">
                    {item.title}
                  </h2>
                  <h3 className="text-xl md:text-2xl font-bold leading-tight drop-shadow-md">
                    {item.subtitle}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-white">{item.price}</span>
                    <span className="text-lg text-gray-300 line-through">{item.originalPrice}</span>
                  </div>
                </div>
                
                <Link 
                  to="/shop" 
                  className="w-full"
                >
                  <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group-hover:gap-3">
                    Shop Now
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
            </div>
          ))}
        </div>

        {/* View All Deals Button */}
        <div className="text-center mt-12">
          <Link
            to="/deals"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View All Daily Deals
            <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner2;