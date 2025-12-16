import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./WhyChoose.css";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const whyChooseImg = `${process.env.REACT_APP_API_URL}/assests/images/home-new/why_choose.webp`;

const whyChooseLists = [
    {
        title: "Tailored Solution",
        text: "We understand that every business is unique, that's why we take the time to listen and understand your requirements and goals, ensuring that whatever we develop for you adheres to your vision perfectly.",
    },
    {
        title: "Expertise & Experience",
        text: "Our team of seasoned developers brings years of experience and a wealth of knowledge to the table. From web applications to mobile apps to enterprise solutions, we have the skills to deliver results.",
    },
    {
        title: "Innovation at the core",
        text: "Innovation drives everything we do. We stay ahead of the curve, leveraging the latest technologies and trends to build cutting-edge solutions that seamlessly set you apart from the competition.",
    },
    {
        title: "Seamless Integration",
        text: "Our solutions coherently integrate with your existing systems and processes, minimizing disruptions and maximizing efficiency. Whether you're upgrading legacy systems or starting fresh, we ensure a smooth transition.",
    },
    {
        title: "Ongoing Support",
        text: "Our partnership doesn't just end after deployment; we provide ongoing support and maintenance to keep your software running smoothly and address any issues that may arise.",
    }
]

const WhyChoose = () => {
    return(
        <div className="why_choose_section section-padding body-background">
            <Container>
                <Row>
                    <Col>
                        <div className="why_choose_flex_block">
                            <div className="why_choose_cols">
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