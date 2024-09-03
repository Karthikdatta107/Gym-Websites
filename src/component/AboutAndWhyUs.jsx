import React from 'react';

const AboutAndWhyUs = () => {
  return (
    <section className="about-and-why-us-section py-12 bg-white" id="about-and-why-us-section">
      <div className="container mx-auto px-6 md:px-12">

        
        <div className="about-us mb-16 flex flex-col md:flex-row items-center">
          
          <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-6">
            <iframe 
              className="w-full h-64 md:h-80 lg:h-96 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/nNwGKCLbKL8?si=0uYqTFFQQe6gT8sz" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula nisi at 
              orci gravida, nec pellentesque quam convallis.
            </p>
          </div>
        </div>

        
        <div className="why-choose-us flex flex-col md:flex-row items-center">
         
          <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-6 order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Consultations with Experts</h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula nisi at 
                orci gravida, nec pellentesque quam convallis.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Best Workout Facilities</h3>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula nisi at 
                orci gravida, nec pellentesque quam convallis.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <iframe 
              className="w-full h-64 md:h-80 lg:h-96 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/Ri2uYyuQgmQ?si=zw8ZucAIzXqnjnvX"  
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutAndWhyUs;
