import React, { useRef, useEffect, useState } from "react";
import img1 from "../assets/Pic/img1.jpg";
import img2 from "../assets/Pic/img2.png";
import img3 from "../assets/Pic/img3.jpg";
import img4 from "../assets/Pic/img4.jpg";
import img5 from "../assets/Pic/img5.jpg";
import img6 from "../assets/Pic/img6.jpg";
import img7 from "../assets/Pic/img7.jpg";
import img8 from "../assets/Pic/img8.jpg";
import img9 from "../assets/Pic/img9.png";
import img10 from "../assets/Pic/img10.jpg";
import img11 from "../assets/Pic/img11.jpg";
import img12 from "../assets/Pic/img12.jpg";
import img13 from "../assets/Pic/img13.png";
import img14 from "../assets/Pic/img14.jpg";
import img15 from "../assets/Pic/img15.jpg";
import img16 from "../assets/Pic/img16.jpg";
import img17 from "../assets/Pic/img17.jpg";
import img18 from "../assets/Pic/img18.png";
import img19 from "../assets/Pic/img19.jpg";
import img20 from "../assets/Pic/img20.jpg";

import { gsap } from "gsap";
import { Draggable } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import banner from "../assets/mass_weighing_mission_banner.png";

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
  ];

  const wrapRef = useRef(null);
  const slidesRef = useRef([]);
  let instanceRef = useRef(null);
  let draggableInstance = useRef(null);
  const [cursorIndex, setCursorIndex] = useState(null);

  useEffect(() => {
    const totalWidth = slidesRef.current.scrollWidth / 2;

    // Seamless auto-scroll
    instanceRef.current = gsap.to(slidesRef.current, {
      x: `-=${totalWidth}`,
      duration: 300,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % -totalWidth),
      },
    });

    // Smooth draggable scroll + resume from position
    draggableInstance.current = Draggable.create(slidesRef.current, {
      type: "x",
      inertia: true,
      onPress: () => {
        instanceRef.current.pause();
      },
      onRelease: function () {
        const currentX = gsap.getProperty(slidesRef.current, "x");
        instanceRef.current.kill();

        // Restart infinite scroll from current dragged position
        instanceRef.current = gsap.to(slidesRef.current, {
          x: `-=${totalWidth + currentX}`,
          duration: 300,
          ease: "linear",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % -totalWidth),
          },
        });
      },
    })[0];

    return () => {
      if (instanceRef.current) instanceRef.current.kill();
      if (draggableInstance.current) draggableInstance.current.kill();
    };
  }, []);

  //  useEffect(() => {
  //     // Scroll animations for highlights and borders
  //     gsap.fromTo(
  //       ".highlight",
  //       { y: -20, opacity: 0 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 1,
  //         ease: "power3.out",
  //         scrollTrigger: {
  //           trigger: ".highlight",
  //           start: "top 70%",
  //           toggleActions: "play none none none",
  //         },
  //       }
  //     );

  //     gsap.fromTo(
  //       ".gallery",
  //       { y: -30 },
  //       {
  //         y: 0,
  //         duration: 2,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: ".gallery",
  //           start: "top 60%",
  //           toggleActions: "play none none none",
  //         },
  //       }
  //     );

  //     gsap.fromTo(
  //       ".text-borders",
  //       { scaleX: 0, transformOrigin: "center" },
  //       {
  //         scaleX: 1,
  //         borderColor: "red",
  //         duration: 2,
  //         ease: "power2.inOut",
  //         repeat: -1,
  //         yoyo: true,
  //       }
  //     );
  //   }, []);
  useEffect(() => {
    // Create a timeline for coordinated animations
    // const highlightsTl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".highlights-section",
    //     start: "top 75%",
    //     end: "bottom 60%",
    //     toggleActions: "play none none reverse",
    //   },
    // });

    // Animate the heading with a reveal effect
    // highlightsTl.fromTo(
    //   ".highlights-heading",
    //   { y: -20, opacity: 0, scale: 0.9 },
    //   { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
    // );

    // Animate each highlight item with staggered effects
    // gsap.utils.toArray(".highlight").forEach((item, i) => {
    //   const icon = item.querySelector(".highlight-icon");
    //   const text = item.querySelector(".highlight-text");

    //   const itemTl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: item,
    //       start: "top 85%",
    //       toggleActions: "play none none reverse",
    //     },
    //   });

    //   // Create a more dynamic animation sequence for each item
    //   itemTl
    //     .fromTo(
    //       item,
    //       { x: -50, opacity: 0 },
    //       {
    //         x: 0,
    //         opacity: 1,
    //         duration: 0.7,
    //         ease: "power2.out",
    //         delay: i * 0.15,
    //       }
    //     )
    //     .fromTo(
    //       icon,
    //       { scale: 0, rotate: -45 },
    //       { scale: 1, rotate: 0, duration: 0.5, ease: "back.out(1.7)" },
    //       "-=0.4"
    //     )
    //     .fromTo(
    //       text,
    //       { y: 10, opacity: 0 },
    //       { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
    //       "-=0.3"
    //     );
    // });

    // Add a subtle background effect to the entire section
    // gsap.fromTo(
    //   ".highlights-section",
    //   { backgroundColor: "rgba(255,255,255,0)" },
    //   {
    //     backgroundColor: "rgba(249,250,251,0.7)",
    //     duration: 1.5,
    //     scrollTrigger: {
    //       trigger: ".highlights-section",
    //       start: "top 80%",
    //       toggleActions: "play none none reverse",
    //     },
    //   }
    // );
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

    const currentX = gsap.getProperty(slidesRef.current, "x");

    // Move next by desired offset
    gsap.to(slidesRef.current, {
      x: currentX - wrapRef.current.offsetWidth / 3,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        const newX = gsap.getProperty(slidesRef.current, "x");
        startInfiniteScroll(newX); // restart from new position
      },
    });
  };

  const handlePrev = () => {
    if (!instanceRef.current) return;
    instanceRef.current.pause();

    const currentX = gsap.getProperty(slidesRef.current, "x");

    // Move prev by desired offset
    gsap.to(slidesRef.current, {
      x: currentX + wrapRef.current.offsetWidth / 3,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        const newX = gsap.getProperty(slidesRef.current, "x");
        startInfiniteScroll(newX); // restart from new position
      },
    });
  };

  // helper function to start infinite scroll from current position
  const startInfiniteScroll = (fromX = 0) => {
    const totalWidth = slidesRef.current.scrollWidth / 2;

    if (instanceRef.current) instanceRef.current.kill();

    instanceRef.current = gsap.to(slidesRef.current, {
      x: `-=${totalWidth + fromX}`,
      duration: 300,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % -totalWidth),
      },
    });
  };

  return (
    <div className="main ">
      <div className="shadow-2xl mt-10">
        {/* Heading */}
        <div className="w-full py-5 relative flex flex-col items-center">
          <h2 className="gallery">Vision</h2>
          <span className="text-borders w-[80px] mt-1 border-b-4 border-black"></span>
        </div>

        {/* Vision Background */}
        <div
          style={{
            width: "100%",
            height: "auto",
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="p-5 text-center"
        >
          <h4>
            At Mass Weighing & Bagging Pvt. Ltd., our vision is to lead the
            industry with innovation, sustainability, and technological
            excellence. We aim to transform ideas into cutting-edge solutions,
            empowering our clients with precision, efficiency, and unmatched
            reliability.
          </h4>
        </div>

        {/* Key Vision Highlights */}
        <div className="w-full flex items-center justify-center flex-col py-4">
          <h4 className="highlights-heading font-bold text-lg mt-2 mb-2">
            Vision Highlights
          </h4>
          <div className="w-full highlights-section  flex items-center justify-center  p-4 rounded-lg">
            <div className="space-y-3 text-[14px] grid grid-cols-1 md:grid-cols-2  gap-x-10 px-5">
              <span className="highlight flex items-center justify-center">
                <div className="highlight-icon mr-3 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c1.333-4 5-4 6 0 1.333 4-1 8-6 8s-7.333-4-6-8c1-3.5 4-4 6 0z"
                    />
                  </svg>
                </div>
                <span className="highspanght-text">
                  <strong>Innovation Leadership:</strong> Driving next-gen
                  solutions for modern industry challenges.
                </span>
              </span>
              <span className="highlight flex items-center">
                <div className="highlight-icon mr-3 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7l6 6-6 6M21 7l-6 6 6 6"
                    />
                  </svg>
                </div>
                <span className="highlight-text">
                  <strong>Global Impact:</strong> Extending quality and
                  precision beyond borders with sustainable solutions.
                </span>
              </span>
              <span className="highlight flex items-center">
                <div className="highlight-icon mr-3 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v18m9-9H3"
                    />
                  </svg>
                </div>
                <span className="highlight-text">
                  <strong>Sustainable Practices:</strong> Committing to
                  eco-friendly engineering and responsible growth.
                </span>
              </span> 
              <span className="highlight flex items-center">
                <div className="highlight-icon mr-3 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L15 8l6 1-4 4 1 6-5-3-5 3 1-6-4-4 6-1 3-6z" />
                  </svg>
                </div>
                <span className="highlight-text">
                  <strong>Technological Excellence:</strong> Leveraging advanced
                  technology to redefine industry benchmarks.
                </span>
              </span> 
              <span className="highlight flex items-center">
                <div className="highlight-icon mr-3 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="highlight-text">
                  <strong>Client Empowerment:</strong> Enabling partners with
                  reliable, precise, and scalable solutions.
                </span>
              </span> 
              <span className="highlight flex items-center">
                <div className="highlight-icon mr-3 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 17l6-6 4 4 8-8"
                    />
                  </svg>
                </div>
                <span className="highlight-text">
                  <strong>Continuous Growth:</strong> Fostering innovation,
                  learning, and improvement across every aspect of our business.
                </span>
              </span> 
            </div>
          </div>
        </div>
      </div>

      <div className="shadow-2xl py-5">
        <div className="w-full py-5 relative flex flex-col items-center">
          <h2 className="gallery ">Mission</h2>
          <span className="text-borders w-[80px] mt-1 border-b-4 border-black"></span>
        </div>

        <div
          style={{
            width: "100%",
            height: "auto",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${banner})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="p-5 text-center "
        >
          <h4 className="">
            At Mass Weighing & Bagging Pvt. Ltd., every image reflects our
            dedication to precision, innovation, and teamwork. From concept to
            completion, our skilled engineers and technicians craft machines
            that define reliability and performance. Each frame captures our
            commitment to quality and the spirit of continuous improvement. With
            advanced infrastructure and a passionate team, we turn technology
            into trust and ideas into industry-leading solutions.
          </h4>
        </div>
        <div className="w-full flex items-center justify-center flex-col py-4">
          <h4 className="highlights-heading font-bold text-lg mt-2 mb-2">
            Key Highlights
          </h4>
          <div className="w-full highlights-section p-4 rounded-lg">
            <div className="space-y-3 text-[14px] grid grid-cols-1 md:grid-cols-2 gap-x-10 px-5 ">
              <span className="highlight flex items-center ">
                <div className="highlight-icon mr-3 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-1-"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="highlight-text">
                  <strong>Precision Engineering:</strong> Every machine is
                  crafted with accuracy that defines industry standards.
                </span>
              </span> 
              <span className="highlight flex items-center">
                <div className="highlight-icon mr-3 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <span className="highlight-text">
                  <strong>Innovative Design:</strong> Blending technology with
                  creativity to deliver smart weighing solutions.
                </span>
              </span> 
              <span className="highlight flex items-center">
                <div className="highlight-icon mr-3 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <span className="highlight-text">
                  <strong>Skilled Workforce:</strong> A team united by passion,
                  experience, and a drive for perfection.
                </span>
              </span> 
              <span className="highlight flex items-center">
                <div className="highlight-icon mr-3 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <span className="highlight-text">
                  <strong>Advanced Infrastructure:</strong> State-of-the-art
                  facilities ensuring seamless production and testing.
                </span>
              </span> 
              <span className="highlight flex items-center">
                <div className="highlight-icon mr-3 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <span className="highlight-text">
                  <strong>Commitment to Quality:</strong> Uncompromising focus
                  on reliability, performance, and customer trust.
                </span>
              </span> 
              <span className="highlight flex items-center">
                <div className="highlight-icon mr-3 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65M12 14.5V17m0 0v2.5M12 17h2.5M12 17h-2.5"
                    />
                  </svg>
                </div>
                <span className="highlight-text">
                  <strong>Global Vision:</strong> Delivering excellence that
                  goes beyond borders and industries.
                </span>
              </span> 
            </div>
          </div>
        </div>
      </div>

      <div className="heading-div flex flex-col">
        <h2>Our Expert Team</h2>
        <span className="text-borders w-[80px] mt-1 border-b-4 border-black"></span>
      </div>
      <div
        ref={wrapRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`w-full h-64 overflow-hidden rounded-md relative`}
      >
        <div
          onClick={() => {
            handlePrev();
          }}
          className="absolute top-[50%] -translate-y-1/2 left-2 z-10 w-[50px] h-[50px] flex items-center justify-center bg-blue-500  rounded-full cursor-pointer text-white opacity-30 hover:opacity-100"
        >
          <FaAngleLeft />
        </div>
        <div
          ref={slidesRef}
          className="w-full h-full  will-change-transform flex  gap-5"
        >
          {[...gallery, ...gallery].map((item, i) => (
            <div
              key={i}
              // ref={(e1) => setSlideRef(e1, i)}
              className="w-[100%] md:w-[32%]  h-full flex-shrink-0 relative group overflow-hidden rounded-2xl"
            >
              <div className="w-full h-full flex flex-shrink-0 items-center justify-center bg-gray-100 shadow-xl">
                <img
                  src={item}
                  alt=""
                  loading="lazy"
                  draggable="false"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-115 rounded-2xl "
                />
              </div>
              <div className="bg-black opacity-20  translate-y-0 duration-300 group-hover:translate-y-full w-full h-full absolute  top-0 right-0 z-[999]"></div>
            </div>
          ))}
        </div>
        <div
          onClick={() => {
            handleNext();
          }}
          className="absolute top-[50%] -translate-y-1/2 right-2 z-10 w-[50px] h-[50px] flex items-center justify-center bg-blue-500  rounded-full cursor-pointer text-white opacity-30 hover:opacity-100"
        >
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
