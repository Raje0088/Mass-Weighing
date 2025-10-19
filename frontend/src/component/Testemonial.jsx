import React, { useRef } from "react";
import styles from "./Testemonial.module.css";
import img1 from "../assets/Client-Logos/Agasti_SSK_Ltd_Akole.png";
import img2 from "../assets/Client-Logos/Anuraj_Sugar_Ltd.png";
import img3 from "../assets/Client-Logos/Jagruti_Sugar_&_Allied_Ind.jpg";
import img4 from "../assets/Client-Logos/Athani_Sugar_Ltd_Bambawade.jfif";
import img5 from "../assets/Client-Logos/Bhima_Sankar_SSk_Ltd.jfif";
import img6 from "../assets/Client-Logos/Bramati_Agro.png";
import img7 from "../assets/Client-Logos/BVFCL.jpg";
import img8 from "../assets/Client-Logos/Chatrapati_Rajaram_Sugar_Factory.jpg";
import img9 from "../assets/Client-Logos/Chalthan_Sugar_Factory.png";
import img10 from "../assets/Client-Logos/Excel_Engg.jpg";
import img11 from "../assets/Client-Logos/Gauri_Sugar.png";
import img12 from "../assets/Client-Logos/Gem_Sugar_Ltd.jpg";
import img13 from "../assets/Client-Logos/Hoganas_India_Pvt_Ltd.png";
import img14 from "../assets/Client-Logos/Jagruti_Sugar_&_Allied_Ind.jpg";
import img15 from "../assets/Client-Logos/Jai_Hind_Sugar_Ltd.png";
import img16 from "../assets/Client-Logos/Kisanveer_Bhuinj.jpg";
import img17 from "../assets/Client-Logos/Kukadi_Sugar_Ltd.jpg";
import img18 from "../assets/Client-Logos/Lunar_Engineering.png";
import img19 from "../assets/Client-Logos/Modern_Engineering_Works.jpg";
import img20 from "../assets/Client-Logos/National_Fertalizer_Vijaypur_MP.jpg";
import img21 from "../assets/Client-Logos/Nav_Bharat_ltd.png";
import img22 from "../assets/Client-Logos/NSL_Majalgaon.jpg";
import img23 from "../assets/Client-Logos/Parag_Sugar_Foodji_Ltd.jfif";
import img24 from "../assets/Client-Logos/Pretech_Automation.jfif";
import img25 from "../assets/Client-Logos/Raj_Process_Equipment.png";
import img26 from "../assets/Client-Logos/Rajaram_Bapu_Patil_SSK.webp";
import img27 from "../assets/Client-Logos/Sahyadri_SSK_Ltd.jpg";
import img28 from "../assets/Client-Logos/Samartha_SSK.png";
import img29 from "../assets/Client-Logos/Samartha_Sugar_Unit_II.avif";
// import img30 from '../assets/Client-Logos/Shree_Ganesh_Khand_Udyog_Sahkari_Mandli_Limited.png'
// import img31 from '../assets/Client-Logos/Shri_Durga_Sugar.png'
// import img32 from '../assets/Client-Logos/Shri_Hanumant_Sugar.png'
// import img33 from '../assets/Client-Logos/Shree_Kurumdas_Industries.png'
// import img34 from '../assets/Client-Logos/Shri_Laxmi_Narshinha_Sugar.png'
// import img35 from '../assets/Client-Logos/Shri_Vinghrator_SSK_Ltd.png'
// import img36 from '../assets/Client-Logos/Shri_Viredheshwar_SSK_Ltd.png'
// import img37 from '../assets/Client-Logos/Someshwer_SSK_Karnatak.png'
// import img38 from '../assets/Client-Logos/Srinath_Maskaba_Sugar_Factory.png'
// import img39 from '../assets/Client-Logos/Utech_Sugar_Ltd.png'
// import img40 from '../assets/Client-Logos/Vasantdada_Sugar_institute.png'
// import img41 from '../assets/Client-Logos/Venkys_India_Ltd.png'
// import img42 from '../assets/Client-Logos/New_Phaltan_Sugar.png'

