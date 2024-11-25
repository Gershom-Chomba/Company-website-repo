"use client";

import React, { useState, useEffect } from 'react';
import Logo from './logo';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close sidebar when clicking outside
  const handleClickOutside = (e) => {
    if (e.target.id === 'sidebarBackdrop') {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when sidebar is open
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isSidebarOpen]);

  return (
    <header className="w-full p-4 px-10 flex items-center justify-between bg-white text-black">
      {/* Logo Section */}
      <Logo />

      {/* Centered Navigation Links on Large Screens */}
      <nav className="hidden lg:flex flex-grow justify-center space-x-8 font-medium">
        <Link href="/" className="hover:text-primary">Home</Link>
        <Link href="/About" className="hover:text-primary">About</Link>
        <Link href="/Contact" className="hover:text-primary">Contact</Link>

        {/* Dropdown Menu for Area of Interest */}
        <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="hover:text-primary">Area of Interest</button>
          {isDropdownOpen && (
            <div
              className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg p-2 z-50 shadow-lg"
            >
              <Link href="/Restaurants/Food" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
               Fast Food and Beverages
              </Link>
              <Link href="/Construction" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Construction,Supply of building materials, Block making and pavers
              </Link>
              <Link href="/Gas" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Gas refilling services
              </Link>
              <Link href="/Engineering" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Engineering and Technology
              </Link>
              <Link href="/Transport" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Transport and Tolling Services
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={toggleSidebar}
          className="text-dark focus:outline-none"
          aria-label="Open Menu"
        >
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Sidebar for Small Screens */}
      {isSidebarOpen && (
        <div
          id="sidebarBackdrop"
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={handleClickOutside}
        >
          <div
            className="fixed inset-y-0 left-0 bg-white w-64 p-6 z-50 transform transition-transform duration-300 ease-in-out"
          >
            <nav className="flex flex-col space-y-4 text-lg font-medium">
              <Link href="/" className="hover:text-primary" onClick={() => setIsSidebarOpen(false)}>Home</Link>
              <Link href="/About" className="hover:text-primary" onClick={() => setIsSidebarOpen(false)}>About</Link>
              <Link href="/Contact" className="hover:text-primary" onClick={() => setIsSidebarOpen(false)}>Contact</Link>

              {/* Area of Interest - Dropdown in Sidebar */}
              <div>
                <button className="hover:text-primary" onClick={handleDropdownToggle}>
                  Area of Interest
                </button>
                {isDropdownOpen && (
                  <div className="mt-2 space-y-2 pl-4">
                     <Link href="/Restaurants/Food" className="block text-gray-700 hover:text-primary" onClick={() => setIsSidebarOpen(false)}>Fast Food and Beverages</Link>
                    <Link href="/Construction" className="block text-gray-700 hover:text-primary" onClick={() => setIsSidebarOpen(false)}>Construction,Supply of building materials, Block making and pavers</Link>
                    <Link href="/Gas" className="block text-gray-700 hover:text-primary" onClick={() => setIsSidebarOpen(false)}>Gas refilling services</Link>
                    <Link href="/Engineering" className="block text-gray-700 hover:text-primary" onClick={() => setIsSidebarOpen(false)}>Engineering and Technology</Link>
                    <Link href="/Transport" className="block text-gray-700 hover:text-primary" onClick={() => setIsSidebarOpen(false)}>Transport and Tolling services</Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
