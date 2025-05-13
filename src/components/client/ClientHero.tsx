import React from "react";
import herobg from "../../assests/clientbg.svg";
import WhatIsHealmirror from "./WhatIsHealmirror";
import ClientHighlights from "./ClientHighlights";

interface ClientHeroProps {
  setIsClient: (value: boolean) => void;
  isClient: boolean;
}

const ClientHero: React.FC<ClientHeroProps> = () => {
  return (
    <main>
      <section className="relative overflow-hidden m-4 sm:m-6 md:m-8 lg:m-10">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={herobg}
            alt="Peaceful landscape"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24 md:py-32 lg:py-40 relative z-10 flex flex-col items-center justify-center min-h-[calc(30vh)] sm:min-h-[calc(40vh)] md:min-h-[calc(50vh)]">
          <div className="max-w-2xl text-center mt-10 sm:mt-16 md:mt-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#FBFBFB] mb-4 sm:mb-8">
              Affordable Therapy
              <br />
              For Everyone
            </h1>

            <p className="text-2xl font-serif text-[#FDC30B]">
              Make your Problems
            </p>
            <p className="text-2xl font-serif text-[#FDC30B] mb-6 sm:mb-8">
              less of a problem with <span className="underline">Therapy.</span>
            </p>
            <button className="bg-[#FDC30B] font-inter text-sm sm:text-base text-[#373B44] px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-medium hover:bg-yellow-500 transition-colors duration-300 flex items-center mx-auto">
              Download The App
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 ml-2"
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

      <WhatIsHealmirror />
      <ClientHighlights />
    </main>
  );
};

export default ClientHero;
