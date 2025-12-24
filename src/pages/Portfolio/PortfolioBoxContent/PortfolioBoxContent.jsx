import "./PortfolioBoxContent.css";
import { Col, Container, Row } from "react-bootstrap";

const portfolioLists = [
    "At IAW, we design and develop digital experiences that help brands grow, convert, and stand out in competitive markets. Our portfolio reflects a diverse range of industries—from healthcare and real estate to eCommerce, logistics, and digital marketing—each built with a focus on performance, usability, and scalability.",

    "We specialize in crafting custom websites and applications using modern technologies such as WordPress, React JS, Node JS, Magento, and PHP, ensuring every project is tailored to the client’s business goals. Whether it’s a high-converting service website, a complex eCommerce platform, or a dynamic real estate application, our approach combines strategic thinking, clean design, and robust development."
]

const PortfolioBoxContent = () => {
    return(
        <div className="portfolio_box_content section-padding no-top-padding black-background">
            <Container>
                <Row>
                    <Col>
                        <div className="portfolio_box_grid">
                            {portfolioLists.map((item,i) => (
                                <div className="portfolio_box_item" key={i}>
                                    <p className="portfolio_box_item_content">{item}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PortfolioBoxContent