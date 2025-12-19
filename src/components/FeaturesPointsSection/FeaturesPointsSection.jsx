import { Col, Container, Row } from "react-bootstrap";
import "./FeaturesPointsSection.css";

const checkIcon = `${process.env.REACT_APP_API_URL}/assests/checkmark.svg`;

const FeaturesPointsSection = ({lists}) => {
    return(
        lists && lists.length >=1 &&
        
        <div className="features_points_section">
            <Container>
                <Row>
                    <Col>
                        <div className="features_points_grid">
                            {lists.map((list,i) => (
                                <div className="features_points_item" key={i}>
                                    <img src={checkIcon} alt="Check" className="checkicon" />
                                    <p className="features_point">{list}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}

export default FeaturesPointsSection