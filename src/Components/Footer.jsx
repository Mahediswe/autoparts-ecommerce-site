import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png"; // তোমার লোগো এখানে ঠিক path এ দাও

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2 mb-3">
          <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
          </div>
          <p className="text-sm">
            Your trusted auto parts e-commerce partner. Quality parts, fast
            delivery & top service.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-yellow-400">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-yellow-400">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/product/1" className="hover:text-yellow-400">
                Product
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="#" className="hover:text-yellow-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-yellow-400">
                Contact
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-yellow-400">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-yellow-400">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AUTOPARTS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
