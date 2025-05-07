
import sign from "../../assests/yellowsign.svg";


const AboutHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 animate-fadeIn">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-yellow-400 p-3 rounded-lg">
                <img src={sign} alt="HealMirro Sign" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold">
                Healmirror Resilience <br /> Private Limited
              </h1>
            </div>

            <div className="space-y-5 text-gray-700">
              <div className="address">
                <p className="text-sm md:text-base">
                  170/183, Shop No 13, Block No 18, <br />
                  Supela, Bhilai, Durg - 490023, <br />
                  Chhattisgarh
                </p>
              </div>

              <div className="registration text-sm space-y-1">
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

              <div className="contact text-sm space-y-1">
                <p>
                  <span className="font-medium">Contact</span> -
                  Contact@healmirror.com
                </p>
                <p className="ml-[68px]">Sales@healmirror.com</p>
              </div>
            </div>
          </div>

          <div className="p-6 flex flex-col justify-center animate-fadeIn">
            <div className="space-y-1 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Vision.</h2>
              <h2 className="text-2xl md:text-3xl font-bold">Mission.</h2>
              <h2 className="text-2xl md:text-3xl font-bold">Slogan.</h2>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-yellow-500">
                "Affordable Therapy
                <br />
                For Everyone"
              </h3>

              <p className="text-gray-700 leading-relaxed">
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
