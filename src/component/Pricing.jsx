import React from 'react';

const Pricing = () => {
  return (
    <div id="#pricing-section" className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-5xl">
       
        <h2 className="text-3xl font-bold text-center mb-8">Membership Details</h2>

        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
         
          <div className="flex-1 bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-sm transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700">
            <h3 className="text-3xl font-bold mb-4">$20</h3>
            <p className="text-lg mb-4">/pass</p>
            <ul className="space-y-2">
              <li>1 Day Pass</li>
              <li>Free Gym Access</li>
              <li>24 Hour Access</li>
            </ul>
            <button className="mt-6 w-full bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </div>

          
          <div className="flex-1 bg-gray-900 p-6 rounded-lg shadow-lg text-center max-w-sm border-2 border-green-600 transform transition-transform duration-300 hover:scale-105 hover:bg-gray-800">
            <h3 className="text-3xl font-bold text-green-600 mb-4">$90</h3>
            <p className="text-lg mb-4">/month</p>
            <ul className="space-y-2">
              <li>$99 Joining Fee</li>
              <li>No Contract</li>
              <li>Free Gym Access</li>
              <li>1 Group Class Included</li>
              <li>24 Hour Access</li>
            </ul>
            <button className="mt-6 w-full bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </div>
        </div>

       
        <div className="mt-12 text-gray-300 text-center">
          <h3 className="text-xl font-bold mb-4">Membership</h3>
          <p>
            From Punch Pass to Monthly or Annual
          </p>
          <p className="mt-4">
            At Gym Base, we offer a wide range of membership sub-options to suit every budget. Everything from One Day Pass, Punch Pass to monthly or annual prepaid memberships. What's more, we won’t tie you in to a long term contract, giving you greater flexibility.
          </p>
          <p className="mt-4 font-bold">Each plan included:</p>
          <ul className="mt-2 space-y-2">
            <li>✔️ The best equipment global brands</li>
            <li>✔️ The gym is open 24 hours a day, 7 days a week</li>
            <li>✔️ Two safe payment methods</li>
            <li>✔️ Group fitness classes in the price of the subscription</li>
            <li>✔️ No long-term contract, period</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
