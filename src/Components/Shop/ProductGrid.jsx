// // components/Shop/ProductGrid.jsx

// import React, { useState, useEffect } from 'react';
// import { products as allProducts } from '../../utils/products';
// import ProductCard from './ProductCard';
// import SidebarFilter from './SidebarFilter';

// const ProductGrid = () => {
//   const [filters, setFilters] = useState({
//     search: '',
//     selectedCategory: 'All',
//     priceRange: [0, 5000]
//   });

//   const [filteredProducts, setFilteredProducts] = useState(allProducts);

//   useEffect(() => {
//     let result = allProducts;

//     // Search filter
//     if (filters.search) {
//       result = result.filter((p) =>
//         p.title.toLowerCase().includes(filters.search.toLowerCase())
//       );
//     }

//     // Category filter
//     if (filters.selectedCategory !== 'All') {
//       result = result.filter((p) => p.category === filters.selectedCategory);
//     }

//     // Price range filter
//     result = result.filter(
//       (p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
//     );

//     setFilteredProducts(result);
//   }, [filters]);

//   return (
//     <div className="flex flex-col md:flex-row gap-6">
//       {/* Sidebar */}
//       <div className="w-full md:w-1/4">
//         <SidebarFilter onFilterChange={setFilters} />
//       </div>

//       {/* Products */}
//       <div className="w-full md:w-3/4">
//         {filteredProducts.length === 0 ? (
//           <p className="text-center text-gray-500">No products found.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filteredProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductGrid;


// components/Shop/ProductGrid.jsx

import React, { useState, useEffect } from 'react';
import { products as allProducts } from '../utils/products';
import ProductCard from './ProductCard';
import SidebarFilter from './SidebarFilter';

const ProductGrid = () => {
  const [filters, setFilters] = useState({
    search: '',
    selectedCategory: 'All',
    priceRange: [0, 5000],
  });

  const [sortOption, setSortOption] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    let result = allProducts;

    // Search
    if (filters.search) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Category
    if (filters.selectedCategory !== 'All') {
      result = result.filter((p) => p.category === filters.selectedCategory);
    }

    // Price Range
    result = result.filter(
      (p) =>
        p.price >= filters.priceRange[0] &&
        p.price <= filters.priceRange[1]
    );

    // Sorting
    if (sortOption === 'lowToHigh') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortOption === 'highToLow') {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  }, [filters, sortOption]);

  return (
    <div className="max-w-9xl mx-auto flex flex-col md:flex-row gap-6">
      {/* Sidebar */}
      <div className="w-full md:w-1/4">
        <SidebarFilter onFilterChange={setFilters} />
      </div>

      {/* Products */}
      <div className="w-full md:w-3/4 space-y-6">
        {/* Sort Dropdown */}
        <div className="flex justify-end">
          <select
            className="border px-4 py-2 rounded focus:outline-none"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>

        {/* Product List */}
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
