import React, { useState, useEffect } from "react";
import masslogo from "../assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { FaAngleDoubleUp, FaTimes } from "react-icons/fa";
import whatapp from "../assets/gif/whatapp.png";
import { TiThMenu } from "react-icons/ti";
import useFetch from "../services/useFetch";

const Header = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [selectHeader, setSelectHeader] = useState("home");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const { data: productData } = useFetch(
    `${import.meta.env.VITE_API_URL}/public/products`
  );
  const products = productData?.data || [];
  const {data} = useFetch(`${import.meta.env.VITE_API_URL}/public/logo-metadata`)
  const logoUrl = data?.data?.logoUrl
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

  const handleGoTo = (id) => {
    setSelectHeader(id);
    setToggle(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleProductClick = (product) => {
    navigate("/product", { state: product });
  };

  return (
    <div className="w-[100%] h-auto bg-amber-200  px-5 md:px-20 py-5 flex items-center gap-5 justify-between">
      <div className="w-[80px] h-[80px] ">
        <Link to="/">
          <img
            src={logoUrl || masslogo}
            alt=""
            className="w-full h-full rounded-full object-center object-cover cursor-pointer"
            onClick={() => handleGoTo("home")}
          />
        </Link>
      </div>
      <div className="w-auto h-auto font-medium hidden lg:flex gap-5 nav-links">
        <h4
          className="hover:text-blue-500 cursor-pointer"
          onClick={() => handleGoTo("home")}
        >
          Home
        </h4>
        <h4
          className="hover:text-blue-500 cursor-pointer"
          onClick={() => handleGoTo("product")}
        >
          Product
        </h4>
        <div className="relative group">
          <h4 className="hover:text-blue-500 cursor-pointer">Weighbridge</h4>
          <div
            className="absolute z-[999] left-0 mt-2 w-64 max-h-80 overflow-y-auto bg-white shadow-lg rounded-lg 
                   opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                   transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
          >
            <div className="flex flex-col text-[14px]">
              {products.length === 0 ? (
                <span className="w-full px-4 py-3 text-gray-500">
                  No products
                </span>
              ) : (
                products.map((product) => (
                  <span
                    key={product.id}
                    className="w-full px-4 py-3 cursor-pointer hover:text-blue-500 hover:bg-gray-100 text-nowrap overflow-hidden text-ellipsis font-medium"
                    onClick={() => handleProductClick(product)}
                  >
                    {product.title}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
        <h4
          className="hover:text-blue-500 cursor-pointer"
          onClick={() => handleGoTo("gallery")}
        >
          Gallary
        </h4>
        <h4
          className="hover:text-blue-500 cursor-pointer"
          onClick={() => handleGoTo("about")}
        >
          About
        </h4>
        <h4 className="hover:text-blue-500 cursor-pointer">Services</h4>
        <h4 className="hover:text-blue-500 cursor-pointer">Product Video</h4>
        <h4 className="hover:text-blue-500 cursor-pointer">Blog</h4>
        <h4
          className="hover:text-blue-500 cursor-pointer"
          onClick={() => handleGoTo("contact")}
        >
          Contact
        </h4>
      </div>
      <div className="w-auto h-auto ">
        <button
          onClick={() => {
            handleGoTo("queries");
          }}
        >
          Get Started
        </button>
      </div>

      <div
        onClick={scrollToTop}
        className={`fixed z-[999] bottom-5 right-5 p-1 bg-blue-600 cursor-pointer transition-transform duration-600 ease-in-out ${
          showScroll ? "translate-y-0  " : "translate-y-[80px]"
        }`}
      >
        <FaAngleDoubleUp className="w-10 h-10 text-white" />
      </div>
      <div className="w-auto h-auto flex lg:hidden">
        <TiThMenu
          className="w-8 h-8 cursor-pointer "
          onClick={() => {
            setToggle(true);
          }}
        />
      </div>

      <div
        className={`fixed z-998 top-0 right-0 w-auto h-auto bg-blue-400 transition-all transform duration-400 ease-in-out ${toggle ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className=" w-full flex items-center justify-end px-4 pt-3">
          <FaTimes
            className="w-8 h-8 cursor-pointer "
            onClick={() => {
              setToggle(false);
            }}
          />
        </div>
        <div className="p-10 flex flex-col gap-3 text-white">
          <h4
            className="hover:text-blue-500 cursor-pointer"
            onClick={() => handleGoTo("home")}
          >
            Home
          </h4>
          <h4
            className="hover:text-blue-500 cursor-pointer"
            onClick={() => handleGoTo("product")}
          >
            Product
          </h4>
          <div className="relative group">
            <h4 className="hover:text-blue-500 cursor-pointer">Weighbridge</h4>
            <div className="mt-2 flex flex-col gap-2">
              {products.length === 0 ? (
                <span className="text-white/70">No products</span>
              ) : (
                products.map((product) => (
                  <span
                    key={product.id}
                    className="hover:text-blue-200 cursor-pointer"
                    onClick={() => {
                      setToggle(false);
                      handleProductClick(product);
                    }}
                  >
                    {product.title}
                  </span>
                ))
              )}
            </div>
          </div>
          <h4
            className="hover:text-blue-500 cursor-pointer"
            onClick={() => handleGoTo("gallery")}
          >
            Gallary
          </h4>
          <h4
            className="hover:text-blue-500 cursor-pointer"
            onClick={() => handleGoTo("about")}
          >
            About
          </h4>
          <h4 className="hover:text-blue-500 cursor-pointer">Services</h4>
          <h4 className="hover:text-blue-500 cursor-pointer">Product Video</h4>
          <h4 className="hover:text-blue-500 cursor-pointer">Blog</h4>
          <h4
            className="hover:text-blue-500 cursor-pointer"
            onClick={() => handleGoTo("contact")}
          >
            Contact
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
