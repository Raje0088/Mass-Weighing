import React from "react";
import img1 from "../assets/Product-Images/img1.png";
import img2 from "../assets/Product-Images/img2.png";
import img3 from "../assets/Product-Images/img3.png";
import img4 from "../assets/Product-Images/img4.png";
import img5 from "../assets/Product-Images/img5.png";
import img6 from "../assets/Product-Images/img6.png";
import img7 from "../assets/Product-Images/img7.png";
import img8 from "../assets/Product-Images/img8.png";
import img9 from "../assets/Product-Images/img9.png";
import img10 from "../assets/Product-Images/img10.png";
import img11 from "../assets/Product-Images/img11.png";
import img12 from "../assets/Product-Images/img12.png";
import img13 from "../assets/Product-Images/img13.png";
import img14 from "../assets/Product-Images/img14.png";
import img15 from "../assets/Product-Images/img15.png";

const Product = () => {
  const product = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
  ];
  return (
    <div className="main">
      <div className="heading-div">
        <h2>Product</h2>
      </div>
      <div className="w-full h-auto grid grid-cols-3 gap-10">
        {product.map((item, idx) => (
          <div className="w-full h-full bg-orange-50 flex flex-col gap-5 p-2">
            <div className="w-full h-auto">
              <img
                src={item}
                alt=""
                className="w-full h-full object-cover p-1"
              />
            </div>
            <div className="w-full h-auto">
              <h4>The plastic Bag Machine</h4>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur unde qui laboriosam accusamus nemo nulla.
              </p>
            </div>
            <div className="w-full flex justify-end">
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
