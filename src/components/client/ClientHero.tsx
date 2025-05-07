import React from "react";
import WhatIsHealmirror from "./WhatIsHealmirror";
import ClientHighlights from "./ClientHighlights";
interface ClientHeroProps {
  setIsClient: (value: boolean) => void;
  isClient: boolean;
}

const ClientHero: React.FC<ClientHeroProps> = ({ isClient, setIsClient }) => {
  return (
    <main>
      <section className="relative overflow-hidden m-10">
        {/* Toggle Button */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className=" rounded-full p-1 inline-flex shadow-lg">
            <button
              className={`py-2 px-6 rounded-full text-sm md:text-base transition-all duration-300 ${
                isClient
                  ? "bg-yellow-400 text-gray-800 shadow-md"
                  : "bg-transparent text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setIsClient(true)}
            >
              Client
            </button>
            <button
              className={`py-2 px-6 rounded-full text-sm md:text-base transition-all duration-300 ${
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

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://drive.google.com/file/d/1Eigaok5yZKfNtzzsR4pJHkp_HIdmRSKz/view?usp=sharing"
            alt="Peaceful landscape"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 py-20 md:py-24 lg:py-32 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-didot md:text-5xl lg:text-6xl text-[#FBFBFB] mb-8">
              Affordable Therapy
              <br />
              For Everyone
            </h1>

            <p className="font-normal text-[70px] leading-[1] tracking-[0em] font-didot md:text-2xl text-[#FDC30B]">
              Make your Problems
            </p>
            <p className="text-lg font-didot font-normal text-[70px] leading-[1] tracking-[0em] md:text-xl text-[#FDC30B] mb-8">
              less of a problem with <span className="underline">Therapy.</span>
            </p>

            <button className="bg-[#FDC30B] font-inter text-base text-[#373B44] px-8 py-3 rounded-xl font-medium hover:bg-yellow-500 transition-colors duration-300 flex items-center mx-auto">
              Download The App
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* WhatIsHealMirror */}
      <WhatIsHealmirror/>

      {/* ClientHighlights */}
      <ClientHighlights/>

      
    </main>
  );
};

export default ClientHero;
