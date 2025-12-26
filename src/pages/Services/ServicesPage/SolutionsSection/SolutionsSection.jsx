import { Col, Container, Row } from "react-bootstrap";
import "./SolutionsSection.css";
import SubHeading from "../../../../components/SubHeading/SubHeading";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const magentoLogo = `${process.env.REACT_APP_API_URL}/assests/services/services-page/magento-logo.webp`;
const googlePartner = `${process.env.REACT_APP_API_URL}/assests/services/services-page/google-partner.webp`;
const elitePartner = `${process.env.REACT_APP_API_URL}/assests/services/services-page/elite-partner.webp`;
const shopifyPlus = `${process.env.REACT_APP_API_URL}/assests/services/services-page/shopify-plus-partners.webp`;
const clutchLogo = `${process.env.REACT_APP_API_URL}/assests/services/services-page/clutch-logo.webp`;

const servicesPartners = [
    { 
        img: magentoLogo,
        title: "Magento"
    },
    { 
        img: googlePartner,
        title: "Google Partner"
    },
    { 
        img: elitePartner,
        title: "Big Commerce Elite Partner"
    },
    { 
        img: shopifyPlus,
        title: "Shopify Plus"
    },
    { 
        img: clutchLogo,
        title: "Clutch"
    }
];

const SolutionsSection = () => {

    const servicesPartnersRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    const isSmall = windowWidth < 380;
    const isMobile = windowWidth < 768;
    const isTablet = windowWidth < 1200;
    
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    const servicesPartnersSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: isSmall ? 1 : isMobile ? 2 : isTablet ? 3 : 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };

    return(
        <div className="services_solutions_section section-padding no-bottom-padding linear-dark-background">
            <Container>
                <Row>
                    <Col>
                        <SubHeading text={"The Iosandweb Advantage"} />
                        <h2 className="heading_main">Where Technical Precision Meets Growth Strategy</h2>
                        <p className="paragraph_content">For over a decade, we've helped ambitious brands dominate their markets through full-stack digital solutions. Our battle-tested methodology blends advanced SEO tactics, high-performance development, and data-driven strategy to deliver what matters most: more visibility, more leads, and measurable revenue growth. We build digital assets that compound in value over time.</p>

                        <div className="services_powering_section">
                            <h2 className="heading_main text-center">Powering Your Growth with Smart Tech</h2>

                            <Slider 
                                className="services_powering_carousel" 
                                {...servicesPartnersSettings}
                                ref={servicesPartnersRef}
                            >
                                {servicesPartners.map((item,i) => (
                                    <div className="item" key={i}>
                                        <div className="services_powering_item">
                                            <img src={item.img} alt={item.title} className="services_powering_image" />
                                        </div>
                                    </div>
                                ))}
                            </Slider>

                            <Link to="/contact-us" reloadDocument className="btn-gradient-blue">See What We Do Best <FontAwesomeIcon icon={faAnglesRight} /></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SolutionsSection