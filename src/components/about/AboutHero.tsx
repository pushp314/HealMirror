import sign from "../../assests/yellowsign.svg";

const AboutHero = () => {
  return (
    <div className="min-h-[80vh] md:min-h-screen bg-gradient-to-br from-amber-50 to-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="p-4 sm:p-6 animate-fadeIn">
            <div className="flex items-center gap-3 sm:gap-4 mb-6">
              <div className="bg-yellow-400 p-2 sm:p-3 rounded-lg">
                <img src={sign} alt="HealMirro Sign" className="w-10 h-10 sm:w-auto sm:h-auto" />
              </div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                Healmirror Resilience <br className="hidden sm:block" /> Private Limited
              </h1>
            </div>

            <div className="space-y-4 sm:space-y-5 text-gray-700">
              <div className="address">
                <p className="text-sm sm:text-base">
                  170/183, Shop No 13, Block No 18, <br className="hidden sm:block" />
                  Supela, Bhilai, Durg - 490023, <br className="hidden sm:block" />
                  Chhattisgarh
                </p>
              </div>

              <div className="registration text-xs sm:text-sm space-y-1">
                <p>
                  <span className="font-medium">CIN</span> -
                  U86900CT2024PTC016078
                </p>
                <p>
                  <span className="font-medium">MSME</span> -
                  UDYAM-CG-05-0039072
                </p>
                <p>
                  <span className="font-medium">DUNS</span> - 645055193
                </p>
              </div>

              <div className="contact text-xs sm:text-sm space-y-1">
                <p>
                  <span className="font-medium">Contact</span> -
                  Contact@healmirror.com
                </p>
                <p className="sm:ml-[68px]">Sales@healmirror.com</p>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 flex flex-col justify-center animate-fadeIn">
            <div className="space-y-1 mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Vision.</h2>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Mission.</h2>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Slogan.</h2>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-500">
                "Affordable Therapy
                <br />
                For Everyone"
              </h3>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Our Motto is to provide therapy at an affordable price, so that
                more people can access it that's why we don't take commission
                from any side.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;