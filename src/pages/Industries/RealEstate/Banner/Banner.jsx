import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";



const bannerImage =  `${process.env.REACT_APP_API_URL}/assests/images/how-we-work/How%20We%20Work.webp`

const Banner = () => {
    return(
        <div className="HowWeWork_banner_section">
            <Container>
                <Row>
                    <Col lg='7' >
                        <div className="HowWeWork_banner_flexs   no-bottom-padding">
                            <div className="weWork_banner_cols contents_block">
                                {/* <p className="FontSize25">HOW WE WORK</p> */}
                                <h1 className="heading_main ">INNOVATING PROPTECH </h1>
                                <p className="paragraph_content">The Next Generation of Real Estate Technology Starts Here IAW Technologies delivers custom-engineered PropTech solutions designed to streamline operations, enhance user engagement, and drive ROI for modern real estate enterprises.</p>
                            <div className="btnBannerDiv">
                            <Link to="/contact-us" reloadDocument className="btn-gradient-blue">Start Your Project Today<FontAwesomeIcon icon={faAnglesRight} /></Link>

                            </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg='5'>
                                <div className="how-we_work_image">
                                    <img src={bannerImage} alt="Custom weWork Development Services" className="weWork_bannerImage" />

                                </div>
                     </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner
