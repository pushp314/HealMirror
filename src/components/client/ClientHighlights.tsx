const ClientHighlights = () => {
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
              title: "Affordable Therapy",
              text: "Our Motto is to provide therapy at an affordable price, so that more people can access it. That's why we don't take commission from any side",
            },
            {
              title: "Query Boxes",
              text: "Instead of taking an entire session buy a Query Box to solve your problems quickly and effectively",
            },
            {
              title: "Night Therapy",
              text: "We provide night therapy sessions to those in need or when therapy is needed the most",
            },
            {
              title: "Privacy",
              text: "To deliver exceptional service, we won't collect any data related specifically to you and sell it to third party. Every session is confidential and user data will be used to provide services specifically to the individual",
            },
            {
              title: "3 Modes of Communication",
              text: "Attend sessions according to you, choose voice, video call or chats, you have all the preferences to choose from (language, type of therapy, psychiatrist preferred gender)",
            },
            {
              title: "Simple Sign Up",
              text: "A very simple sign up process your phone number is your account, and for critical panic situations why don't even need to sign up, sign up when you feel free",
            },
            {
              title: "Order Medications at Doorstep",
              text: "Coming Soon – Order prescribed medicines if you're prescribed by a doctor within this app and we'll ship the medicines to your Door Step.",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 min-w-[1.5rem] sm:min-w-[2rem] min-h-[1.5rem] sm:min-h-[2rem] rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold text-sm sm:text-base">
                {index + 1}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 leading-snug text-sm sm:text-base">
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

export default ClientHighlights;