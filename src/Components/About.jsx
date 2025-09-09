// import React from 'react';
// import { FaShippingFast, FaMoneyCheckAlt, FaHeadset } from 'react-icons/fa';

// const About = () => {
//   const data = [
//     {
//       id: 1,
//       icon: <FaShippingFast size={40} className="text-yellow-400" />,
//       title: "Free Shipping",
//       desc: "We deliver your parts with zero shipping cost inside Bangladesh.",
//     },
//     {
//       id: 2,
//       icon: <FaMoneyCheckAlt size={40} className="text-yellow-400" />,
//       title: "Money Guarantee",
//       desc: "100% money back guarantee for defective parts or late delivery.",
//     },
//     {
//       id: 3,
//       icon: <FaHeadset size={40} className="text-yellow-400" />,
//       title: "Online Support",
//       desc: "We provide 24/7 live customer support to assist your orders.",
//     },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-16">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {data.map((item, index) => (
//           <div
//             key={item.id}
//             className={`flex flex-col items-center text-center gap-4 p-6 border rounded-lg shadow-sm ${
//               index === 1 ? 'border-x-2' : 'border'
//             }`}
//           >
//             {item.icon}
//             <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
//             <p className="text-gray-500 text-sm">{item.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default About;




import React from 'react';
import { FaShippingFast, FaMoneyCheckAlt, FaHeadset, FaShieldAlt, FaSyncAlt, FaAward } from 'react-icons/fa';

const About = () => {
  const data = [
    {
      id: 1,
      icon: <FaShippingFast className="w-8 h-8" />,
      title: "Free Shipping",
      desc: "We deliver your parts with zero shipping cost inside Bangladesh.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      id: 2,
      icon: <FaMoneyCheckAlt className="w-8 h-8" />,
      title: "Money Guarantee",
      desc: "100% money back guarantee for defective parts or late delivery.",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      borderColor: "border-green-200"
    },
    {
      id: 3,
      icon: <FaHeadset className="w-8 h-8" />,
      title: "Online Support",
      desc: "We provide 24/7 live customer support to assist your orders.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200"
    },
    {
      id: 4,
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Secure Payment",
      desc: "All transactions are encrypted and secure with SSL protection.",
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
      borderColor: "border-red-200"
    },
    {
      id: 5,
      icon: <FaSyncAlt className="w-8 h-8" />,
      title: "Easy Returns",
      desc: "30-day hassle-free return policy on all products.",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200"
    },
    {
      id: 6,
      icon: <FaAward className="w-8 h-8" />,
      title: "Quality Assurance",
      desc: "All parts are thoroughly tested and quality certified.",
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
      borderColor: "border-yellow-200"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* <span className="inline-block bg-blue-600 text-white text-xs px-4 py-2 rounded-full uppercase font-semibold tracking-wider mb-4">
            Why Choose Us
          </span> */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
            Our Commitment to Excellence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We go above and beyond to ensure your complete satisfaction with every purchase
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {data.map((item) => (
            <div
              key={item.id}
              className={`group relative p-6 rounded-2xl border-2 ${item.borderColor} bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden`}
            >
              {/* Background Decoration */}
              <div className={`absolute top-0 right-0 w-24 h-24 ${item.bgColor} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Icon Container */}
              <div className={`relative z-10 w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className={item.iconColor}>
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2 relative z-10">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                {item.desc}
              </p>

              {/* Hover Effect Line */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 ${item.bgColor} group-hover:w-full transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-6">
            Ready to experience the difference?
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
            Explore Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;