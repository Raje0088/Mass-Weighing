import React from "react";
import yt from "../assets/gif/youtube.png";
import twitter from "../assets/gif/twitter.png";
import instagram from "../assets/gif/instagram.png";
import fb from "../assets/gif/facebook.png";

const Footer = () => {
  return (
    <div className="w-full h-auto px-5 md:px-20  py-5 bg-gray-600 text-white">
      {/* <div className="w-full h-auto flex items-center justify-center py-10">
        <h2>Footer</h2>
      </div> */}
      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 ">
        <div className="text-center md:text-left">
          <div className="w-full flex items-center justify-center p-2 ">
            <h4 className="text-xl">Address</h4>
          </div>
          <h4 >
            Gat NO. 63, Ranje pune satara road , Taluka Bhor,Pune - 412205, Maharashtra, India
          </h4>
          <h4><strong>Email: </strong> i2s2@gamil.com</h4>
          <h4><strong>Phone: </strong>8045812075</h4>
          <h4>Mr. Bharat Eknath Patil (Director ) </h4>
        </div>
        <div>
          <div className="w-full flex items-center  justify-center p-2">
            <h4 className="text-xl" >Our Product</h4> 
          </div>
          <div className="w-full grid grid-cols-3 gap-2 m-auto p-2 text-center">
            <p>Weighing Machine</p>
            <p>Weighing Machine</p>
            <p>Weighing Machine</p>
            <p>Weighing Machine</p>
            <p>Weighing Machine</p>
            <p>Weighing Machine</p>
            <p>Weighing Machine</p>
            <p>Weighing Machine</p>
            <p>Weighing Machine</p>
            <p>Weighing Machine</p>
            <p>Weighing Machine</p>
            <p>Weighing Machine</p>
          </div>
        </div>
        <div>
          <div className="w-full flex items-center justify-center p-2">
            <h4 className="text-xl">Connect Us</h4>
          </div>
          <div className="w-full flex gap-5 items-center justify-center p-2">
            <img src={fb} alt="" className="w-10  h-10 cursor-pointer" />
            <img src={yt} alt="" className="w-10  h-10 cursor-pointer" />
            <img src={instagram} alt="" className="w-10  h-10 cursor-pointer" />
            <img src={twitter} alt="" className="w-10  h-10 cursor-pointer" />
          </div>
        </div>
      </div>
      <footer className="w-full h-auto flex  flex-col items-center justify-center mt-5 md:mt-15">
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
