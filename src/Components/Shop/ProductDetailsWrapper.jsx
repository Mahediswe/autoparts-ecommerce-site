// // components/shop/ProductDetailsWrapper.jsx

// import React from "react";
// import { useParams } from "react-router-dom";
// import { products } from "../utils/products";
// import ProductDetails from "./ProductDetail";

// const ProductDetailsWrapper = () => {
//   const { id } = useParams();
//   const product = products.find((p) => p.id === parseInt(id));

//   if (!product) {
//     return <div className="p-10 text-center text-red-600">Product not found!</div>;
//   }

//   return <ProductDetails product={product} />;
// };

// export default ProductDetailsWrapper;


// Components/Shop/ProductDetailsWrapper.jsx

import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../utils/products";
import ProductDetails from "./ProductDetail";
import { useCart } from "../context/CartContext"; 
import Navbar from "../Navbar";
import Footer from "../Footer";

const ProductDetailsWrapper = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  const { addToCart } = useCart(); 

  if (!product) return <div className="text-center py-10 text-red-500">Product not found</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 py-10">
        <ProductDetails
          product={product}
          addToCart={() => addToCart(product)} 
        />
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetailsWrapper;

