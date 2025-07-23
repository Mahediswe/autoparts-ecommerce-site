import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import BannerProductCard from './BannerProductCard'

// ডেমো ডেটা (পরে API বা আসল ডেটা দিয়ে রিপ্লেস করা যাবে)
const sampleProducts = [
  {
    id: 1,
    name: 'Brake Pad Set',
    price: 25.99,
    image: '/images/brake.jpg',
    rating: 4
  },
  {
    id: 2,
    name: 'Car Headlight',
    price: 59.49,
    image: '/images/headlight.jpg',
    rating: 5
  },
  {
    id: 3,
    name: 'Steering Wheel',
    price: 90.0,
    image: '/images/steering.jpg',
    rating: 4
  },
  {
    id: 4,
    name: 'Battery Terminal',
    price: 19.99,
    image: '/images/battery.jpg',
    rating: 3
  },
  {
    id: 5,
    name: 'Tyre Pressure Gauge',
    price: 10.5,
    image: '/images/tyre.jpg',
    rating: 4
  },
  {
    id: 6,
    name: 'Car Jack',
    price: 40,
    image: '/images/jack.jpg',
    rating: 5
  }
]

const BannerSection = ({ title }) => {
  const [startIndex, setStartIndex] = useState(0)
  const visibleProducts = sampleProducts.slice(startIndex, startIndex + 4)

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1)
    }
  }

  const handleNext = () => {
    if (startIndex + 4 < sampleProducts.length) {
      setStartIndex(prev => prev + 1)
    }
  }

  return (
    <div className="my-10 px-4">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <div className="flex gap-3 text-orange-500">
          <button
            onClick={handlePrev}
            className="p-2 bg-orange-100 rounded-full hover:bg-orange-200"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-orange-100 rounded-full hover:bg-orange-200"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleProducts.map(product => (
          <BannerProductCard key={product.id} product={product} />
        ))}
      </div> */}
      <div className="grid grid-rows-1 sm:grid-rows-2 md:grid-rows-2 lg:grid-rows-4 gap-6">
  {visibleProducts.map(product => (
    <BannerProductCard key={product.id} product={product} />
  ))}
</div>

    </div>
  )
}

export default BannerSection
