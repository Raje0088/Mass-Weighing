import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/Pic/img1.jpg";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16" id="about">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <motion.h2 
          initial={{ y: -50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[16px]  font-bold text-gray-800 mb-2"
        >
          About Us
        </motion.h2>
        <div className="w-12 h-1 bg-blue-600 mx-auto"></div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-lg overflow-hidden shadow-xl"
        >
          <img 
            src={aboutImage} 
            alt="Mass Weighing & Bagging Machinery" 
            className="w-full h-auto object-cover"
          />
        </motion.div>
        
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Mass Weighing & Bagging Private Limited is a dynamic manufacturing company established in 2014 and located in Pune, Maharashtra. Our company is recognized as a leading manufacturer of advanced machinery, including Simplex Type Bagging Machines, Jumbo Bag Packing Machines, Duplex Type Bagging Machines, Material Handling Systems, and Industrial Conveyors.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We are happy to see that our customers are satisfied, they not just give us repeated business but also promote by word of mouth. We are working hard to maintain our leading image by serving customers exceptionally well.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mt-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-4 rounded-lg shadow-md"
            >
              <h4 className="font-bold text-blue-600 text-xl mb-2">10+</h4>
              <p className="text-gray-700">Years Experience</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-4 rounded-lg shadow-md"
            >
              <h4 className="font-bold text-blue-600 text-xl mb-2">500+</h4>
              <p className="text-gray-700">Projects Completed</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-4 rounded-lg shadow-md"
            >
              <h4 className="font-bold text-blue-600 text-xl mb-2">50+</h4>
              <p className="text-gray-700">Team Members</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-4 rounded-lg shadow-md"
            >
              <h4 className="font-bold text-blue-600 text-xl mb-2">100%</h4>
              <p className="text-gray-700">Client Satisfaction</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
