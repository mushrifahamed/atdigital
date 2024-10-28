import React from 'react';
import logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-bluish-purple text-white py-8 h-[266px] flex flex-col justify-between">
      <div className="container mx-auto flex flex-wrap justify-between items-start px-4 lg:px-8 h-full">
        {/* Logo and Description */}
        <div className="w-full md:w-1/3 text-left mb-8 md:mb-0">
          <img
            src={logo}
            alt="AT Digital Logo"
            className="w-32 md:w-40 mb-4"
          />
          <p className="text-sm max-w-xs">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve a single objective - your
            business results.
          </p>
        </div>
        {/* Our Technologies and Services */}
        <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-between h-full">
          <div className="text-left mb-8 md:mb-0 md:ml-auto">
            <h3 className="font-bold mb-4">Our Technologies</h3>
            <ul className="space-y-1">
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </div>
          <div className="text-left mb-8 md:mb-0 md:ml-16">
            <h3 className="font-bold mb-4">Our Services</h3>
            <ul className="space-y-1">
              <li>Social Media Marketing</li>
              <li>Web & Mobile App<br />Development</li>
              <li>Data & Analytics</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Footer Bottom Links */}
      <div className="container mx-auto mt-7 flex justify-center">
        <div className="w-[630px] border-t border-white pt-4 flex justify-center">
          <p className="text-sm space-x-4">
            <a href="/" className="hover:underline">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="/" className="hover:underline">
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  