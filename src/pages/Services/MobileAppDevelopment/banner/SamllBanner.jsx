import { Col, Container, Row } from "react-bootstrap";
import "./SamllBanner.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";



const bannerImage = `${process.env.REACT_APP_API_URL}/assests/services/MobileDevlopment/Mbg.webp`;
const sbWhite = `${process.env.REACT_APP_API_URL}/assests/services/MobileDevlopment/sbWhite.webp`;
const sbBlack = `${process.env.REACT_APP_API_URL}/assests/services/MobileDevlopment/sbBlack.webp`;

const SamllBanner = () => {
    return(
        <div className=" samllBannerSection  ">
            <Container>
                <Row>
                    <Col lg='7' >
                        <div className="shortBannerFlex   no-bottom-padding">
                            <div className="shortBanner contents_block">
                                <h2 className="heading_main split">Empowering ODDS Drivers to Deliver Excellence</h2>
                                <p className="paragraph_content">The standard lorem ipsum passage has been a printer's friend for centuries. Like stock photos today, it served as a placeholder for actual content. The original text comes from Cicero's philosophical work</p>
                            <Link to="/contact-us" reloadDocument className="btn-gradient-blue">See Full Overview <FontAwesomeIcon icon={faAnglesRight} /></Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg='5'>
                                <div className="samllBanerImgDiv">
                                <img src={sbBlack}  alt="shortBannerImg" className="imgBlack" />
                                <img src={sbWhite} alt="shortBannerImg" className="imgWhite" />

                                </div>
                     </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SamllBanner