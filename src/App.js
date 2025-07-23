import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Homes";
import Shop from "./Components/pages/Shops.jsx";
import Cart from "./Components/pages/Cart.jsx";
//import Layout from "./Components/Layout";

import ProductDetailsWrapper from './Components/Shop/ProductDetailsWrapper.jsx';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetailsWrapper />} />

      </Routes>


      {/* <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:id" element={<ProductDetailsWrapper />} />
      </Route>
    </Routes> */}

    </div>
  );
};

export default App;



// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./Components/pages/Homes";
// import Shop from "./Components/pages/Shops.jsx";
// import Cart from "./Components/pages/Cart.jsx";
// import ProductDetailsWrapper from './Components/Shop/ProductDetailsWrapper';
// import Layout from "./Components/Layout";

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="shop" element={<Shop />} />
//         <Route path="cart" element={<Cart />} />
//         <Route path="product/:id" element={<ProductDetailsWrapper />} />
//       </Route>
//     </Routes>
//   );
// };

// export default App;
