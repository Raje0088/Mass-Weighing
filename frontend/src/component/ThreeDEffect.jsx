import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    position: "CEO, TechInnovate",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Mass Weighing & Bagging has transformed our production line with their precision weighing systems. The accuracy and reliability of their equipment have significantly reduced our material waste and improved overall efficiency.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Operations Manager, FoodPro Industries",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "We've been using Mass Weighing's bagging systems for over 3 years now. Their machines are not only robust and reliable but also backed by exceptional technical support. A true partner in our growth journey.",
  },
  {
    id: 3,
    name: "Rajesh Patel",
    position: "Plant Director, AgriTech Solutions",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    text: "The custom weighbridge solution provided by Mass Weighing has streamlined our logistics operations. Their attention to detail during installation and calibration ensures we get accurate readings every time.",
  },
  {
    id: 4,
    name: "Lisa Wong",
    position: "Quality Control Manager, PharmaBlend",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "In our pharmaceutical manufacturing, precision is non-negotiable. Mass Weighing's systems have consistently delivered the accuracy we need, with excellent validation documentation and compliance support.",
  },
];

const ThreeDEffect = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 forward, -1 backward
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const autoplayRef = useRef(null);

  useEffect(() => {
    // Perspective and initial state
    gsap.set(containerRef.current, { perspective: 1200 });
    gsap.set(cardRef.current, {
      transformStyle: "preserve-3d",
      z: -300,
      rotateY: 20,
      opacity: 0,
    });

    // Intro animation when section comes into view
    gsap.to(cardRef.current, {
      z: 0,
      rotateY: 0,
      opacity: 1,
      duration: 0.9,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });

    // Parallax background layers
    gsap.utils.toArray([".pl-1", ".pl-2", ".pl-3"]).forEach((sel, i) => {
      gsap.to(sel, {
        y: i === 0 ? 40 : i === 1 ? -30 : 20,
        scale: 1.03,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Mouse tilt effect
    const onMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rx = gsap.utils.mapRange(0, rect.height, 10, -10, y);
      const ry = gsap.utils.mapRange(0, rect.width, -12, 12, x);
      gsap.to(cardRef.current, {
        rotateX: rx,
        rotateY: ry,
        duration: 0.4,
        ease: "power2.out",
      });
    };
    const onLeave = () => {
      gsap.to(cardRef.current, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    };
    const el = containerRef.current;
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Auto rotate
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(autoplayRef.current);
  }, []);

  const resetTimer = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    resetTimer();
  };
  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    resetTimer();
  };

  // Flip out/in animation on change
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(cardRef.current, {
      rotateY: direction > 0 ? -90 : 90,
      z: -300,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
    })
      .set(cardRef.current, {
        rotateY: direction > 0 ? 90 : -90,
        z: -300,
        opacity: 0,
      })
      .to(cardRef.current, {
        rotateY: 0,
        z: 0,
        opacity: 1,
        duration: 0.9,
        ease: "back.out(1.7)",
      });
  }, [currentIndex, direction]);

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="gallery ">Testimonial</h2>
          <span className="text-borders w-[80px] mt-1 border-b-4 border-black"></span>
        </div>

        <div
          ref={containerRef}
          className="relative h-[420px] md:h-[360px] mx-auto max-w-4xl"
          style={{ perspective: "1200px" }}
        >
          {/* Parallax background layers */}
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="pl-1 absolute -top-10 -left-10 w-64 h-64 bg-blue-200/30 rounded-full blur-2xl"></div>
            <div className="pl-2 absolute top-1/3 right-0 w-72 h-72 bg-indigo-200/30 rounded-full blur-2xl"></div>
            <div className="pl-3 absolute bottom-0 left-1/4 w-56 h-56 bg-cyan-200/30 rounded-full blur-xl"></div>
          </div>

          {/* 3D Card */}
          <div
            ref={cardRef}
            className="absolute w-full h-full"
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden h-full flex flex-col md:flex-row transform-gpu">
              <div className="md:w-1/3 bg-blue-600 p-8 flex flex-col justify-center items-center text-white">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white mb-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="">
                  {testimonials[currentIndex].name}
                </h2>
                <p className="text-blue-200">
                  {testimonials[currentIndex].position}
                </p>
              </div>
              <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <svg
                  className="w-10 h-10 text-blue-200 mb-4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                </svg>
                <p className="text-gray-600 text-base italic leading-relaxed">
                  {testimonials[currentIndex].text}
                </p>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                  resetTimer();
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="absolute w-full flex justify-between items-center top-1/2 -translate-y-1/2 px-4 z-10">
            <button
              onClick={handlePrev}
              className="bg-white/80 hover:bg-white text-blue-600 p-2 rounded-full shadow-lg transform transition-transform hover:scale-110"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="bg-white/80 hover:bg-white text-blue-600 p-2 rounded-full shadow-lg transform transition-transform hover:scale-110"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDEffect;
