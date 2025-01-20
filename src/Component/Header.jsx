import React from "react";
import {
  FaShoppingCart,
  FaSearch,
  FaMapMarkerAlt,
  FaCaretDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-900 text-white flex items-center justify-between px-4 py-2 h-14">
      {/* Amazon Logo */}
      
        <div className="flex items-center flex-grow sm:flex-grow-0 hover:border hover:border-gray-400 rounded-md p-2 cursor-pointer">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>

      {/* Location */}
      <div className="flex items-center space-x-2 hover:border hover:border-gray-400 rounded-md p-2 cursor-pointer">
        <FaMapMarkerAlt className="text-white h-5 w-5" /> {/* Location Icon */}
        <div className="text-xs">
          <p>Delivering to Meerut 250001</p>
          <h3 className="font-semibold text-sm hover:underline cursor-pointer">
            Update location
          </h3>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex gap-0 flex-grow items-center mx-5 text-black border border-gray-400 rounded-md overflow-hidden hover:shadow-md h-9">
        {/* Dropdown Section */}
        <div className="relative flex items-center w-14 h-full bg-gray-200 rounded-l-md">
          <select className="bg-gray-200 px-4 py-2 text-sm font-semibold focus:outline-none cursor-pointer appearance-none w-full h-9">
            <option>All</option>
            <option>Amazon Devices</option>
            <option>Amazon Fresh</option>
            <option>Amazon Pharmacy</option>
            <option>Appliances</option>
            <option>Apps & Games</option>
            <option>Audible Audiobooks</option>
            <option>Baby</option>
            <option>Beauty</option>
          </select>
          <FaCaretDown className="absolute right-2 text-gray-500 pointer-events-none" />
        </div>

        {/* Input Section */}
        <input
          type="text"
          placeholder="Search Amazon.in"
          className="flex-grow px-4 py-2 focus:outline-none h-full border-none"
        />

        {/* Search Button */}
        <div className="bg-yellow-500 px-4 py-2 flex items-center justify-center cursor-pointer h-full rounded-r-md">
          <FaSearch className="text-gray-800 h-5 w-5 cursor-pointer" />
          {/* Search icon */}
        </div>
      </div>

      {/* Language Preference */}
      <div className="flex items-center space-x-2 text-sm hover:border hover:border-gray-400 rounded-md p-2 cursor-pointer">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
          alt="Indian Flag"
          className="w-6 h-auto"
        />
          <div>
            <label htmlFor="dropdown" className="cursor-pointer">
              EN
            </label>
            <select
              id="dropdown"
              className="ml-1 bg-gray-900 text-white focus:outline-none"
            >
              <option value="" disabled>
                Languages
              </option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
      </div>

      {/* Sign-In */}
      <div className="text-xs text-right hover:border hover:border-gray-400 rounded-md p-2 cursor-pointer">
          <p>Hello,sign in </p>
          <span className="font-semibold text-sm">Account & Lists</span>
      </div>

      {/* Returns & Orders */}
      <div className="text-xs hover:border hover:border-gray-400 rounded-md p-2 cursor-pointer">
        <p>Returns</p>
        <p className="font-semibold text-sm">& Orders</p>
      </div>

      {/* Cart */}
        <div className="flex items-center space-x-1 cursor-pointer hover:border hover:border-gray-400 rounded-md p-2">
          <p className="font-bold text-lg">0</p>
          <FaShoppingCart className="h-6 w-6 text-white" />{" "}
          {/* Replaced img with react-icon */}
        </div>
    </div>
  );
};

export default Navbar;
