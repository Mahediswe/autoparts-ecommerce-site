// import React from 'react';
// import { useCart } from '../context/CartContext.jsx';

// const Cart = () => {
//   const { cart, removeFromCart, clearCart } = useCart();

//   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-10">
//       <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

//       {cart.length === 0 ? (
//         <p className="text-gray-500">Your cart is empty.</p>
//       ) : (
//         <div className="space-y-6">
//           {cart.map((item) => (
//             <div key={item.id} className="flex items-center justify-between border-b pb-3">
//               <div className="flex gap-4 items-center">
//                 <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
//                 <div>
//                   <h2 className="text-md font-semibold">{item.title}</h2>
//                   <p>Qty: {item.quantity}</p>
//                   <p>${item.price} × {item.quantity}</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 className="text-red-500 hover:underline"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}

//           <div className="flex justify-between pt-6 border-t mt-6 font-bold text-lg">
//             <p>Total:</p>
//             <p>${total}</p>
//           </div>

//           <button
//             onClick={clearCart}
//             className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded mt-4"
//           >
//             Clear Cart
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;



import React from 'react';
import { useCart } from '../context/CartContext.jsx';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow max-w-5xl mx-auto px-4  py-10">
        <h1 className="text-3xl font-bold mb-6 pt-10">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-500 ">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-3"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h2 className="text-md font-semibold">{item.title}</h2>
                    <p>Qty: {item.quantity}</p>
                    <p>${item.price} × {item.quantity}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex justify-between pt-6 border-t mt-6 font-bold text-lg">
              <p>Total:</p>
              <p>${total.toFixed(2)}</p>
            </div>

            <button
              onClick={clearCart}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded mt-4"
            >
              Clear Cart
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Cart;
