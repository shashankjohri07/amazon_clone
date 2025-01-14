import React, { useState } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaCaretDown,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-gray-800 p-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center flex-grow sm:flex-grow-0">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Logo"
          className="h-10 w-auto cursor-pointer"
        />
      </div>
      {/* Location */}
      <div className="hidden sm:flex items-center text-white mx-6">
        <div className="flex items-center space-x-1">
          <span className="text-xs">Deliver to Meerut 250001</span>
          <FaMapMarkerAlt />
          <span className="font-bold text-sm">Update Location</span>
        </div>
      </div>
      {/* Search */}
      <div className="hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500">
        <div className="flex items-center bg-gray-200 p-2 rounded-l-md">
          <span className="text-black">All</span>
          <FaCaretDown className="text-black ml-1" />
        </div>
        <input
          type="text"
          className="p-2 h-full w-6 flex-grow flex-shrink focus:outline-none px-4"
          placeholder="Search"
        />
        <button className="h-10 p-2 bg-yellow-600 hover:bg-yellow-700 rounded-r-md">
          <FaSearch className="h-6 w-6 text-black" />
        </button>
      </div>
      {/* Language, User, Orders, and Cart */}
      <div className="text-white flex items-center text-xs space-x-6 mx-6">
        {/* Language */}
        <div className="link flex items-center space-x-1">
          <p>🏳‍🌈 En</p>
          <FaCaretDown />
        </div>
        {/* User */}
        <div
          className="link flex items-center space-x-1 relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <p>Hello, Sign in</p>
          <p className="font-bold md:text-sm">Account & Lists</p>
          <FaCaretDown />
          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-64 bg-white text-black shadow-lg rounded-lg z-50">
              <div className="p-4 border-b">
                <p className="font-semibold">Who is shopping? Select a profile.</p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline text-sm mt-2 inline-block"
                >
                  Manage Profiles
                </a>
              </div>
              <div className="p-4 border-b">
                <h4 className="font-bold mb-2">Your Lists</h4>
                <ul className="space-y-1">
                  <li>Alexa Shopping List</li>
                  <li>Shopping List</li>
                  <li>Create a Wish List</li>
                  <li>Baby Wishlist</li>
                  <li>Discover Your Style</li>
                </ul>
              </div>
              <div className="p-4">
                <h4 className="font-bold mb-2">Your Account</h4>
                <ul className="space-y-1">
                  <li>Your Orders</li>
                  <li>Your Prime Membership</li>
                  <li>Your Wish List</li>
                  <li>Manage Your Content</li>
                  <li>Sign Out</li>
                </ul>
              </div>
            </div>
          )}
        </div>
        {/* Orders */}
        <div className="link">
          <p>Returns</p>
          <p className="font-bold md:text-sm">& Orders</p>
        </div>
        {/* Cart */}
        <div className="relative link flex items-center">
          <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
            0
          </span>
          <FaShoppingCart className="h-10" />
          <p className="hidden md:inline font-bold md:text-sm mt-2">Cart</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
