import { Link } from "react-router-dom";
import "./ServiceBanner.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const bannerBG = `${process.env.REACT_APP_API_URL}/assests/services/services-page/service_bg.webp`;
const serviceLayer = `${process.env.REACT_APP_API_URL}/assests/services/services-page/service_layer.webp`;
const upIcon = `${process.env.REACT_APP_API_URL}/assests/services/services-page/upIcon.svg`;
const groupIcon = `${process.env.REACT_APP_API_URL}/assests/services/services-page/groupIcon.svg`;

const bannerVideo = `${process.env.REACT_APP_API_URL}/assests/services/services-page/service-banner-video.mp4`;

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
            <video className="service_banner_video" poster={bannerBG} autoPlay={true} muted={true} loop={true}>
                <source src={bannerVideo} type="video/mp4"></source>
            </video>
            {/* <img src={bannerBG} alt="Your Growth Partner, Not Just Another Agency." className="services_page_bannerbg" /> */}
            <div className="services_banner_bg">
                <Container> 
                    <Row>
                        <Col>
                            <div className="services_banner_flex section-padding">
                                <div className="services_banner_contents">
                                    <p className="services_banner_subheading">Our Digital Services</p>
                                    <h1 className="heading_main">Your Growth <span className="gradient">Partner,</span> Not Just Another Agency.</h1>
                                    <p className="paragraph_content">Your Growth Partner, Not Just Another Agency. We build digital experiences that turn visitors into customers and customers into advocates. With full-stack expertise spanning SEO, development, and strategy, we're the team that helps ambitious brands break through the noise and dominate their market.</p>
                                    <Link to="/contact-us" reloadDocument className="btn-gradient-blue">See What We Do <FontAwesomeIcon icon={faAnglesRight} /></Link>
                                </div>
                                <div className="services_banner_right">
                                    <img src={serviceLayer} alt="Your Growth Partner, Not Just Another Agency." className="sservices_banner_layer" />
                                    <div className="services_banner_box">
                                        {servicesBannerItem.map((item,i) => (
                                            <div className="services_banner_box_item" key={i}>
                                                <div className={`services_banner_box_icon ${item.color}`}>
                                                    <img src={item.icon} alt={item.alt} className="services_banner_box_icon_img" />
                                                </div>
                                                <div className="services_banner_box_contents">
                                                    <p className="paragraph_content">{item.title}</p>
                                                    <p className="services_banner_text">{item.text}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default ServiceBanner