import Header from "./components/Header";
import Hero from "./components/doctor/Hero";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import DownloadApp from "./components/DownloadApp";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import TermsAndConditions from "./components/security/TermsAndConditions";
import PrivacyPolicy from "./components/security/PrivacyPolicy";

function App() {
  return (
    <div className="font-sans">
      <Router>
        <Routes>
          {/* Main landing page */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <Testimonials />
                <Contact />
                <DownloadApp />
                <Footer />
              </>
            }
          />
          {/* About page */}
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<TermsAndConditions/>} />
          <Route path="/privacy" element={<PrivacyPolicy/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
