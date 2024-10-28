import React, { useState } from 'react';
import logo from '../assets/Logo.png';

const Header = () => {
  // State to manage the mobile menu open/close status
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-bluish-purple text-white p-4 md:p-6">
      <div className="flex items-center justify-between">
        
        {/* Logo section */}
        <div className="flex items-center">
          <img
            src={logo} // Displaying the logo
            alt="AT Digital Logo"
            className="w-32 md:w-40" // Responsive logo size
          />
        </div>

        {/* Hamburger Icon for Mobile Menu */}
        <button
          className="md:hidden focus:outline-none" // Hidden on medium screens and above
          onClick={toggleMenu} // Toggle mobile menu on click
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-sm">
          <a href="#" className="hover:underline">SERVICES</a>
          <a href="#" className="hover:underline">ABOUT US</a>
          <a href="#" className="hover:underline">CONTACT US</a>
          <a href="#" className="hover:underline">CAREERS</a>
        </nav>
      </div>

      {/* Full-Screen Overlay Menu for Mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white text-black p-8">
          
          {/* Close Icon for Mobile Menu */}
          <button
            className="absolute top-8 right-8 text-2xl focus:outline-none"
            onClick={toggleMenu} // Close mobile menu on click
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Navigation Links for Mobile Menu */}
          <div className="mt-8 flex flex-col space-y-8 text-lg font-semibold">
            <a href="#" className="hover:underline">HOME</a>
            <a href="#" className="hover:underline">SERVICES</a>
            <a href="#" className="hover:underline">ABOUT US</a>
            <a href="#" className="hover:underline">CONTACT US</a>
            <a href="#" className="hover:underline">CAREERS</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;