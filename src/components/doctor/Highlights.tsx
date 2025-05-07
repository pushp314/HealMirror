

const Highlights = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-center px-4 lg:px-20 py-16 bg-white gap-x-12">
      {/* Left Side: Staggered Images */}
      <div className="relative flex flex-col items-center lg:items-start">
        {/* First Image - Shifted More Left */}
        <div className="relative -left-12">
          <img
            src="https://res.cloudinary.com/dgzv4skru/image/upload/v1746559654/ss1_nnlhft.svg"
            alt="Mobile Screen 1"
            className="w-64 lg:w-72 mb-12 lg:mb-0"
          />
        </div>

        {/* Second Image - Staggered Right */}
        <div className="relative left-10 mt-12">
          <img
            src="https://res.cloudinary.com/dgzv4skru/image/upload/v1746559654/ss2_ifgtqf.svg"
            alt="Mobile Screen 2"
            className="w-64 lg:w-72"
          />
        </div>
      </div>

      {/* Right Side: Highlights */}
      <div className="mt-12 lg:mt-0 max-w-xl">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Highlights</h2>
        <div className="space-y-8">
          {[
            {
              title: "No Commissions\nNothing it’s Totally free",
              text: "There is no Joining fee or Commissions or Subscriptions on the fees you earn, we transfer the fees directly from clients to you, it’s just simple as it is mentioned.",
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
              text: "Coming Soon – Write medicines prescriptions if you’re eligible and we’ll ship the medicines to the client with the help of third party pharmaceutical providers",
            },
            {
              title: "3 Modes of Communication",
              text: "Attend sessions according to you, choose voice, video call or chats",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="w-8 h-8 min-w-[2rem] min-h-[2rem] rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold text-base mr-4">
                {index + 1}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 whitespace-pre-line leading-snug text-base">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">
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

export default Highlights;
