import "./TalkGrowth.css";
import { Col, Container, Row } from "react-bootstrap";

const lock = `${process.env.REACT_APP_API_URL}/assests/contact/lock.svg`;

const TalkGrowth = () => {
    return(
        <div className="contact_talk_growth_section section-padding body-background">
            <Container>
                <Row>
                    <Col>
                        <div className="contact_talk_growth_heading">
                            <img src={lock} alt="Lock" className="contact_lock" />
                            <div className="contact_talk_growth_heading_block">
                                <h2 className="heading_main">Let's Talk Growth- Schedule Your Free Call Now</h2>
                                <p className="paragraph_content">Start Your Growth Journey With a Free Strategy Session</p>
                            </div>
                        </div>

                        <iframe src="https://calendly.com/iawtech/free-consultation?embed_domain=iosandweb.net&embed_type=Inline" width="100%" height="100%" title="Select a Date & Time - Calendly" data-origwidth="100%" data-origheight="100%" className="session-iframe"></iframe>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TalkGrowth