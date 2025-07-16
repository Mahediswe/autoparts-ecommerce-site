import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FiMenu, FiX } from 'react-icons/fi';
import { useCart } from '../Components/context/CartContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

    const { cart } = useCart();

  // মোট আইটেম সংখ্যা
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600 duration-200">Home</Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-blue-600 duration-200">Shop</Link>
          </li>
          <li>
            <Link to="/pages" className="hover:text-blue-600 duration-200">Pages</Link>
          </li>
           <li className="relative">
          <Link to="/cart" className="flex items-center gap-1">
            Cart
            {totalQuantity > 0 && (
              <span className="ml-1 bg-yellow-400 text-black rounded-full px-2 text-xs font-bold">
                {totalQuantity}
              </span>
            )}
          </Link>
        </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li>
              <Link to="/" onClick={toggleMenu} className="block">Home</Link>
            </li>
            <li>
              <Link to="/shop" onClick={toggleMenu} className="block">Shop</Link>
            </li>
            <li>
              <Link to="/pages" onClick={toggleMenu} className="block">Pages</Link>
            </li>
            <li>
              <Link to="/cart" onClick={toggleMenu}>
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                  Cart
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
