import "./MissionVisionSection.css";
import { Col, Container, Row } from "react-bootstrap";

const arrow = `${process.env.REACT_APP_API_URL}/assests/about/arrow.svg`;
const visible = `${process.env.REACT_APP_API_URL}/assests/about/visible.svg`;

const missionVision = [
    {
        icon: arrow,
        title: "Our Mission",
        text: "With our focus, dedication, and communication, we became an award-winning organization. We believe to deliver the best services in developing, designing and improving your digital intellectual properties. We believe in organic communication and coordination, not just between our team but also with our clients in every manner. This helps us to understand clients' requirements and their problems and allows us to give our best to the clients as well as their customers."
    },
    {
        icon: visible,
        title: "Our Vision",
        text: "Our Vision reflects our perfection. Being the best team in the digital world, we believe to grow your business at the next level through digitalization. The vision of our organization defines the core spirit of IosAndWeb Technologies. It tells what our company is all about. Our vision motivates us to always be on a path that will make us achieve our goals."
    }
]

const MissionVisionSection = () => {
    return(
        <div className="mission_vision_section section-padding black-background">
            <Container>
                <Row>
                    <Col>
                        <div className="mission_vision_grid">
                            {missionVision.map((item,i) => (
                                <div className="mission_vision_grid_item" key={i}>
                                    <div className="mission_vision_icon">
                                        <img src={item.icon} alt={item.title} className="mission_vision_img" />
                                    </div>
                                    <h3 className="mission_vision_title">{item.title}</h3>
                                    <p className="mission_vision_text">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MissionVisionSection