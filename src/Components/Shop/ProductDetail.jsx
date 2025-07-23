// // components/Shop/ProductDetail.jsx

// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { products } from '../utils/products';
// import { useCart } from '../context/CartContext';

// const ProductDetail = () => {
//   const { id } = useParams();
//   const product = products.find((p) => p.id === parseInt(id));
//   const { addToCart } = useCart();

//   if (!product) {
//     return <p className="text-center py-20">Product not found</p>;
//   }

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-12">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* Product Image */}
//         <img
//           src={product.image}
//           alt={product.title}
//           className="w-full h-[400px] object-cover rounded"
//         />

//         {/* Product Info */}
//         <div className="space-y-4">
//           <h2 className="text-3xl font-bold">{product.title}</h2>
//           <p className="text-gray-600">{product.category}</p>
//           <p className="text-yellow-500 text-2xl font-bold">${product.price}</p>
//           <p className="text-sm text-gray-500 leading-relaxed">
//             This is a high quality {product.category.toLowerCase()} used in modern cars. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident minus, laborum harum necessitatibus veniam dolore...
//           </p>
//           <button
//         onClick={() => addToCart(product)}
//         className="bg-yellow-400 px-4 py-2 mt-2 rounded"
//       >
//         Add to Cart
//       </button>
//           <br />
//           <Link to="/shop" className="text-blue-600 underline mt-4 inline-block">
//             ← Back to Shop
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;





import React from "react";
import ProductImagePreview from "./ProductImagePreview";
import ProductInfo from "./ProductInfo";
import ProductVariants from "./ProductVariants";
import QuantitySelector from "./QuantitySelector";
import AddToCartButtons from './AddToCartButtons';
import ProductTabs from './ProductTabs';


const ProductDetails = ({ product,addToCart  }) => {
  return (
    <div className="flex flex-col gap-8 mt-10 max-w-4xl mx-auto px-4">
      <div className="mb-6">
        <ProductImagePreview image={product.image} />
      </div>

      <div className="mb-6">
        <ProductInfo
          title={product.title}
          price={product.price}
          rating={4.3} 
          reviewCount={25} 
        />
      </div>

      <div className="mb-6">
        <ProductVariants
          colors={["#000000", "#ff0000", "#0055ff"]} // demo color
          sizes={["S", "M", "L"]} // demo size
        />
      </div>

      <div className="mb-6">
        <QuantitySelector
          onChange={(value) => console.log("Selected Quantity:", value)}
        />
      </div>

        <div className="mb-6">
        <AddToCartButtons
          onAddToCart={addToCart}
          onBuyNow={() => {
            addToCart();
            window.location.href = "/cart"; 
          }}
        />
      </div>

      <div className="mb-6">
        <ProductTabs
          description="High-quality LED headlight suitable for all models."
          features="Waterproof, Energy Efficient, Easy to Install."
          warranty="1 Year Manufacturer Warranty"
        />
      </div>

    </div>
  );
};

export default ProductDetails;
