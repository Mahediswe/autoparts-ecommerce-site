import React from 'react';
//import SidebarFilter from './SidebarFilter';
import ProductGrid from './ProductGrid';

const Shop = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        {/* <div className="w-full md:w-1/4">
          <SidebarFilter />
        </div> */}

        {/* Product Grid */}
        <div className="w-full md:w-3/4">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default Shop;
