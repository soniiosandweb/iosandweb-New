import { Link } from "react-router-dom";
import "./PoweringSection.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import AwardsSection from "../AwardsSection/AwardsSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import img1 from "../newHomeImage/powerSection/img1.png";
import img2 from "../newHomeImage/powerSection/img2.png";
import img3 from "../newHomeImage/powerSection/img3.png";
import img4 from "../newHomeImage/powerSection/img4.png";
import img5 from "../newHomeImage/powerSection/img5.png";
import img6 from "../newHomeImage/powerSection/img6.png";

// Same content for all 6 slides for now — swap each entry's text/image later
const caseStudies = [
  { id: 1, image: img2 },
  { id: 2, image: img2 },
  { id: 3, image: img2 },
  { id: 4, image: img2 },
  { id: 5, image: img2 },
  { id: 6, image: img2 },
];

const PoweringSection = () => {
  const poweringRef = useRef(null);

  useEffect(() => {
    let ctx;

    const initAnimation = () => {
      ctx = gsap.context(() => {
        gsap.fromTo(
          ".powering_boxes",
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: poweringRef.current,
              start: "top 75%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }, poweringRef);

      ScrollTrigger.refresh();
    };

    const timeout = setTimeout(initAnimation, 150);

    return () => {
      clearTimeout(timeout);
      ctx && ctx.revert();
    };
  }, []);

  // duplicate the list so the marquee loops seamlessly
const marqueeItems = [
  {
    id: 1,
    title: "MAP Route: Smarter Wayfinding",
    description:
      "Real-time directions, optimized routes, and seamless location intelligence at your fingertips.",
    stats: [
      {
        value: "85%",
        label: "Faster Task & Workflow Analysis",
      },
      {
        value: "60%",
        label: "Quicker, Data-Driven Decision Making",
      },
    ],
    image: img1,
    buttonText: "View Case Study",
  },

  

  {
    id: 3,
    title: "Lightning-Fast XRP Trading",
    description:
      "Secure, Low-Fee, High-Speed Crypto Transactions Built for Serious Traders",
    stats: [
      {
        value: "85%",
        label: "Faster Execution Speed",
      },
      {
        value: "60%",
        label: "More Efficient Trading Decisions",
      },
    ],
    image: img5,
    buttonText: "View Case Study",
  },  {
    id: 3,
    title: "Delivering Smarter, Faster Real Estate Decisions",
    description:
      "Reinventing Real Estate Through Smart, Data-Led Insights",
    stats: [
      {
        value: "85%",
        label: "More Efficient Property Analysis",
      },
      {
        value: "60%",
        label: "Faster Closing Timelines",
      },
    ],
    image: img6,
    buttonText: "View Case Study",
  },
  {
    id: 4,
    title: "Precision-Driven Health Solutions",
    description:
      "Advanced medical solutions engineered for precision and patient trust.",
    stats: [
      {
        value: "85%",
        label: "Improved Diagnostic Efficiency",
      },
      {
        value: "60%",
        label: "Faster Care Delivery Timelines",
      },
    ],
    image: img3,
    buttonText: "View Case Study",
  },
  {
    id: 6,
    title: "AI Translator – Instant Language Intelligence",
    description:
      "Break Language Barriers with Instant, Accurate, AI-Powered Translation",
    stats: [
      {
        value: "85%",
        label: "Faster Language Processing",
      },
      {
        value: "60%",
        label: "Faster Communication Decisions",
      },
    ],
    image: img4,
    buttonText: "View Case Study",
  },


];
  return (
    <div className="powering_section section-padding no-top-padding">
      <Container>
        <Row>
          <Col>
            <div
              className="powering_content_block no-bottom-padding text-center"
              ref={poweringRef}
            >
              <h2 className="heading_main ">
                Technology That Works in the Real World
              </h2>
              <p className="paraHeading">Explore AI-powered products, intelligent platforms, scalable applications, 
and digital experiences built to solve real business challenges.</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Outside the Container so it can run full width */}
     <div className="caseStudyMarqueeTrack">
  {marqueeItems.map((item, index) => (
    <div className="caseStudySection" key={index}>
      <div className="caseStudyContent">

        {/* LEFT CONTENT */}
        <div className="caseStudyText">

          <h2>
            {item.title}
          </h2>

          <p className="caseStudyDescription">
            {item.description}
          </p>

          <div className="stats">
            {item.stats.map((stat, statIndex) => (
              <div className="stat" key={statIndex}>
                <h3>{stat.value}</h3>

                <p>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* <Link to="/contact-us" className="caseStudyButton">
            {item.buttonText}
            <span>
              <FontAwesomeIcon icon={faAnglesRight} />
            </span>
          </Link> */}

        </div>

        {/* RIGHT IMAGE */}
        <div className="caseStudyImage">
          <img
            src={item.image}
            alt={item.title}
          />
        </div>

      </div>
    </div>
  ))}
</div>

      
    </div>
  );
};

export default PoweringSection;