import React from 'react';
import { Mail, Instagram, Facebook, X } from 'lucide-react';
import sign from '../assests/yellowsign.svg'
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src={sign}
                alt="Healmirror Sign"
                className="h-6 sm:h-8"
              />
            </div>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Healmirror Resilience Pvt. Ltd.<br />
              based in<br />
              Bhilai Chhattisgarh, India
            </p>
            <a 
              href="mailto:contact@healmirror.com" 
              className="inline-flex items-center px-3 sm:px-4 py-2 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 rounded-md transition-colors text-sm sm:text-base"
            >
              <Mail size={16} className="mr-2 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              contact@healmirror.com
            </a>
          </div>
          
          {/* Navigation */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">What We Do</h3>
              <ul className="space-y-2">
                <li><a href="#intro" className="text-sm sm:text-base text-gray-300 hover:text-yellow-400 transition-colors">Intro</a></li>
                <li><a href="#home" className="text-sm sm:text-base text-gray-300 hover:text-yellow-400 transition-colors">Home</a></li>
                <li><a href="#work" className="text-sm sm:text-base text-gray-300 hover:text-yellow-400 transition-colors">Work with Us</a></li>
                <li><a href="#contact" className="text-sm sm:text-base text-gray-300 hover:text-yellow-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Who We Are</h3>
              <ul className="space-y-2">
                <li><a href="#testimonials" className="text-sm sm:text-base text-gray-300 hover:text-yellow-400 transition-colors">Testimonials</a></li>
              </ul>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="flex flex-col justify-between">
            <div className="flex space-x-4 justify-end">
              <a href="https://www.instagram.com/healmirror.app/" className="text-white hover:text-yellow-400 transition-colors">
                <Instagram size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://www.facebook.com/p/Healmirror-61551681579886/" className="text-white hover:text-yellow-400 transition-colors">
                <Facebook size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://x.com/healmirror" className="text-white hover:text-yellow-400 transition-colors">
                <X size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
            
            <div className="mt-auto">
              <div className="text-center md:text-right text-gray-400 text-xs sm:text-sm mt-6 sm:mt-8">
                <div className="flex items-center justify-center md:justify-end space-x-4 sm:space-x-8 mb-3 sm:mb-4">
                  <Link to="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
                  <Link to="/terms" className="hover:text-yellow-400 transition-colors">Terms & Conditions</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer