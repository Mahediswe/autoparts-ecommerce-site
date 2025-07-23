import React, { useState } from 'react'

const ProductVariants = ({ colors = [], sizes = [] }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [selectedSize, setSelectedSize] = useState(sizes[0])

  return (
    <div className="space-y-6">
      {/* Color Selection */}
      {colors.length > 0 && (
        <div>
          <h3 className="font-semibold mb-2">Colour:</h3>
          <div className="flex gap-3">
            {colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 transition ${
                  selectedColor === color
                    ? 'ring-2 ring-black'
                    : 'border-gray-300'
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Size Selection */}
      {sizes.length > 0 && (
        <div>
          <h3 className="font-semibold mb-2">Size:</h3>
          <div className="flex gap-3">
            {sizes.map((size, index) => (
              <button
                key={index}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded transition ${
                  selectedSize === size
                    ? 'bg-black text-white'
                    : 'bg-white border-gray-300'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductVariants
