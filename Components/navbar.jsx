import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border border-gray-600 bg-gray-900 rounded-4xl py-3 flex items-center justify-around">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/code.svg" className="w-12" alt="Logo" />
        <h1 className="bg-linear-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent font-bold text-2xl">
          CodeTable
        </h1>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-6 font-medium text-white">
        <li className="hover:text-purple-200 cursor-pointer hover:underline transition-colors duration-200">Home</li>
        <li className="hover:text-purple-200 cursor-pointer hover:underline transition-colors duration-200">About</li>
        <li className="hover:text-purple-200 cursor-pointer hover:underline transition-colors duration-200">Contact Us</li>
      </ul>

      {/* Hamburger button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <ul className="absolute top-20 left-0 w-full flex flex-col items-center gap-4 py-4 md:hidden">
          <li className="w-11/12 text-center text-white hover:text-purple-400 cursor-pointer transition-colors duration-200 border border-gray-400 rounded-lg py-2 bg-black/70 backdrop-blur-sm">
            Home
          </li>
          <li className="w-11/12 text-center text-white hover:text-purple-400 cursor-pointer transition-colors duration-200 border border-gray-400 rounded-lg py-2 bg-black/70 backdrop-blur-sm">
            About
          </li>
          <li className="w-11/12 text-center text-white hover:text-purple-400 cursor-pointer transition-colors duration-200 border border-gray-400 rounded-lg py-2 bg-black/70 backdrop-blur-sm">
            Contact Us
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
