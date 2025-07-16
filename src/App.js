// import React from 'react'
// import Home from './Components/Home'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Shop from './components/Shop/Shop';
// import ProductDetail from './components/Shop/ProductDetail'; 

// const App = () => {
//   return (
//     <div>
//       <Home/>

//     </div>
//   )
// }

// export default App



import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import Shop from './Components/Shop/Shop.jsx';
import ProductDetail from './Components/Shop/ProductDetail.jsx'; 
//import NotFound from './pages/NotFound';
import Cart from './Components/pages/Cart.jsx'
const App = () => {
  return (
    <div>
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>

      
    </div>
  );
};

export default App;
