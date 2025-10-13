import React from "react";
import img1 from "../assets/Pic/img1.jpg";
import img2 from "../assets/Pic/img2.jpg";
import img3 from "../assets/Pic/img3.jpg";
import img4 from "../assets/Pic/img4.jpg";
import img5 from "../assets/Pic/img5.jpg";
import img6 from "../assets/Pic/img6.jpg";
import img7 from "../assets/Pic/img7.jpg";
import img8 from "../assets/Pic/img8.jpg";
import img9 from "../assets/Pic/img9.jpg";
import img10 from "../assets/Pic/img10.jpg";
import img11 from "../assets/Pic/img11.jpg";
import img12 from "../assets/Pic/img12.jpg";
import img13 from "../assets/Pic/img13.jpg";
import img14 from "../assets/Pic/img14.jpg";
import img15 from "../assets/Pic/img15.jpg";
import img16 from "../assets/Pic/img16.jpg";
import img17 from "../assets/Pic/img17.jpg";
import img18 from "../assets/Pic/img18.jpg";
import img19 from "../assets/Pic/img19.jpg";
import img20 from "../assets/Pic/img20.jpg";
import img21 from "../assets/Pic/img21.jpg";
import img22 from "../assets/Pic/img22.jpg";
import img23 from "../assets/Pic/img23.jpg";
import img24 from "../assets/Pic/img24.jpg";
import img25 from "../assets/Pic/img25.jpg";
import img26 from "../assets/Pic/img26.jpg";
import img27 from "../assets/Pic/img27.jpg";
import img28 from "../assets/Pic/img28.jpg";

const Gallery = () => {
  const gallery = [
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
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
  ];

  return (
    <div className="main">
      <div className="heading-div">
        <h2>Our Gallery</h2>
      </div>

      <div className="w-full h-auto  grid grid-cols-4 gap-5">
        {gallery.map((item, idx) => (
          <div className="">
            <div className="w-full h-auto shadow-xl">
              <img
                src={item}
                alt=""
                className="w-full h-full object-cover transition-transform duration-200 ease-in-out hover:scale-110 rounded-2xl "
              />
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
