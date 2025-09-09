// import React from 'react';
// //import SidebarFilter from './SidebarFilter';
// import ProductGrid from './ProductGrid';

// const Shop = () => {
//   return (
//     <div className="max-w-8xl mx-auto sm:mt-16 lg:m-36 sm:pl-12 lg:pl-40">
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Sidebar */}
//         {/* <div className="w-full md:w-1/4">
//           <SidebarFilter />
//         </div> */}

//         {/* Product Grid */}
//         <div className="w-full md:w-3/4">
//           <ProductGrid />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shop;



import React from 'react';
 import SidebarFilter from './SidebarFilter';
import ProductGrid from './ProductGrid';

const Shop = () => {
  return (
    <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-12 mt-8 sm:mt-16 lg:mt-24">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        {/* <div className="w-full md:w-1/4">
          <SidebarFilter />
        </div> */}

        {/* Product Grid */}
        <div className="w-full md:w-4/4 max-w-8xl mx-auto p-20">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default Shop;
