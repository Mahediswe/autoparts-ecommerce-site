import React from "react";
import img1 from '../assets/B1-1.jpg';
import img2 from '../assets/B1-3.jpg';
import { Link } from 'react-router-dom';

const Banner2 = () => {
  const Data = [
    {
      id: 0,
      title: "Sale up to 45% off",
      subtitle: "Car Lighting Kit (Tail Lights Included)",
      price: "PRICE ONLY: $1299.00",
      img: img1,
    },
    {
      id: 1,
      title: "Sale up to 45% off",
      subtitle: "All Weather Terrain Braker",
      price: "PRICE ONLY: $1299.00",
      img: img2,
    },
  ];

  return (
    <div>
      <div className="text-center p-5">
        <h1 className="text-4xl font-bold">Deals of the day</h1>
        <h1 className="pt-3">Get 45% Off Your Order Of $500 And More</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      {Data.map((item) => (
        <div
          key={item.id}
          className="relative group overflow-hidden rounded-xl shadow-lg"
        >
          {/* Image */}
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-64 md:h-80 object-cover"
          />

          {/* Permanent Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-start justify-center p-6 text-white z-10">
            <h2 className="text-sm md:text-base mb-1 font-bold">{item.title}</h2>
            <p className="text-lg md:text-xl font-semibold mb-1">{item.subtitle}</p>
            <p className="text-sm md:text-base font-medium mb-3 text-yellow-300">{item.price}</p>
            <Link to="/shop">
              <button className="bg-white text-black px-4 py-2 rounded hover:bg-yellow-400 transition duration-300 text-sm">
                Shop Now
              </button>
            </Link>
          </div>

          {/* Hover transparent overlay */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 z-0"></div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Banner2;
