// import React from "react";
// import img1 from '../assets/B1-1.jpg';
// import img2 from '../assets/B1-2.jpg';
// import img3 from '../assets/B1-3.jpg';
// import { Link } from 'react-router-dom';

// const Banner = () => {
//   const Data = [
//     {
//       id: 0,
//       title: "Lamps & Lights MEGA SALE",
//       subtitle: "Sale up to 55% off",
//       img: img1,
//     },
//     {
//       id: 1,
//       title: "CITY AUTO",
//       subtitle: "BICYCLES FOR LUXURIOUS GENTLEMAN",
//       img: img2,
//     },
//     {
//       id: 2,
//       title: "BODY PARTS FOR ANY VEHICLE",
//       subtitle: "An absolute for you",
//       img: img3,
//     },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
//       {Data.map((item) => (
//         <div
//           key={item.id}
//           className="relative group overflow-hidden rounded-xl shadow-lg"
//         >
//           {/* Image */}
//           <img
//             src={item.img}
//             alt={item.title}
//             className="w-full h-64 object-cover"
//           />

//           {/* Permanent Text Overlay */}
//           <div className="absolute inset-0 flex flex-col items-start justify-center p-6 text-white z-10">
//             <h2 className="text-xl md:text-2xl font-bold">{item.title}</h2>
//             <p className="text-sm md:text-base mb-3">{item.subtitle}</p>
//             <Link to="/shop">
//               <button className="bg-white text-black px-4 py-2 rounded hover:bg-yellow-400 transition duration-300">
//                 Shop Now
//               </button>
//             </Link>
//           </div>

//           {/* Hover transparent overlay */}
//           <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 z-0"></div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Banner;


import React from "react";
import img1 from '../assets/B1-1.jpg';
import img2 from '../assets/B1-2.jpg';
import img3 from '../assets/B1-3.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
  const Data = [
    {
      id: 0,
      title: "Lamps & Lights MEGA SALE",
      subtitle: "Sale up to 55% off",
      img: img1,
      badge: "Sale",
      badgeColor: "bg-red-500",
      buttonColor: "bg-red-600 hover:bg-red-700"
    },
    {
      id: 1,
      title: "CITY AUTO",
      subtitle: "BICYCLES FOR LUXURIOUS GENTLEMAN",
      img: img2,
      badge: "New",
      badgeColor: "bg-green-500",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      id: 2,
      title: "BODY PARTS FOR ANY VEHICLE",
      subtitle: "An absolute for you",
      img: img3,
      badge: "Hot",
      badgeColor: "bg-orange-500",
      buttonColor: "bg-gray-900 hover:bg-gray-800"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {Data.map((item) => (
        <div
          key={item.id}
          className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
        >
          {/* Image with gradient overlay */}
          <div className="relative overflow-hidden">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            
            {/* Badge */}
            <div className={`absolute top-4 left-4 ${item.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}>
              {item.badge}
            </div>
          </div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-start justify-end p-6 text-white z-10">
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-bold leading-tight drop-shadow-md">
                {item.title}
              </h2>
              <p className="text-sm md:text-base text-gray-200 drop-shadow-md">
                {item.subtitle}
              </p>
            </div>
            
            <Link 
              to="/shop" 
              className="mt-4 inline-flex items-center gap-2"
            >
              <button className={`${item.buttonColor} text-white px-5 py-2.5 rounded-full font-medium transition-all duration-300 transform group-hover:translate-x-1 flex items-center gap-2 shadow-md hover:shadow-lg`}>
                Shop Now
                <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>

          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
        </div>
      ))}
    </div>
  );
};

export default Banner;