import { Link } from "react-router-dom";
import "./About.css";
import { Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const aboutImg = `${process.env.REACT_APP_API_URL}/assests/home/about.gif`;

const AboutSection = () => {
         const [IsMobile , setIsMobile] = useState(window.innerWidth <=768)
            useEffect(() => {
            const handleResize = () => setIsMobile(window.innerWidth <= 768);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
          }, []);
    return(
        <div className="about_section section-padding">
            <Container>
                <Row>
                    <Col>
                        <div className="about_section_flex">
                            <div className="about_section_cols">
                            {!IsMobile ?<h2 className="heading_main">Welcome to IosAndWeb Tech — Your Trusted Partner in Digital Innovation</h2>: <h2 className="heading_main split">Welcome to IosAndWeb Tech — Your Trusted Partner in Digital Innovation</h2>}
                                
                               {!IsMobile &&   <img src={aboutImg} alt="About Us" className="about_img mobile_img" />}
                                <p className="paragraph_content">At IosAndWeb Tech, we specialize in helping businesses like yours succeed through innovative technology and smart digital strategies. Whether you need custom software, powerful marketing solutions, or cutting-edge AI and blockchain services, our experienced team is here to deliver tailored solutions that meet your unique goals.</p>
                                <Link to="/services" reloadDocument className="btn-gradient-blue">Build Your Success Story <FontAwesomeIcon icon={faAnglesRight} /></Link>
                            </div>
                            <div className="about_section_cols image_col">
                               {!IsMobile && <img src={aboutImg} alt="About Us" className="about_img" />}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutSection