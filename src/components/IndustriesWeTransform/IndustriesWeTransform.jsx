import { Col, Container, Row } from "react-bootstrap";
import "./IndustriesWeTransform.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const foodRestaurant = `${process.env.REACT_APP_API_URL}/assests/services/services-page/food-restaurant.webp`;
const onDemand = `${process.env.REACT_APP_API_URL}/assests/services/services-page/on-demand.webp`;
const healthcare = `${process.env.REACT_APP_API_URL}/assests/services/services-page/healthcare.webp`;
const ecommerce = `${process.env.REACT_APP_API_URL}/assests/services/services-page/ecommerce.webp`;
const realEstate = `${process.env.REACT_APP_API_URL}/assests/services/services-page/real-estate.webp`;
const homeService = `${process.env.REACT_APP_API_URL}/assests/services/services-page/home-service.webp`;
const delivery = `${process.env.REACT_APP_API_URL}/assests/services/services-page/delivery.webp`;
const transportation = `${process.env.REACT_APP_API_URL}/assests/services/services-page/transportation.webp`;
const routeMap = `${process.env.REACT_APP_API_URL}/assests/services/services-page/route-map.webp`;

const industriesLists = [
    {
        title: "Food & Restaurant",
        text: "Software Development",
        link: "/",
        image: foodRestaurant,
    },
    {
        title: "ON Demand",
        text: "Software Development",
        link: "/",
        image: onDemand,
    },
    {
        title: "Healthcare",
        text: "Software Development",
        link: "/healthcare-software-development",
        image: healthcare,
    },
    {
        title: "eCommerce",
        text: "Software Development",
        link: "/ecommerce-app-development",
        image: ecommerce,
    },
    {
        title: "Real Estate",
        text: "Software Development",
        link: "/real-estate-app-development",
        image: realEstate,
    },
    {
        title: "Home Service",
        text: "Software Development",
        link: "/",
        image: homeService,
    },
    {
        title: "Delivery Logistic",
        text: "Software Development",
        link: "/",
        image: delivery,
    },
    {
        title: "Taxi & Transportation",
        text: "Software Development",
        link: "/",
        image: transportation,
    },
    {
        title: "Route Map",
        text: "Software Development",
        link: "/",
        image: routeMap,
    }
]

const IndustriesWeTransform = () => {

    const industriesRef = useRef(null);

    useEffect(() => {
        let ctx;

        const initAnimation = () => {
            ctx = gsap.context(() => {
            gsap.fromTo(
                ".industries_boxes",
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power3.out",
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: industriesRef.current,
                        start: "top 75%",
                        toggleActions: "play reverse play reverse",
                    }
                }
            );
            }, industriesRef);

            ScrollTrigger.refresh();
        };

        const timeout = setTimeout(initAnimation, 150);

        return () => {
            clearTimeout(timeout);
            ctx && ctx.revert();
        };
    }, []);

    return(
        <div className="industries_we_transform section-padding body-background" ref={industriesRef}>
            <Container>
                <Row>
                    <Col>
                        <h2 className="heading_main text-center split">Industries We Transform</h2>
                        <p className="paragraph_content text-center">Building Digital Excellence Across Every Vertical</p>
                        <div className="industries_transform_grid less-top-padding">
                            {industriesLists.map((item,i) => (
                                <Link reloadDocument to={item.link} key={i} className="industries_transform_item industries_boxes">
                                    <img src={item.image} alt={item.title} className="industries_transform_image" />
                                    <div className="industries_transform_contents">
                                        <div className="industries_transform_left">
                                            <h3 className="industries_transform_title">{item.title}</h3>
                                            <p className="industries_transform_text">{item.text}</p>
                                        </div>
                                        <div className="industries_transform_arrow">
                                            <FontAwesomeIcon icon={faLongArrowRight} />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default IndustriesWeTransform