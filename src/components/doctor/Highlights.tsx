const Highlights = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center px-4 sm:px-6 md:px-8 lg:px-20 py-12 sm:py-16 bg-white gap-8 lg:gap-12">
      {/* Left Side: Staggered Images */}
      <div className="relative flex flex-col items-center lg:items-start w-full lg:w-auto">
        {/* First Image */}
        <div className="relative lg:-left-12 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none">
          <img
            src="https://res.cloudinary.com/dgzv4skru/image/upload/v1746559654/ss1_nnlhft.svg"
            alt="Mobile Screen 1"
            className="w-full lg:w-72"
          />
        </div>

        {/* Second Image */}
        <div className="relative lg:left-10 mt-8 lg:mt-12 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none">
          <img
            src="https://res.cloudinary.com/dgzv4skru/image/upload/v1746559654/ss2_ifgtqf.svg"
            alt="Mobile Screen 2"
            className="w-full lg:w-72"
          />
        </div>
      </div>

      {/* Right Side: Highlights */}
      <div className="mt-12 lg:mt-0 max-w-xl w-full">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900">Our Highlights</h2>
        <div className="space-y-6 sm:space-y-8">
          {[
            {
              title: "No Commissions\nNothing it's Totally free",
              text: "There is no Joining fee or Commissions or Subscriptions on the fees you earn, we transfer the fees directly from clients to you, it's just simple as it is mentioned.",
            },
            {
              title: "Query Boxes",
              text: "Answer some queries quickly and get rewarded in between sessions*",
            },
            {
              title: "Can Provide Night Sessions",
              text: "Provide night sessions to those in need and get bonuses*",
            },
            {
              title: "Write Prescriptions",
              text: "Coming Soon – Write medicines prescriptions if you're eligible and we'll ship the medicines to the client with the help of third party pharmaceutical providers",
            },
            {
              title: "3 Modes of Communication",
              text: "Attend sessions according to you, choose voice, video call or chats",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 min-w-[1.5rem] sm:min-w-[2rem] min-h-[1.5rem] sm:min-h-[2rem] rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold text-sm sm:text-base">
                {index + 1}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 whitespace-pre-line leading-snug text-sm sm:text-base">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights