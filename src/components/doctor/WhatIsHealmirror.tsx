import React from "react";

const WhatIsHealmirror: React.FC = () => {
  return (
    <section id="#features">
      <div className="min-h-[80vh] sm:min-h-screen bg-white px-4 sm:px-6 md:px-16 py-8 sm:py-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Column */}
            <div className="flex items-center gap-3 sm:gap-4">
              <img
                src="https://res.cloudinary.com/dxkwt2ssi/image/upload/v1746645171/image_dfcbgo.png"
                alt="Healmirror Logo"
                className="w-12 h-12 sm:w-16 sm:h-16"
              />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400">
                What Is
                <br />
                Healmirror
                <span className="text-black">?</span>
              </h1>
            </div>

            {/* Right Column */}
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
                A Free Platform for Mental Health & Wellness
              </h2>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                with Healmirror, connecting with potential clients is just a tap
                away, whether you prefer voice calls, video calls or chat, you
                don't have to pay any sort of commission or buy any
                subscriptions from us it's totally free*
              </p>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Our platform offers flexible timings and there are{" "}
                <span className="underline font-medium">
                  no commissions on your fees you deserve!*
                </span>
              </p>

              <div className="pt-4">
                <h3 className="text-lg sm:text-xl font-bold text-black border-b-2 border-black inline-block">
                  OUR INFO
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsHealmirror