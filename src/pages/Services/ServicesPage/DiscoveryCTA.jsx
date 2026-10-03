import React from "react";
import "./DiscoveryCTA.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faBuildingCircleArrowRight, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DiscoveryCTA = () => {
  return (
    <section className="discoveryCTA section-padding">
      <Container className="discoveryCTA__content">
        <h2>
          Ready to Turn
          <br />
          Intelligence into Action?
        </h2>

        <p>
          Tell us your highest-leverage workflow. We’ll design an agent for it —
          <br />
          and have it working in your stack within 30 days.
        </p>

                      <Link to="/contact-us" reloadDocument className="btn-gradient-blue">Schedule a Discovery Call <FontAwesomeIcon icon={faCircleArrowRight} /></Link>
        
      </Container>
    </section>
  );
};

export default DiscoveryCTA;