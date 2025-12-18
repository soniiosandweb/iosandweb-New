import { Col, Container, Row } from "react-bootstrap";
import "./ElevateSuccess.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const elevateImg = `${process.env.REACT_APP_API_URL}/assests/images/home/elivate_success.gif`;

const ElevateSuccess = () => {
    return(
        <div className="elevate_success_section section-padding body-background">
            <Container>
                <Row>
                    <Col>
                        <div className="elevate_success_flex">
                            <div className="elevate_left_col">
                                <h2 className="heading_main">Elevate Your Success Today with Expert Guidance.</h2>
                                <p className="paragraph_content">Let IAW Technologies be your trusted partner in custom software development.</p>
                                <p className="paragraph_content">Whether you're a startup looking to disrupt the market or an established enterprise seeking to innovate, we have just the solutions you need to succeed!</p>
                                <Link reloadDocument to="/contact-us" className="btn-gradient-blue">Contact Us <FontAwesomeIcon icon={faAnglesRight} /></Link>
                            </div>
                            <div className="elevate_right_col">
                                <img src={elevateImg} alt="Elevate Your Success Today with Expert Guidance." className="elevate_success_img" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ElevateSuccess