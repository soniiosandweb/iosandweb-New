import "./OurCommitment.css";
import { Col, Container, Row } from "react-bootstrap";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const commitmentLists = [
    {
        title: "Ensure impactful innovations",
        text: "An unwavering commitment to drive maximum customer satisfaction, infused with integrity and passion.",
    },
    {
        title: "Focus on self-development",
        text: "Training and mentorship programs, interactive sessions and community meetups to drive personal growth.",
    },
    {
        title: "Integrate work-life balance",
        text: "Latest infrastructure and flexible working hours along with many other privileges that inculcate healthy lifestyle choices.",
    }
]

const OurCommitment = () => {

    const commitementRef = useRef(null);
    
        useEffect(() => {
            let ctx;
    
            const initAnimation = () => {
                ctx = gsap.context(() => {
                gsap.fromTo(
                    ".commitement_boxes",
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: "power3.out",
                        stagger: 0.2,
                        scrollTrigger: {
                            trigger: commitementRef.current,
                            start: "top 75%",
                            toggleActions: "play reverse play reverse",
                        }
                    }
                );
                }, commitementRef);
    
                ScrollTrigger.refresh();
            };
    
            const timeout = setTimeout(initAnimation, 150);
    
            return () => {
                clearTimeout(timeout);
                ctx && ctx.revert();
            };
        }, []);

    return(
        <div className="our_commitment_section section-padding black-background" ref={commitementRef}>
            <Container>
                <Row>
                    <Col>
                        <h2 className="heading_main text-center split">Our Commitment to Excellence</h2>
                        <p className="paragraph_content text-center less-bottom-padding">Supporting People Beyond the Workplace</p>
                        <div className="our_commitment_grids">
                            {commitmentLists.map((item,index) => {
                                const formattedKey = (index + 1).toString().padStart(2, '0');
                                return(
                                    <div className="our_commitment_grids_item commitement_boxes" key={index}>
                                        <div className="our_commitment_item_block">
                                            <p className="our_commitment_item_count">{formattedKey}</p>
                                            <h3 className="our_commitment_item_heading">{item.title}</h3>
                                        </div>
                                        <p className="our_commitment_item_content">{item.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OurCommitment