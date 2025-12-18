import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./WhyChoose.css";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const whyChooseImg = `${process.env.REACT_APP_API_URL}/assests/images/home/why_choose.webp`;

const whyChooseLists = [
    {
        title: "Customized Solutions:",
        text: "Your business is unique. We tailor every service to align perfectly with your vision, goals, and industry challenges, ensuring maximum impact.",
    },
    {
        title: "Experienced Team:",
        text: "Work with an award-winning team that expertly combines creativity, cutting-edge technology, and data-driven insights to deliver exceptional results.",
    },
    {
        title: "Future-Proof Results:",
        text: "We build scalable, flexible solutions designed to grow with your business and adapt to emerging market trends and technologies.",
    },
    {
        title: "Transparent & Reliable:",
        text: "Clear communication, honest timelines, and consistent delivery are at the heart of our approach, giving you peace of mind throughout the project.",
    },
    {
        title: "Customer-Centric Approach:",
        text: "We prioritize your satisfaction through close collaboration and personalized support at every project stage.",
    },
    {
        title: "Innovative Mindset:",
        text: "Committed to continuous learning, we leverage the latest tools in AI, blockchain, and digital marketing to keep you ahead of the curve.",
    },
    {
        title: "End-to-End Services:",
        text: "From strategy to execution and ongoing optimization, we offer comprehensive services under one roof, simplifying your vendor management.",
    },
    {
        title: "Proven Track Record:",
        text: "Our portfolio includes successful projects across industries, backed by positive client testimonials and measurable business growth.",
    },
    {
        title: "Rigorous Quality Standards:",
        text: "We implement thorough testing, usability assessments, and performance tuning to ensure your solutions are reliable and user-friendly.",
    },
    {
        title: "Agile & Flexible Development:",
        text: "Our agile methodology allows for quick iterations and adjustments based on your feedback and evolving needs.",
    },
    {
        title: "Security Focused:",
        text: "We prioritize data security and privacy in all our solutions to protect your business and customers.",
    }
]

const WhyChoose = () => {
    return(
        <div className="why_choose_section section-padding body-background">
            <Container>
                <Row>
                    <Col>
                        <div className="why_choose_flex_block">
                            <div className="why_choose_cols why_choose_left_col">
                                <h2 className="heading_main">Why Choose IAW Technologies, You May Ask?</h2>
                                <p className="paragraph_content">We ensure web solutions that work flawlessly across multiple devices.</p>
                                <img src={whyChooseImg} alt="Why Choose IAW Technologies" className="why_choose_img" />
                            </div>
                            <div className="why_choose_cols">
                                <Accordion defaultActiveKey="0" flush className="why_choose_accordion">
                                    {whyChooseLists.map((item,i) => (
                                        <Accordion.Item eventKey={i+1} key={i}>
                                            <Accordion.Header>
                                                <div className="why_choose_header">
                                                    <span className="why_choose_numbers">{i+1}</span>
                                                    <span className="why_choose_title">{item.title}</span>
                                                </div>
                                                <span className="read_nore_block">Read <FontAwesomeIcon icon={faAnglesRight} /></span>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <p className="paragraph_content">{item.text}</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WhyChoose