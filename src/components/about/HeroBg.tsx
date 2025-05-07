import { Download } from "lucide-react";
import herobg from "../../assests/clientbg.svg";

const HeroBg = () => {
  return (
    <div
      className="min-h-screen relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${herobg})`, // Use herobg as the background image
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-6xl font-serif text-white mb-12">About Us</h1>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md transition-all duration-300 flex items-center gap-2 font-medium">
          <Download className="w-5 h-5" />
          Download The App
        </button>
      </div>
    </div>
  );
};

export default HeroBg;
