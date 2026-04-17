import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import "./Banner/Banner.css";
import { useEffect, useState } from "react";

const homeBanner = `${process.env.REACT_APP_API_URL}/assests/home/HomeBnner.webp`;

const TestHome = () => {
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
                            class="intro_video"
                            loading="eager"
                            fetchpriority="high"
                            width="1200"
                            height="600"
/>
                        
                        <div className="home-banner-overlay"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TestHome;
