// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useCart } from '../context/CartContext';

// const ProductCard = ({ product }) => {
//     const { addToCart } = useCart();

//   return (
//     <Link to={`/product/${product.id}`}>
//       <div className="border rounded-lg p-4 shadow hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-white">
//         {/* Product Image */}
//         <img
//           src={product.image}
//           alt={product.title}
//           className="w-full h-48 object-cover mb-4 rounded"
//         />

//         {/* Product Info */}
//         <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
//         <p className="text-sm text-gray-500">{product.category}</p>
//         <p className="text-yellow-500 font-bold mt-2">${product.price}</p>
//          <button
//         onClick={() => addToCart(product)}
//         className="bg-yellow-400 px-4 py-2 mt-2 rounded"
//       >
//         Add to Cart
//       </button>
//       </div>
//     </Link>
//   );
// };

// export default ProductCard;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaShoppingCart, FaEye, FaHeart, FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div 
      className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3">
          {product.discount && (
            <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
              -{product.discount}%
            </span>
          )}
          {product.isNew && (
            <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold ml-2">
              New
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-300 ${
            isWishlisted 
              ? 'bg-red-500 text-white' 
              : 'bg-white text-gray-600 hover:bg-red-500 hover:text-white'
          }`}
        >
          <FaHeart className="w-4 h-4" />
        </button>

        {/* Quick Actions Overlay */}
        <div className={`absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500 flex items-center justify-center gap-2 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button
            onClick={handleAddToCart}
            className="bg-white text-blue-600 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-600 hover:text-white shadow-lg"
          >
            <FaShoppingCart className="w-4 h-4" />
          </button>
          <Link to={`/product/${product.id}`}>
            <button className="bg-white text-gray-700 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-800 hover:text-white shadow-lg delay-75">
              <FaEye className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-gray-500 uppercase font-medium mb-1">
          {product.category}
        </p>

        {/* Title */}
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
            {product.title}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`w-3 h-3 ${i < 4 ? 'fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">(42)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-blue-600">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
        >
          <FaShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;