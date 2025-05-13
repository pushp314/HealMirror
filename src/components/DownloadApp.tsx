import React from 'react';
import DownloadButton from './DownloadButton'; // Assuming this component exists
import hand from '../assests/clienthande.svg'; // Assuming this path is correct

const DownloadApp: React.FC = () => {
  return (
    <section className="bg-[#061BB0] text-white py-8 sm:py-12 md:py-16 relative overflow-hidden mb-10 sm:mb-10 md:mb-10">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container for text and button */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between">
          {/* Text Content */}
          <div className="text-center sm:text-left mb-2 sm:mb-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              Be among the first one's to start
            </h3>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
              making move towards a +positive change
            </h3>
          </div>


          {/* Download Button */}
          <div className="relative mt-4 sm:-mt-16 z-10">
            <DownloadButton />
          </div>
        </div>
      </div>

      {/* Hand Image Container */}
      <div
        className="absolute
                   w-[180px] h-[95px] bottom-0 left-1/2 -translate-x-1/2
                   sm:left-auto sm:translate-x-0 sm:w-[250px] sm:h-[130px] sm:bottom-0 sm:right-0
                   md:w-[307px] md:h-[162px]"
      >
        <img
          src={hand}
          alt="Three Signed Hand"
          className="w-full h-full"
          style={{ objectFit: 'contain' }}
        />
      </div>
    </section>
  );
};

export default DownloadApp;
