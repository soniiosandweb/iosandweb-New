import "./BannerSection.css";
import { Col, Container, Row } from "react-bootstrap";

const contactGif = `${process.env.REACT_APP_API_URL}/assests/contact/ContactUs.gif`;
const contactBg = `${process.env.REACT_APP_API_URL}/assests/contact/bannerbg.webp`;

const BannerSection = () => {
    return(
        <div className="contact_banner_section">
            <img src={contactBg} alt="Contact Us" className="contactus_banner_bg" />
            <Container>
                <Row>
                    <Col>
                        <div className="contactus_banner_flex section-padding">
                            <div className="contactus_center">
                                <h1 className="heading_main split">Let's Start Something Great</h1>
                             </div>
                            </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BannerSection