import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";



// const bannerImage = `${process.env.REACT_APP_API_URL}/assests/services/MobileDevlopment/Mbg.gif`;
const bannerImage = `${process.env.REACT_APP_API_URL}/assests/services/MobileDevlopment/mobile_dev.gif`;


const Banner = () => {
    return(
        <div className="MobileWeb_banner_section">
            <Container>
                <Row>
                    <Col lg='7' >
                        <div className="MobileWeb_banner_flexs   no-bottom-padding">
                            <div className="software_banner_cols contents_block">
                               <p className="services_banner_subheading">mobile app development services</p>
                                <h1 className="heading_main split">End-to-End App & Web Development Experts</h1>
                                <p className="paragraph_content">IosAndWeb Technologies is a leading custom mobile app development company in India, delivering high-performance Android, iOS, and cross-platform solutions. With 10+ years of expertise, we build scalable, future-ready apps that help startups and enterprises succeed.</p>
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