import React from "react";

const WhatIsHealmirror: React.FC = () => {
  return (
    <section id="#features">
      <div className="min-h-screen bg-white px-6 md:px-16 py-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div className="flex items-center gap-4">
              <img
                src="https://res.cloudinary.com/dxkwt2ssi/image/upload/v1746645171/image_dfcbgo.png"
                alt="Healmirror Logo"
                className="w-16 h-16"
              />
              <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
                What Is
                <br />
                Healmirror
                <span className="text-black">?</span>
              </h1>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Most Affordable Platform for Mental Health & Wellness
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed">
              with Healmirror, connecting with licensed Psychologist / Psychiatrists is just a tap away, whether you prefer voice calls, video calls or chat. 
              Our platform offers flexible communication options tailored to your comfort and needs.
              </p>


              <div className="pt-4">
                <h3 className="text-xl font-bold text-black border-b-2 border-black inline-block">
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

export default WhatIsHealmirror;
