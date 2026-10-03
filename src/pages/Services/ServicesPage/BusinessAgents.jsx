import React from "react";
import "./BusinessAgents.css";
import { Container } from "react-bootstrap";

import img1 from "./newImagesServiecesPage/buusinceAgent/img1.png";
import img2 from "./newImagesServiecesPage/buusinceAgent/img2.png";
import img3 from "./newImagesServiecesPage/buusinceAgent/img3.png";
import img4 from "./newImagesServiecesPage/buusinceAgent/img4.png";
import img5 from "./newImagesServiecesPage/buusinceAgent/img5.png";
import img6 from "./newImagesServiecesPage/buusinceAgent/img6.png";

import backgroundimages from "./newImagesServiecesPage/backgroundimages.png";

const features = [
  {
    title: "AI-First Thinking",
    description:
      "We build with the emerging AI-native technology landscape in mind.",
    image: img1,
  },
  {
    title: "Engineering Expertise",
    description:
      "Modern architecture and development built for performance and scale.",
    image: img2,
  },
  {
    title: "Connected Ecosystems",
    description:
      "AI, APIs, data, applications, and business systems working together.",
    image: img3,
  },
  {
    title: "Scalable Architecture",
    description:
      "Technology designed to evolve alongside your business.",
    image: img4,
  },
  {
    title: "Security by Design",
    description:
      "Security and reliability considered from architecture through deployment.",
    image: img5,
  },
  {
    title: "End-to-End Delivery",
    description:
      "Strategy, design, development, integration, deployment, and ongoing support.",
    image: img6,
  },
];

const BusinessAgents = () => {
  return (
<section className="bussinceAgents no-top-padding section-padding">
  <div
    className="bussinceAgents__bg"
    style={{
      backgroundImage: `url(${backgroundimages})`,
    }}
  />
  <Container className="bussinceAgents__content">

        <div className="bussinceAgents__header">
          <span className="bussinceAgents__eyebrow">
            BUILT FOR BUSINESS. READY FOR AI
          </span>

          <h2 className="bussinceAgents__heading">
            One Technology Partner. Infinite Digital Possibilities.
          </h2>

          <p className="bussinceAgents__description">
            We bring together AI, software engineering, commerce, cloud,
            integrations, and modern digital technologies under one technology
            partner—helping businesses move from ideas and outdated systems to
            intelligent, scalable digital products.
          </p>
        </div>

        <div className="bussinceAgents__cards">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="bussinceAgents__card"
            >
              <div className="bussinceAgents__icon">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="featureIcon"
                />
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BusinessAgents;