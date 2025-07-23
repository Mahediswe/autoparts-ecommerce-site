import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductInfo = ({ title, price, rating = 4.5, reviewCount = 35 }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    }

    if (hasHalf) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    }

    while (stars.length < 5) {
      stars.push(<FaRegStar key={`empty-${stars.length}`} className="text-yellow-500" />);
    }

    return stars;
  };

  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>

      <div className="flex items-center gap-2 text-sm text-gray-600">
        <div className="flex items-center">{renderStars()}</div>
        <span>({reviewCount} Review)</span>
      </div>

      <div>
        <span className="text-3xl font-semibold text-green-600">৳{price}</span>
        <span className="text-sm line-through text-gray-400 ml-2">৳{price + 300}</span>
        <span className="ml-2 text-sm text-red-500">-20%</span>
      </div>
    </div>
  );
};

export default ProductInfo;
