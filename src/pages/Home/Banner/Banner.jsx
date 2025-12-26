import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import TypeWritter from "../../../components/TypeWritter";

const homeBanner = `${process.env.REACT_APP_API_URL}/assests/home/home-banner.webp`;

// Home video
const homeVideo = `${process.env.REACT_APP_API_URL}/assests/home-video.mp4`;

const Banner = () => {
    return(
        <div className="home-banner">
            <Container>
                <Row>
                    <Col>
                        <div className="intro-content">
                            <h1 className="heading_main"><TypeWritter text="Empowering businesses with intelligent technology solutions for a smarter future." delay={100} infinite  /></h1>
                        </div>
                        <video className="intro_video" poster={homeBanner} autoPlay={true} muted={true} loop={true}>
                            <source src={homeVideo} type="video/mp4"></source>
                        </video>
                        <div className="home-banner-overlay"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner