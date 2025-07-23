import React from 'react';
import { Link } from 'react-router-dom';
import m1 from '../assets/m1.jpg';
import m2 from '../assets/m2.jpg';
import m3 from '../assets/m3.jpg';
import m4 from '../assets/m4.jpg';
import m5 from '../assets/m5.jpg';
import m6 from '../assets/m6.jpg';
import m7 from '../assets/m7.jpg';

const Menu = () => {
  const Data = [
    { id: 0, title: "BODY PARTS", img: m1 },
    { id: 1, title: "The Gold Bracelets", img: m2 },
    { id: 2, title: "Lighting", img: m3 },
    { id: 3, title: "Performance parts", img: m4 },
    { id: 4, title: "BODY PARTS", img: m5 },
    { id: 5, title: "Repair parts", img: m6 },
    { id: 6, title: "Wheels And Tires", img: m7 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-wrap gap-10 justify-center items-center">
        {Data.map((item) => (
          <Link
            to={`/shop?category=${encodeURIComponent(item.title)}`}
            key={item.id}
            className="flex flex-col items-center space-y-3"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-32 h-32 rounded-full object-cover border-2 border-gray-300 hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-gray-700 font-semibold text-center text-sm md:text-base">{item.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
