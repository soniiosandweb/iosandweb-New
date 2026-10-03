import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";


const bannerImage = `${process.env.REACT_APP_API_URL}/assests/services/digitalMarketing/DigitalMarketing.gif`;

const Banner = () => {
    return(
        <div className="MobileWeb_banner_section">
            <Container>
                <Row>
                    <Col lg='7' >
                        <div className="MobileWeb_banner_flexs   no-bottom-padding">
                            <div className="software_banner_cols contents_block">
                                <p className="services_banner_subheading">digital marketing services</p>
                                <h1 className="heading_main split">Stop Wasting Money on Marketing That Doesn't Convert</h1>
                                <p className="paragraph_content">Your competitors are capturing customers you should be winning. We help brands break through the noise with digital marketing strategies that attract the right audience, engage meaningfully, and convert consistently.</p>
                                <br></br>
                            <Link to="/contact-us" reloadDocument className="btn-gradient-blue">Discover Your Growth Strategy <FontAwesomeIcon icon={faAnglesRight} /></Link> <br /> <br />
                                
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