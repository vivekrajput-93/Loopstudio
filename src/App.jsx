import React from "react";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import interactive from "./images/desktop/image-interactive.jpg";
import curiosity from "./images/desktop/image-curiosity.jpg";
import deep from "./images/desktop/image-deep-earth.jpg";
import fisheye from "./images/desktop/image-fisheye.jpg";
import above from "./images/desktop/image-from-above.jpg";
import grid from "./images/desktop/image-grid.jpg";
import night from "./images/desktop/image-night-arcade.jpg";
import pocket from "./images/desktop/image-pocket-borealis.jpg";
import soccer from "./images/desktop/image-soccer-team.jpg";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="h-[100vh] bg-green-600 home-section">
        <div className="animated-text absolute top-[12rem] left-[5rem]  border-2 text-white text-7xl w-1/2 py-5 px-5 max-[786px]:w-fit max-[786px]:left-2 font-thin max-[678px]:w-fit max-[786px]:m-2 ">
          <p>IMMERSIVE EXPERIENCES THAT DELIVER</p>
        </div>
      </div>

      <div className="person flex max-[786px]:flex-col  ">
        <div className="interactive flex-1 pl-20  max-[786px]:pl-0 max-[786px]:mb-12">
          <img src={interactive} alt="person" />
        </div>
        <div className="person-text flex-1 flex flex-col gap-3 justify-center items-center  relative w-1/2 h-[350px] mt-32 right-32 max-[786px]:right-2 max-[786px]:w-fit max-[786px]:mt-2 max-[786px]:m-5 bg-white max-[786px]:mb-12">
          <h3 className="text-5xl px-12 font-thin max-[786px]:text-3xl ">
            THE LEADER IN INTERACTIVE VR
          </h3>
          <p className="text-justify px-12 font-medium text-gray-400 ">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between px-20 mb-16">
          <h3 className="text-3xl font-thin">OUR CREATIONS</h3>
          <button className="see-button">SEE ALL</button>
        </div>
        <div className="flex flex-wrap gap-7 mb-20 justify-center  ">
          <div className="img-name">
            <img src={deep} alt="creation" className="deep" />
            <h3>DEEP EARTH</h3>
          </div>
          <div className="img-name night">
            <img src={night} alt="creation" />
            <h3 >NIGHT ARCADE</h3>
          </div>
          <div className="img-name soccer">
            <img src={soccer} alt="creation" />
            <h3 >SOCCER TEAM VR</h3>
          </div>
          <div className="img-name grid">
            <img src={grid} alt="creation" />
            <h3>THE GRID</h3>
          </div>
          <div className="img-name above">
            <img src={above} alt="creation" />
            <h3 >TFROM UP ABOVE VR</h3>
          </div>
          <div className="img-name pocket">
            <img src={pocket} alt="creation" />
            <h3>POCKET BOREALIS</h3>
          </div>
          <div className="img-name curiosity">
            <img src={curiosity} alt="creation" />
            <h3 >THE CURIOSITY</h3>
          </div>
          <div className="img-name fisheye">
            <img src={fisheye} alt="creation" />
            <h3 className="px-3">MAKE IT FISHEYE</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
