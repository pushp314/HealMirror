import Header from "../Header";
import AboutHero from "./AboutHero";
import FounderProfile from "./FounderProfile";
import HeroBg from "./HeroBg";
import DownloadApp from '../DownloadApp';
import Footer from '../Footer';

const About = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <HeroBg />
      <AboutHero />
      <FounderProfile />
      <DownloadApp />
      <Footer />
    </div>
  );
};

export default About;