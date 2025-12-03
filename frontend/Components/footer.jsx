import React from 'react';
import { LinkIcon } from '@heroicons/react/24/outline'; 
import { CodeBracketIcon } from '@heroicons/react/24/outline'; 

const Footer = () => {
  return (
    <footer className="text-gray-300 py-5 px-4">
      <div className="flex flex-col md:flex-row items-center justify-around border rounded-4xl py-5 border-gray-600 bg-gray-900">
        
        {/* Social Links */}
        <div className="md:mb-0 mb-3 flex items-center gap-6">
          <a
            href="https://github.com/VanshShrivas"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-white transition-colors duration-200 flex items-center gap-2"
          >
            <img src="./social.png" className='invert w-6'></img>GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vansh-shrivas/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-white transition-colors duration-200 flex items-center gap-2"
          >
            <img src="./linkedin.png" className='invert w-6'></img> LinkedIn
          </a>
        </div>

        {/* Contribution Link */}
        <div>
          <a
            href="https://github.com/VanshShrivas/InterVIEW-A-real-time-Coding-Interview-platform"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extralight text-yellow-100 hover:text-green-200 hover:underline transition-colors duration-200"
          >
            Want to Contribute?
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-4 text-sm">
        &copy; {new Date().getFullYear()} CodeTable. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
