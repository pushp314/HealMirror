import { Download } from "lucide-react";
import herobg from "../../assests/clientbg.svg";

const HeroBg = () => {
  return (
    <div
      className="min-h-[80vh] md:min-h-screen relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${herobg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] md:min-h-screen text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-8 md:mb-12 animate-fadeIn">About Us</h1>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-all duration-300 flex items-center gap-2 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-1">
          <Download className="w-4 h-4 sm:w-5 sm:h-5" />
          Download The App
        </button>
      </div>
    </div>
  );
};

export default HeroBg;