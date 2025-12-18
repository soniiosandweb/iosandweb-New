import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";

const homeBanner = `${process.env.REACT_APP_API_URL}/assests/images/home/home-banner.webp`;

// Home video
const homeVideo = `${process.env.REACT_APP_API_URL}/assests/home-video.mp4`;

const Banner = () => {
    return(
        <div className="home-banner">
            <Container>
                <Row>
                    <Col>
                        <div className="intro-content">
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