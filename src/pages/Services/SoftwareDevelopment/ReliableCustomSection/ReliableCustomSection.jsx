import NumbersGrid from "../../../../components/NumbersGrid/NumbersGrid";
import "./ReliableCustomSection.css";
import { Col, Container, Row } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const bgOverlay = `${process.env.REACT_APP_API_URL}/assests/home/powering/bg_overlay.webp`;

const reliableLinks = [
    {
        title: "100% Tailored Solutions",
        text: "We deeply understand your business needs and deliver custom software designed to solve your unique challenges."
    },
    {
        title: "Upfront Pricing",
        text: "Clear, upfront pricing ensures accurate budgeting with no hidden costs."
    },
    {
        title: "Design-Driven Engineering",
        text: "Our adaptive approach ensures consistently outstanding user experiences."
    },
    {
        title: "Rapid Development",
        text: "Clear communication ensures transparency and complete visibility throughout the project."
    },
    {
        title: "Quality Assurance",
        text: "Our solutions ensure high performance, strong security, and smooth system integration."
    },
    {
        title: "24*7 Dedicated Support",
        text: "A dedicated product manager to oversee your project and provide continuous support"
    }
]

const ReliableCustomSection = () => {

    const reliableRef = useRef(null);
    
        useEffect(() => {
            let ctx;
    
            const initAnimation = () => {
                ctx = gsap.context(() => {
                gsap.fromTo(
                    ".reliable_boxes",
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: "power3.out",
                        stagger: 0.2,
                        scrollTrigger: {
                            trigger: reliableRef.current,
                            start: "top 75%",
                            toggleActions: "play reverse play reverse",
                        }
                    }
                );
                }, reliableRef);
    
                ScrollTrigger.refresh();
            };
    
            const timeout = setTimeout(initAnimation, 150);
    
            return () => {
                clearTimeout(timeout);
                ctx && ctx.revert();
            };
        }, []);

    return(
        <div className="reliable_custom_section section-padding linear-dark-background" ref={reliableRef}>
            <img src={bgOverlay} alt="Powering Your Growth with Smart Tech" className="reliable_custom_overlay" />
            <Container>
                <Row>
                    <Col>
                        <div className="reliable_custom_flexs">
                            <div className="reliable_custom_cols">
                                <h2 className="heading_main desktop split">What Makes Us a Reliable Custom Software Development Company</h2>
                                <p className="paragraph_content desktop">Mutual trust and transparency form the foundation of our partnerships.</p>
                                <div className="reliable_links_grid less-top-padding">
                                    {reliableLinks.map((item, i) => (
                                        <div className="reliable_links_item reliable_boxes" key={i}>
                                            <p className="reliable_item_title">{item.title}</p>
                                            <p className="paragraph_content">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="reliable_numbers_cols">
                                <h2 className="heading_main mobile split">What Makes Us a Reliable Custom Software Development Company</h2>
                                <p className="paragraph_content mobile">Mutual trust and transparency form the foundation of our partnerships.</p>
                                <NumbersGrid />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ReliableCustomSection