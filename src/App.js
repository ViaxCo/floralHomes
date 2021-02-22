import "./App.css";

import NavBar from "./components/navbar";
import HeroSection from "./components/hero-sec";
import PlateImges from "./components/plate-img";
import LandingAbout from "./components/landing-about";
import Section2 from "./components/section2";
import ProdoctSec from './components/products-sec';
import VideoSec from './components/video-sec';
import MissionStatement from "./components/missionSate-sec";
import Testimonial from './components/testimonial';
import BlogSection from './components/blog-sec';
import Footer from './components/footer';

function App() {
  return (
    <>
      <div className="hero-image">
        <NavBar />
        <HeroSection />
      </div>
      <div className="container background" style={{ marginTop: "-50px", zIndex: 2 }}>
        <PlateImges />
      </div>
      <div style={{marginTop: '-75px', paddingBottom: '6rem'}}>
        <LandingAbout />
      </div>
      <div>
        <Section2 />
      </div>
      <div>
        <ProdoctSec />
      </div>
      <div>
        <VideoSec />
      </div>
      <div>
        <MissionStatement />
      </div>
      <div>
        <Testimonial />
      </div>
      <div>
        <BlogSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
