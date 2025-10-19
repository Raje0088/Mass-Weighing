import React from "react";
import styles from "./AnimateText.module.css";
import { gsap } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AnimateText = () => {
  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".main1",
        // markers: true,
        start: "top 60%",
        end: "bottom 90%",
        toggleActions: "play reverse play reverse",
        scrub: 5,
      },
    });
    t1.from(".box1", {
      x: 0,
      y: 300,
      duration: 0.5,
      opacity: 0,
      ease: "back.out(3)",
      rotate: -60,
      // scrollTrigger:{
      //   trigger:".box1",
      //   start:"top 100%",
      //   end:"top 70%",
      //   markers:true,
      //   scrub:1,
      //   toggleActions:"play reverse play reverse",
      // }
    });
    t1.from(".box2", {
      x: 0,
      y: 300,
      duration: 2,
      opacity: 0,
      ease: "back.out(3)",
      rotate: 30,
    });
    t1.from(".box3", {
      x: 0,
      y: 300,
      duration: 2,
      opacity: 0,
      ease: "back.out(3)",
      rotate: 45,
    });
  }, []);

  return (
    <div className={`${styles.main} main1 flex flex-col md:flex-row main`}>
      <div className={`${styles.box1} box1 bg-white`}></div>
      <div className={`${styles.box2} box2 bg-red-500`}></div>
      <div className={`${styles.box3} box3 bg-yellow-300`}></div>
    </div>
  );
};

export default AnimateText;
