import { Col, Container, Row } from "react-bootstrap";
import "./ReadyBuildSection.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const linesBg = `${process.env.REACT_APP_API_URL}/assests/services/lines_bg.webp`;
const readyBuildImg = `${process.env.REACT_APP_API_URL}/assests/services/software-development/ready-build-img.webp`;

const ReadyBuildSection = () => {
    return(
        <div className="ready_build_section section-padding body-background no-bottom-padding">
            <Container>
                <Row>
                    <Col>
                        <div className="ready_build_blocks">
                            <img src={linesBg} alt="Ready to Build Powerful, Secure & Feature-Rich Software?" className="lines_background" />
                            <div className="ready_build_flex">
                                <div className="ready_build_image">
                                    <img src={readyBuildImg} alt="Ready to Build Powerful, Secure & Feature-Rich Software?" className="ready_left_image" />
                                </div>
                                <div className="ready_build_content">
                                    <h2 className="heading_main">Ready to Build Powerful, Secure & Feature-Rich Software?</h2>
                                    <p className="paragraph_content">Skip generic solutions—choose custom software development built uniquely for your business.</p>
                                    <Link to="/contact-us" reloadDocument className="btn-gradient-blue">Build Your Website Today  <FontAwesomeIcon icon={faAnglesRight} /></Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ReadyBuildSection