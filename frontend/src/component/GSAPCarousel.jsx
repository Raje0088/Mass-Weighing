import React, { useRef } from "react";
import styles from "./GSAPCarousel.module.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/all";
import { CiCircleCheck } from "react-icons/ci";

gsap.registerPlugin(Observer, useGSAP);

const GSAPCarousel = () => {
  const containerRef = useRef(null);
  useGSAP(() => {
    const root = containerRef.current;
    const images = root.querySelectorAll(".carousel-image");
    const carousel = root.querySelector(".carousel");

    const radius = 242;
    const progress = { value: 0 };

    const observer = Observer.create({
      target: carousel,
      type: "wheel,pointer",
      onPress: () => (carousel.style.cursor = "grabbing"),
      onRelease: () => (carousel.style.cursor = "grab"),
      onChange: (self) => {
        gsap.killTweensOf(progress);
        const p =
          self.event.type === "wheel"
            ? self.deltaY * -0.005
            : self.deltaX * 0.05;
        gsap.to(progress, { duration: 2, ease: "power4.out", value: `+=${p}` });
      },
    });

    gsap.to(progress, {
      value: "-=1",
      repeat: -1,
      duration: 30,
      ease: "none",
    });

    const animate = () => {
      images.forEach((image, index) => {
        const theta = index / images.length - progress.value;
        const x = -Math.sin(theta * Math.PI * 2) * radius;
        const y = Math.cos(theta * Math.PI * 2) * radius;
        image.style.transform = `translate3d(${x}px,0px,${y}px) rotateY(${
          360 * -theta
        }deg)`;
        const c = Math.floor((index / images.length) * 360);
        image.style.background = `hsla(${c},90%,50%,0.9)`;
        image.style.border ="2px solid white";
      });
    };

    gsap.ticker.add(animate);

    return () => {
      observer.kill();
      gsap.ticker.remove(animate);
    };
  }, []);

  return (
    <div className="main">
      <div className="heading-div flex flex-col ">
        <h2>Why Choose Us</h2>
        <span className="text-borders w-[80px] mt-1 border-b-4 border-black"></span>
      </div>
      <div className=" w-full  flex flex-col  md:flex-row gap-5">
        <div className="w-full md:w-1/2 bg-blue-400  p-5" ref={containerRef}>
          <div className={`${styles.carousel} carousel`}>
            <div className={`${styles["carousel-image"]} carousel-image text-nowrap`}>
              <span className="text-4xl mb-3">🌟</span>
              <h2 className="leading-4 text-[18px]"> Expert in</h2>
              <h2 className="leading-4 text-[18px]">Bagging Machines</h2>
            </div>
            <div className={`${styles["carousel-image"]} carousel-image`}>
             <span className="text-4xl mb-3">⚙️</span>
              <h2 className="leading-4 text-[18px]"> Wide </h2>
              <h2 className="leading-4 text-[18px]"> Product Range</h2>
            </div>
            <div className={`${styles["carousel-image"]} carousel-image`}>
             <span className="text-4xl mb-3">💡</span>
              <h2 className="leading-4 text-[18px]"> Innovation Driven</h2>
            </div>
            <div className={`${styles["carousel-image"]} carousel-image `}>
             <span className="text-4xl mb-3">🤝</span>
              <h2 className="leading-4 text-[18px]"> Customer First</h2>
            </div>
            <div className={`${styles["carousel-image"]} carousel-image`}>
              <span className="text-4xl mb-3">🧠</span>
              <h2 className="leading-4 text-[18px]"> Strong </h2>
              <h2 className="leading-4 text-[18px]"> Leadership</h2>
            </div>
            <div className={`${styles["carousel-image"]} carousel-image`}>
             <span className="text-4xl mb-3">🔧</span>
              <h2 className="leading-4 text-[18px]"> AMC</h2>
              <h2 className="leading-4 text-[18px]"> Services</h2>
            </div>
            <div className={`${styles["carousel-image"]} carousel-image`}>
              <span className="text-4xl mb-3">🏭</span>
              <h2 className="leading-4 text-[18px]"> Modern</h2>
              <h2 className="leading-4 text-[18px]">  Infrastructure</h2>
            </div>
            <div className={`${styles["carousel-image"]} carousel-image`}>
             <span className="text-4xl mb-3">💰</span>
              <h2 className="leading-4 text-[18px]"> Affordable Quality</h2>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2   md:p-5 flex items-center justify-center ">
          <ul className="w-full  text-[14px] list-none space-y-2">
            <li className="w-full flex gap-2 items-center justify-center">
              <CiCircleCheck className="min-w-8 min-h-8 text-blue-700" />
              <span>
                We specialize in Jumbo, Simplex, and Duplex Bagging Machines,
                engineered for precision and long-lasting performance
              </span>
            </li>

            <li className=" flex gap-2 items-center justify-center">
              <CiCircleCheck className="min-w-8 min-h-8 text-blue-700" />
              <span>
                From Bagging and Packing Machines to Conveyors and Material
                Handling Systems, we provide complete weighing and packaging
                solutions
              </span>
            </li>

            <li className="flex gap-2 items-center justify-center">
              <CiCircleCheck className="min-w-8 min-h-8 text-blue-700" />
              <span>
                Our products are designed with smart, technology-led engineering
                to ensure maximum efficiency and reliability
              </span>
            </li>

            <li className="flex gap-2 items-center justify-center">
              <CiCircleCheck className="min-w-8 min-h-8 text-blue-700" />
              <span>
                We believe in building lasting relationships through trust,
                transparency, and dedicated customer support
              </span>
            </li>

            <li className="flex gap-2 items-center justify-center">
              <CiCircleCheck className="min-w-8 min-h-8 text-blue-700" />
              <span>
                Backed by an experienced management team, we ensure fast
                execution and continuous improvement in every process
              </span>
            </li>

            <li className="flex gap-2 items-center justify-center">
              <CiCircleCheck className="min-w-8 min-h-8 text-blue-700" />
              <span>
                Our Annual Maintenance Contracts guarantee smooth operation and
                extended machine life for uninterrupted performance
              </span>
            </li>

            <li className="flex gap-2 items-center justify-center">
              <CiCircleCheck className="min-w-8 min-h-8 text-blue-700" />
              <span>
                Equipped with a state-of-the-art manufacturing unit and
                organized warehouse for seamless production and delivery
              </span>
            </li>

            <li className="flex gap-2 items-center justify-center">
              <CiCircleCheck className="min-w-8 min-h-8 text-blue-700" />
              <span>
                Delivering premium-grade equipment that blends performance and
                durability—at highly competitive prices
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GSAPCarousel;
