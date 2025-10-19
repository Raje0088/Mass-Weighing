import React, { useEffect, useRef } from "react";
import img1 from "../assets/Product-Images/img1.png";
import img2 from "../assets/Product-Images/img2.png";
import img3 from "../assets/Product-Images/img3.png";
import img4 from "../assets/Product-Images/img4.png";
import img5 from "../assets/Product-Images/img5.png";
import img6 from "../assets/Product-Images/img6.png";
import img7 from "../assets/Product-Images/img7.png";
import img8 from "../assets/Product-Images/img8.png";
import img9 from "../assets/Product-Images/img9.png";
import img10 from "../assets/Product-Images/img10.png";
import img11 from "../assets/Product-Images/img11.png";
import img12 from "../assets/Product-Images/img12.png";
import img13 from "../assets/Product-Images/img13.png";
import img14 from "../assets/Product-Images/img14.png";
import img15 from "../assets/Product-Images/img15.png";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

gsap.registerPlugin(useGSAP);

const Product = () => {
  const [cursor, setCursor] = useState(false);
  const buttonRef = useRef([]);
  const navigate = useNavigate();
  const product = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
  ];

  useEffect(() => {
    gsap.fromTo(
      ".highlight",
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, ease: "power2.inOut" }
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
      }
    );
  }, []);

  const handleButtonAnimate = (idx) => {
    const btn = buttonRef.current[idx];
    console.log("button", btn, idx);
    if (!btn) return;

    gsap.to(btn, {
      backgroundColor: "black",
      color: "white", // target scale
      duration: 0.5, // animation time
      ease: "power2.out", // easing (optional)
    });
  };

  const handleButtonLeave = () => {
    const btn = buttonRef.current;
    if (!btn) return;

    gsap.to(btn, {
      backgroundColor: "blue",
      color: "white", // target scale
      duration: 0.5, // animation time
      ease: "power2.out", // easing (optional)
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
      <div className="w-full h-auto grid grid-col-1 md:grid-cols-3 gap-10 ">
        {product.map((item, idx) => (
          <div className="w-full h-full border flex flex-col gap-5 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.25)] hover:shadow-[0_0_40px_rgba(0,0,0,0.4)] transition-all duration-500">
            {/* <div className="w-full h-full border-0 flex flex-col gap-5 p-2  rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"> */}
            <div className="relative w-full h-[300px] group overflow-hidden">
              <img
                src={item}
                alt=""
                className="w-full h-full object-cover p-1  duration-800  group-hover:scale-125"
              />
              <div className="absolute top-0 left-0 w-full h-full Z-[99] duration-500 bg-black opacity-30 group-hover:opacity-0 "></div>
            </div>
            <div className="w-full h-auto px-5">
              <h4>The plastic Bag Machine</h4>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur unde qui laboriosam accusamus nemo nulla.
              </p>
            </div>
            <div className="w-full flex justify-center md:justify-end p-5">
              <button
                ref={(e1) => (buttonRef.current[idx] = e1)}
                onClick={() => {
                  goToPage(item);
                }}
                onMouseEnter={() => {
                  handleButtonAnimate(idx);
                }}
                onMouseLeave={handleButtonLeave}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
