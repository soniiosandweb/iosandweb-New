import "./PortfolioBoxContent.css";
import { Col, Container, Row } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const portfolioLists = [
    "At IAW, we design and develop digital experiences that help brands grow, convert, and stand out in competitive markets. Our portfolio reflects a diverse range of industries—from healthcare and real estate to eCommerce, logistics, and digital marketing—each built with a focus on performance, usability, and scalability.",

    "We specialize in crafting custom websites and applications using modern technologies such as WordPress, React JS, Node JS, Magento, and PHP, ensuring every project is tailored to the client’s business goals. Whether it’s a high-converting service website, a complex eCommerce platform, or a dynamic real estate application, our approach combines strategic thinking, clean design, and robust development."
]

const PortfolioBoxContent = () => {

    const boxesRef = useRef(null);
    
    useEffect(() => {
        let ctx;
    
        const initAnimation = () => {
            ctx = gsap.context(() => {
                gsap.fromTo(
                    ".boxes_slide",
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: "power3.out",
                        stagger: 0.2,
                        scrollTrigger: {
                            trigger: boxesRef.current,
                            start: "top 75%",
                            toggleActions: "play reverse play reverse",
                        }
                    }
                );
            }, boxesRef);
    
            ScrollTrigger.refresh();
        };
    
        const timeout = setTimeout(initAnimation, 150);
    
        return () => {
            clearTimeout(timeout);
            ctx && ctx.revert();
        };
    }, []);

    return(
        <div className="portfolio_box_content section-padding no-top-padding black-background" ref={boxesRef}>
            <Container>
                <Row>
                    <Col>
                        <div className="portfolio_box_grid">
                            {portfolioLists.map((item,i) => (
                                <div className="portfolio_box_item boxes_slide" key={i}>
                                    <p className="portfolio_box_item_content">{item}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PortfolioBoxContent