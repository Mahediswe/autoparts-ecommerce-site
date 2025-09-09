// // components/Shop/SidebarFilter.jsx

// import React, { useState } from 'react';

// const SidebarFilter = ({ onFilterChange }) => {
//   const [search, setSearch] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [priceRange, setPriceRange] = useState([0, 5000]);

//   const categories = ['All', 'Lighting', 'Wheels', 'Body Parts', 'Performance'];

//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//     onFilterChange({ search: e.target.value, selectedCategory, priceRange });
//   };

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     onFilterChange({ search, selectedCategory: category, priceRange });
//   };

//   const handlePriceChange = (e, type) => {
//     const value = parseInt(e.target.value);
//     const newRange = type === 'min' ? [value, priceRange[1]] : [priceRange[0], value];
//     setPriceRange(newRange);
//     onFilterChange({ search, selectedCategory, priceRange: newRange });
//   };

//   return (
//     <div className="bg-white p-5 rounded-xl shadow-md space-y-6">
//       {/* Search */}
//       <div>
//         <h3 className="text-lg font-semibold mb-2">Search</h3>
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={search}
//           onChange={handleSearch}
//           className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-400"
//         />
//       </div>

//       {/* Category */}
//       <div>
//         <h3 className="text-lg font-semibold mb-2">Category</h3>
//         <ul className="space-y-2">
//           {categories.map((cat) => (
//             <li
//               key={cat}
//               className={`cursor-pointer px-3 py-1 rounded 
//                 ${selectedCategory === cat ? 'bg-yellow-400 text-white' : 'hover:bg-gray-100'}`}
//               onClick={() => handleCategoryChange(cat)}
//             >
//               {cat}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Price */}
//       <div>
//         <h3 className="text-lg font-semibold mb-2">Price Range</h3>
//         <div className="flex gap-2 items-center">
//           <input
//             type="number"
//             value={priceRange[0]}
//             onChange={(e) => handlePriceChange(e, 'min')}
//             className="w-full border rounded px-2 py-1"
//             min={0}
//             max={priceRange[1]}
//           />
//           <span>-</span>
//           <input
//             type="number"
//             value={priceRange[1]}
//             onChange={(e) => handlePriceChange(e, 'max')}
//             className="w-full border rounded px-2 py-1"
//             min={priceRange[0]}
//             max={10000}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SidebarFilter;




import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SidebarFilter = ({ onFilterChange }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const categories = ['All', 'Lighting', 'Wheels', 'Body Parts', 'Performance', 'Engine', 'Suspension', 'Accessories'];

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    onFilterChange({ search: value, selectedCategory, priceRange });
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

  const clearFilters = () => {
    setSearch('');
    setSelectedCategory('All');
    setPriceRange([0, 5000]);
    onFilterChange({ search: '', selectedCategory: 'All', priceRange: [0, 5000] });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Filters</h2>
        <button
          onClick={clearFilters}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
        >
          <FaTimes className="w-3 h-3" />
          Clear All
        </button>
      </div>

      {/* Search */}
      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Search Products</h3>
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>
      </div>

      {/* Category */}
      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Categories</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Price Range</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <label className="block text-sm text-gray-600 mb-1">Min Price</label>
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) => handlePriceChange(e, 'min')}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min={0}
                max={priceRange[1]}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-600 mb-1">Max Price</label>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) => handlePriceChange(e, 'max')}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min={priceRange[0]}
                max={10000}
              />
            </div>
          </div>
          
          {/* Price Range Slider */}
          <div className="pt-2">
            <input
              type="range"
              min={0}
              max={10000}
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(e, 'max')}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Active Filters Summary */}
      {(search || selectedCategory !== 'All' || priceRange[0] > 0 || priceRange[1] < 5000) && (
        <div className="p-4 bg-blue-50 rounded-xl">
          <h4 className="font-semibold text-blue-900 mb-2">Active Filters:</h4>
          <div className="flex flex-wrap gap-2">
            {search && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                Search: "{search}"
              </span>
            )}
            {selectedCategory !== 'All' && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                Category: {selectedCategory}
              </span>
            )}
            {(priceRange[0] > 0 || priceRange[1] < 5000) && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                Price: ${priceRange[0]} - ${priceRange[1]}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarFilter;