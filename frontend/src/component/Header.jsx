import React, { useState, useEffect } from "react";
import masslogo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { FaAngleDoubleUp } from "react-icons/fa";

const Header = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="w-[100%] h-auto bg-amber-200  px-20 py-5 flex items-center gap-5 justify-between">
      <div className="w-[80px] h-[80px] ">
        <img
          src={masslogo}
          alt=""
          className="w-full h-full rounded-full object-center object-cover cursor-pointer"
        />
      </div>
      <div className="w-auto h-auto flex gap-5 nav-links">
        <Link to="/">
          <h4 className="hover:text-blue-500 cursor-pointer">Home</h4>
        </Link>
        <div className="relative group">
          <h4 className="hover:text-blue-500 cursor-pointer">Product</h4>
          <div
            className="absolute z-[999] left-0 mt-2 w-auto text-nowrap bg-white shadow-lg rounded-lg 
                   opacity-0 invisible bluegroup-hover:opacity-100 group-hover:visible 
                   transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
          >
            <div className="flex flex-col text-[14px] ">
              <span className="w-full px-10 py-2 cursor-pointer hover:text-blue-500 hover:bg-gray-100">
                <span className="border-b-2 w-2 h-2"></span> Product 1
              </span>
              <span className="w-full px-10 py-2 cursor-pointer hover:text-blue-500 hover:bg-gray-100">
                Product 1
              </span>
              <span className="w-full px-10 py-2 cursor-pointer hover:text-blue-500 hover:bg-gray-100">
                Product 1
              </span>
              <span className="w-full px-10 py-2 cursor-pointer hover:text-blue-500 hover:bg-gray-100">
                Product 1
              </span>
            </div>
          </div>
        </div>
        <div className="relative group">
          <h4 className="hover:text-blue-500 cursor-pointer">Weighbridge</h4>
          <div
            className="absolute z-[999] left-0 mt-2  w-auto text-nowrap bg-white shadow-lg rounded-lg 
                   opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                   transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
          >
            <div className="flex flex-col text-[14px] ">
              <span className="w-full px-10 py-2 cursor-pointer hover:text-blue-500 hover:bg-gray-100">
                <span className="border-b-2 w-2 h-2"></span> Product 1
              </span>
              <span className="w-full px-10 py-2 cursor-pointer hover:text-blue-500 hover:bg-gray-100">
                Product 1
              </span>
              <span className="w-full px-10 py-2 cursor-pointer hover:text-blue-500 hover:bg-gray-100">
                Product 1
              </span>
              <span className="w-full px-10 py-2 cursor-pointer hover:text-blue-500 hover:bg-gray-100">
                Product 1
              </span>
            </div>
          </div>
        </div>
        <div className="relative group">
          <h4 className="hover:text-blue-500 cursor-pointer">
            System and Solutions
          </h4>
          <div className="absolute z-[999] left-0 mt-2  w-auto text-nowrap bg-white shadow-lg rounded-lg opacity-0 invisible  group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="flex flex-col text-[14px] ">
              <span className="w-full px-10 py-2 cursor-pointer hover:text-blue-500 hover:bg-gray-100">
                <span className="border-b-2 w-2 h-2"></span> Product 1
              </span>
              <span className="w-full px-10 py-2 cursor-pointer hover:text-blue-500 hover:bg-gray-100">
                Product 1
              </span>
              <span className="w-full px-10 py-2 cursor-pointer hover:text-blue-500 hover:bg-gray-100">
                Product 1
              </span>
              <span className="w-full px-10 py-2 cursor-pointer hover:text-blue-500 hover:bg-gray-100">
                Product 1
              </span>
            </div>
          </div>
        </div>
        <h4 className="hover:text-blue-500 cursor-pointer">Gallary</h4>
        <h4 className="hover:text-blue-500 cursor-pointer">About</h4>
        <h4 className="hover:text-blue-500 cursor-pointer">Services</h4>
        <h4 className="hover:text-blue-500 cursor-pointer">Product Video</h4>
        <h4 className="hover:text-blue-500 cursor-pointer">Blog</h4>
        <h4 className="hover:text-blue-500 cursor-pointer">Contact</h4>
      </div>
      <div className="w-auto h-auto ">
        <button>Get Started</button>
      </div>

      <div
        onClick={scrollToTop}
        className={`fixed z-[999] bottom-5 right-5 p-1 bg-blue-600 cursor-pointer transition-transform duration-600 ease-in-out ${
          showScroll ? "translate-y-0  " : "translate-y-[80px]"
        }`}
      >
        <FaAngleDoubleUp className="w-10 h-10 text-white" />
      </div>
    </div>
  );
};

export default Header;
