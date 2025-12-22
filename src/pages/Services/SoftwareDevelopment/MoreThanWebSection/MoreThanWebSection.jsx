import "./MoreThanWebSection.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MoreThanWebSection = () => {
    return(
        <>
            <div className="more_than_web_section section-padding no-top-padding body-background">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h2 className="heading_main">More Than Web App Development Company We're Your Strategic Partner In Building A Digital Presence That Thrives.</h2>
                            <Link to="/contact-us" reloadDocument className="btn-gradient-blue">Create Your Digital Success <FontAwesomeIcon icon={faAnglesRight} /></Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default MoreThanWebSection