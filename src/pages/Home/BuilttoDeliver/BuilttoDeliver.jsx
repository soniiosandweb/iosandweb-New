import React from 'react';
import "./BuilttoDeliver.css";
import { Col, Container, Row } from 'react-bootstrap';
import img1 from "../newHomeImage/builtto/img1.png";
import img2 from "../newHomeImage/builtto/img2.png";
import img3 from "../newHomeImage/builtto/img3.png";
import img4 from "../newHomeImage/builtto/img4.png";
import img5 from "../newHomeImage/builtto/img5.png";
import img6 from "../newHomeImage/builtto/img6.png";
import img7 from "../newHomeImage/builtto/img7.png";
import img8 from "../newHomeImage/builtto/img8.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const BuilttoDeliver = () => {
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
        
        <div className='builttoDelliver no-bottom-padding section-padding'>
            <Container>
                <Row>
                    <Col>
                     <div> 
                        <div className="BuiltToSection">
                            <h2 className="heading_main">
                            { "Built to Deliver Trusted to Perform"}
                            </h2>
                        </div>
                        <div className="builtImages">
  <div className="imageGroup">
    {firstImages.map((img, index) => (
      <div className="imageBox" key={index}>
        <img src={img} alt="" />
      </div>
    ))}
  </div>

  <div className="imageGroup secound">
    {secondImages.map((img, index) => (
      <div className="imageBox" key={index}>
        <img src={img} alt="" />
      </div>
    ))}
  </div>
</div>

  <div className="builtratingSection">
                                  <div className="builtratingdiv first">
                                    <div className='builtRatingInnerDiv'>
                                      <h3 className="builtratingHeading">100+</h3>
                                      <div className="builtratingPara">Projects Delivered</div>
                                      </div>
                                  </div>
                                   <div className="builtratingdiv secound">
                                    <div className='builtRatingInnerDiv'>
                                      <h3 className="builtratingHeading">10+</h3>
                                      <div className="builtratingPara">Industry Experience</div>
                                  
                                  </div></div> 
                                  <div className="builtratingdiv third">
                                    <div className='builtRatingInnerDiv'>
                                      <h3 className="builtratingHeading">4.9 <FontAwesomeIcon icon={faStar} className="ratingStar" /></h3>
                                      <div className="builtratingPara">Average Client Rating</div>
                                  </div> </div>
                                  <div className="builtratingdiv forth">
                                    <div className='builtRatingInnerDiv'>
                                      <h3 className="builtratingHeading">10+</h3>
                                      <div className="builtratingPara">Countries Served</div>
                                  </div></div>
                              </div>

                     </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BuilttoDeliver;
