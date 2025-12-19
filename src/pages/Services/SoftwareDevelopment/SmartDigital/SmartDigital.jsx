import { Col, Container, Row } from "react-bootstrap";
import "./SmartDigital.css";

const smartImg = `${process.env.REACT_APP_API_URL}/assests/services/software-development/smart_digital.webp`;

const SmartDigital = () => {
    return(
        <div className="smart_digital_section section-padding body-background">
            <Container>
                <Row>
                    <Col>
                        <div className="smart_digital_flex">
                            <div className="smart_digital_cols">
                                <p className="paragraph_content">Prepared to Drive Strategic Transformation for Your Business?</p>
                                <h2 className="heading_main">Smart digital solutions that deliver results today. Enabling growth and innovation for the future.</h2>
                            </div>
                            <div className="smart_digital_cols text-right">
                                <img src={smartImg} alt="Smart digital solutions" className="smart_digital_image" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SmartDigital