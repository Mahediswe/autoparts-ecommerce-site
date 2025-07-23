import React from 'react'

const AddToCartButtons = ({ onAddToCart, onBuyNow }) => {
  return (
    <div className="flex items-center gap-4 mt-6">
      <button
        onClick={onAddToCart}
        className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
      >
        🛒 Add to Cart
      </button>
      <button
        onClick={onBuyNow}
        className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
      >
        ⚡ Buy Now
      </button>
    </div>
  )
}

export default AddToCartButtons
