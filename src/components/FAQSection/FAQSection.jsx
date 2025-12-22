import { Accordion, Col, Container, Row } from "react-bootstrap";
import "./FAQSection.css";
import SubHeading from "../SubHeading/SubHeading";

const FAQSection = ({subheading, heading, lists, fullwidth}) => {
    return(
        <div className="faq_section_block section-padding body-background">
            <Container>
                <Row>
                    <Col>
                        <div className={`faq_container ${fullwidth && "full-width"}`}>
                            <SubHeading text={subheading ? subheading : "Insights"} />
                            <h2 className="heading_main">{heading ? heading : "Frequently Asked Questions"}</h2>

                            <Accordion 
                                defaultActiveKey={0}
                                className="faq_Accordion" 
                                flush
                            >
                                {lists && lists.length >= 1 && lists.map((item,index) => {
                                    const formattedKey = (index + 1).toString().padStart(2, '0');
                                    return (
                                        <Accordion.Item eventKey={index} key={index}>
                                            <Accordion.Header>
                                                <span>{formattedKey}</span>
                                                {item.title}
                                            </Accordion.Header>
                                            <Accordion.Body dangerouslySetInnerHTML={{ __html: item.text }} ></Accordion.Body>
                                        </Accordion.Item>
                                    )
                                })}
                            </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FAQSection