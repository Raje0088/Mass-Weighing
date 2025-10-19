import React, { useEffect } from "react";
import { FaAddressBook } from "react-icons/fa6";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./Contact.module.css";
import phone from "../assets/gif/phone.gif";
import email from "../assets/gif/email.gif";
import address from "../assets/gif/location.png";
import { MdMarkEmailRead } from "react-icons/md";

const Contact = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const leftDoor = card.querySelector(".left-door");
      const rightDoor = card.querySelector(".right-door");

      card.addEventListener("mouseenter", () => {
        gsap.to(leftDoor, {
          x: "-100%",
          duration: 0.7,
          ease: "power2.out",
        });
        gsap.to(rightDoor, {
          x: "100%",
          duration: 0.7,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to([leftDoor, rightDoor], {
          x: 0,
          duration: 0.6,
          ease: "power1.out",
        });
      });
    });
  }, []);
  return (
    <div className="main">
      <div className="heading-div flex flex-col ">
        <h2>Contact Us</h2>
        <span className="text-borders w-[80px] mt-1 border-b-4 border-black"></span>
      </div>
      <div>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.8526927943276!2d73.81956657518982!3d18.444996282633994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2951775fe86c5%3A0x4d5c1d7fef182925!2sMass%20Weighing%20%26%20Bagging%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1760293440575!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowfullscreen={true}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7574.008658580079!2d73.81650401121162!3d18.34708692422449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc293fc153aa287%3A0xcbd38c37553970e2!2sMass%20Weighing%20And%20Bagging%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1760860468610!5m2!1sen!2sin"
             width="100%"
          height="450"
          allowfullscreen={true}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="w-auto h-auto flex flex-col md:flex-row  items-center justify-between gap-10 py-10">
        <div
          className={` ${styles.card} card border-2 border-gray-600 relative overflow-hidden w-[250px] h-[300px] flex flex-col gap-5 items-center justify-center  p-5 rounded-2xl`}
        >
          <div className="w-full flex items-center justify-center ">
            {/* <FaAddressBook className="w-12 h-12 text-gray-500" /> */}
            <img
              src={address}
              alt=""
              className="w-16 h-16 rounded-full bg-gray-500"
            />
          </div>

          <h4 className="">
            Gat NO. 63, Ranje pune satara road , Taluka Bhor,Pune - 412205,
            Maharashtra, India
          </h4>
          <div className="open-card absolute text-white  top-0 left-0 w-full h-full flex items-center justify-center">
            <div
              className={`left-door w-1/2 h-full bg-gradient-to-r from-gray-800 to-gray-600 shadow-inner  flex items-center justify-end text-white`}
            >
              <h1 className="text-2xl tracking-wider">Add</h1>
            </div>
            <div
              className={`right-door w-1/2 h-full bg-gradient-to-l from-gray-800 to-gray-600 shadow-inner  border-gray-400 flex items-center justify-start text-white`}
            >
              <h1 className="text-2xl tracking-wider">ress</h1>
            </div>
          </div>
        </div>
        <div
          className={` ${styles.card} card border-2 border-gray-600 relative overflow-hidden w-[250px] h-[300px] flex flex-col gap-5 items-center justify-center  p-5 rounded-2xl`}
        >
          <div className="w-full flex items-center justify-center ">
            {/* <MdMarkEmailRead  className="w-12 h-12 text-gray-500" /> */}
            <img
              src={email}
              alt=""
              className="w-16 h-16 rounded-full bg-gray-500"
            />
          </div>

          <h4 className="">i2s2@gmail.com</h4>
          <div className="open-card absolute text-white  top-0 left-0 w-full h-full flex items-center justify-center">
            <div
              className={`left-door w-1/2 h-full bg-gradient-to-r from-gray-800 to-gray-600 shadow-inner  flex items-center justify-end text-white`}
            >
              <h1 className="text-2xl tracking-wider">Em</h1>
            </div>
            <div
              className={`right-door w-1/2 h-full bg-gradient-to-l from-gray-800 to-gray-600 shadow-inner  border-gray-400 flex items-center justify-start text-white`}
            >
              <h1 className="text-2xl tracking-wider">ail</h1>
            </div>
          </div>
        </div>
        <div
          className={` ${styles.card} card border-2 border-gray-600 relative overflow-hidden w-[250px] h-[300px] flex flex-col gap-5 items-center justify-center  p-5 rounded-2xl`}
        >
          <div className="w-full flex items-center justify-center ">
            <img
              src={phone}
              alt=""
              className="w-16 h-16 rounded-full bg-gray-500"
            />
          </div>
          <span>
            <h4 className="">Mr. Bharat Eknath Patil (Director)</h4>
            <h4 className="">08045812075</h4>
          </span>

          <div className="open-card absolute text-white  top-0 left-0 w-full h-full flex items-center justify-center">
            <div
              className={`left-door w-1/2 h-full bg-gradient-to-r from-gray-800 to-gray-600 shadow-inner  flex items-center justify-end text-white`}
            >
              <h1 className="text-2xl tracking-wider">Cont</h1>
            </div>
            <div
              className={`right-door w-1/2 h-full bg-gradient-to-l from-gray-800 to-gray-600 shadow-inner  border-gray-400 flex items-center justify-start text-white`}
            >
              <h1 className="text-2xl tracking-wider">act</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
