import React from "react";
import yt from "../assets/gif/youtube.png";
import twitter from "../assets/gif/twitter.png";
import instagram from "../assets/gif/instagram.png";
import fb from "../assets/gif/facebook.png";

const Footer = () => {
  return (
    <div className="w-full h-auto px-20  py-5 bg-gray-600 text-white">
      {/* <div className="w-full h-auto flex items-center justify-center py-10">
        <h2>Footer</h2>
      </div> */}
      <div className="w-full h-auto grid grid-cols-3 gap-10 ">
        <div>
          <div className="w-full flex items-center justify-center p-2">
            <h4>I2S2</h4>
          </div>
          <p>address</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
            dolore.
          </p>
          <p>i2s2@gamil.com</p>
          <p>997788556322</p>
        </div>
        <div>
          <div className="w-full flex items-center justify-center p-2">
            <h4>Our Product</h4>
          </div>
          <div className="w-full grid grid-cols-3 gap-2 m-auto p-2 text-center">
            <p>Lorem.</p>
            <p>Lorem.</p>
            <p>Lorem.</p>
            <p>Lorem.</p>
            <p>Lorem.</p>
            <p>Lorem.</p>
            <p>Lorem.</p>
            <p>Lorem.</p>
            <p>Lorem.</p>
          </div>
        </div>
        <div>
          <div className="w-full flex items-center justify-center p-2">
            <h4>Follow Us</h4>
          </div>
          <div className="w-full flex gap-5 items-center justify-center p-2">
            <img src={fb} alt="" className="w-12  h-12" />
            <img src={yt} alt="" className="w-12  h-12" />
            <img src={instagram} alt="" className="w-12  h-12" />
            <img src={twitter} alt="" className="w-12  h-12" />
          </div>
        </div>
      </div>
      <footer className="w-full h-auto flex  flex-col items-center justify-center mt-15">
        <h4>@ copyrighted {new Date().getFullYear()} by Mass Weighing </h4>
        <h4>
          Designed by{" "}
          <a href="https://www.i2s2world.com/" target="_blank" className="text-blue-400 hover:underline ">
            Instant Information Software Service
          </a>
        </h4>
      </footer>
    </div>
  );
};

export default Footer;
