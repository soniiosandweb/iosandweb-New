import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faUsers,
  faClipboardCheck,
  faFileCircleCheck,
  faPeopleGroup,
  faLightbulb as faInnovation,
  faGear,
  faChartLine,
  faMedal,
  faCode,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

import "./WhyChoose.css";
import { Col, Container, Row } from "react-bootstrap";
import img2 from "../newImagesServiecesPage/whychoos/img2.png"
import img3 from "../newImagesServiecesPage/whychoos/img3.png"
import img4 from "../newImagesServiecesPage/whychoos/img4.png"
import img5 from "../newImagesServiecesPage/whychoos/img5.png"
import img6 from "../newImagesServiecesPage/whychoos/img6.png"
import img7 from "../newImagesServiecesPage/whychoos/img7.png"
import img8 from "../newImagesServiecesPage/whychoos/img8.png"
import img9 from "../newImagesServiecesPage/whychoos/img9.png"
import img10 from "../newImagesServiecesPage/whychoos/img10.png"
import img11 from "../newImagesServiecesPage/whychoos/img11.png"

const reasons = [
  {
    icon: img11,
    title: "Customized Solutions",
    description:
      "Your business is unique. We tailor every service to align perfectly with your vision, goals, and industry challenges, ensuring maximum impact.",
  },
  {
    icon: img2,
    title: "Experienced Team",
    description:
      "Work with an award-winning team that excels in crafting, cutting-edge technology, and data-driven insights to deliver exceptional results.",
  },
  {
    icon: img3,
    title: "Future-Proof Results",
    description:
      "We build scalable, flexible solutions designed to grow with your business and adapt to emerging market trends and technologies.",
  },
  {
    icon: img4,
    title: "Transparent & Reliable",
    description:
      "Clear communication, honest timelines, and consistent delivery are at the heart of our approach, giving you peace of mind throughout the project.",
  },
  {
    icon: img5,
    title: "Customer-Centric Approach",
    description:
      "We prioritize your satisfaction through close collaboration and personalized support at every project stage.",
  },
  {
    icon: img6,
    title: "Innovative Mindset",
    description:
      "Committed to continuous learning, we leverage the latest tools in AI, blockchain, and digital marketing to keep you ahead of the curve.",
  },
  {
    icon: img7,
    title: "End-to-End Services",
    description:
      "From strategy to execution and ongoing optimization, we offer comprehensive services under one roof, simplifying your vendor management.",
  },
  {
    icon: img8,
    title: "Proven Track Record",
    description:
      "Our portfolio includes successful projects across industries, backed by positive client testimonials and measurable business growth.",
  },
  {
    icon: img9,
    title: "Rigorous Quality Standards",
    description:
      "We implement thorough testing, usability assessments, and performance tuning to ensure your solutions are reliable and user-friendly.",
  },
  {
    icon: img10,
    title: "Agile & Flexible Development",
    description:
      "Our agile methodology allows for quick iterations and adjustments based on your feedback and evolving needs.",
  },
  {
    icon: img11,
    title: "Security Focused",
    description:
      "We prioritize data security and privacy in all our solutions to protect your business and customers.",
  },
];
const WhyChoose = () => {
    return(
        <div className="why_choose_section section-padding">
            <Container>
                <Row>
                    <Col>
                        <div className="why_choose_flex_block">
                            <div className="why_choose_cols">
                                <h2 className="heading_main ">Why Choose IAW Technologies, You May Ask?</h2>
                                <p className="paragraph_content">We ensure web solutions that work flawlessly across multiple devices.</p>
                            </div>
 <div className="whyChooseGrid">
  {reasons.map((item, index) => (
    <div className="whyChooseCard" key={index}>
      <div className="whyChooseIcon">
        <img src={item.icon} alt="" />
      </div>

      <h3>{item.title}</h3>

      <p>{item.description}</p>
    </div>
  ))}
</div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WhyChoose