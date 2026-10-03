import React from "react";
import "./NextGenerationEngineering.css";
import mainImag from "./newImagesServiecesPage/nextGenration.png"
import Mobile from "./newImagesServiecesPage/nextGenrationMobile.png"
import { Container } from "react-bootstrap";
const NextGenerationEngineering = () => {
  return (
    <section className="nextGenerationEngineering">
      <Container className="nextGenerationEngineering__container">

        <p className="nextGenerationEngineering__eyebrow">
          THE NEXT GENERATION ENGINEERING
        </p>

        <h2 className="nextGenerationEngineering__heading">
          From Traditional Software to{" "}
          <span>AI-Native Systems</span>
        </h2>

        <p className="nextGenerationEngineering__description">
          AI is changing how software is built, operated, and experienced.
          We combine modern engineering practices with AI-assisted
       
          development, intelligent automation, agents, APIs, and connected
          data to create systems designed for continuous evolution.
        </p>

      </Container>
<img className="nextGenerationEngineering__image" src={mainImag} alt="Next Generation Engineering" /> 
<img className="MobilrnextGenerationEngineering__image" src={Mobile} alt="Next Generation Engineering" /> 
    </section>
  );
};

export default NextGenerationEngineering;