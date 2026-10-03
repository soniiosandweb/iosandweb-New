import { Link } from "react-router-dom";
import "./ServiceBanner.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faBuildingCircleArrowRight, faChevronRight, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import bg from "../newImagesServiecesPage/banner/bg.png"
const bannerBG = `${process.env.REACT_APP_API_URL}/assests/services/services-page/service_bg.webp`;
const serviceLayer = `${process.env.REACT_APP_API_URL}/assests/services/services-page/service_layer.webp`;
const upIcon = `${process.env.REACT_APP_API_URL}/assests/services/services-page/upIcon.svg`;
const groupIcon = `${process.env.REACT_APP_API_URL}/assests/services/services-page/groupIcon.svg`;


const servicesBannerItem = [
    {
        icon: upIcon,
        title: "+145%",
        text: "Monthly Traffic Growth",
        color: "green",
    },
    {
        icon: groupIcon,
        title: "12K+",
        text: "Qualified Leads",
        color: "blue",
    }
]

const ServiceBanner = () => {
    return(
        <div className="services_banner_main">
            {/* <video className="service_banner_video" poster={bannerBG} autoPlay={true} muted={true} loop={true}>
                <source src={bannerVideo} type="video/mp4"></source>
            </video> */}
            <img src={bg} alt="Your Growth Partner, Not Just Another Agency." className="services_page_bannerbg" />
            <div className="services_banner_bg">
                <Container> 
                    <Row>
                        <Col>
                            <div className="services_banner_flex section-padding">
                                <div className="services_banner_contents">
                                    <h1 className="heading_main split">Build For AI-Native Era</h1>
                                    <p className="paragraph_contentSubHead">AI Agents. Intelligent Software. Scalable Infrastructure.</p>
                                    <p className="paragraph_content">
                                        We design and engineer digital products that combine AI, automation, cloud, data, and security to help businesses move from ideas to intelligent, scalable solutions.

                                    </p>
                                    <Link to="/contact-us" reloadDocument className="btn-gradient-blue">See What We Do <FontAwesomeIcon  icon={faCircleArrowRight} /></Link>
                                </div>
                                {/* <div className="services_banner_right"> */}
                                    {/* <img src={bg} alt="Your Growth Partner, Not Just Another Agency." className="sservices_banner_layer" /> */}
                                    
                                {/* </div> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default ServiceBanner