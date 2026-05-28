import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import useFetch from "../services/useFetch";

gsap.registerPlugin(useGSAP);

const url = `${import.meta.env.VITE_API_URL}/public/products`

const Product = () => {
  const { data, loading, error } = useFetch(url);
  const [cursor, setCursor] = useState(false);
  const buttonRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("=== Product.jsx ===");
    console.log("Loading:", loading);
    console.log("Error:", error);
    console.log("Products from backend:", data?.data);
  }, [data, loading, error]);

  const products = data?.data || [];

  useEffect(() => {
    gsap.fromTo(
      ".highlight",
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power2.inOut" },
    );
    const colors = [
      "blue",
      "blue",
      "rgb(0, 255, 222)",
      "rgb(0, 255, 222)",
      "rgb(168, 251, 211)",
      "rgb(168, 251, 211)",
    ];
    let i = 0;
    gsap.fromTo(
      ".text-borders",
      { scaleX: 0, transformOrigin: "center", borderColor: colors[i] },
      {
        scaleX: 1,
        repeat: -1,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        onRepeat: () => {
          i = (i + 1) % colors.length;
          gsap.set(".text-borders", { borderColor: colors[i] });
        },
      },
    );
  }, []);

  const handleButtonAnimate = (idx) => {
    const btn = buttonRef.current[idx];
    console.log("button", btn, idx);
    if (!btn) return;

    gsap.to(btn, {
      backgroundColor: "black",
      color: "white",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleButtonLeave = () => {
    const btn = buttonRef.current;
    if (!btn) return;

    gsap.to(btn, {
      backgroundColor: "blue",
      color: "white",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const goToPage = (item) => {
    navigate("/product", { state: item });
  };

  return (
    <div className="main">
      <div className="heading-div flex flex-col">
        <h2 className="highlight">Product</h2>
        <span className="text-borders w-[80px] mt-1 border-b-4 border-black"></span>
      </div>
      {loading && <p className="text-center py-10">Loading products...</p>}
      {error && (
        <p className="text-center py-10 text-red-500">Error: {error}</p>
      )}
      {!loading && !error && (
        <div className="w-full h-auto grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {products.map((item, idx) => (
            <div
              key={item.id}
              className="w-full h-full border flex flex-col gap-5 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 relative"
            >
              <div className="relative w-full h-[300px] group overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover p-1 duration-800 group-hover:scale-125"
                />
                <div className="absolute top-0 left-0 w-full h-full Z-[99] duration-500 bg-black opacity-30 group-hover:opacity-0 "></div>
              </div>
              <div className="w-full h-auto px-5 pb-20">
                <h4 className="font-semibold mb-4">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
                {item.features?.length > 0 && (
                  <ul className="mt-2">
                    {item.features.slice(0, 4).map((f, i) => (
                      <li key={i} className="text-gray-500">
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="absolute bottom-0 right-0 p-5">
                <button
                  ref={(e1) => (buttonRef.current[idx] = e1)}
                  onClick={() => {
                    goToPage(item);
                  }}
                  onMouseEnter={() => {
                    handleButtonAnimate(idx);
                  }}
                  onMouseLeave={handleButtonLeave}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
          {products.length === 0 && (
            <p className="text-center py-10 text-gray-500">
              No products available yet.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Product;
