import React from "react";
import "./AdaptiveSoftware.css";
import img1 from "./newImagesServiecesPage/adaptiveSoft/img1.png";
import img2 from "./newImagesServiecesPage/adaptiveSoft/img2.png";
import img3 from "./newImagesServiecesPage/adaptiveSoft/img3.png";

const features = [
  {
    title: "AI-POWERED SOFTWARE",
    description:
      "Build intelligent software with AI, automation, and smart workflows for better digital experiences.",
    image: img1,
  },
  {
    title: "CONNECTED DIGITAL ECOSYSTEMS",
    description:
      "Connect software, data, cloud, and business systems to streamline operations and scale smarter.",
    image: img2,
  },
  {
    title: "BUILT FOR WHAT’S NEXT",
    description:
      "Build scalable software combining AI, data, automation, and engineering for continuous growth.",
    image: img3,
  },
];

const AdaptiveSoftware = () => {
  return (
    <section className="adaptiveSoftware section-padding">
      <div className="adaptiveSoftware__container">

        <div className="adaptiveSoftware__heroText">
          <p className="adaptiveSoftware__eyebrow">
            ADAPTIVE SOFTWARE
          </p>

          <h2 className="adaptiveSoftware__heading">
            Build Software for the{" "}
            <span>Age of AI</span>
          </h2>

          <p className="adaptiveSoftware__subtitle">
            The next generation of software isn’t just connected.
            <br />
            It’s intelligent.
          </p>

          <p className="adaptiveSoftware__description">
            We build products that combine AI, automation, data, and modern
            engineering to
            <br />
            create faster, smarter digital experiences.
          </p>
        </div>

        <div className="adaptiveSoftware__cards">
          {features.map((feature, index) => (
            <div className="adaptiveSoftware__card" key={index}>

              <div className="adaptiveSoftware__icon">
                <img
                  src={feature.image}
                  alt={feature.title}
                />
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AdaptiveSoftware;