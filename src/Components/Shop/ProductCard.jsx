import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

  return (
    <Link to={`/product/${product.id}`}>
      <div className="border rounded-lg p-4 shadow hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-white">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover mb-4 rounded"
        />

        {/* Product Info */}
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="text-yellow-500 font-bold mt-2">${product.price}</p>
         <button
        onClick={() => addToCart(product)}
        className="bg-yellow-400 px-4 py-2 mt-2 rounded"
      >
        Add to Cart
      </button>
      </div>
    </Link>
  );
};

export default ProductCard;
