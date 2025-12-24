import Slider from "react-slick";
import "./PortfolioSlider.css";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const stakeIcon = `${process.env.REACT_APP_API_URL}/assests/menu/staking.png`;
const shoesIcon = `${process.env.REACT_APP_API_URL}/assests/menu/shoes.png`;
const signIcon = `${process.env.REACT_APP_API_URL}/assests/menu/sign-contract.png`;
const buildingsIcon = `${process.env.REACT_APP_API_URL}/assests/menu/buildings.png`;
const procedureIcon = `${process.env.REACT_APP_API_URL}/assests/menu/procedure.png`;
const healthIcon = `${process.env.REACT_APP_API_URL}/assests/menu/heartbeat.png`;
const groceryIcon = `${process.env.REACT_APP_API_URL}/assests/menu/grocery.png`;
const hairIcon = `${process.env.REACT_APP_API_URL}/assests/menu/hair.png`;
const beautyIcon = `${process.env.REACT_APP_API_URL}/assests/menu/beauty.png`;
const massageIcon = `${process.env.REACT_APP_API_URL}/assests/menu/massage.png`;
const careplanIcon = `${process.env.REACT_APP_API_URL}/assests/menu/careplan.png`;

const portfolioMenu = [
    {
        title: "Obgyn",
        url: "https://obgyn.com/",
        image: healthIcon,
        class: "bg-pink",
        tech: "wordpress",
    },
    {
        title: "Block Chain",
        url: "https://blockchain77.com/",
        image: stakeIcon,
        class: "bg-purple",
        tech: "wordpress",
    },
    
    {
        title: "Ananta Aspire zirakpur",
        url: "https://anantaaspirezirakpur.co/",
        image: buildingsIcon,
        class: "bg-green",
        tech: "React JS",
    },
    {
        title: "Hair Restoration",
        url: "https://www.hairrestoration.com/",
        image: hairIcon,
        class: "bg-red",
        tech: "wordpress",
    },
    {
        title: "Silver Street London",
        url: "http://104.156.231.22/silverstreetlondon",
        image: shoesIcon,
        class: "bg-purple",
        tech: "magento",
    },
    {
        title: "Vamana Residences",
        url: "https://vamanaresidences.com/",
        image: buildingsIcon,
        class: "bg-orange",
        tech: "React JS",
    },
    {
        title: "Blepharoplasty",
        url: "https://blepharoplasty.com/",
        image: beautyIcon,
        class: "bg-green",
        tech: "wordpress",
    },
    {
        title: "Fresh Organic Grocery",
        url: "http://freshorganicgrocery.com/",
        image: groceryIcon,
        class: "bg-purple",
        tech: "React JS & Node JS",
    },
    {
        title: "Ananta Aspire",
        url: "https://anantaaspire.co/",
        image: buildingsIcon,
        class: "bg-blue",
        tech: "React JS",
    },
    {
        title: "Body Massage",
        url: "https://bodymassage.com/",
        image: massageIcon,
        class: "bg-orange",
        tech: "wordpress",
    },
    {
        title: "Ship From Germany",
        url: "https://shipfromgermany.com/",
        image: procedureIcon,
        class: "bg-pink",
        tech: "wordpress",
    },
    {
        title: "Appreciant Realty",
        url: "https://appreciantrealty.com/",
        image: buildingsIcon,
        class: "bg-purple",
        tech: "React JS",
    },
    {
        title: "Whopping Seo",
        url: "https://whoppingseo.com/",
        image: signIcon,
        class: "bg-blue",
        tech: "wordpress",
    },
    {
        title: "SEO Rockers",
        url: "https://seorockers.com/",
        image: signIcon,
        class: "bg-red",
        tech: "PHP",
    },
    {
        title: "Printer Not Working",
        url: "https://printernotworking.com/",
        image: signIcon,
        class: "bg-pink",
        tech: "Wordpress",
    },
    {
        title: "Physicians",
        url: "https://physicians.com/",
        image: healthIcon,
        class: "bg-green",
        tech: "Wordpress",
    },
    {
        title: "ENT Expert",
        url: "https://uglare.com/ent/",
        image: careplanIcon,
        class: "bg-purple",
        tech: "Wordpress",
    }
]

const PortfolioSlider = () => {

    const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
        return result;
    };

    const groupedPortfolio = chunkArray(portfolioMenu, 3);

    const portfolioSliderRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    const issmallest = windowWidth < 375;
    const isSmall = windowWidth < 480;
    const isMobile = windowWidth < 768;
    const isTablet = windowWidth < 1200;
        
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
        
    const portfolioSliderSettings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: isSmall ? 1 : isMobile ? 2 : isTablet ? 3 : 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        centerPadding: issmallest ? "30px" : isSmall ? "50px" : "0px",
        centerMode: isSmall ? true : false,
    };

    return(
        <div className="portfolio_slider_section section-padding black-background">
            <Container>
                <Row>
                    <Col>
                        <div className="portfolio_slider_block">
                            <Slider 
                                className="portfolio_slider_carousel" 
                                {...portfolioSliderSettings}
                                ref={portfolioSliderRef}
                            >
                                {groupedPortfolio.map((item,index) => (
                                    <div className="item" key={index}>
                                        {item.map((link,i) => (
                                            <Link to={link.url} target={"_blank"} rel="noreferrer" key={i} className="portfolio_slider_item">
                                                <div className={`${link.class} portfolio_slider_img`}>
                                                    <img src={link.image} className="service-img" alt={link.title} /> 
                                                </div>
                                                <p>{link.title} <span>({link.tech})</span></p>
                                            </Link>
                                        ))}
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

export default PortfolioSlider