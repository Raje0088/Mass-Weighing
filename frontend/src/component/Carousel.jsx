import React, { useEffect, useRef, useState } from "react";
import carou1 from "../assets/carousel/carousel1.jpg";
import carou2 from "../assets/carousel/carousel2.jpg";
import carou3 from "../assets/carousel/carousel3.jpg";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const Carousel = () => {
  const images = [carou1, carou2, carou3];
  const carouRef = useRef();
  const innerRef = useRef();
  const [index, setIndex] = useState(0); // for manual control
  const tlRef = useRef(); // GSAP timeline reference

  const carouselContent = [
    {
      title: "Precision Measurement Systems",
      subtitle: "For Industries That Demand Accuracy",
      description:
        "Advanced weighing systems designed for industrial applications with unmatched precision and reliability.",
      buttonText: "Explore Products",
    },
    {
      title: "Innovative Technology",
      subtitle: "Transforming Industrial Processes",
      description:
        "Cutting-edge weighing technology that streamlines operations and enhances productivity.",
      buttonText: "Learn More",
    },
    {
      title: "Expert Support",
      subtitle: "From Installation to Maintenance",
      description:
        "Comprehensive service solutions to ensure your weighing systems perform at their best.",
      buttonText: "Contact Us",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Create a continuous sliding effect by duplicating the first slide at the end
      const totalSlides = images.length;
      const slideWidth = 100; // 100% width per slide
      
      const t1 = gsap.timeline({
        repeat: -1,
        defaults: { ease: "power2.inOut" },
      });
      
      // Initial position
      gsap.set(innerRef.current, { xPercent: 0 });
      
      // Animate through all slides continuously
      for (let i = 0; i < totalSlides; i++) {
        t1.to(innerRef.current, {
          xPercent: -i * slideWidth,
          duration: 1.5,
          delay: 3, // pause on each slide
          onStart: () => setIndex(i),
        });
      }
      
      // Instead of jumping back, continue sliding in the same direction
      // by moving beyond the last slide to a duplicate of the first slide
      t1.to(innerRef.current, {
        xPercent: -totalSlides * slideWidth,
        duration: 1.5,
        delay: 3,
        onComplete: () => {
          // Instantly reset to first slide without animation (not visible to user)
          gsap.set(innerRef.current, { xPercent: 0 });
          setIndex(0);
        },
      });

      tlRef.current = t1; // assign timeline for manual control
    }, carouRef);

    return () => ctx.revert();
  }, []);

  // Manual navigation buttons
  const next = () => {
    tlRef.current.pause(); // pause timeline
    setIndex((prev) => {
      const newIndex = (prev + 1) % images.length;
      gsap.to(innerRef.current, {
        xPercent: -newIndex * 100,
        duration: 0.6,
        ease: "power3.out",
      });
      return newIndex;
    });
    // Resume timeline after a short delay
    setTimeout(() => tlRef.current.restart(), 3000);
  };

  const prev = () => {
    tlRef.current.pause();
    setIndex((prev) => {
      const newIndex = prev === 0 ? images.length - 1 : prev - 1;
      gsap.to(innerRef.current, {
        xPercent: -newIndex * 100,
        duration: 0.6,
        ease: "power3.out",
      });
      return newIndex;
    });
    // Resume timeline after a short delay
    setTimeout(() => tlRef.current.restart(), 3000);
  };

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="w-full" id="home">
      <div className="overflow-hidden relative" ref={carouRef}>
        <div className="w-full flex" ref={innerRef}>
          {/* Original slides */}
          {images.map((item, idx) => (
            <div
              key={idx}
              className="w-full h-[calc(100vh-100px)] flex-shrink-0 relative"
            >
              <img
                src={item}
                alt="carousel image"
                className="w-full h-full z-0 object-cover object-center"
              />
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>

              {/* Content for each slide */}
              <motion.div
                className="absolute inset-0 z-20 flex flex-col justify-center md:items-start px-20 lg:px-24 text-white"
                initial="hidden"
                animate={idx === index ? "visible" : "hidden"}
                variants={textVariants}
              >
                <motion.span
                  className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm mb-4"
                  variants={itemVariants}
                >
                  {carouselContent[idx].subtitle}
                </motion.span>
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-2xl"
                  variants={itemVariants}
                >
                  {carouselContent[idx].title}
                </motion.h1>
                <motion.p
                  className="text-lg md:text-xl max-w-xl mb-8 text-gray-200"
                  variants={itemVariants}
                >
                  {carouselContent[idx].description}
                </motion.p>
                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {carouselContent[idx].buttonText}
                </motion.button>
              </motion.div>
            </div>
          ))}
          
          {/* Duplicate first slide for continuous effect */}
          <div
            key="duplicate-first"
            className="w-full h-[calc(100vh-100px)] flex-shrink-0 relative"
          >
            <img
              src={images[0]}
              alt="carousel image"
              className="w-full h-full z-0 object-cover object-center"
            />
            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>

            {/* Content for duplicate slide */}
            <motion.div
              className="absolute inset-0 z-20 flex flex-col justify-center md:items-start px-20 lg:px-24 text-white"
              initial="hidden"
              animate={index === images.length ? "visible" : "hidden"}
              variants={textVariants}
            >
              <motion.span
                className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm mb-4"
                variants={itemVariants}
              >
                {carouselContent[0].subtitle}
              </motion.span>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-2xl"
                variants={itemVariants}
              >
                {carouselContent[0].title}
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl max-w-xl mb-8 text-gray-200"
                variants={itemVariants}
              >
                {carouselContent[0].description}
              </motion.p>
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {carouselContent[0].buttonText}
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Navigation controls */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-4 z-30">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                tlRef.current.pause();
                setIndex(idx);
                gsap.to(innerRef.current, {
                  xPercent: -idx * 100,
                  duration: 0.6,
                  ease: "power3.out",
                });
                tlRef.current.restart();
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === index
                  ? "bg-blue-600 w-10"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Arrow controls */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4 md:px-8 z-30">
          <button
            onClick={prev}
            className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300"
            aria-label="Previous slide"
          >
            <FaArrowCircleLeft className="text-2xl md:text-3xl" />
          </button>
          <button
            onClick={next}
            className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300"
            aria-label="Next slide"
          >
            <FaArrowCircleRight className="text-2xl md:text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
