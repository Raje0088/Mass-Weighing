import React, { useRef, useEffect, useState } from "react";
import img1 from "../assets/Pic/img1.jpg";
import img2 from "../assets/Pic/img2.jpg";
import img3 from "../assets/Pic/img3.jpg";
import img4 from "../assets/Pic/img4.jpg";
import img5 from "../assets/Pic/img5.jpg";
import img6 from "../assets/Pic/img6.jpg";
import img7 from "../assets/Pic/img7.jpg";
import img8 from "../assets/Pic/img8.jpg";
import img9 from "../assets/Pic/img9.jpg";
import img10 from "../assets/Pic/img10.jpg";
import img11 from "../assets/Pic/img11.jpg";
import img12 from "../assets/Pic/img12.jpg";
import img13 from "../assets/Pic/img13.jpg";
import img14 from "../assets/Pic/img14.jpg";
import img15 from "../assets/Pic/img15.jpg";
import img16 from "../assets/Pic/img16.jpg";
import img17 from "../assets/Pic/img17.jpg";
import img18 from "../assets/Pic/img18.jpg";
import img19 from "../assets/Pic/img19.jpg";
import img20 from "../assets/Pic/img20.jpg";
import img21 from "../assets/Pic/img21.jpg";
import img22 from "../assets/Pic/img22.jpg";
import img23 from "../assets/Pic/img23.jpg";
import img24 from "../assets/Pic/img24.jpg";
import img25 from "../assets/Pic/img25.jpg";
import img26 from "../assets/Pic/img26.jpg";
import img27 from "../assets/Pic/img27.jpg";
import img28 from "../assets/Pic/img28.jpg";
import { gsap } from "gsap";
import { Draggable } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(Draggable);
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const gallery = [
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
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
  ];

  const wrapRef = useRef(null);
  const slidesRef = useRef([]);
  let instanceRef = useRef(null);
  let draggableInstance = useRef(null);

  const slides = [...gallery, ...gallery];

  useEffect(() => {
    const totalWidth = slidesRef.current.scrollWidth / 2;

    instanceRef.current = gsap.to(slidesRef.current, {
      x: `-=${totalWidth}`,
      duration: 300,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % -totalWidth),
      },
    });

    draggableInstance.current = Draggable.create(slidesRef.current, {
      type: "x",
      inertia: true,
      onPress: () => instanceRef.current.pause(),
      onRelease: () => instanceRef.current.play(),
    })[0];

    return () => {
      if (instanceRef.current) instanceRef.current.kill();
      if (draggableInstance.current) draggableInstance.current.kill();
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".highlight",
      { y: -10, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 1,
        scrollTrigger: {
          trigger: ".highlight",
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      ".gallery",
      { y: -30 },
      {
        y: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".gallery",
          start: "top 60%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      ".text-border",
      { scaleX: 0, transformOrigin: "center" },
      {
        scaleX: 1,
        borderColor: "red",
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);

  const handleMouseEnter = () => {
    if (instanceRef.current) instanceRef.current.pause();
  };

  const handleMouseLeave = () => {
    if (instanceRef.current) instanceRef.current.play();
  };

  const handleNext = () => {
    if (!instanceRef.current) return;
    instanceRef.current.pause();

    gsap.to(slidesRef.current, {
      x: `-=${wrapRef.current.offsetWidth / 5}`,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        instanceRef.current.play(); // continue seamless scroll
      },
    });
  };

  const handlePrev = () => {
    instanceRef.current.pause();

    gsap.to(slidesRef.current, {
      x: `+=${wrapRef.current.offsetWidth / 5}`,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        const currentX = gsap.getProperty(slidesRef.current, "x");
        gsap.set(slidesRef.current, { x: currentX });
        instanceRef.current.play();
      },
    });
  };

  return (
    <div className="main">
      <div className="w-full py-5 relative flex flex-col items-center">
        <h2 className="gallery ">Our Gallery</h2>
        <span className="text-borders w-[80px] mt-1 border-b-4 border-black"></span>
      </div>

      <div className="pb-5">
        <h4>
          At Mass Weighing & Bagging Pvt. Ltd., every image reflects our
          dedication to precision, innovation, and teamwork. From concept to
          completion, our skilled engineers and technicians craft machines that
          define reliability and performance. Each frame captures our commitment
          to quality and the spirit of continuous improvement. With advanced
          infrastructure and a passionate team, we turn technology into trust
          and ideas into industry-leading solutions.
        </h4>
      </div>
      <div>
        <h4>Key Highlights</h4>
        <ul>
          <li className="highlight">
            <strong>Precision Engineering:</strong> Every machine is crafted
            with accuracy that defines industry standards.
          </li>
          <li className="highlight">
            <strong>Innovative Design:</strong> Blending technology with
            creativity to deliver smart weighing solutions.
          </li>
          <li className="highlight">
            <strong>Skilled Workforce:</strong> A team united by passion,
            experience, and a drive for perfection.
          </li>
          <li className="highlight">
            <strong>Advanced Infrastructure:</strong> State-of-the-art
            facilities ensuring seamless production and testing.
          </li>
          <li className="highlight">
            <strong>Commitment to Quality:</strong> Uncompromising focus on
            reliability, performance, and customer trust.
          </li>
          <li className="highlight">
            <strong>Global Vision:</strong> Delivering excellence that goes
            beyond borders and industries.
          </li>
        </ul>
      </div>
      <div className="heading-div flex flex-col">
        <h2>Our Expert Team</h2>
        <span className="text-borders w-[80px] mt-1 border-b-4 border-black"></span>
      </div>
      <div
        ref={wrapRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`w-full h-64 overflow-hidden rounded-md`}
      >
        <div
          ref={slidesRef}
          className="w-full h-full  will-change-transform flex  gap-5"
        >
          {[...gallery, ...gallery].map((item, i) => (
            <div
              key={i}
              // ref={(e1) => setSlideRef(e1, i)}
              className="w-[30%]  h-full flex-shrink-0 relative group overflow-hidden rounded-2xl"
            >
              <div className="w-full h-full flex flex-shrink-0 items-center justify-center bg-gray-100 shadow-xl">
                <img
                  src={item}
                  alt=""
                  loading="lazy"
                  draggable="false"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-125 rounded-2xl "
                />
              </div>
              <div className="bg-black opacity-30  translate-y-0 duration-300 group-hover:translate-y-full w-full h-full absolute  top-0 right-0 z-[999]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
