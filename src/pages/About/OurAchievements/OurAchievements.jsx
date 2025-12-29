import Slider from "react-slick";
import "./OurAchievements.css";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";

const clutch = `${process.env.REACT_APP_API_URL}/assests/about/clutch-logo.webp`;
const appFutura = `${process.env.REACT_APP_API_URL}/assests/about/app-futura-logo.webp`;
const itFirms = `${process.env.REACT_APP_API_URL}/assests/about/it-firms-logo.webp`;
const goodFirms = `${process.env.REACT_APP_API_URL}/assests/about/goodfirms-logo.webp`;
const topDevelopers = `${process.env.REACT_APP_API_URL}/assests/about/top-developers-logo.webp`;
const upWork = `${process.env.REACT_APP_API_URL}/assests/about/upwork-logo.webp`;

const achievements = [
    {
        logo: appFutura,
        alt: "App Futura",
        text: "Number 1 mobile app development company"
    },
    {
        logo: clutch,
        alt: "Clutch",
        text: "No. 1 App Development Company"
    },
    {
        logo: goodFirms,
        alt: "Good Firms",
        text: "App development company of the year"
    },
    {
        logo: itFirms,
        alt: "IT Firms",
        text: "India's Growth Champions in IT"
    },
    {
        logo: topDevelopers,
        alt: "Top Developers",
        text: "Number 1 software development company"
    },
    {
        logo: upWork,
        alt: "upWork",
        text: "Top software development company"
    },
]

const OurAchievements = () => {

    const achievementsRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    const isMobile = windowWidth < 768;
    const isTablet = windowWidth < 1200;
    
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    const achievementsSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: isMobile ? 2 : isTablet ? 3 : 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
    };

    return(
        <div className="our_achievements_section section-padding no-bottom-padding black-background">
            <Container>
                <Row>
                    <Col>
                        <h2 className="heading_main text-center">Our Achievements</h2>
                        <p className="paragraph_content text-center">With the utmost priority of adding value to the projects we undertake, we ensure that our partners stay ahead of the clutter and achieve excellence.</p>
                        <div className="our_achievements_slider_block">
                            <Slider 
                                className="our_achievements_carousel" 
                                {...achievementsSettings}
                                ref={achievementsRef}
                            >
                                {achievements.map((item,i) => (
                                    <div className="item" key={i}>
                                        <div className="our_achievements_item">
                                            <div className="our_achievements_image">
                                                <img src={item.logo} alt={item.alt} className="our_achievements_img" />
                                            </div>
                                            <p className="our_achievements_text">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OurAchievements