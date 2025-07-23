import React from 'react'
import { FaStar } from 'react-icons/fa'

const BannerProductCard = ({ product }) => {
  if (!product) return null // যদি প্রোডাক্ট না থাকে তাহলে কিছু রেন্ডার করবে না

  const { image, name, price, rating } = product

  return (
    <div className="flex items-center gap-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 p-4">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <div className="flex text-yellow-500">
          {[...Array(rating)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <p className="text-orange-500 font-bold mt-1">${price}</p>
      </div>
    </div>
  )
}

export default BannerProductCard
