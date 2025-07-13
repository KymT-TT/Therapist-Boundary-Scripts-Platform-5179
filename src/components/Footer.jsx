import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiShield, FiHeart } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-sage-800 text-sage-100 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <SafeIcon icon={FiShield} className="text-xl" />
            <span className="text-lg font-semibold">BoundaryWise Scripts</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sage-300 text-sm mb-2">
              Created with <SafeIcon icon={FiHeart} className="inline text-red-400 mx-1" /> by Kym Tolson
            </p>
            <p className="text-sage-400 text-xs">
              Founder of Bill Like a Boss and BoundaryWise GPT
            </p>
          </div>
        </div>
        
        <div className="border-t border-sage-700 mt-6 pt-6 text-center">
          <p className="text-sage-400 text-xs">
            © 2024 BoundaryWise Scripts. Professional tools for ethical therapy practice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;