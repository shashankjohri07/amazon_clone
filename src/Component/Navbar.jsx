import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-2">
      <div className="container mx-auto flex items-center space-x-4">
        {/* Menu Icon */}
        <button className="text-xl font-bold">☰</button>

        {/* Navbar Items */}
        <span className="hover:text-yellow-400 cursor-pointer">All</span>
        <span className="hover:text-yellow-400 cursor-pointer">Fresh</span>
        <span className="hover:text-yellow-400 cursor-pointer">Keep Shopping for</span>
        <span className="hover:text-yellow-400 cursor-pointer">Prime</span>
        <span className="hover:text-yellow-400 cursor-pointer">Today's Deals</span>
        <span className="hover:text-yellow-400 cursor-pointer">Electronics</span>
        <span className="hover:text-yellow-400 cursor-pointer">Amazon Business</span>
        <span className="hover:text-yellow-400 cursor-pointer">MX Player</span>
        <span className="hover:text-yellow-400 cursor-pointer">Sell</span>
        <span className="hover:text-yellow-400 cursor-pointer">Gift Cards</span>
        <span className="hover:text-yellow-400 cursor-pointer">Buy Again</span>
        <span className="hover:text-yellow-400 cursor-pointer">Browsing History</span>
        <span className="hover:text-yellow-400 cursor-pointer font-semibold">
          User Amazon.in
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
