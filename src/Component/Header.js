import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../image/logo .png"; // Replace with your actual logo path

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Navigate to the selected category
  const handleCategoryClick = (path) => {
    setIsDropdownOpen(false); // Close the dropdown
    navigate(path); // Navigate to the selected path
  };

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-black text-white text-sm py-2 px-4 flex justify-between items-center">
        <div>GST Number: 25APAPM1234Z1Z4</div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <span role="img" aria-label="phone">📞</span>
            <span>+91 93138 84963</span>
          </div>
          <div className="flex items-center space-x-1">
            <span role="img" aria-label="email">✉️</span>
            <span>hetals5297@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            <span className="text-blue-500 text-3xl font-bold ml-2"></span>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-6 text-gray-800 font-medium">
            <li className="hover:text-blue-500">
              <a href="/" className="border-b-2 border-blue-500 pb-1">Home</a>
            </li>

            {/* Dropdown Menu */}
            <li
              className="hover:text-blue-500 relative cursor-pointer"
              onClick={toggleDropdown}
            >
              Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`w-4 h-4 ml-1 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>

              {/* Dropdown List */}
              {isDropdownOpen && (
                <ul className="absolute bg-white shadow-md mt-2 rounded-md w-40 text-sm z-10">
                  <li
                    onClick={() => handleCategoryClick("/DyesColors")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Dyes & Colors
                  </li>
                  <li
                    onClick={() => handleCategoryClick("/Food")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Food Ingredients
                  </li>
                  <li
                    onClick={() => handleCategoryClick("/Chemicals")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Chemicals & Additives
                  </li>
                  <li
                    onClick={() => handleCategoryClick("/Packaging")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Packaging
                  </li>
                  <li
                    onClick={() => handleCategoryClick("/Special")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Specialty Products
                  </li>
                </ul>
              )}
            </li>

            {/* Other Links */}
            <li className="hover:text-blue-500">
              <a href="/About">About us</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="/ContactUS">Contact us</a>
            </li>
          </ul>

          {/* Search Box */}
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black"
            >
              🔍
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
