import React from 'react';
import { products } from '../Components/utils/products';
import { Link } from 'react-router-dom';

const PopularProducts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-10">Popular Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="bg-white rounded-lg shadow hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="text-yellow-500 font-bold mt-2">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
