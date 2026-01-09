import "./PoweringSection.css";
import { Col, Container, Row } from "react-bootstrap";
import AwardsSection from "./AwardSection.jsx";

const PoweringSection = () => {
        
    return(
        <div className=" black powering_section section-padding ">
            <Container>
                <Row>
                    <Col>
                        {/* Awards */}
                        <AwardsSection />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PoweringSection