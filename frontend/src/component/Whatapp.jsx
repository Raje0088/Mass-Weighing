import React from "react";
import whatapp from "../assets/gif/whatapp.png";
const Whatapp = () => {
const handleWhatsAppText = () => {
  const number = "7723015592";
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  const url = isMobile
    ? `https://wa.me/${number}`
    : `https://web.whatsapp.com/send?phone=${number}`;
  window.open(url, "_blank");
};

  return (
    <div className="w-12 h-12 fixed z-[99] bottom-25 right-5 cursor-pointer" onClick={handleWhatsAppText}>
      <img src={whatapp} alt="" className="w-full h-full" />
    </div>
  );
};  

export default Whatapp;
