import React from 'react';
import heroImage from '../assets/heroImage.jpg';

const Hero = () => {
  return (
    <div className="relative lg:h-screen" id="hero">
      {/* Background image that fills the screen */}
      <img
        src={heroImage} // Source of the hero image
        alt="AT DIGITAL" // Alternative text for accessibility
        className="w-full h-auto lg:h-screen object-cover" // Responsive styling for the image
      />
      
      {/* Overlay container with text and button */}
      <div className="lg:absolute bottom-0 left-0 bg-gradient-to-l from-rich-blue to-interstellar-blue text-white p-10 lg:bottom-10 lg:left-10 lg:max-w-2xl">
        <p className="mb-10 font-inter text-3xl lg:text-5xl font-bold">
          We crush your competitors, goals, and sales records - without the B.S.
        </p>
        <a
          href="/services" // Link to the services page
          className="bg-yuzu-jam text-white font-inter p-4 rounded shadow-lg hover:bg-purple-600 hover:text-white transition duration-300"
        >
          GET FREE CONSULTATION
        </a>
      </div>
    </div>
  );
};

export default Hero;