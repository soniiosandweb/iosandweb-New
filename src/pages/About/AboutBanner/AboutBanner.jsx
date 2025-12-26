import { Link } from "react-router-dom";
import "./AboutBanner.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const contactBg = `${process.env.REACT_APP_API_URL}/assests/contact/bannerbg.webp`;
const frameImg = `${process.env.REACT_APP_API_URL}/assests/about/frame_image.png`;
const frame = `${process.env.REACT_APP_API_URL}/assests/about/Frame.png`;
const aboutImg = `${process.env.REACT_APP_API_URL}/assests/about/aboutImg.jpg`;

const AboutBanner = () => {
    return(
        <div className="main_banner_section">
            <img src={contactBg} alt="Contact Us" className="contactus_banner_bg" />
            <Container>
                <Row>
                    <Col>
                        <div className="main_banner_flex section-padding">
                            <div className="main_banner_left_col">
                                <p className="main_banner_subheading">Who We Are</p>
                                <h1 className="heading_main gradient_heading">Building Digital Excellence For Tomorrow</h1>
                                <p className="paragraph_content">We are premier digital transformation agency crafting bespoke mobile apps, web solution, and custom software. We turn ambitious idea into powerful digital realities.</p>
                                <div className="main_banner_btn_section">
                                    <Link to="/portfolio" reloadDocument className="btn-gradient-pink">View Our Work <FontAwesomeIcon icon={faAnglesRight} /></Link>
                                    <Link to="/contact-us" reloadDocument className="btn-text-only">Contact us</Link>
                                </div>
                                
                            </div>
                            <div className="main_banner_right_col">
                                <div class="blob-wrapper">
                                <div class="blob-image"></div>
                                <img src={frame} class="blob-frame" />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutBanner