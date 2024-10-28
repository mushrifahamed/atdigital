import React from 'react';
import serviceIcon1 from '../assets/serviceIcon1.png'; // Importing the icon for the first service
import serviceIcon2 from '../assets/serviceIcon2.png'; // Importing the icon for the second service

const Services = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          
          {/* Service 1 Section */}
          <div className="flex flex-col md:flex-row items-center w-full md:w-3/4 mb-16">
            <img 
              src={serviceIcon1} // Image for the first service
              alt="Web & Mobile App Development" // Alternative text for accessibility
              className="w-[275px] h-[275px] mb-4 md:mb-0 md:mr-8" // Responsive styling for the image
            />
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-bluish-purple mb-4">
                Web & Mobile App Development
              </h2>
              <p className="text-gray-700 mb-4">
                Your web and mobile apps are pieces of the puzzle to grow your business. We use frameworks which alter content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
              </p>
              <button className="bg-yuzu-jam hover:bg-electric-indigo text-white px-4 py-2 rounded">
                Learn More
              </button>
            </div>
          </div>

          {/* Service 2 Section */}
          <div className="flex flex-col md:flex-row items-center w-full md:w-3/4">
            <div className="order-2 md:order-1 text-center md:text-left md:mr-8 mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-bluish-purple mb-4">
                Digital Strategy Consulting
              </h2>
              <p className="text-gray-700 mb-4">
                Your digital strategy should complement the overall marketing strategy. In online marketing, each component will never work in isolation, and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
              </p>
              <button className="bg-yuzu-jam hover:bg-electric-indigo text-white px-4 py-2 rounded">
                Learn More
              </button>
            </div>
            <img 
              src={serviceIcon2} // Image for the second service
              alt="Digital Strategy Consulting" // Alternative text for accessibility
              className="w-[275px] h-[275px] order-1 md:order-2" // Responsive styling for the image
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;