import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Homes";
import Shop from "./Components/pages/Shops.jsx";
//import ProductDetail from './Components/Shop/ProductDetail.jsx';
import Productdetails from "./Components/pages/Productdetails.jsx";
//import NotFound from './pages/NotFound';
import Cart from "./Components/pages/Cart.jsx";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Productdetails />} />
      </Routes>
    </div>
  );
};

export default App;
