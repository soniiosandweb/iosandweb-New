import NumbersGrid from "../../../../components/NumbersGrid/NumbersGrid";
import "./ReliableCustomSection.css";
import { Col, Container, Row } from "react-bootstrap";

const bgOverlay = `${process.env.REACT_APP_API_URL}/assests/home/powering/bg_overlay.webp`;

const reliableLinks = [
    {
        title: "100% Tailored Solutions",
        text: "We deeply understand your business needs and deliver custom software designed to solve your unique challenges."
    },
    {
        title: "Upfront Pricing",
        text: "Clear, upfront pricing ensures accurate budgeting with no hidden costs."
    },
    {
        title: "Design-Driven Engineering",
        text: "Our adaptive approach ensures consistently outstanding user experiences."
    },
    {
        title: "Rapid Development",
        text: "Clear communication ensures transparency and complete visibility throughout the project."
    },
    {
        title: "Quality Assurance",
        text: "Our solutions ensure high performance, strong security, and smooth system integration."
    },
    {
        title: "24*7 Dedicated Support",
        text: "A dedicated product manager to oversee your project and provide continuous support"
    }
]

const ReliableCustomSection = () => {
    return(
        <div className="reliable_custom_section section-padding linear-dark-background">
            <img src={bgOverlay} alt="Powering Your Growth with Smart Tech" className="reliable_custom_overlay" />
            <Container>
                <Row>
                    <Col>
                        <div className="reliable_custom_flexs">
                            <div className="reliable_custom_cols">
                                <h2 className="heading_main">What Makes Us a Reliable Custom Software Development Company</h2>
                                <p className="paragraph_content">Mutual trust and transparency form the foundation of our partnerships.</p>
                            </div>
                            <div className="reliable_numbers_cols">
                                <NumbersGrid />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ReliableCustomSection