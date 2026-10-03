import React from "react";
import "./Marquee.css";
import image1 from "../newHomeImage/LogoSection/image1.png"
import image2 from "../newHomeImage/LogoSection/image2.png"
import image3 from "../newHomeImage/LogoSection/image3.png"
import image4 from "../newHomeImage/LogoSection/image4.png"
import image5 from "../newHomeImage/LogoSection/image5.png"
import image6 from "../newHomeImage/LogoSection/img5.png"
import image7 from "../newHomeImage/LogoSection/img6.png"
const images = [
   image1,
   image2,
   image3,
   image4,
   image5,image6,image7,
];

const ImageMarquee = () => {
  return (
    <div className="marquee">
      <div className="marquee-track photo">
        {[...images, ...images].map((image, index) => (
          <div className="marquee-item" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageMarquee;