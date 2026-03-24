import { Col, Container, Row } from "react-bootstrap";
import "./banner.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";



const bannerImage = `${process.env.REACT_APP_API_URL}/assests/services/webDesgin/Mbg.gif`;

const Banner = () => {
    return(
        <div className="MobileWeb_banner_section">
            <Container>
                <Row>
                    <Col lg='7' >
                        <div className="MobileWeb_banner_flexs   no-bottom-padding">
                            <div className="software_banner_cols contents_block">
                                <p className="services_banner_subheading">web designing services</p>
                                <h1 className="heading_main split">Design-Driven Web Experiences That Engage, Convert & Scale</h1>
                                <p className="paragraph_content">At IosAndWeb Technologies, we deliver custom web designing services for businesses across the USA. Our websites are built with a strong focus on user experience, performance, and conversions—helping brands stand out in competitive digital markets. From startups to enterprises, we design websites that are modern, responsive, and results-driven.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='5'>
                                <div className="Mobile_banner_images">
                                    <img src={bannerImage} alt="Custom Software Development Services" className="software_bannerImage" />

                                </div>
                     </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner