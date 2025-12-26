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
                                list.title && list.text ?
                                    <div className="features_points_item list_title" key={i}>
                                        <div className="features_points_title_block">
                                            <img src={checkIcon} alt="Check" className="checkicon" />
                                            <p className="features_point_title" dangerouslySetInnerHTML={{ __html: list.title }}></p>
                                        </div>
                                        <p className="features_point">{list.text}</p>
                                    
                                    </div>
                                :
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