// import { gsap } from "gsap/all";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger, useGSAP);

const Testemonial = () => {
  const testimonials = [
    { title: "Agasti SSK Ltd Akole", img: img1 },
    { title: "Anuraj Sugar Ltd.", img: img2 },
    { title: "Athani Sugar Ltd. Bambawade", img: img3 },
    { title: "Athani Sugar Shewalewadi", img: img4 },
    { title: "Bhima Sankar SSk Ltd", img: img5 },
    { title: "Bramati Agro", img: img6 },
    { title: "BVFCL", img: img7 },
    { title: "Chalthan Sugar Factory", img: img8 },
    { title: "Chatrapati Rajaram Sugar Factory", img: img9 },
    { title: "Desai SSK Patan", img: img10 },
    { title: "Excel Engg.", img: img11 },
    { title: "Gauri Sugar", img: img12 },
    { title: "Gem Sugar Ltd.", img: img13 },
    { title: "Hoganas India Pvt.Ltd", img: img14 },
    { title: "Jagruti Sugar & Allied Ind", img: img15 },
    { title: "Jai Hind Sugar Ltd.", img: img16 },
    { title: "Kisanveer Bhuinj", img: img17 },
    { title: "Kisanveer Sugar Factory", img: img19 },
    { title: "Kukadi Sugar Ltd.", img: img20 },
    { title: "Lunar Engineering", img: img21 },
    { title: "Modern Engineering Works", img: img22 },
    { title: "National Fertializer Vijaypur", img: img23 },
    { title: "Nav Bharat Ltd", img: img24 },
    { title: "New Phaltan Sugar", img: img25 },
    { title: "NSL majalgaon", img: img26 },
    { title: "Parag Sugar Foodji Ltd", img: img27 },
    { title: "Pretech Automation", img: img28 },
    { title: "Raj Process Equipment", img: img29 },
    // {title:"Rajaram Bapu Patil SSK",img:img30},
    // {title:"Sahyadri SSK Ltd",img:img31},
    // {title:"Samartha SSK",img:img32},
    // {title:"Samartha SSK Unit-II",img:img33},
    // {title:"Shree Ganesh Khand Udyog Sahkari Mandli Limited",img:img34},
    // {title:"Shree Kurumdas Industries",img:img35},
    // {title:"Shri Durga Sugar",img:img36},
    // {title:"Shri Hanumant Sugar",img:img37},
    // {title:"Shri Laxmi Narshinha Sugar",img:img38},
    // {title:"Shri Vinghrator SSK Ltd",img:img39},
    // {title:"Shri Viredheshwar SSK Ltd",img:img40},
    // {title:"Someshwer SSK Karnatak",img:img41},
    // {title:"Srinath Maskaba Sugar Factory",img:img42},
    // {title:"Utech Sugar Ltd",img:img18},
    // {title:"Vasantdada Sugar Institute",img:img1},
    // {title:"Venkys India Ltd",img:img1},
  ];

  return (
    <div className="main">
      <div className="heading-div flex flex-col">
        <h2 className="highlight">Testimonials</h2>
        <span className="text-borders w-[80px] mt-1 border-b-4 border-black"></span>
      </div>
      <div className="w-full h-full p-10 overflow-hidden">
        <div className={`w-full h-full ${styles["test-cards"]} `}>
          {[...testimonials, ...testimonials].map((item, idx) => (
            <div
              className={` w-[300px] h-[350px] flex flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(31,38,135,0.37)] hover:scale-105 transition-all duration-500`}
            >
              <div className="w-[300px] h-[250px]  p-2 flex items-center justify-center "> 
                  <img
                    src={item.img}
                    alt=""
                     className="h-full w-auto object-contain object-center"
                  />
              </div>
              <div className="w-full h-[100px] flex items-center justify-center  bg-blue-400 p-2">
                <h1 className="text-xl font-bold text-center">{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testemonial;
