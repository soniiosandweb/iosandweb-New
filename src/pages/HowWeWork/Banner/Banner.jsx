import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";



const bannerImage =  `${process.env.REACT_APP_API_URL}/assests/images/how_we_work/how_we_work.gif`

const Banner = () => {
    return(
        <div className="HowWeWork_banner_section">
            <Container>
                <Row>
                    <Col lg='7' >
                        <div className="HowWeWork_banner_flexs   no-bottom-padding">
                            <div className="weWork_banner_cols contents_block">
                                <p className="FontSize25">HOW WE WORK</p>
                                <h1 className="heading_main ">Smart Web & Mobile Solution <div className="text-highlight split" >That Elevate Your Brand</div></h1>
                                <p className="paragraph_content">Accelerate Business growth with Our end-to-end Digital Development Process, Design to Deliver Scalable, Secure, and high- performing Solutions.</p>
                            <div className="btnBannerDiv">
                            <Link to="/contact-us" reloadDocument className="btn-gradient-blue">View Open Positions <FontAwesomeIcon icon={faAnglesRight} /></Link>

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
