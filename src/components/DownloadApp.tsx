import React from 'react';
import DownloadButton from './DownloadButton';
import hand from '../assests/clienthande.svg';

const QuoteSection: React.FC = () => {
  return (
    <section className="bg-[#061BB0] mb-14 text-white py-11 md:py-16 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#FBFBFB]">
              "Nothing Changes if Nothing changes"
            </h3>
            <h3 className="text-2xl md:text-3xl font-bold text-[#FBFBFB]">
              Take the first step towards change
            </h3>
          </div>
          
          <div className="flex flex-col items-center">
            <DownloadButton />
            <div className="mt-6 flex space-x-4">
              <div className="w-50 h-10 flex items-center justify-center">
                <span className="text-lg">
                  <img src={hand} alt="Three Signed Hand" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
