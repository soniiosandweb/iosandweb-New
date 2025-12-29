import { Link } from "react-router-dom";
import "./AboutBanner.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const contactBg = `${process.env.REACT_APP_API_URL}/assests/contact/bannerbg.webp`;
const frameImg = `${process.env.REACT_APP_API_URL}/assests/about/frame_image.webp`;
const aboutImg = `${process.env.REACT_APP_API_URL}/assests/about/aboutImg.webp`;
const aboutImg2 = `${process.env.REACT_APP_API_URL}/assests/about/aboutImg2.webp`;
const aboutImg3 = `${process.env.REACT_APP_API_URL}/assests/about/aboutImg3.webp`;
const aboutImg4 = `${process.env.REACT_APP_API_URL}/assests/about/aboutImg4.webp`;

const imagesLists = [
    aboutImg,
    aboutImg2,
    aboutImg3,
    aboutImg4,
];

const interval = 3000;

const AboutBanner = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!imagesLists.length) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % imagesLists.length);
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return(
        <div className="main_banner_section">
            <img src={contactBg} alt="Contact Us" className="contactus_banner_bg" />
            <Container>
                <Row>
                    <Col>
                        <div className="main_banner_flex section-padding">
                            <div className="main_banner_left_col">
                                <p className="main_banner_subheading">Who We Are</p>
                                <h1 className="heading_main">Building Digital Excellence For Tomorrow</h1>
                                <p className="paragraph_content">We are premier digital transformation agency crafting bespoke mobile apps, web solution, and custom software. We turn ambitious idea into powerful digital realities.</p>
                                <div className="main_banner_btn_section">
                                    <Link to="/portfolio" reloadDocument className="btn-gradient-pink">View Our Work <FontAwesomeIcon icon={faAnglesRight} /></Link>
                                    <Link to="/contact-us" reloadDocument className="btn-text-only">Contact us</Link>
                                </div>
                                
                            </div>
                            <div className="main_banner_right_col">
                               <div className="about_image_wrapper">
                                    <img src={frameImg} className="about_image_shape" alt="shape" />
                                    <div 
                                        className="about_image"
                                        style={{
                                            backgroundImage: `url(${imagesLists[currentIndex]})`,
                                            WebkitMaskImage: `url(${frameImg})`,
                                            maskImage: `url(${frameImg})`,
                                        }}
                                    ></div>
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