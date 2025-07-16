// components/Shop/ProductDetail.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../utils/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) {
    return <p className="text-center py-20">Product not found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[400px] object-cover rounded"
        />

        {/* Product Info */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">{product.title}</h2>
          <p className="text-gray-600">{product.category}</p>
          <p className="text-yellow-500 text-2xl font-bold">${product.price}</p>
          <p className="text-sm text-gray-500 leading-relaxed">
            This is a high quality {product.category.toLowerCase()} used in modern cars. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident minus, laborum harum necessitatibus veniam dolore...
          </p>
          <button
        onClick={() => addToCart(product)}
        className="bg-yellow-400 px-4 py-2 mt-2 rounded"
      >
        Add to Cart
      </button>
          <br />
          <Link to="/shop" className="text-blue-600 underline mt-4 inline-block">
            ← Back to Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
