import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2B0202] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Left Section - Company Info */}
          <div className="mb-6 md:mb-0 md:w-1/4">
            <h2 className="text-xl font-bold text-red-600">GYM</h2>
            <p className="mt-4">
              Lorem ipsum dolor sit feugiat varius nue aliquet.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="https://www.facebook.com/" className="text-white hover:text-red-600">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/" className="text-white hover:text-red-600">
                <FaInstagram />
              </a>
              <a href="https://x.com/i/flow/signup" className="text-white hover:text-red-600">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Middle Sections - Links */}
          <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-4">Healthy Living</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Lorem</a></li>
                <li><a href="#" className="hover:underline">Loreum ipsum</a></li>
                <li><a href="#" className="hover:underline">Loreum</a></li>
                <li><a href="#" className="hover:underline">Loreum ipsum</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Lorem</a></li>
                <li><a href="#" className="hover:underline">Loreum ipsum</a></li>
                <li><a href="#" className="hover:underline">Loreum ipsum</a></li>
                <li><a href="#" className="hover:underline">Loreum ipsum</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Programs</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Lorem</a></li>
                <li><a href="#" className="hover:underline">Loreum ipsum</a></li>
                <li><a href="#" className="hover:underline">Loreum ipsum</a></li>
                <li><a href="#" className="hover:underline">Loreum ipsum</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Copyright */}
        <div className="mt-8 border-t border-gray-800 pt-4 text-center">
          <p>&copy; 2023 isr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
