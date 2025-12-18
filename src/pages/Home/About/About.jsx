import { Link } from "react-router-dom";
import "./About.css";
import { Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const aboutImg = `${process.env.REACT_APP_API_URL}/assests/images/home/about.gif`;

const AboutSection = () => {
    return(
        <div className="about_section section-padding">
            <Container>
                <Row>
                    <Col>
                        <div className="about_section_flex">
                            <div className="about_section_cols">
                                <h2 className="heading_main">Welcome to IosAndWeb Tech — Your Trusted Partner in Digital Innovation</h2>
                                <img src={aboutImg} alt="About Us" className="about_img mobile_img" />
                                <p className="paragraph_content">At IosAndWeb Tech, we specialize in helping businesses like yours succeed through innovative technology and smart digital strategies. Whether you need custom software, powerful marketing solutions, or cutting-edge AI and blockchain services, our experienced team is here to deliver tailored solutions that meet your unique goals.</p>
                                <Link to="/services" reloadDocument className="btn-gradient-blue">Build Your Success Story <FontAwesomeIcon icon={faAnglesRight} /></Link>
                            </div>
                            <div className="about_section_cols image_col">
                                <img src={aboutImg} alt="About Us" className="about_img" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutSection