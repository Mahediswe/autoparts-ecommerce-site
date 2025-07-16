// components/Shop/SidebarFilter.jsx

import React, { useState } from 'react';

const SidebarFilter = ({ onFilterChange }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const categories = ['All', 'Lighting', 'Wheels', 'Body Parts', 'Performance'];

  const handleSearch = (e) => {
    setSearch(e.target.value);
    onFilterChange({ search: e.target.value, selectedCategory, priceRange });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onFilterChange({ search, selectedCategory: category, priceRange });
  };

  const handlePriceChange = (e, type) => {
    const value = parseInt(e.target.value);
    const newRange = type === 'min' ? [value, priceRange[1]] : [priceRange[0], value];
    setPriceRange(newRange);
    onFilterChange({ search, selectedCategory, priceRange: newRange });
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-md space-y-6">
      {/* Search */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Search</h3>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={handleSearch}
          className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* Category */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Category</h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li
              key={cat}
              className={`cursor-pointer px-3 py-1 rounded 
                ${selectedCategory === cat ? 'bg-yellow-400 text-white' : 'hover:bg-gray-100'}`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Price Range</h3>
        <div className="flex gap-2 items-center">
          <input
            type="number"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(e, 'min')}
            className="w-full border rounded px-2 py-1"
            min={0}
            max={priceRange[1]}
          />
          <span>-</span>
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(e, 'max')}
            className="w-full border rounded px-2 py-1"
            min={priceRange[0]}
            max={10000}
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter;
