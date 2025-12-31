import "./OurMarketingSection.css";
import { Col, Container, Row } from "react-bootstrap";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const marketingLists = [
    {
        title: "Research",
        text: "Deep Dive into competitors and Market Trends",
    },
    {
        title: "Targeting",
        text: "Identifying your ideal Customer Persona",
    },
    {
        title: "Execution",
        text: "Launching campaigns Across chosen channels",
    },
    {
        title: "Analysis",
        text: "Monitoring data and performance metrics",
    },
    {
        title: "Refinement",
        text: "Monitoring data and performance metrics",
    }
]

const OurMarketingSection = ({classes}) => {

    const marketingRef = useRef(null);

    useEffect(() => {
        let ctx;

        const initAnimation = () => {
            ctx = gsap.context(() => {
            gsap.fromTo(
                ".marketing_boxes",
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power3.out",
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: marketingRef.current,
                        start: "top 75%",
                        toggleActions: "play reverse play reverse",
                    }
                }
            );
            }, marketingRef);

            ScrollTrigger.refresh();
        };

        const timeout = setTimeout(initAnimation, 150);

        return () => {
            clearTimeout(timeout);
            ctx && ctx.revert();
        };
    }, []);

    return(
        <div className={`services_our_marketing_section ${classes ? classes : "body-background"}`} ref={marketingRef}>
            <Container>
                <Row>
                    <Col>
                        <h2 className="heading_main text-center split">Our Marketing Strategy</h2>
                        <p className="paragraph_content text-center">We Dont Guess. We Calculate</p>
                        <div className="our_marketing_grids less-top-padding">
                            {marketingLists.map((item,i) => (
                                <div className="our_marketing_item marketing_boxes" key={i}>
                                    <div className="our_marketing_numbers">{i+1}</div>
                                    <p className="paragraph_content">{item.title}</p>
                                    <p className="our_marketing_text">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OurMarketingSection