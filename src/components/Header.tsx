import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const sections = ["features", "testimonials", "contact"];
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= scrollPosition && rect.bottom >= scrollPosition) {
          setActiveSection(sectionId);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="bg-white py-3 sm:py-4 px-4 sm:px-8 md:px-16 lg:px-24 flex justify-between items-center sticky top-0 z-50 shadow-sm">
      <div className="flex items-center">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dgzv4skru/image/upload/v1746559958/logo_ifvbft.svg"
            alt="Healmirror Logo"
            className="h-6 sm:h-8"
          />
        </Link>
      </div>

      <nav className="hidden md:flex space-x-6 lg:space-x-8">
        <Link
          to="/about"
          className="text-sm lg:text-base text-gray-700 hover:text-yellow-500 transition-colors duration-300"
        >
          About
        </Link>
        <Link
          to="#features"
          className={`text-sm lg:text-base text-gray-700 hover:text-yellow-500 transition-colors duration-300 ${
            activeSection === "features" ? "text-yellow-500" : ""
          }`}
        >
          Features
        </Link>
        <Link
          to="#testimonials"
          className={`text-sm lg:text-base text-gray-700 hover:text-yellow-500 transition-colors duration-300 ${
            activeSection === "testimonials" ? "text-yellow-500" : ""
          }`}
        >
          Testimonials
        </Link>
        <Link
          to="#contact"
          className={`text-sm lg:text-base text-gray-700 hover:text-yellow-500 transition-colors duration-300 ${
            activeSection === "contact" ? "text-yellow-500" : ""
          }`}
        >
          Contact Us
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
          <div className="flex flex-col p-4 space-y-3">
            <Link
              to="/about"
              className="text-gray-700 hover:text-yellow-500 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="#features"
              className={`text-gray-700 hover:text-yellow-500 transition-colors duration-300 ${
                activeSection === "features" ? "text-yellow-500" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="#testimonials"
              className={`text-gray-700 hover:text-yellow-500 transition-colors duration-300 ${
                activeSection === "testimonials" ? "text-yellow-500" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              to="#contact"
              className={`text-gray-700 hover:text-yellow-500 transition-colors duration-300 ${
                activeSection === "contact" ? "text-yellow-500" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header