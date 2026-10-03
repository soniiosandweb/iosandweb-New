import React from "react";
import "./Capabilities.css";
import { Container } from "react-bootstrap";
import img1 from "./newImagesServiecesPage/cloudCapabilities/img1.png";
import img2 from "./newImagesServiecesPage/cloudCapabilities/img2.png";
import img3 from "./newImagesServiecesPage/cloudCapabilities/img3.png";
import img4 from "./newImagesServiecesPage/cloudCapabilities/img4.png";
import img5 from "./newImagesServiecesPage/cloudCapabilities/img5.png";
import img6 from "./newImagesServiecesPage/cloudCapabilities/img6.png";
import img7 from "./newImagesServiecesPage/cloudCapabilities/img7.png";

import img2_1 from "./newImagesServiecesPage/cloudCapabilities/img2-1.png";
import img2_2 from "./newImagesServiecesPage/cloudCapabilities/img2-2.png";
import img2_3 from "./newImagesServiecesPage/cloudCapabilities/img2-3.png";
import img2_4 from "./newImagesServiecesPage/cloudCapabilities/img2-4.png";
import img2_5 from "./newImagesServiecesPage/cloudCapabilities/img2-5.png";
import img2_6 from "./newImagesServiecesPage/cloudCapabilities/img2-6.png";


const cloudCapabilities = [
  {
    title: "Cloud Architecture",
    image: img1,
  },
  {
    title: "Edge Computing",
    image: img2,
  },
  {
    title: "DevOps",
    image: img3,
  },
  {
    title: "Scalability",
    image: img4,
  },
  {
    title: "Performance",
    image: img5,
  },
  {
    title: "Monitoring",
    image: img6,
  },
  {
    title: "Observability",
    image: img7,
  },
];
const securityCapabilities = [
  {
    title: "Application Security",
    image: img2_1,
  },
  {
    title: "API Security",
    image: img2_2,
  },
  {
    title: "Cloud Security",
    image: img2_3,
  },
  {
    title: "Data Protection",
    image: img2_4,
  },
  {
    title: "Identity & Access",
    image: img2_5,
  },
  {
    title: "Secure AI Architecture",
    image: img2_6,
  },
];
const CapabilityItems = ({ items }) => {
  return (
    <div className="capabilities__items">
      {items.map((item) => (
        <div className="capabilities__item" key={item.title}>
          <div className="capabilities__itemIcon">
            {item.image && (
              <img src={item.image} alt="" />
            )}
          </div>

          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

const Capabilities = () => {
  return (
    <section className="capabilities section-padding  no-top-padding">
      <Container className="">

        {/* Cloud / Edge */}
        <div className="capabilities__row capabilities__row--cloud">
          <div className="capabilities__content">
            <span className="capabilities__eyebrow">
              OUR CAPABILITY
            </span>

            <h2 className="capabilities__title">
              <span>Cloud, Edge &amp; Performance</span>
              <strong>Engineered for Scale</strong>
            </h2>

            <p className="capabilities__description">
              Build infrastructure that keeps your applications fast,
              resilient, secure, and ready for growth. We engineer cloud
              and edge environments that support high-performance
              applications, AI workloads, global users, and evolving
              business needs.
            </p>
          </div>

          <CapabilityItems items={cloudCapabilities} />
        </div>

        {/* Security */}
        <div className="capabilities__row capabilities__row--security">
          <CapabilityItems items={securityCapabilities} />

          <div className="capabilities__content">
            <span className="capabilities__eyebrow">
              OUR CAPABILITY
            </span>

            <h2 className="capabilities__title">
              <span>Security Built Into</span>
              <strong>Every Layer</strong>
            </h2>

            <p className="capabilities__description">
              We integrate security into applications, APIs,
              infrastructure, AI systems, and data environments from
              the architecture stage onward—helping businesses build
              technology that is resilient, reliable, and protected.
            </p>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default Capabilities;