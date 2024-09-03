import React from 'react';
import Navbar from './Navbar';


const Home = () => {
  return (
    <div id="#home-section">
      <Navbar />
      <header className="relative flex items-center justify-center h-screen bg-gray-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
            <div className="text-center md:text-left md:w-1/2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Take care of your <span className="text-red-600">body</span>.
              </h1>
              <p className="mt-4 text-lg sm:text-xl lg:text-2xl">
                It’s the only place you have to <span className="text-red-600">live</span>.
              </p>
              <a href="/join" className="mt-8 inline-block bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700">
                Join With Us
              </a>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2">
            <img src="/GymImage.jpg" alt="Gym" className="rounded-lg" />

            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
