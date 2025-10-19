import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/Pic/img1.jpg";
import vdo from "../assets/video1.mp4";
import { gsap } from "gsap";
import { Draggable } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(Draggable);
gsap.registerPlugin(ScrollTrigger);

const About = () => {

  useEffect(() => {
    gsap.fromTo(
      ".text-borders",
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

  return (
    <div className="main overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 "
      >
        <motion.h2
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[24px]  font-bold text-gray-800 "
        >
          About Us
        </motion.h2>
        <div className="text-borders w-[80px] mt-1 border-b-4 border-black mx-auto"></div>
        {/* <span className="text-borders w-[80px] mt-1 border-b-4 border-black"></span> */}
      </motion.div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full  h-full bg-blue-500 rounded-lg overflow-hidden shadow-xl"
        >
          <img
            src={aboutImage}
            alt="Mass Weighing & Bagging Machinery"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Story
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Mass Weighing & Bagging Private Limited is a dynamic manufacturing
            company established in 2014 and located in Pune, Maharashtra. Our
            company is recognized as a leading manufacturer of advanced
            machinery, including Simplex Type Bagging Machines, Jumbo Bag
            Packing Machines, Duplex Type Bagging Machines, Material Handling
            Systems, and Industrial Conveyors.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We are happy to see that our customers are satisfied, they not just
            give us repeated business but also promote by word of mouth. We are
            working hard to maintain our leading image by serving customers
            exceptionally well.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-4 rounded-lg shadow-md flex flex-col items-center justify-center"
            >
              <h4 className="font-bold text-blue-600  text-4xl  ">10+</h4>
              <p className="text-gray-700 text-lg md:text-xl">Years Experience</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-4 rounded-lg shadow-md flex flex-col items-center justify-center"
            >
              <h4 className="font-bold text-blue-600 text-4xl">500+</h4>
              <p className="text-gray-700 text-lg md:text-xl text-nowrap">Projects Completed</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-4 rounded-lg shadow-md flex flex-col items-center justify-center"
            >
              <h4 className="font-bold text-blue-600 text-4xl ">50+</h4>
              <p className="text-gray-700 text-lg md:text-xl text-nowrap">Team Members</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-4 rounded-lg shadow-md flex flex-col items-center justify-center"
            >
              <h4 className="font-bold text-blue-600 text-4xl ">100%</h4>
              <p className="text-gray-700 text-lg md:text-xl text-nowrap">Client Satisfaction</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="w-full h-auto py-10">
        <video
          width="100%"
          controls
          autoPlay
          loop
          muted
          className="rounded-2xl"
        >
          <source src={vdo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default About;
