import React from 'react';
import "./Servicesbuilttodeliver.css";

import { Col, Container, Row } from 'react-bootstrap';
import img1 from "../../Home/newHomeImage/builtto/img1.png";
import img2 from "../../Home/newHomeImage/builtto/img2.png";
import img3 from "../../Home/newHomeImage/builtto/img3.png";
import img4 from "../../Home/newHomeImage/builtto/img4.png";
import img5 from "../../Home/newHomeImage/builtto/img5.png";
import img6 from "../../Home/newHomeImage/builtto/img6.png";
import img7 from "../../Home/newHomeImage/builtto/img7.png";
import img8 from "../../Home/newHomeImage/builtto/img8.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ServicesBuiltToDeliver = () => {
  const firstImages = [img1, img2, img3, img4];
  const secondImages = [img5, img6, img7, img8];
  const milestones = [
    { year: "2016", label: "Founded" },
    { year: "2019", label: "Milestone" },
    { year: "2021", label: "Global Team Expansion" },
    { year: "2023", label: "AI Division Launch" },
    { year: "2026", label: "Digital Leadership Hub" },
  ];

  return (
    <div className='servicesBuiltToDeliver no-bottom-padding section-padding'>
      <Container>
        <Row>
          <Col>
            <div>
              {/* Hero text block */}
              <div className="servicesBuiltToDeliver__heroText">
                <p className="servicesBuiltToDeliver__eyebrow">
                  AI-NATIVE &bull; CLOUD &bull; AUTOMATION &bull; SECURITY
                </p>
                <h2 className="servicesBuiltToDeliver__heading">
                  Build For What&rsquo;s Next
                </h2>
                <p className="servicesBuiltToDeliver__heroSubtitle">
                  Powered by AI. Engineered for Scale. Designed for Trust.
                </p>
                <p className="servicesBuiltToDeliver__heroDescription">
                  From intelligent applications to secure cloud infrastructure,<br />
                  we build technology around the way businesses are evolving.
                </p>
              </div>

              

              <div className="servicesBuiltToDeliver__images">
                <div className="servicesBuiltToDeliver__imageGroup">
                  {firstImages.map((img, index) => (
                    <div className="servicesBuiltToDeliver__imageBox" key={index}>
                      <img src={img} alt="" />
                    </div>
                  ))}
                </div>

                <div className="servicesBuiltToDeliver__imageGroup servicesBuiltToDeliver__imageGroup--second">
                  {secondImages.map((img, index) => (
                    <div className="servicesBuiltToDeliver__imageBox" key={index}>
                      <img src={img} alt="" />
                    </div>
                  ))}
                </div>
              </div>

           
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ServicesBuiltToDeliver;