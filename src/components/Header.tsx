import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const sections = ["features", "testimonials", "contact"];
    // Adjusted scrollPosition to be more accurate for typical full-height sections
    // considering the header's height might affect calculations if not accounted for.
    // For simplicity, using a point slightly below the top of the viewport.
    const scrollPositionThreshold = window.scrollY + (document.getElementById('features')?.offsetTop !== undefined ? 100 : window.innerHeight / 3); // Adjust 100 as needed

    let currentSection = "";
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        // Check if the top of the section is at or above the threshold
        // and the section is still partially visible from the top.
        if (rect.top <= scrollPositionThreshold && rect.bottom >= 0) {
          if (!currentSection || section.getBoundingClientRect().top < document.getElementById(currentSection)!.getBoundingClientRect().top) {
            currentSection = sectionId;
          }
        }
      }
    });
    // Fallback to no active section if scrolled to top or no section matches
    if (window.scrollY < 200 && !currentSection) { // Arbitrary small value for top
        setActiveSection("");
    } else if (currentSection) {
        setActiveSection(currentSection);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Initial check in case the page loads on a section
    handleScroll();
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
            className="h-6 sm:h-8" // Responsive logo height
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
        <a // Changed to <a> for direct hash link scrolling for sections on the same page
          href="/#features"
          className={`text-sm lg:text-base text-gray-700 hover:text-yellow-500 transition-colors duration-300 ${
            activeSection === "features" ? "text-yellow-500 font-semibold" : "" // Added font-semibold for active
          }`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false); // Close mobile menu if open
          }}
        >
          Features
        </a>
        <a
          href="/#testimonials"
          className={`text-sm lg:text-base text-gray-700 hover:text-yellow-500 transition-colors duration-300 ${
            activeSection === "testimonials" ? "text-yellow-500 font-semibold" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
          }}
        >
          Testimonials
        </a>
        <a
          href="/#contact"
          className={`text-sm lg:text-base text-gray-700 hover:text-yellow-500 transition-colors duration-300 ${
            activeSection === "contact" ? "text-yellow-500 font-semibold" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
          }}
        >
          Contact Us
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-gray-700 hover:text-yellow-500" // Added color
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Open menu" // Accessibility
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> {/* X icon */}
          </svg>
        ) : (
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
              d="M4 6h16M4 12h16M4 18h16" // Hamburger icon
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
          <div className="flex flex-col p-4 space-y-3">
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-yellow-500 hover:bg-yellow-50 rounded-md transition-colors duration-300" // Enhanced styling
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <a // Changed to <a> for direct hash link scrolling
              href="/#features"
              className={`block px-3 py-2 text-gray-700 hover:text-yellow-500 hover:bg-yellow-50 rounded-md transition-colors duration-300 ${
                activeSection === "features" ? "text-yellow-500 font-semibold bg-yellow-50" : "" // Added font-semibold and bg for active
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              Features
            </a>
            <a
              href="/#testimonials"
              className={`block px-3 py-2 text-gray-700 hover:text-yellow-500 hover:bg-yellow-50 rounded-md transition-colors duration-300 ${
                activeSection === "testimonials" ? "text-yellow-500 font-semibold bg-yellow-50" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              Testimonials
            </a>
            <a
              href="/#contact"
              className={`block px-3 py-2 text-gray-700 hover:text-yellow-500 hover:bg-yellow-50 rounded-md transition-colors duration-300 ${
                activeSection === "contact" ? "text-yellow-500 font-semibold bg-yellow-50" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;