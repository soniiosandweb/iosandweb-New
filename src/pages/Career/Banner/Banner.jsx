import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";



const bannerImage = `${process.env.REACT_APP_API_URL}/assests/services/digitalMarketing/digitalMArketingBg.webp`;

const Banner = () => {
    return(
        <div className="HowWeWork_banner_section">
            <Container>
                <Row>
                    <Col lg='7' >
                        <div className="HowWeWork_banner_flexs   no-bottom-padding">
                            <div className="weWork_banner_cols contents_block">
                                <h1 className="heading_main split">Your Next Career Move Starts at IosAndWeb Technologies</h1>
                                <p className="paragraph_content">Work on transformative technology projects that shape industries in a team where they appreciate your skills, they support your goals, and they don't put a limit on your potential.</p>
                            <div className="btnBannerDiv">
                            <Link to="/contact-us" reloadDocument className="btn-gradient-blue">View Open Positions <FontAwesomeIcon icon={faAnglesRight} /></Link> 
                            <Link to="/contact-us" reloadDocument className="btn-gradient-border transpernt_btn">Learn Our Story <FontAwesomeIcon icon={faAnglesRight} /></Link>
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