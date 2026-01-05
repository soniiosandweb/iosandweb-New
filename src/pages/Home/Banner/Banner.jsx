import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import TypeWritter from "../../../components/TypeWritter";
import { useState } from "react";


const homeBanner = `${process.env.REACT_APP_API_URL}/assests/home/home-banner.webp`;

// Home video
const homeVideo = `${process.env.REACT_APP_API_URL}/assests/home-video.mp4`;


const Banner = () => {
      const [showSecond, setShowSecond] = useState(false);

    return(
        <div className="home-banner">
            <Container>
                <Row>
                    <Col>
                        <div className="intro-content">
                        <h1 className="heading_main bannerPadding">
                        <TypeWritter
                            text="We design and deliver intelligent, scalable technology solutions that help businesses innovate, automate, and grow faster."
                            delay={100}
                            onComplete={() => setShowSecond(true)}
                        />

                        {showSecond && (
                            <>
                            <br /><br/>
                            <TypeWritter
                                text="Intelligent solutions built to optimize performance, enhance efficiency, and accelerate business growth."
                                delay={100}
                                infinite
                            />
                            </>
                        )}
                        </h1>
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