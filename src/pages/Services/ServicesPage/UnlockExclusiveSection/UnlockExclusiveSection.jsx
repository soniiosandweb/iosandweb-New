import { Link } from "react-router-dom";
import "./UnlockExclusiveSection.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import iocn1 from "../newImagesServiecesPage/unlock/img1.png"
import iocn2 from "../newImagesServiecesPage/unlock/img2.png"
import iocn3 from "../newImagesServiecesPage/unlock/img3.png"
import iocn4 from "../newImagesServiecesPage/unlock/img4.png"
import iocn5 from "../newImagesServiecesPage/unlock/img5.png"
import iocn6 from "../newImagesServiecesPage/unlock/img6.png"
gsap.registerPlugin(ScrollTrigger);




const UnlockExclusiveSection = ({visions}) => {

    const containerRef = useRef(null);

    useEffect(() => {
        let ctx;

        const initAnimation = () => {
            ctx = gsap.context(() => {
            gsap.fromTo(
                ".slide_boxes",
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power3.out",
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                        toggleActions: "play reverse play reverse",
                    }
                }
            );
            }, containerRef);

            ScrollTrigger.refresh();
        };

        const timeout = setTimeout(initAnimation, 150);

        return () => {
            clearTimeout(timeout);
            ctx && ctx.revert();
        };
    }, []);
const benefits = [
  {
    title: "Increased Traffic",
    description:
      "Drive qualified visitors who actually convert. Our data-driven strategies attract your ideal customers, boost engagement, and turn browsers into buyers—not just vanity metrics.",
    icon: iocn1,
  },
  {
    title: "Better Leads",
    description:
      "Quality over quantity, every time. We generate high-intent leads that align with your ideal customer profile, resulting in shorter sales cycles and higher close rates.",
    icon: iocn2,
  },
  {
    title: "Higher Rankings",
    description:
      "Dominate search results for the keywords that matter. Our proven SEO methodology gets you found by ready-to-buy customers while your competitors scramble for page two.",
    icon: iocn3,
  },
  {
    title: "Stronger Trust",
    description:
      "Build lasting credibility that converts. We establish your brand as the go-to authority in your space, earning customer trust that translates directly to loyalty and revenue.",
    icon: iocn4,
  },
  {
    title: "Improved ROI",
    description:
      "Every dollar works harder. Our optimization-obsessed approach maximizes marketing efficiency, increases conversion rates, and delivers returns that justify every investment.",
    icon: iocn5,
  },
  {
    title: "Scalable Growth",
    description:
      "Infrastructure built for expansion. We implement systems and strategies designed to grow with your business, ensuring sustainable success without hitting growth ceilings.",
    icon: iocn6,
  },
];
    return (
        <div className="services_unlock_exclusive_section section-padding " ref={containerRef}>
            <Container>
                <Row>
                    <Col>
                        <h2 className="heading_main text-center split">Unlock Exclusive Advantages by Partnering with Us</h2>
                        <p className="paragraph_content text-center">Driving Results by Understanding Your Business and Its Audience</p>
                        <div className="services_unlock_grid less-top-padding">
                           <div className="benefitsGrid">
  {benefits.map((item, index) => (
    <div className="benefitItem" key={index}>
      <img src={item.icon} alt="" className="benefitIcon" />

      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  ))}
</div>
                        </div>

                    <div className="bussinseGrowth">
                        <div className="bussinseLeft">
                            <h2 className="hrading">Your Business Deserves a Growth  Strategy That Delivers Real Result</h2>
                            <p>Infrastructure built for expansion. We implement systems and strategies designed to grow with your business, ensuring sustainable success without hitting growth ceilings.</p>
                        </div>
                        <div className="bussinseright">
                            <span className="text">Tailored Strategies | Measurable Result |Sustainable Growth</span>
                                    <Link to="/contact-us" reloadDocument className="btn-gradient-blue">Let’s Build Your Next Growth Story Together <FontAwesomeIcon icon={faCircleArrowRight} /></Link>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UnlockExclusiveSection