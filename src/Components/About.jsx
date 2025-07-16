import React from 'react';
import { FaShippingFast, FaMoneyCheckAlt, FaHeadset } from 'react-icons/fa';

const About = () => {
  const data = [
    {
      id: 1,
      icon: <FaShippingFast size={40} className="text-yellow-400" />,
      title: "Free Shipping",
      desc: "We deliver your parts with zero shipping cost inside Bangladesh.",
    },
    {
      id: 2,
      icon: <FaMoneyCheckAlt size={40} className="text-yellow-400" />,
      title: "Money Guarantee",
      desc: "100% money back guarantee for defective parts or late delivery.",
    },
    {
      id: 3,
      icon: <FaHeadset size={40} className="text-yellow-400" />,
      title: "Online Support",
      desc: "We provide 24/7 live customer support to assist your orders.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col items-center text-center gap-4 p-6 border rounded-lg shadow-sm ${
              index === 1 ? 'border-x-2' : 'border'
            }`}
          >
            {item.icon}
            <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
