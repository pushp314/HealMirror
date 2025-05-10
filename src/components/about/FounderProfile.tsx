const FounderProfile = () => {
  return (
    <div className="w-full overflow-hidden">
      <section className="relative bg-[#FFFCF5] pt-1 px-4 sm:px-8 md:px-20 h-auto sm:h-[400px] md:h-[500px]">
        {/* Yellow semicircle - responsive positioning */}
        <div className="absolute right-[-80px] sm:right-[-60px] md:right-[-80px] bottom-[-100px] sm:bottom-[-80px] md:bottom-[-100px] w-[280px] sm:w-[400px] md:w-[700px] z-0 overflow-hidden">
          <img
            src="https://res.cloudinary.com/dxkwt2ssi/image/upload/v1746640325/aboutbg_wow27t.svg"
            alt="Yellow semicircle"
            className="w-full h-auto"
          />
        </div>

        {/* Content - responsive alignment */}
        <div className="relative z-10 flex flex-col items-center sm:items-end pr-0 sm:pr-6 md:pr-36 mt-8 sm:mt-0 ">
          {/* Image - responsive sizing */}
          <div className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] rounded-lg overflow-hidden border-4 border-gray-200 shadow-lg bg-white mb-4 transform transition-transform hover:scale-[1.02]">
            <img
              src="https://res.cloudinary.com/dxkwt2ssi/image/upload/v1746640240/aboutsir_rs8abd.svg"
              alt="Founder Abhay Prasad"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info - responsive text sizing */}
          <div className="text-center sm:text-left">
            <h3 className="text-blue-800 text-base sm:text-lg md:text-xl font-semibold">
              Founder
            </h3>
            <h2 className="text-blue-800 mb-3 sm:mb-5 text-xl sm:text-2xl md:text-3xl font-bold">
              Abhay Prasad
            </h2>
            <p className="text-gray-800 mt-1 text-sm sm:text-base font-medium">
              Email - Abhayprasad@healmirror.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FounderProfile;