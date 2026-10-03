import { Accordion, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import "./FAQ.css";

const FAQ = ({ heading, lists, fullwidth }) => {
  const [activeKey, setActiveKey] = useState("0");

  const leftFaqs = lists?.slice(0, 5) || [];
  const rightFaqs = lists?.slice(5, 10) || [];

  const renderFaq = (item, index, offset = 0) => {
    const faqIndex = index + offset;
    const formattedKey = String(faqIndex + 1).padStart(2, "0");

    return (
      <Accordion.Item
        eventKey={faqIndex.toString()}
        key={faqIndex}
        className="faq_accordion_item"
      >
        <Accordion.Header>
          <span className="faq_number">
            {formattedKey}
          </span>

          <span className="faq_title">
            {item.title}
          </span>
        </Accordion.Header>

        <Accordion.Body
          dangerouslySetInnerHTML={{
            __html: item.text,
          }}
        />
      </Accordion.Item>
    );
  };

  return (
    <section className="faq_section_block homeFaq section-padding no-top-padding">
      <Container>
        <Row>
          <Col>
            <div className={`faq_container ${fullwidth ? "full-width" : ""}`}>

              {/* Heading */}
              <div className="faq_heading">
                <h2 className="heading_main">
                  {heading || "Frequently Asked Questions"}
                </h2>
              </div>

              {/* FAQ */}
              <div className="faq_Accordion">

                {/* Left Column */}
                <Accordion
                  flush
                  activeKey={activeKey}
                  onSelect={(key) => setActiveKey(key)}
                >
                  {leftFaqs.map((item, index) =>
                    renderFaq(item, index)
                  )}
                </Accordion>

                {/* Right Column */}
                <Accordion
                  flush
                  activeKey={activeKey}
                  onSelect={(key) => setActiveKey(key)}
                >
                  {rightFaqs.map((item, index) =>
                    renderFaq(item, index, 5)
                  )}
                </Accordion>

              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQ;
