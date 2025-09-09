// import React from 'react';
// import { Link } from 'react-router-dom';
// import m1 from '../assets/m1.jpg';
// import m2 from '../assets/m2.jpg';
// import m3 from '../assets/m3.jpg';
// import m4 from '../assets/m4.jpg';
// import m5 from '../assets/m5.jpg';
// import m6 from '../assets/m6.jpg';
// import m7 from '../assets/m7.jpg';

// const Menu = () => {
//   const Data = [
//     { id: 0, title: "BODY PARTS", img: m1 },
//     { id: 1, title: "The Gold Bracelets", img: m2 },
//     { id: 2, title: "Lighting", img: m3 },
//     { id: 3, title: "Performance parts", img: m4 },
//     { id: 4, title: "BODY PARTS", img: m5 },
//     { id: 5, title: "Repair parts", img: m6 },
//     { id: 6, title: "Wheels And Tires", img: m7 }
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <div className="flex flex-wrap gap-10 justify-center items-center">
//         {Data.map((item) => (
//           <Link
//             to={`/shop?category=${encodeURIComponent(item.title)}`}
//             key={item.id}
//             className="flex flex-col items-center space-y-3"
//           >
//             <img
//               src={item.img}
//               alt={item.title}
//               className="w-32 h-32 rounded-full object-cover border-2 border-gray-300 hover:scale-105 transition-transform duration-300"
//             />
//             <h3 className="text-gray-700 font-semibold text-center text-sm md:text-base">{item.title}</h3>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Menu;


import React, { useState, useEffect } from 'react';
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
    { id: 0, title: "BODY PARTS", img: m1},
    { id: 1, title: "GOLD BRACELETS", img: m2  },
    { id: 2, title: "LIGHTING", img: m3 },
    { id: 3, title: "PERFORMANCE PARTS", img: m4},
    { id: 4, title: "ENGINE PARTS", img: m5 },
    { id: 5, title: "REPAIR PARTS", img: m6 },
    { id: 6, title: "WHEELS & TIRES", img: m7} 
  ];

  const [visibleItems, setVisibleItems] = useState([]);

useEffect(() => {
  // Animate items in one by one with a delay
  const timer = setTimeout(() => {
    const interval = setInterval(() => {
      setVisibleItems(prev => {
        if (prev.length < Data.length) {
          return [...prev, Data[prev.length].id];
        }
        clearInterval(interval);
        return prev;
      });
    }, 150);
    
    return () => clearInterval(interval);
  }, 300);
  
  return () => clearTimeout(timer);
}, [Data.length]);// ✅ Fixed: Added Data to dependency array

  return (
    <div className="max-w-8xl mx-auto px-4 py-10 md:py-16">
      {/* Section Header with animation */}
      <div className="text-center mb-10 md:mb-14 overflow-hidden">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 transform transition-all duration-700 animate-fade-in-down">
          Shop by Category
        </h2>
        <p className="text-gray-600 mt-2 transform transition-all duration-700 delay-100 animate-fade-in-up">
          Find the perfect parts for your vehicle
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {Data.map((item, index) => (
          <Link
            to={`/shop?category=${encodeURIComponent(item.title)}`}
            key={item.id}
            className={`group flex flex-col items-center space-y-4 w-36 md:w-40 transform transition-all duration-500 ${
              visibleItems.includes(item.id) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="relative">
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full transform group-hover:scale-110 transition-transform duration-500"></div>

              
              {/* Subtle floating animation */}
              <div className="animate-float">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-gray-200 group-hover:border-blue-400 transition-all duration-300 shadow-md group-hover:shadow-xl group-hover:scale-105"
                />
              </div>
              
              {/* Hover effect circle */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-300 group-hover:scale-110 transition-all duration-500"></div>
            </div>
            
            {/* Title with animated underline */}
            <div className="relative">
              <h3 className="text-gray-700 font-semibold text-center text-sm md:text-base group-hover:text-blue-600 transition-colors duration-300 px-2">
                {item.title}
              </h3>
              <div className="h-0.5 bg-blue-400 w-0 group-hover:w-full transition-all duration-500 mx-auto mt-1"></div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* View All Button with animation */}
      <div className="text-center mt-12 transform transition-all duration-700 delay-500 animate-fade-in-up">
        <Link
          to="/shop"
          className="inline-block bg-gray-800 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-all duration-300 font-medium transform hover:scale-105 shadow-md hover:shadow-lg"
        >
          View All Categories
        </Link>
      </div>

      {/* Add CSS for custom animations */}
      <style>
        {`
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
          }
          
          .animate-fade-in-down {
            animation: fadeInDown 0.7s ease-out forwards;
          }
          
          .animate-fade-in-up {
            animation: fadeInUp 0.7s ease-out forwards;
          }
          
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          
          /* Add delay for each floating element */
          .group:nth-child(1) .animate-float { animation-delay: 0s; }
          .group:nth-child(2) .animate-float { animation-delay: 0.5s; }
          .group:nth-child(3) .animate-float { animation-delay: 1s; }
          .group:nth-child(4) .animate-float { animation-delay: 1.5s; }
          .group:nth-child(5) .animate-float { animation-delay: 2s; }
          .group:nth-child(6) .animate-float { animation-delay: 2.5s; }
          .group:nth-child(7) .animate-float { animation-delay: 3s; }
        `}
      </style>
    </div>
  );
};

export default Menu;