import React from "react";
import whatapp from "../assets/gif/whatapp.png";
import useFetch from "../services/useFetch";

const url = `${import.meta.env.VITE_API_URL}/public/social-media`;

const Whatapp = () => {
  const { data, loading, error } = useFetch(url);
  const whatsappNumber = data?.data?.whatsapp || "7723015592";

  const handleWhatsAppText = () => {
    const number = whatsappNumber.replace(/\D/g, "");
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const url = isMobile
      ? `https://wa.me/${number}`
      : `https://web.whatsapp.com/send?phone=${number}`;
    window.open(url, "_blank");
  };

  if (loading) {
    return null;
  }

  if (error) {
    console.error("Error loading WhatsApp number:", error);
  }

  return (
    <div className="w-12 h-12 fixed z-[99] bottom-5 left-5 cursor-pointer" onClick={handleWhatsAppText}>
      <img src={whatapp} alt="" className="w-full h-full" />
    </div>
  );
};  

export default Whatapp;
