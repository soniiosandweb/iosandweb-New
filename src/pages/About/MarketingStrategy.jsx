import React from "react";
import "./MarketingStrategy.css";
import { Container } from "react-bootstrap";

const steps = [
  {
    number: "1",
    title: "Research",
    description: "Deep Dive into competitors and Market Trends",
  },
  {
    number: "2",
    title: "Targeting",
    description: "Identifying your ideal Customer Persona",
  },
  {
    number: "3",
    title: "Execution",
    description: "Launching campaigns Across chosen channels",
  },
  {
    number: "4",
    title: "Analysis",
    description: "Monitoring data and performance metrics",
  },
  {
    number: "5",
    title: "Refinement",
    description: "Monitoring data and performance metrics",
  },
];

const MarketingStrategy = () => {
  return (
    <section className="marketingStrategy">
      <Container className="marketingStrategy__container section-padding">

        <div className="marketingStrategy__header">
          <div className="marketingStrategy__eyebrow">
            OUR MARKETING STRATEGY
          </div>

          <h2 className="marketingStrategy__title">
            We Don’t Guess. We Calculate
          </h2>
        </div>

        <div className="marketingStrategy__steps">
          {steps.map((step) => (
            <div className="marketingStrategy__step" key={step.number}>

              <div className="marketingStrategy__number">
                {step.number}
              </div>

              <h3 className="marketingStrategy__stepTitle">
                {step.title}
              </h3>

              <p className="marketingStrategy__description">
                {step.description}
              </p>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default MarketingStrategy;