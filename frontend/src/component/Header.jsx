import React from "react";
import masslogo from "../assets/logo.jpg";

const Header = () => {
  return (
    <div className="w-[100%] h-auto  px-20 py-5 flex items-center gap-5 justify-between">
      <div className="w-[100px] h-[100px] ">
        <img
          src={masslogo}
          alt=""
          className="w-full h-full rounded-full object-center object-cover cursor-pointer"
        />
      </div>
      <div className="w-auto h-auto flex gap-5 nav-links">
        <h1>Home</h1>
        <div className="relative group">
          <p className="cursor-pointer">Product</p>
          <div
            className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg 
                   opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                   transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
          >
            <ul className="flex flex-col p-2">
              <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                Product 1
              </li>
              <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                Product 2
              </li>
              <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                Product 3
              </li>
            </ul>
          </div>
        </div>
        <div className="relative group">
          <p className="cursor-pointer">Weighbridge</p>
          <div
            className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg 
                   opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                   transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
          >
            <ul className="flex flex-col p-2">
              <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                Product 1
              </li>
              <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                Product 2
              </li>
              <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                Product 3
              </li>
            </ul>
          </div>
        </div>
        <div className="relative group">
          <p>System and Solutions</p>
          <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg opacity-0 invisible  group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <ul className="flex flex-col p-2 text-nowrap">
              <li className="px-3 py-2 hover:bg-gray-100">Product 1</li>
              <li className="px-3 py-2 hover:bg-gray-100">Product 1</li>
              <li className="px-3 py-2 hover:bg-gray-100">Product 1</li>
              <li className="px-3 py-2 hover:bg-gray-100">
                Check Weighing System
              </li>
            </ul>
          </div>
        </div>
        <p>Gallary</p>
        <p>About</p>
        <p>Services</p>
        <p>Product Video</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>
      <div className="w-auto h-auto ">
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Header;
