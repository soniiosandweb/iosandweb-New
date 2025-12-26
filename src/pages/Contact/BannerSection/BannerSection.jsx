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
                            <div className="contactus_left_cols">
                                <h1 className="heading_main">Let's Start Something Great</h1>
                                <p className="paragraph_content">Whether you have a detailed project brief or just an idea, we're here to help turn your vision into reality. Reach out today and let's discuss how we can drive your digital growth</p>
                                <p className="paragraph_content">From small startups to established enterprises, we work with businesses of all sizes. Tell us about your project, and we'll show you what's possible.</p>
                            </div>
                            <div className="contactus_right_cols">
                                <img src={contactGif} alt="Let's Start Something Great" className="contactus_gif_image" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BannerSection