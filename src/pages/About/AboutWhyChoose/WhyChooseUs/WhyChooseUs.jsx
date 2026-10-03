
import React from "react";
import "./WhyChooseUs.css";
import { Container } from "react-bootstrap";
import teamImage from "./competent-team-with-thumbs-up 1.png";
import {
  FaAward,
  FaUsers,
  FaShippingFast,
  FaRegComments,
} from "react-icons/fa";

const features = [
  {
    icon: <FaAward />,
    title: "Proven Expertise",
    description:
      "Years Of experience delivering Complex tech solutions.",
  },
  {
    icon: <FaUsers />,
    title: "User- Centric",
    description:
      "Design & Functionality that Puts Your users first",
  },
  {
    icon: <FaShippingFast />,
    title: "On-Time Delivery",
    description:
      "We Respect Deadlines and Launch Schedules.",
  },
  {
    icon: <FaRegComments />,
    title: "Clear Communications",
    description:
      "Transparent updates throughout the project lifecycle.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
        <Container className="why-choose-container section-padding no-bottom-padding">
        <div className="why-choose-content">
          <h2>Why Choose Us</h2>

          <p className="why-choose-description">
            We Don’t Just write code; we build partnership.
            Here is why Client trust us with their
            critical projects
          </p>

          <div className="why-choose-features">
            {features.map((feature, index) => (
              <div className="why-feature" key={index}>
                <div className="why-feature-icon">
                  {feature.icon}
                </div>

                <div className="why-feature-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="why-choose-image">
          <img
            src={teamImage}
            alt="Our professional team working together"
          />
        </div>
    
      </Container>
    </section>
  );
};

export default WhyChooseUs;