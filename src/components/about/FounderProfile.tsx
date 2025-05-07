const FounderProfile = () => {
  return (
    <div>
      <section className="relative bg-[#FFFCF5] pt-1 px-4 md:px-20 h-[500px]">
        {/* Yellow semicircle shifted right-bottom */}
        <img
          src="https://res.cloudinary.com/dxkwt2ssi/image/upload/v1746640325/aboutbg_wow27t.svg"
          alt="Yellow semicircle"
          className="absolute right-[-80px] bottom-[-100px] w-[500px] md:w-[700px] z-0"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-end pr-6 md:pr-36 -mt-12">
          {/* Image */}
          <div className="w-[280px] h-[280px] rounded-lg overflow-hidden border-4 border-gray-200 shadow-lg bg-white mb-4">
            <img
              src="https://res.cloudinary.com/dxkwt2ssi/image/upload/v1746640240/aboutsir_rs8abd.svg"
              alt="Founder Abhay Prasad"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="text-left">
            <h3 className="text-blue-800 text-lg md:text-xl font-semibold">
              Founder
            </h3>
            <h2 className="text-blue-800 mb-5 text-2xl md:text-3xl font-bold">
              Abhay Prasad
            </h2> 
            <p className="text-gray-800 mt-1 font-medium">
              Email - Abhayprasad@healmirror.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FounderProfile;
