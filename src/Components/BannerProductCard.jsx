import React from 'react'
import { Link } from "react-router-dom";

const BannerProductCard = ({ product }) => {
  if (!product) return null 

 // const { image, name, price, rating } = product

  return (
    // <div className="flex items-center gap-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 p-4">
    //   <img
    //     src={image}
    //     alt={name}
    //     className="w-24 h-24 object-cover rounded-lg"
    //   />
    //   <div className="flex-1">
    //     <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
    //     <div className="flex text-yellow-500">
    //       {[...Array(rating)].map((_, i) => (
    //         <FaStar key={i} />
    //       ))}
    //     </div>
    //     <p className="text-orange-500 font-bold mt-1">${price}</p>
    //   </div>
    // </div>
      <Link to={`/product/${product.id}`} className="hover:scale-105 transition-transform">
      <div className="flex items-center bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg cursor-pointer">
        <img src={product.image} alt={product.name} className="w-24 h-24 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-700">{product.name}</h3>
          <p className="text-orange-500 font-semibold">${product.price}</p>
          <p className="text-yellow-500">{"★".repeat(product.rating)}</p>
        </div>
      </div>
    </Link>
  )
}

export default BannerProductCard
