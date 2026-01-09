// import "./MoreThanWebSection.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MoreThanWebSection = () => {
    return(
        <>
            <div className="more_than_web_section section-padding  body-background">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h2 className="heading_main split">Tired of Software That Doesn't Fit?</h2>
                            <h2 className="FontSize18">You shouldn't have to change how you work to match your software. Let's build technology that adapts to you.</h2>
                            <div className="BtnGroup less-top-padding">
                            <Link to="/contact-us" reloadDocument className="btn-gradient-blue">Create Your Digital Success <FontAwesomeIcon icon={faAnglesRight} /></Link>
                            <Link to="/contact-us" reloadDocument className="btn-gradient-border">Create Your Digital Success <FontAwesomeIcon icon={faAnglesRight} /></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default MoreThanWebSection