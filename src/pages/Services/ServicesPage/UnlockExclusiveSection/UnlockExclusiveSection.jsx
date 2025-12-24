import { Link } from "react-router-dom";
import "./UnlockExclusiveSection.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const innovativeBg = `${process.env.REACT_APP_API_URL}/assests/home/innovative/innovative-bg.webp`;

const exclusiveLists = [
    {
        title: "Increased Traffic",
        text: "Drive qualified visitors who actually convert. Our data-driven strategies attract your ideal customers, boost engagement, and turn browsers into buyers—not just vanity metrics.",
    },
    {
        title: "Better Leads",
        text: "Quality over quantity, every time. We generate high-intent leads that align with your ideal customer profile, resulting in shorter sales cycles and higher close rates.",
    },
    {
        title: "Higher Rankings",
        text: "Dominate search results for the keywords that matter. Our proven SEO methodology gets you found by ready-to-buy customers while your competitors scramble for page two.",
    },
    {
        title: "Stronger Trust",
        text: "Build lasting credibility that converts. We establish your brand as the go-to authority in your space, earning customer trust that translates directly to loyalty and revenue",
    },
    {
        title: "Improved ROI",
        text: "Every dollar works harder. Our optimization-obsessed approach maximizes marketing efficiency, increases conversion rates, and delivers returns that justify every investment.",
    },
    {
        title: "Scalable Growth",
        text: "Infrastructure built for expansion. We implement systems and strategies designed to grow with your business, ensuring sustainable success without hitting growth ceilings.",
    }
]

const UnlockExclusiveSection = ({visions}) => {
    return (
        <div className="services_unlock_exclusive_section section-padding linear-dark-background">
            <img src={innovativeBg} alt="We Design. We Build. We Deliver." className="services_unlock_bgimg" />
            <Container>
                <Row>
                    <Col>
                        <h2 className="heading_main text-center">Unlock Exclusive Advantages by Partnering with Us</h2>
                        <p className="paragraph_content text-center">Six Reasons Your Competitors Wish They'd Chosen Us First</p>
                        <div className="services_unlock_grid less-top-padding">
                            {exclusiveLists.map((item,i) => (
                                <div className="services_unlock_item" key={i}>
                                    <p className="paragraph_content">{item.title}</p>
                                    <p className="services_unlock_content">{item.text}</p>
                                </div>
                            ))}
                        </div>

                        {visions &&
                            <div className="services_visions_block less-top-padding">
                                <h3 className="heading_main text-center">Turn Your Vision Into a Powerful Reality</h3>
                                <p className="paragraph_content text-center">Let's Build Something Amazing Together</p>
                                <div className="visions_btns_group">
                                    <Link to="/contact-us" reloadDocument className="btn-gradient-blue">Contact Us <FontAwesomeIcon icon={faAnglesRight} /></Link>
                                    <Link to="/contact-us" reloadDocument className="btn-gradient-blue">View More Projects <FontAwesomeIcon icon={faAnglesRight} /></Link>
                                </div>
                            </div>
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UnlockExclusiveSection