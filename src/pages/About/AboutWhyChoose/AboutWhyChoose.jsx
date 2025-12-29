import { Col, Container, Row } from "react-bootstrap";
import "./AboutWhyChoose.css";

const chooseImg = `${process.env.REACT_APP_API_URL}/assests/about/why_choose.webp`;

const expertise = `${process.env.REACT_APP_API_URL}/assests/about/expertise.svg`;
const customer = `${process.env.REACT_APP_API_URL}/assests/about/customer.svg`;
const delivery = `${process.env.REACT_APP_API_URL}/assests/about/delivery.svg`;
const chat = `${process.env.REACT_APP_API_URL}/assests/about/chat.svg`;

const whyChooseLists = [
    {
        icon: expertise,
        title: "Proven Expertise",
        text: "Years Of experience delivering Complex tech solutions.",
    },
    {
        icon: customer,
        title: "User- Centric",
        text: "Design & Functionality that Puts Your users first",
    },
    {
        icon: delivery,
        title: "On-Time Delivery",
        text: "We Respect Deadlines and Launch Schedules.",
    },
    {
        icon: chat,
        title: "Clear Communications",
        text: "Transparent updates throughout the project lifecycle.",
    }
]

const AboutWhyChoose = () => {
    return(
        <div className="about_why_choose_section section-padding black-background">
            <Container>
                <Row>
                    <Col>
                        <div className="about_why_choose_flex">
                            <div className="about_why_choose_cols">
                                <h2 className="heading_main">Why Choose Us</h2>
                                <p className="paragraph_content">We Don't Just write code; we build partnership. Here is why Client trust us with their critical projects.</p>
                                <div className="about_choose_grids less-top-padding">
                                    {whyChooseLists.map((item,i) => (
                                        <div className="about_choose_grid_item" key={i}>
                                            <div className="about_choose_item_icon">
                                                <img src={item.icon} alt={item.title} className="about_choose_item_img" />
                                            </div>
                                            <div className="about_choose_item_contents">
                                                <h3 className="about_choose_item_title">{item.title}</h3>
                                                <p className="about_choose_item_text">{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="about_why_choose_cols">
                                <img src={chooseImg} alt="Why Choose Us" className="why_choose_img" />
                            </div> 
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutWhyChoose