import React, { useState } from 'react'

const QuantitySelector = ({ onChange }) => {
  const [quantity, setQuantity] = useState(1)

  const increase = () => {
    if (quantity < 10) {
      setQuantity(prev => {
        const newQty = prev + 1
        onChange && onChange(newQty)
        return newQty
      })
    }
  }

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(prev => {
        const newQty = prev - 1
        onChange && onChange(newQty)
        return newQty
      })
    }
  }

  return (
    <div className="flex items-center space-x-4 mt-4">
      <button
        onClick={decrease}
        className="w-9 h-9 border rounded hover:bg-gray-200 text-xl"
      >
        -
      </button>
      <span className="text-lg">{quantity}</span>
      <button
        onClick={increase}
        className="w-9 h-9 border rounded hover:bg-gray-200 text-xl"
      >
        +
      </button>
    </div>
  )
}

export default QuantitySelector
