// import React from 'react';
// import toyota from '../assets/toyota.png';
// import bmw from '../assets/bmw.png';
// import ford from '../assets/ford.png';
// import nissan from '../assets/ford.png';
// import audi from '../assets/audi.png';
// import honda from '../assets/bmw.png';
// import { FaHandshake } from 'react-icons/fa';

// const companies = [
//   { id: 1, name: 'Toyota', logo: toyota },
//   { id: 2, name: 'BMW', logo: bmw },
//   { id: 3, name: 'Ford', logo: ford },
//   { id: 4, name: 'Nissan', logo: nissan },
//   { id: 5, name: 'Audi', logo: audi },
//   { id: 6, name: 'Honda', logo: honda },
// ];

// const Banner3 = () => {
//   return (
//     <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
//             <FaHandshake className="w-8 h-8 text-blue-600" />
//           </div>
//           <span className="inline-block bg-blue-600 text-white text-xs px-4 py-2 rounded-full uppercase font-semibold tracking-wider mb-3">
//             Trusted Partnerships
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
//             Our Premium Partners
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//             We proudly collaborate with world-renowned automotive brands to bring you the highest quality products
//           </p>
//         </div>

//         {/* Logo Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
//           {companies.map((company) => (
//             <div 
//               key={company.id} 
//               className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
//             >
//               <div className="relative w-20 h-20 mb-4 flex items-center justify-center">
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 <img
//                   src={company.logo}
//                   alt={company.name}
//                   className="w-16 h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 relative z-10"
//                 />
//               </div>
//               <p className="text-gray-700 font-medium text-sm group-hover:text-blue-600 transition-colors duration-300">
//                 {company.name}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Trust Badge */}
//         <div className="text-center mt-12 pt-8 border-t border-gray-200">
//           <p className="text-gray-500 text-sm">
//             Trusted by over 1,000,000 customers worldwide
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner3;




import React from 'react';
import { motion } from 'framer-motion';
import toyota from '../assets/toyota.png';
import bmw from '../assets/bmw.png';
import ford from '../assets/ford.png';
import nissan from '../assets/toyota.png';
import audi from '../assets/audi.png';
import honda from '../assets/bmw.png';
import { FaHandshake } from 'react-icons/fa';

const companies = [
  { id: 1, name: 'Toyota', logo: toyota },
  { id: 2, name: 'BMW', logo: bmw },
  { id: 3, name: 'Ford', logo: ford },
  { id: 4, name: 'Nissan', logo: nissan },
  { id: 5, name: 'Audi', logo: audi },
  { id: 6, name: 'Honda', logo: honda },
];

// Duplicate the array for seamless infinite animation
const duplicatedCompanies = [...companies, ...companies];

const Banner3 = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
         
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
            Our Premium Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We proudly collaborate with world-renowned automotive brands to bring you the highest quality products
          </p>
        </div>

        {/* Infinite Marquee Container */}
        <div className="relative overflow-hidden py-8">
          {/* Left to Right Marquee */}
          <motion.div
            className="flex mb-8"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.id}-${index}`}
                className="flex-shrink-0 px-6"
              >
                <div className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 min-w-[180px]">
                  <div className="relative w-20 h-20 mb-4 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-16 h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 relative z-10"
                    />
                  </div>
                  <p className="text-gray-700 font-medium text-sm group-hover:text-blue-600 transition-colors duration-300">
                    {company.name}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Trusted by over 1,000,000 customers worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner3;