import React from "react";
import yt from "../assets/gif/youtube.png";
import twitter from "../assets/gif/twitter.png";
import instagram from "../assets/gif/instagram.png";
import fb from "../assets/gif/facebook.png";
import useFetch from "../services/useFetch";

const url = `${import.meta.env.VITE_API_URL}/public/social-media`

const Footer = () => {
  const { data, loading, error } = useFetch(url);
  const socialData = data?.data;

  if (loading) {
    return (
      <div className="w-full h-auto px-5 md:px-20 py-5 bg-gray-600 text-white">
        <p className="text-center">Loading footer...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-auto px-5 md:px-20 py-5 bg-gray-600 text-white">
        <p className="text-center text-red-300">
          Error loading footer: {error}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-auto px-5 md:px-20  py-5 bg-gray-600 text-white">
      {/* <div className="w-full h-auto flex items-center justify-center py-10">
        <h2>Footer</h2>
      </div> */}
      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-10 ">
        <div className="text-left">
          <div className="w-full flex  md:items-center justify-center p-2 ">
            <h4 className="text-xl">Address</h4>
          </div>
          <h4>
            Gat NO. 63, Ranje pune satara road , Taluka Bhor,Pune - 412205,
            Maharashtra, India
          </h4>
          <h4>
            <strong>Email: </strong> info@massweighing.com

          </h4>
          <h4>
            <strong>Phone: </strong>8045812075
          </h4>
          <h4>Mr. Bharat Eknath Patil (Director ) </h4>
        </div>
        <div className="">
          <div className="w-full flex items-center  justify-center p-2">
            <h4 className="text-xl">Our Product</h4>
          </div>
          <div className="w-full grid grid-rows-3  m-auto p-2  items-center md:justify-center ">
            <p>Simplex type</p>
            <p>Duplex type </p>
            <p>Semi-automatic </p>
            <p>Fully automatic </p>
            <p>Spare Parts </p>
            <p>Read More...</p>
          </div>
        </div>
        <div>
          <div className="w-full flex items-center  justify-center p-2">
            <h4 className="text-xl">Useful Links</h4>
          </div>
          <div className="w-full grid grid-rows-3 p-2 items-center md:justify-center">
            <p>Press Release</p>
            <p>Awards & Recognization</p>
            <p>Blogs</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div>
          <div className="w-full flex items-center  justify-center p-2">
            <h4 className="text-xl">More</h4>
          </div>
          <div className="w-full grid grid-rows-3 p-2 items-center md:justify-center">
            <p>About Us</p>
            <p>Vision</p>
            <p>Mission</p>
            <p>Success Story</p>
            <p>Side Map</p>
            <p>Feed</p>
          </div>
        </div>
        <div>
          <div className="w-full flex items-center justify-center p-2">
            <h4 className="text-xl">Connect Us</h4>
          </div>
          <div className="w-full flex gap-2 lg:gap-5 items-center justify-center p-2">
            {socialData?.facebook && (
              <a
                href={socialData.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8"
              >
                <img
                  src={fb}
                  alt=""
                  className="w-full h-full lg:w-10 lg:h-10  cursor-pointer"
                />
              </a>
            )}
            {socialData?.youtube && (
              <a
                href={socialData.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8"
              >
                <img
                  src={yt}
                  alt=""
                  className="w-full h-full lg:w-10 lg:h-10 cursor-pointer"
                />
              </a>
            )}
            {socialData?.instagram && (
              <a
                href={socialData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8"
              >
                <img
                  src={instagram}
                  alt=""
                  className="w-full h-full lg:w-10 lg:h-10 cursor-pointer"
                />
              </a>
            )}
            {socialData?.twitter && (
              <a
                href={socialData.x}
                className="w-8 h-8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={twitter}
                  alt=""
                  className="w-full h-full lg:w-10 lg:h-10 cursor-pointer"
                />
              </a>
            )}
          </div>
        </div>
      </div>
      <footer className="w-full h-auto flex  flex-col items-center justify-center mt-5 md:mt-15">
        <h4 className="text-center">
          @ copyrighted {new Date().getFullYear()} by Mass Weighing All Rights
          Reserved Designed by{" "}
          <a
            href="https://www.i2s2world.com/"
            target="_blank"
            className="text-blue-400 hover:underline "
          >
            Instant Information Software Service
          </a>
        </h4>
      </footer>
    </div>
  );
};

export default Footer;
