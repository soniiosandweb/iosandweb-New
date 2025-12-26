import { Link } from "react-router-dom";
import "./SeeBusinessSection.css";
import { Col, Container, Row } from "react-bootstrap";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const business = `${process.env.REACT_APP_API_URL}/assests/contact/business.gif`;

const SeeBusinessSection = () => {
    return(
        <div className="see_business_section section-padding no-top-padding body-background">
            <Container>
                <Row>
                    <Col>
                        <div className="see_business_flexs linear-dark-background">
                            <div className="see_business_contact_col">
                                <div className="see_business_contact">
                                    <h2 className="heading_main">See Your Business 6 Months From Now <br/>Free Future-State Analysis</h2>
                                    <p className="paragraph_content">We'll show you exactly where you could be with the right strategy. No pitch, just insights you can act on today.</p>
                                    <Link to="/services" reloadDocument className="btn-gradient-blue">What Sets Us Apart <FontAwesomeIcon icon={faAnglesRight} /></Link>
                                </div>
                            </div>
                            <div className="see_business_gif">
                                <img src={business} alt="See Your Business 6 Months From Now" className="contact_business_img" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SeeBusinessSection