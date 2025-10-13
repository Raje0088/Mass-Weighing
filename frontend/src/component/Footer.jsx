import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-auto px-20 pt-10 pb-5">
      <div className="heading-div">
        <h2>Footer</h2>
      </div>
      <div className="w-full h-auto grid grid-cols-3 gap-10">
        <div>
          <h4>I2s2</h4>
          <p>address</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
            dolore.
          </p>
        </div>
        <div>
          <h4>Product</h4>
          <p>Lorem.</p>
          <p>Lorem.</p>
          <p>Lorem.</p>
          <p>Lorem.</p>
        </div>
        <div>
          <h4>Follow Us</h4>
          <p>Instagram</p>
          <p>FB</p>
          <p>X</p>
          <p>Yt</p>
        </div>
      </div>
      <footer className="w-full h-auto flex  flex-col items-center justify-center mt-15">
        <h4>@ copyrighted {new Date().getFullYear()} by Mass Weighing </h4>
        <h4>Designed by <a href="https://www.i2s2world.com/" target="_blank">Instant Information Software Service</a></h4>
      </footer>
    </div>
  );
};

export default Footer;
