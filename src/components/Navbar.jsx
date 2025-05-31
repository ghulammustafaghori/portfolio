import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Name - Left side */}
          <div className="flex-shrink-0 flex items-center">
            <h3 className="text-xl font-semibold text-white">
              <a href='#home'>Ghulam Mustafa</a>
            </h3>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <ul className="flex space-x-8">
              <li>
                <a 
                  href="#home" 
                  className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none transition-colors duration-200"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                /* Close icon */
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 transition-colors duration-200"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;