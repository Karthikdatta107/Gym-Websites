import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (path, sectionId) => {
    navigate(path);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); 
  };

  return (
    <nav className="bg-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white text-red font-bold">GYM</Link>
            </div>
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                <button 
                  onClick={() => scrollToSection('/', 'home-section')} 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('/about-us', 'about-and-why-us-section')} 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('/meet-our-team', 'meet-our-team-section')} 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Classes
                </button>
                <button 
                  onClick={() => scrollToSection('/pricing', 'pricing-section')} 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Pricing
                </button>
              </div>
            </div>
            <div className="flex items-center">
            <Link to="/login" className="text-white bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
              <div className='mx-2'>
              <Link to="/join" className="text-white bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md text-sm font-medium">Join Us</Link>
            </div>
            </div>
          </div>
          <div className="-mr-2 flex sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('/', 'home-section')} 
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('/about-us', 'about-and-why-us-section')} 
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('/meet-our-team', 'meet-our-team-section')} 
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Classes
            </button>
            <button 
              onClick={() => scrollToSection('/pricing', 'pricing-section')} 
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Pricing
            </button>
            <Link to="/login" className="text-white bg-red-600 hover:bg-red-700 block px-3 py-2 mr-10 rounded-md text-base font-medium">Login</Link>
            <div className="mx-2">
            <Link to="/join" className="text-white bg-red-600 hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium">Join Us</Link>
          </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
