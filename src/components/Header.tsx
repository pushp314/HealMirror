import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(""); // Track the active section

  // Function to handle scrollspy logic
  const handleScroll = () => {
    const sections = ["features", "testimonials", "contact"];
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Middle of the viewport
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

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="bg-white py-4 px-8 md:px-16 lg:px-24 flex justify-between items-center sticky top-0 z-50 shadow-sm">
      <div className="flex items-center">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dgzv4skru/image/upload/v1746559958/logo_ifvbft.svg"
            alt="Healmirror Logo"
            className="h-8"
          />
        </Link>
      </div>

      <nav className="hidden md:flex space-x-8">
        <Link
          to="/about"
          className="text-gray-700 hover:text-yellow-500 transition-colors duration-300"
        >
          About
        </Link>
        <Link
          to="#features"
          className={`text-gray-700 hover:text-yellow-500 transition-colors duration-300 ${
            activeSection === "features" ? "text-yellow-500" : ""
          }`}
        >
          Features
        </Link>
        <Link
          to="#testimonials"
          className={`text-gray-700 hover:text-yellow-500 transition-colors duration-300 ${
            activeSection === "testimonials" ? "text-yellow-500" : ""
          }`}
        >
          Testimonials
        </Link>
        <Link
          to="#contact"
          className={`text-gray-700 hover:text-yellow-500 transition-colors duration-300 ${
            activeSection === "contact" ? "text-yellow-500" : ""
          }`}
        >
          Contact Us
        </Link>
      </nav>

      <button className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
    </header>
  );
};

export default Header;
