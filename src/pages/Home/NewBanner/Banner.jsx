import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import TypeWritter from "../../../components/TypeWritter";
import bannerBg from "../newHomeImage/backgroundHome.png"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import homeVodepNew from "../newHomeImage/homebg.mp4"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// Home video
const homeVideo = `${process.env.REACT_APP_API_URL}/assests/home-video.mp4`;
const homeBanner = `${process.env.REACT_APP_API_URL}/assests/home/home-banner.webp`;

const Banner = () => {
    console.log(homeBanner);

    return (
        <div className="home-banner">
            <Container>
                <Row>
                    <Col>
                        <div className="intro-content">
                            <h1 className="heading_main">Build Smarter. Automate Faster. Grow With AI.</h1>
                            <p className="paragraph_content">AI-powered software, intelligent automation, and scalable digital solutions built for the next generation of business.</p>
                            <Link to="/services" reloadDocument className="btn-gradient-blue">Schedule a Free Consultation <FontAwesomeIcon icon={faCircleArrowRight} /></Link>
                        </div>
                        <video className="intro_video" poster={homeBanner} autoPlay={true} muted={true} loop={true} playsInline>

                            <source src={homeVodepNew} type="video/mp4" />
                        </video>

                        <div className="home-banner-overlay"></div>
                    </Col>
                </Row>
            </Container>
            <a
                href="https://wa.me/917717689799"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-floating"
                aria-label="Chat with us on WhatsApp"
            >
                <FontAwesomeIcon icon={faWhatsapp} />
            </a>
        </div>
    )
}

export default Banner