import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import TypeWritter from "../../../components/TypeWritter";
import { useEffect, useState } from "react";

const homeBanner = `${process.env.REACT_APP_API_URL}/assests/home/HomeBnner.webp`;

const Banner = () => {
     const [IsMobile , setIsMobile] = useState(window.innerWidth <=768)
        useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    return(
        <div className="home-banner">
            <Container>
                <Row>
                    <Col>
                        <div className="intro-content">
{
  !IsMobile ? (
    <h1 className="heading_main">
      <TypeWritter
        text="Empowering businesses with intelligent technology solutions for a smarter future."
        delay={100}
        infinite={true}
      />
    </h1>
  ) : (
    <h1 className="heading_main">
      Empowering businesses with intelligent technology solutions for a smarter future.
    </h1>
  )
}
                        </div>
                        <img 
                            src={homeBanner} 
                            alt="banner" 
                            className="intro_video"
                            loading="eager"
                            />
                        
                        <div className="home-banner-overlay"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner