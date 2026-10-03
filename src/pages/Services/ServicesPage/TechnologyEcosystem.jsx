import React from "react";
import "./TechnologyEcosystem.css";
import { Container } from "react-bootstrap";
import img1 from "./newImagesServiecesPage/techSect/img1.png";
import img2 from "./newImagesServiecesPage/techSect/img2.png";
import img3 from "./newImagesServiecesPage/techSect/img3.png";
import img4 from "./newImagesServiecesPage/techSect/img4.png";
import img5 from "./newImagesServiecesPage/techSect/img5.png";
import img6 from "./newImagesServiecesPage/techSect/img6.png";
import img7 from "./newImagesServiecesPage/techSect/img7.png";
import img8 from "./newImagesServiecesPage/techSect/img8.png";

const technologies = [
  {
    name: "React",
    image: img1,
  },
  {
    name: "Node.js",
    image: img2,
  },
  {
    name: "Python",
    image: img3,
  },
  {
    name: "AWS",
    image: img4,
  },
  {
    name: "Docker",
    image: img5,
  },
  {
    name: "Kubernetes",
    image: img6,
  },
  {
    name: "Mongo DB",
    image: img7,
  },
  {
    name: "Git",
    image: img8,
  },
];

const TechnologyEcosystem = () => {
  return (
    <section className="technologyEcosystem section-padding">
      <Container className="technologyEcosystem__container">

        {/* Left Content */}
        <div className="technologyEcosystem__content">
          <span className="technologyEcosystem__label">
            TECHNOLOGY ECOSYSTEM
          </span>

          <h2>
            Built on Modern Technology.
            <br />
            <span>Designed to Evolve.</span>
          </h2>

          <p>
            We select the right technologies, frameworks, platforms,
            and architectures for each business challenge — creating
            flexible technology ecosystems that can evolve as your
            requirements change.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="technologyEcosystem__grid">
          {technologies.map((technology) => (
            <div
              className="technologyEcosystem__card"
              key={technology.name}
            >
              <img
                src={technology.image}
                alt={technology.name}
              />

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default TechnologyEcosystem;