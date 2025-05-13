import React, { useState } from 'react';
import ClientHero from '../client/ClientHero';
import WhatIsHealmirror from './WhatIsHealmirror';
import Highlights from './Highlights';

const Hero: React.FC = () => {
  const [isClient, setIsClient] = useState(true);

  const ToggleSwitch = () => (
    <div className="absolute top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-20 px-4 w-full max-w-[483px] h-[68px]">
      <div className="rounded-full p-1 inline-flex shadow-lg bg-white/80 backdrop-blur-sm w-full h-full justify-center">
        <button
          className={`py-2 px-3 sm:px-6 rounded-full text-xs sm:text-sm md:text-base transition-all duration-300 flex-1 whitespace-nowrap ${
            isClient
              ? "bg-yellow-400 text-gray-800 shadow-md"
              : "bg-transparent text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setIsClient(true)}
        >
          Client
        </button>
        <button
          className={`py-2 px-3 sm:px-6 rounded-full text-xs sm:text-sm md:text-base transition-all duration-300 flex-1 whitespace-nowrap ${
            !isClient
              ? "bg-yellow-400 text-gray-800 shadow-md"
              : "bg-transparent text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setIsClient(false)}
        >
          Mental Health Professional
        </button>
      </div>
    </div>
  );

  return (
    <>
      {isClient ? (
        <section className="relative">
          <ToggleSwitch />
          <ClientHero isClient={isClient} setIsClient={setIsClient} />
        </section>
      ) : (
        <>
          <section className="relative bg-[#3c7bca] overflow-hidden m-4 sm:m-6 md:m-8 lg:m-10 pt-16 sm:pt-20 md:pt-24">
            <ToggleSwitch />

            <div className="absolute right-0 top-0 h-full w-1/2 md:w-2/3 lg:w-1/2">
              <img
                src="https://res.cloudinary.com/dgzv4skru/image/upload/v1746559622/herobg_cnq7a1.svg"
                alt="Flower background"
                className="h-full w-full object-cover object-right"
              />
            </div>

            <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-32 relative z-10 mt-8 sm:mt-0">
              <div className="max-w-xl">
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-poppins text-yellow-400 leading-tight"
                  style={{ letterSpacing: 0, lineHeight: '100%' }}
                >
                  No Commissions<br />
                  No Nothing<br />
                  It's Totally<br />
                  Free!
                </h1>
                <p className="text-white font-bold text-lg sm:text-xl md:text-2xl mt-4 sm:mt-6">
                  Provide therapy <br /> with ease
                </p>
                <button className="mt-6 sm:mt-8 bg-white text-gray-800 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-300 flex items-center text-sm sm:text-base">
                  Download The App
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </section>
          <WhatIsHealmirror />
          <Highlights />
        </>
      )}
    </>
  );
};

export default Hero;