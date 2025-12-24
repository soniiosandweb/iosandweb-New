import "./TechnicalExpert.css";
import { Col, Container, Row } from "react-bootstrap";

const expertiseLists = [
    "iOS & Android Development",
    "Custom Web Apps",
    "Cloud Services & APIs",
    "Cloud Services & APIs",
    "Responsive UI/UX",
]

const TechnicalExpert = () => {
    return(
        <div className="portfolio_technical_expert section-padding no-top-padding black-background">
            <Container>
                <Row>
                    <Col>
                        <h2 className="heading_main">Technical Expertise</h2>
                        <p className="paragraph_content">Our Toolkit is vast, Modern, and Continuously evolving.</p>
                        <div className="portfolio_expertise_grid less-top-padding">
                            {expertiseLists.map((item,i) => (
                                <p className="portfolio_expertise_item" key={i}>
                                    {item}
                                </p>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TechnicalExpert